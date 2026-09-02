import { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, Layout, Gauge as ScoreIcon, Eye, Download, Sparkles, Menu, X } from 'lucide-react';
import { ResumeForm } from './components/ResumeForm';
import { TemplateRenderer } from './components/ResumeTemplates';
import { TemplateSelector } from './components/TemplateSelector';
import { ATSScorePanel } from './components/ATSScorePanel';
import { calculateATSScore } from './lib/atsScorer';
import { emptyResume, sampleResume, templates } from './lib/resumeData';
import './App.css';

const accentColors = {
  modern: '#2563eb',
  classic: '#1e3a5f',
  creative: '#0d9488',
  minimal: '#0f172a',
};

function App() {
  const [resume, setResume] = useState(emptyResume);
  const [selectedTemplate, setSelectedTemplate] = useState('modern');
  const [activeTab, setActiveTab] = useState('editor');
  const [showMobilePreview, setShowMobilePreview] = useState(false);

  // Load from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('resumeData');
    if (saved) {
      try { setResume(JSON.parse(saved)); } catch {}
    }
    const savedTpl = localStorage.getItem('resumeTemplate');
    if (savedTpl) setSelectedTemplate(savedTpl);
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem('resumeData', JSON.stringify(resume));
  }, [resume]);
  useEffect(() => {
    localStorage.setItem('resumeTemplate', selectedTemplate);
  }, [selectedTemplate]);

  const atsResult = useMemo(() => calculateATSScore(resume), [resume]);
  const accent = accentColors[selectedTemplate];

  const loadSample = () => setResume(sampleResume);
  const clearAll = () => {
    if (confirm('Clear all resume data?')) setResume(emptyResume);
  };

  const downloadResume = () => {
    window.print();
  };

  const tabs = [
    { id: 'editor', label: 'Edit', icon: FileText },
    { id: 'templates', label: 'Templates', icon: Layout },
    { id: 'ats', label: 'ATS Score', icon: ScoreIcon },
  ];

  return (
    <div className="app">
      {/* Header */}
      <header className="header no-print">
        <div className="header-left">
          <motion.div
            initial={{ rotate: -10, scale: 0 }}
            animate={{ rotate: 0, scale: 1 }}
            transition={{ type: 'spring' }}
            className="logo-icon"
          >
            <FileText size={22} color="#fff" />
          </motion.div>
          <div>
            <h1 className="header-title">ResumeForge</h1>
            <p className="header-subtitle">Build your resume · Check ATS score</p>
          </div>
        </div>
        <div className="header-actions">
          <button onClick={loadSample} className="btn-ghost">
            <Sparkles size={15} /> Load Sample
          </button>
          <button onClick={clearAll} className="btn-ghost">Clear</button>
          <button onClick={downloadResume} className="btn-primary">
            <Download size={15} /> Download PDF
          </button>
        </div>
      </header>

      {/* Tabs */}
      <div className="tabs no-print">
        {tabs.map(tab => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`tab ${activeTab === tab.id ? 'active' : ''}`}
            >
              <Icon size={16} />
              {tab.label}
              {tab.id === 'ats' && (
                <span className={`tab-badge ${atsResult.score >= 80 ? 'good' : atsResult.score >= 60 ? 'fair' : 'bad'}`}>
                  {atsResult.score}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Main content */}
      <div className="main-content">
        {/* Left panel */}
        <div className="left-panel no-print">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              transition={{ duration: 0.2 }}
            >
              {activeTab === 'editor' && <ResumeForm resume={resume} setResume={setResume} />}
              {activeTab === 'templates' && (
                <TemplateSelector selected={selectedTemplate} onSelect={setSelectedTemplate} />
              )}
              {activeTab === 'ats' && (
                <div>
                  <div style={{ marginBottom: '12px' }}>
                    <h3 style={{ fontSize: '15px', fontWeight: 700, color: '#1f2937', marginBottom: '4px' }}>ATS Compatibility Score</h3>
                    <p style={{ fontSize: '12px', color: '#9ca3af' }}>How well your resume performs with Applicant Tracking Systems</p>
                  </div>
                  <ATSScorePanel result={atsResult} />
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right panel - Live preview */}
        <div className={`right-panel ${showMobilePreview ? 'mobile-open' : ''}`}>
          <div className="preview-header no-print">
            <span style={{ fontSize: '13px', fontWeight: 600, color: '#374151' }}>
              {templates.find(t => t.id === selectedTemplate)?.name} Template
            </span>
            <button className="btn-ghost btn-sm" onClick={() => setShowMobilePreview(false)}>
              <X size={16} /> Close
            </button>
          </div>
          <div className="preview-paper">
            <TemplateRenderer templateId={selectedTemplate} resume={resume} accent={accent} />
          </div>
        </div>
      </div>

      {/* Mobile preview button */}
      <motion.button
        className="mobile-preview-btn no-print"
        onClick={() => setShowMobilePreview(true)}
        whileTap={{ scale: 0.95 }}
      >
        <Eye size={18} /> Preview
      </motion.button>

      {/* Print-only resume */}
      <div className="print-only">
        <TemplateRenderer templateId={selectedTemplate} resume={resume} accent={accent} />
      </div>
    </div>
  );
}

export default App;
