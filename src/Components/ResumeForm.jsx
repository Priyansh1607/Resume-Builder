import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Trash2, ChevronDown, ChevronUp } from 'lucide-react';

const inputStyle = {
  width: '100%',
  padding: '8px 12px',
  border: '1px solid #e5e7eb',
  borderRadius: '8px',
  fontSize: '13px',
  outline: 'none',
  transition: 'border-color 0.2s',
  background: '#fff',
  color: '#1f2937',
};

const labelStyle = {
  fontSize: '12px',
  fontWeight: 600,
  color: '#374151',
  marginBottom: '4px',
  display: 'block',
};

const sectionCardStyle = {
  border: '1px solid #e5e7eb',
  borderRadius: '10px',
  padding: '14px',
  marginBottom: '10px',
  background: '#fafafa',
};

function Field({ label, value, onChange, placeholder, type = 'text' }) {
  return (
    <div>
      <label style={labelStyle}>{label}</label>
      <input
        type={type}
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder}
        style={inputStyle}
        onFocus={e => e.target.style.borderColor = '#2563eb'}
        onBlur={e => e.target.style.borderColor = '#e5e7eb'}
      />
    </div>
  );
}

function TextArea({ label, value, onChange, placeholder }) {
  return (
    <div>
      <label style={labelStyle}>{label}</label>
      <textarea
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder}
        rows={3}
        style={{ ...inputStyle, resize: 'vertical' }}
        onFocus={e => e.target.style.borderColor = '#2563eb'}
        onBlur={e => e.target.style.borderColor = '#e5e7eb'}
      />
    </div>
  );
}

export function ResumeForm({ resume, setResume }) {
  const updatePersonal = (key, val) => {
    setResume({ ...resume, personalInfo: { ...resume.personalInfo, [key]: val } });
  };

  // Experience
  const addExperience = () => {
    setResume({
      ...resume,
      experience: [...resume.experience, { id: Date.now().toString(), company: '', position: '', startDate: '', endDate: '', location: '', description: '' }],
    });
  };
  const updateExperience = (id, key, val) => {
    setResume({ ...resume, experience: resume.experience.map(e => e.id === id ? { ...e, [key]: val } : e) });
  };
  const removeExperience = (id) => {
    setResume({ ...resume, experience: resume.experience.filter(e => e.id !== id) });
  };

  // Education
  const addEducation = () => {
    setResume({
      ...resume,
      education: [...resume.education, { id: Date.now().toString(), institution: '', degree: '', startDate: '', endDate: '', gpa: '' }],
    });
  };
  const updateEducation = (id, key, val) => {
    setResume({ ...resume, education: resume.education.map(e => e.id === id ? { ...e, [key]: val } : e) });
  };
  const removeEducation = (id) => {
    setResume({ ...resume, education: resume.education.filter(e => e.id !== id) });
  };

  // Skills
  const [skillInput, setSkillInput] = useState('');
  const addSkill = () => {
    if (skillInput.trim()) {
      setResume({ ...resume, skills: [...resume.skills, skillInput.trim()] });
      setSkillInput('');
    }
  };
  const removeSkill = (idx) => {
    setResume({ ...resume, skills: resume.skills.filter((_, i) => i !== idx) });
  };

  // Projects
  const addProject = () => {
    setResume({
      ...resume,
      projects: [...resume.projects, { id: Date.now().toString(), name: '', description: '', link: '' }],
    });
  };
  const updateProject = (id, key, val) => {
    setResume({ ...resume, projects: resume.projects.map(p => p.id === id ? { ...p, [key]: val } : p) });
  };
  const removeProject = (id) => {
    setResume({ ...resume, projects: resume.projects.filter(p => p.id !== id) });
  };

  const [expanded, setExpanded] = useState({ exp: {}, edu: {}, proj: {} });

  return (
    <div>
      {/* Personal Info */}
      <div style={{ marginBottom: '20px' }}>
        <h3 style={{ fontSize: '15px', fontWeight: 700, color: '#1f2937', marginBottom: '10px' }}>Personal Information</h3>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
          <Field label="Full Name" value={resume.personalInfo.fullName} onChange={v => updatePersonal('fullName', v)} placeholder="John Doe" />
          <Field label="Job Title" value={resume.personalInfo.jobTitle} onChange={v => updatePersonal('jobTitle', v)} placeholder="Software Engineer" />
          <Field label="Email" value={resume.personalInfo.email} onChange={v => updatePersonal('email', v)} placeholder="john@email.com" type="email" />
          <Field label="Phone" value={resume.personalInfo.phone} onChange={v => updatePersonal('phone', v)} placeholder="(555) 123-4567" />
          <Field label="Location" value={resume.personalInfo.location} onChange={v => updatePersonal('location', v)} placeholder="City, State" />
          <Field label="LinkedIn" value={resume.personalInfo.linkedIn} onChange={v => updatePersonal('linkedIn', v)} placeholder="linkedin.com/in/..." />
          <Field label="Website" value={resume.personalInfo.website} onChange={v => updatePersonal('website', v)} placeholder="yoursite.com" />
        </div>
        <div style={{ marginTop: '10px' }}>
          <TextArea label="Professional Summary" value={resume.personalInfo.summary} onChange={v => updatePersonal('summary', v)} placeholder="Brief summary of your professional background..." />
        </div>
      </div>

      {/* Experience */}
      <div style={{ marginBottom: '20px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
          <h3 style={{ fontSize: '15px', fontWeight: 700, color: '#1f2937' }}>Work Experience</h3>
          <button onClick={addExperience} style={addBtnStyle}><Plus size={14} /> Add</button>
        </div>
        <AnimatePresence>
          {resume.experience.map(exp => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              style={{ overflow: 'hidden' }}
            >
              <div style={sectionCardStyle}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                  <span style={{ fontSize: '13px', fontWeight: 600, color: '#374151' }}>{exp.position || 'New Position'}</span>
                  <div style={{ display: 'flex', gap: '6px' }}>
                    <button onClick={() => setExpanded(s => ({ ...s, exp: { ...s.exp, [exp.id]: !s.exp[exp.id] } }))} style={iconBtnStyle}>
                      {expanded.exp[exp.id] ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                    </button>
                    <button onClick={() => removeExperience(exp.id)} style={iconBtnStyle}><Trash2 size={14} color="#ef4444" /></button>
                  </div>
                </div>
                <AnimatePresence initial={false}>
                  {expanded.exp[exp.id] && (
                    <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} style={{ overflow: 'hidden' }}>
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                        <Field label="Position" value={exp.position} onChange={v => updateExperience(exp.id, 'position', v)} placeholder="Software Engineer" />
                        <Field label="Company" value={exp.company} onChange={v => updateExperience(exp.id, 'company', v)} placeholder="Company name" />
                        <Field label="Start Date" value={exp.startDate} onChange={v => updateExperience(exp.id, 'startDate', v)} placeholder="2020" />
                        <Field label="End Date" value={exp.endDate} onChange={v => updateExperience(exp.id, 'endDate', v)} placeholder="Present" />
                      </div>
                      <div style={{ marginTop: '8px' }}>
                        <TextArea label="Description" value={exp.description} onChange={v => updateExperience(exp.id, 'description', v)} placeholder="Describe your achievements..." />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Education */}
      <div style={{ marginBottom: '20px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
          <h3 style={{ fontSize: '15px', fontWeight: 700, color: '#1f2937' }}>Education</h3>
          <button onClick={addEducation} style={addBtnStyle}><Plus size={14} /> Add</button>
        </div>
        <AnimatePresence>
          {resume.education.map(edu => (
            <motion.div key={edu.id} initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} style={{ overflow: 'hidden' }}>
              <div style={sectionCardStyle}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                  <span style={{ fontSize: '13px', fontWeight: 600, color: '#374151' }}>{edu.degree || 'New Degree'}</span>
                  <div style={{ display: 'flex', gap: '6px' }}>
                    <button onClick={() => setExpanded(s => ({ ...s, edu: { ...s.edu, [edu.id]: !s.edu[edu.id] } }))} style={iconBtnStyle}>
                      {expanded.edu[edu.id] ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                    </button>
                    <button onClick={() => removeEducation(edu.id)} style={iconBtnStyle}><Trash2 size={14} color="#ef4444" /></button>
                  </div>
                </div>
                <AnimatePresence initial={false}>
                  {expanded.edu[edu.id] && (
                    <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} style={{ overflow: 'hidden' }}>
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                        <Field label="Degree" value={edu.degree} onChange={v => updateEducation(edu.id, 'degree', v)} placeholder="B.S. Computer Science" />
                        <Field label="Institution" value={edu.institution} onChange={v => updateEducation(edu.id, 'institution', v)} placeholder="University name" />
                        <Field label="Start Date" value={edu.startDate} onChange={v => updateEducation(edu.id, 'startDate', v)} placeholder="2014" />
                        <Field label="End Date" value={edu.endDate} onChange={v => updateEducation(edu.id, 'endDate', v)} placeholder="2018" />
                        <Field label="GPA" value={edu.gpa} onChange={v => updateEducation(edu.id, 'gpa', v)} placeholder="3.8" />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Skills */}
      <div style={{ marginBottom: '20px' }}>
        <h3 style={{ fontSize: '15px', fontWeight: 700, color: '#1f2937', marginBottom: '10px' }}>Skills</h3>
        <div style={{ display: 'flex', gap: '8px', marginBottom: '8px' }}>
          <input
            value={skillInput}
            onChange={e => setSkillInput(e.target.value)}
            onKeyDown={e => { if (e.key === 'Enter') { e.preventDefault(); addSkill(); } }}
            placeholder="Add a skill..."
            style={inputStyle}
            onFocus={e => e.target.style.borderColor = '#2563eb'}
            onBlur={e => e.target.style.borderColor = '#e5e7eb'}
          />
          <button onClick={addSkill} style={addBtnStyle}><Plus size={14} /></button>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
          <AnimatePresence>
            {resume.skills.map((skill, idx) => (
              <motion.span
                key={skill + idx}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                style={{
                  background: '#eff6ff', color: '#2563eb', padding: '4px 10px',
                  borderRadius: '20px', fontSize: '12px', fontWeight: 500,
                  display: 'flex', alignItems: 'center', gap: '4px',
                }}
              >
                {skill}
                <button onClick={() => removeSkill(idx)} style={{ border: 'none', background: 'none', cursor: 'pointer', padding: 0, display: 'flex' }}>
                  <Trash2 size={11} color="#ef4444" />
                </button>
              </motion.span>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Projects */}
      <div style={{ marginBottom: '20px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
          <h3 style={{ fontSize: '15px', fontWeight: 700, color: '#1f2937' }}>Projects</h3>
          <button onClick={addProject} style={addBtnStyle}><Plus size={14} /> Add</button>
        </div>
        <AnimatePresence>
          {resume.projects.map(proj => (
            <motion.div key={proj.id} initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} style={{ overflow: 'hidden' }}>
              <div style={sectionCardStyle}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                  <span style={{ fontSize: '13px', fontWeight: 600, color: '#374151' }}>{proj.name || 'New Project'}</span>
                  <div style={{ display: 'flex', gap: '6px' }}>
                    <button onClick={() => setExpanded(s => ({ ...s, proj: { ...s.proj, [proj.id]: !s.proj[proj.id] } }))} style={iconBtnStyle}>
                      {expanded.proj[proj.id] ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                    </button>
                    <button onClick={() => removeProject(proj.id)} style={iconBtnStyle}><Trash2 size={14} color="#ef4444" /></button>
                  </div>
                </div>
                <AnimatePresence initial={false}>
                  {expanded.proj[proj.id] && (
                    <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} style={{ overflow: 'hidden' }}>
                      <Field label="Project Name" value={proj.name} onChange={v => updateProject(proj.id, 'name', v)} placeholder="My Project" />
                      <div style={{ marginTop: '8px' }}>
                        <TextArea label="Description" value={proj.description} onChange={v => updateProject(proj.id, 'description', v)} placeholder="What does it do?" />
                      </div>
                      <div style={{ marginTop: '8px' }}>
                        <Field label="Link" value={proj.link} onChange={v => updateProject(proj.id, 'link', v)} placeholder="github.com/..." />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}

const addBtnStyle = {
  display: 'flex', alignItems: 'center', gap: '4px',
  padding: '5px 10px', border: '1px solid #2563eb', background: '#fff',
  color: '#2563eb', borderRadius: '6px', fontSize: '12px', fontWeight: 600,
  cursor: 'pointer', transition: 'all 0.2s',
};

const iconBtnStyle = {
  border: 'none', background: 'none', cursor: 'pointer', padding: '4px',
  display: 'flex', alignItems: 'center', justifyContent: 'center',
  borderRadius: '4px', color: '#6b7280',
};
