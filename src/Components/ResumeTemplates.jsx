import {
  Mail, Phone, MapPin, Globe,
} from 'lucide-react';

function ContactRow({ icon, children }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '4px', fontSize: '12px' }}>
      {icon}
      <span>{children}</span>
    </div>
  );
}

function SectionTitle({ children, accent }) {
  return (
    <h3 style={{
      fontSize: '13px',
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: '1px',
      marginBottom: '8px',
      paddingBottom: '4px',
      borderBottom: `2px solid ${accent}`,
      color: accent,
    }}>
      {children}
    </h3>
  );
}

export function ModernTemplate({ resume, accent = '#2563eb' }) {
  const { personalInfo: p, experience, education, skills, projects } = resume;
  return (
    <div style={{ display: 'flex', minHeight: '100%', fontFamily: "'Inter', sans-serif", fontSize: '13px', color: '#1f2937', background: '#fff' }}>
      {/* Sidebar */}
      <div style={{ width: '35%', background: accent, color: '#fff', padding: '24px 20px' }}>
        <div style={{ marginBottom: '20px' }}>
          <h2 style={{ fontSize: '22px', fontWeight: 800, lineHeight: 1.2, marginBottom: '2px' }}>{p.fullName || 'Your Name'}</h2>
          <p style={{ fontSize: '13px', opacity: 0.9 }}>{p.jobTitle || 'Job Title'}</p>
        </div>
        <div style={{ marginBottom: '20px' }}>
          <SectionTitle accent="#fff">Contact</SectionTitle>
          {p.email && <ContactRow icon={<Mail size={12} />}>{p.email}</ContactRow>}
          {p.phone && <ContactRow icon={<Phone size={12} />}>{p.phone}</ContactRow>}
          {p.location && <ContactRow icon={<MapPin size={12} />}>{p.location}</ContactRow>}
          {p.linkedIn && <ContactRow icon={<Globe size={12} />}>{p.linkedIn}</ContactRow>}
          {p.website && <ContactRow icon={<Globe size={12} />}>{p.website}</ContactRow>}
        </div>
        {skills.length > 0 && (
          <div style={{ marginBottom: '20px' }}>
            <SectionTitle accent="#fff">Skills</SectionTitle>
            {skills.map((s, i) => (
              <div key={i} style={{
                background: 'rgba(255,255,255,0.2)',
                padding: '4px 10px',
                borderRadius: '4px',
                fontSize: '12px',
                marginBottom: '4px',
                display: 'inline-block',
                marginRight: '4px',
              }}>{s}</div>
            ))}
          </div>
        )}
      </div>
      {/* Main */}
      <div style={{ flex: 1, padding: '24px' }}>
        {p.summary && (
          <div style={{ marginBottom: '18px' }}>
            <SectionTitle accent={accent}>Profile</SectionTitle>
            <p style={{ lineHeight: 1.5, fontSize: '12.5px' }}>{p.summary}</p>
          </div>
        )}
        {experience.length > 0 && (
          <div style={{ marginBottom: '18px' }}>
            <SectionTitle accent={accent}>Experience</SectionTitle>
            {experience.map(exp => (
              <div key={exp.id} style={{ marginBottom: '12px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <strong style={{ fontSize: '13px' }}>{exp.position || 'Position'}</strong>
                  <span style={{ fontSize: '11px', color: '#6b7280' }}>{exp.startDate} — {exp.endDate}</span>
                </div>
                <div style={{ fontSize: '12px', color: accent, fontWeight: 600, marginBottom: '3px' }}>{exp.company}</div>
                <p style={{ fontSize: '12px', lineHeight: 1.5, color: '#4b5563' }}>{exp.description}</p>
              </div>
            ))}
          </div>
        )}
        {education.length > 0 && (
          <div style={{ marginBottom: '18px' }}>
            <SectionTitle accent={accent}>Education</SectionTitle>
            {education.map(edu => (
              <div key={edu.id} style={{ marginBottom: '8px' }}>
                <strong style={{ fontSize: '13px' }}>{edu.degree}</strong>
                <div style={{ fontSize: '12px', color: '#6b7280' }}>{edu.institution} · {edu.startDate} — {edu.endDate}</div>
                {edu.gpa && <div style={{ fontSize: '11px', color: '#9ca3af' }}>GPA: {edu.gpa}</div>}
              </div>
            ))}
          </div>
        )}
        {projects.length > 0 && (
          <div>
            <SectionTitle accent={accent}>Projects</SectionTitle>
            {projects.map(proj => (
              <div key={proj.id} style={{ marginBottom: '8px' }}>
                <strong style={{ fontSize: '13px' }}>{proj.name}</strong>
                <p style={{ fontSize: '12px', color: '#4b5563', lineHeight: 1.5 }}>{proj.description}</p>
                {proj.link && <div style={{ fontSize: '11px', color: accent }}>{proj.link}</div>}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export function ClassicTemplate({ resume, accent = '#1e3a5f' }) {
  const { personalInfo: p, experience, education, skills, projects } = resume;
  return (
    <div style={{ minHeight: '100%', fontFamily: "'Georgia', serif", fontSize: '13px', color: '#1f2937', background: '#fff', padding: '32px' }}>
      <div style={{ textAlign: 'center', marginBottom: '16px', borderBottom: `2px solid ${accent}`, paddingBottom: '12px' }}>
        <h1 style={{ fontSize: '26px', fontWeight: 700, color: accent, marginBottom: '4px', letterSpacing: '1px' }}>{p.fullName || 'Your Name'}</h1>
        <p style={{ fontSize: '14px', color: '#4b5563', marginBottom: '6px' }}>{p.jobTitle}</p>
        <div style={{ fontSize: '11px', color: '#6b7280', display: 'flex', justifyContent: 'center', gap: '12px', flexWrap: 'wrap' }}>
          {p.email && <span>{p.email}</span>}
          {p.phone && <span>{p.phone}</span>}
          {p.location && <span>{p.location}</span>}
          {p.linkedIn && <span>{p.linkedIn}</span>}
        </div>
      </div>
      {p.summary && (
        <div style={{ marginBottom: '14px' }}>
          <h3 style={{ fontSize: '14px', fontWeight: 700, color: accent, marginBottom: '4px' }}>SUMMARY</h3>
          <p style={{ fontSize: '12.5px', lineHeight: 1.5, textAlign: 'justify' }}>{p.summary}</p>
        </div>
      )}
      {experience.length > 0 && (
        <div style={{ marginBottom: '14px' }}>
          <h3 style={{ fontSize: '14px', fontWeight: 700, color: accent, marginBottom: '6px' }}>EXPERIENCE</h3>
          {experience.map(exp => (
            <div key={exp.id} style={{ marginBottom: '10px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <strong>{exp.position} — {exp.company}</strong>
                <span style={{ fontSize: '11px', color: '#6b7280' }}>{exp.startDate} — {exp.endDate}</span>
              </div>
              <p style={{ fontSize: '12px', lineHeight: 1.5, marginTop: '2px' }}>{exp.description}</p>
            </div>
          ))}
        </div>
      )}
      {education.length > 0 && (
        <div style={{ marginBottom: '14px' }}>
          <h3 style={{ fontSize: '14px', fontWeight: 700, color: accent, marginBottom: '6px' }}>EDUCATION</h3>
          {education.map(edu => (
            <div key={edu.id}>
              <strong>{edu.degree}</strong> — {edu.institution} ({edu.startDate} — {edu.endDate})
            </div>
          ))}
        </div>
      )}
      {skills.length > 0 && (
        <div style={{ marginBottom: '14px' }}>
          <h3 style={{ fontSize: '14px', fontWeight: 700, color: accent, marginBottom: '6px' }}>SKILLS</h3>
          <p style={{ fontSize: '12.5px' }}>{skills.join(' · ')}</p>
        </div>
      )}
      {projects.length > 0 && (
        <div>
          <h3 style={{ fontSize: '14px', fontWeight: 700, color: accent, marginBottom: '6px' }}>PROJECTS</h3>
          {projects.map(proj => (
            <div key={proj.id} style={{ marginBottom: '6px' }}>
              <strong>{proj.name}</strong> — {proj.description}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export function CreativeTemplate({ resume, accent = '#0d9488' }) {
  const { personalInfo: p, experience, education, skills, projects } = resume;
  const skillLevels = skills.map((s, i) => ({
    name: s,
    level: 60 + ((i * 37) % 40), // pseudo-deterministic levels
  }));
  return (
    <div style={{ minHeight: '100%', fontFamily: "'Inter', sans-serif", fontSize: '13px', color: '#1f2937', background: '#fff' }}>
      {/* Header banner */}
      <div style={{
        background: `linear-gradient(135deg, ${accent}, ${accent}dd)`,
        color: '#fff',
        padding: '28px 24px',
      }}>
        <h1 style={{ fontSize: '28px', fontWeight: 800, marginBottom: '2px' }}>{p.fullName || 'Your Name'}</h1>
        <p style={{ fontSize: '15px', opacity: 0.9, marginBottom: '10px' }}>{p.jobTitle}</p>
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', fontSize: '11.5px' }}>
          {p.email && <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><Mail size={12} /> {p.email}</span>}
          {p.phone && <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><Phone size={12} /> {p.phone}</span>}
          {p.location && <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><MapPin size={12} /> {p.location}</span>}
        </div>
      </div>
      <div style={{ padding: '20px 24px' }}>
        {p.summary && (
          <div style={{ marginBottom: '16px' }}>
            <h3 style={{ fontSize: '14px', fontWeight: 700, color: accent, marginBottom: '4px' }}>About Me</h3>
            <p style={{ fontSize: '12.5px', lineHeight: 1.5 }}>{p.summary}</p>
          </div>
        )}
        <div style={{ display: 'flex', gap: '20px' }}>
          <div style={{ flex: 2 }}>
            {experience.length > 0 && (
              <div style={{ marginBottom: '16px' }}>
                <h3 style={{ fontSize: '14px', fontWeight: 700, color: accent, marginBottom: '6px' }}>Experience</h3>
                {experience.map(exp => (
                  <div key={exp.id} style={{ marginBottom: '10px', borderLeft: `3px solid ${accent}`, paddingLeft: '10px' }}>
                    <strong style={{ fontSize: '13px' }}>{exp.position}</strong>
                    <div style={{ fontSize: '12px', color: '#6b7280', marginBottom: '2px' }}>{exp.company} · {exp.startDate} — {exp.endDate}</div>
                    <p style={{ fontSize: '12px', lineHeight: 1.5 }}>{exp.description}</p>
                  </div>
                ))}
              </div>
            )}
            {projects.length > 0 && (
              <div>
                <h3 style={{ fontSize: '14px', fontWeight: 700, color: accent, marginBottom: '6px' }}>Projects</h3>
                {projects.map(proj => (
                  <div key={proj.id} style={{ marginBottom: '6px' }}>
                    <strong>{proj.name}</strong>
                    <p style={{ fontSize: '12px', color: '#4b5563' }}>{proj.description}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div style={{ flex: 1 }}>
            {skills.length > 0 && (
              <div style={{ marginBottom: '16px' }}>
                <h3 style={{ fontSize: '14px', fontWeight: 700, color: accent, marginBottom: '8px' }}>Skills</h3>
                {skillLevels.map((s, i) => (
                  <div key={i} style={{ marginBottom: '6px' }}>
                    <div style={{ fontSize: '11px', marginBottom: '2px' }}>{s.name}</div>
                    <div style={{ height: '5px', background: '#e5e7eb', borderRadius: '3px' }}>
                      <div style={{ width: `${s.level}%`, height: '100%', background: accent, borderRadius: '3px' }} />
                    </div>
                  </div>
                ))}
              </div>
            )}
            {education.length > 0 && (
              <div>
                <h3 style={{ fontSize: '14px', fontWeight: 700, color: accent, marginBottom: '6px' }}>Education</h3>
                {education.map(edu => (
                  <div key={edu.id} style={{ marginBottom: '8px', fontSize: '12px' }}>
                    <strong>{edu.degree}</strong>
                    <div style={{ color: '#6b7280' }}>{edu.institution}</div>
                    <div style={{ fontSize: '11px', color: '#9ca3af' }}>{edu.startDate} — {edu.endDate}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export function MinimalTemplate({ resume, accent = '#0f172a' }) {
  const { personalInfo: p, experience, education, skills, projects } = resume;
  return (
    <div style={{ minHeight: '100%', fontFamily: "'Inter', sans-serif", fontSize: '13px', color: '#1f2937', background: '#fff', padding: '36px' }}>
      <div style={{ marginBottom: '20px' }}>
        <h1 style={{ fontSize: '30px', fontWeight: 300, letterSpacing: '-0.5px', marginBottom: '4px' }}>{p.fullName || 'Your Name'}</h1>
        <p style={{ fontSize: '15px', fontWeight: 400, color: accent, marginBottom: '8px' }}>{p.jobTitle}</p>
        <div style={{ fontSize: '11px', color: '#9ca3af', display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          {p.email && <span>{p.email}</span>}
          {p.phone && <span>· {p.phone}</span>}
          {p.location && <span>· {p.location}</span>}
          {p.linkedIn && <span>· {p.linkedIn}</span>}
        </div>
      </div>
      {p.summary && (
        <div style={{ marginBottom: '20px' }}>
          <p style={{ fontSize: '13px', lineHeight: 1.6, color: '#374151', fontStyle: 'italic' }}>{p.summary}</p>
        </div>
      )}
      {experience.length > 0 && (
        <div style={{ marginBottom: '20px' }}>
          <h3 style={{ fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '2px', color: '#9ca3af', marginBottom: '8px' }}>Experience</h3>
          {experience.map(exp => (
            <div key={exp.id} style={{ marginBottom: '12px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                <span style={{ fontWeight: 600, fontSize: '13px' }}>{exp.position}</span>
                <span style={{ fontSize: '11px', color: '#9ca3af' }}>{exp.startDate} — {exp.endDate}</span>
              </div>
              <div style={{ fontSize: '12px', color: '#6b7280', marginBottom: '3px' }}>{exp.company}</div>
              <p style={{ fontSize: '12px', lineHeight: 1.5, color: '#4b5563' }}>{exp.description}</p>
            </div>
          ))}
        </div>
      )}
      <div style={{ display: 'flex', gap: '30px' }}>
        {education.length > 0 && (
          <div style={{ flex: 1 }}>
            <h3 style={{ fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '2px', color: '#9ca3af', marginBottom: '8px' }}>Education</h3>
            {education.map(edu => (
              <div key={edu.id} style={{ marginBottom: '6px', fontSize: '12px' }}>
                <div style={{ fontWeight: 600 }}>{edu.degree}</div>
                <div style={{ color: '#6b7280' }}>{edu.institution}</div>
                <div style={{ fontSize: '11px', color: '#9ca3af' }}>{edu.startDate} — {edu.endDate}</div>
              </div>
            ))}
          </div>
        )}
        {skills.length > 0 && (
          <div style={{ flex: 1 }}>
            <h3 style={{ fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '2px', color: '#9ca3af', marginBottom: '8px' }}>Skills</h3>
            <div style={{ fontSize: '12px', lineHeight: 1.8, color: '#374151' }}>
              {skills.join(', ')}
            </div>
          </div>
        )}
      </div>
      {projects.length > 0 && (
        <div style={{ marginTop: '20px' }}>
          <h3 style={{ fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '2px', color: '#9ca3af', marginBottom: '8px' }}>Projects</h3>
          {projects.map(proj => (
            <div key={proj.id} style={{ marginBottom: '6px', fontSize: '12px' }}>
              <span style={{ fontWeight: 600 }}>{proj.name}</span> — <span style={{ color: '#4b5563' }}>{proj.description}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export function TemplateRenderer({ templateId, resume, accent }) {
  switch (templateId) {
    case 'modern': return <ModernTemplate resume={resume} accent={accent} />;
    case 'classic': return <ClassicTemplate resume={resume} accent={accent} />;
    case 'creative': return <CreativeTemplate resume={resume} accent={accent} />;
    case 'minimal': return <MinimalTemplate resume={resume} accent={accent} />;
    default: return <ModernTemplate resume={resume} accent={accent} />;
  }
}
