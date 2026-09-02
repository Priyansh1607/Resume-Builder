import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { templates } from '../lib/resumeData';
import { TemplateRenderer } from './ResumeTemplates';

const accentColors = {
  modern: '#2563eb',
  classic: '#1e3a5f',
  creative: '#0d9488',
  minimal: '#0f172a',
};

export function TemplateSelector({ selected, onSelect }) {
  return (
    <div>
      <h3 style={{ fontSize: '15px', fontWeight: 700, color: '#1f2937', marginBottom: '12px' }}>Choose a Template</h3>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
        {templates.map((tpl, i) => {
          const isSelected = selected === tpl.id;
          return (
            <motion.button
              key={tpl.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -2 }}
              onClick={() => onSelect(tpl.id)}
              style={{
                border: isSelected ? '2px solid #2563eb' : '2px solid #e5e7eb',
                borderRadius: '10px',
                overflow: 'hidden',
                cursor: 'pointer',
                background: '#fff',
                textAlign: 'left',
                position: 'relative',
                transition: 'border-color 0.2s',
              }}
            >
              {isSelected && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  style={{
                    position: 'absolute', top: '6px', right: '6px',
                    width: '20px', height: '20px', background: '#2563eb',
                    borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                    zIndex: 10,
                  }}
                >
                  <Check size={12} color="#fff" />
                </motion.div>
              )}
              {/* Mini preview */}
              <div style={{
                height: '120px', overflow: 'hidden',
                transformOrigin: 'top left',
                pointerEvents: 'none',
                position: 'relative',
              }}>
                <div style={{
                  transform: 'scale(0.28)',
                  width: '350px',
                  height: '430px',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                }}>
                  <TemplateRenderer
                    templateId={tpl.id}
                    resume={miniResume}
                    accent={accentColors[tpl.id]}
                  />
                </div>
              </div>
              <div style={{ padding: '8px 10px' }}>
                <div style={{ fontSize: '13px', fontWeight: 700, color: '#1f2937' }}>{tpl.name}</div>
                <div style={{ fontSize: '11px', color: '#9ca3af' }}>{tpl.description}</div>
              </div>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}

const miniResume = {
  personalInfo: {
    fullName: 'Jane Smith',
    jobTitle: 'Product Designer',
    email: 'jane@email.com',
    phone: '555-0100',
    location: 'NYC',
    linkedIn: 'linkedin.com/in/jane',
    website: '',
    summary: 'Designer with 5 years experience creating intuitive products.',
  },
  experience: [
    { id: '1', position: 'Senior Designer', company: 'DesignCo', startDate: '2021', endDate: 'Now', description: 'Led design system overhaul.' },
  ],
  education: [
    { id: '1', degree: 'B.A. Design', institution: 'RISD', startDate: '2015', endDate: '2019', gpa: '' },
  ],
  skills: ['Figma', 'CSS', 'Research', 'Prototyping'],
  projects: [],
};
