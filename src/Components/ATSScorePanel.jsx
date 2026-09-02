import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

export function ATSScorePanel({ result }) {
  const { score, grade, label, checks } = result;
  const circumference = 2 * Math.PI * 52;
  const offset = circumference - (score / 100) * circumference;

  const getColor = () => {
    if (score >= 80) return '#16a34a';
    if (score >= 60) return '#eab308';
    if (score >= 40) return '#f97316';
    return '#ef4444';
  };
  const color = getColor();

  return (
    <div style={{ textAlign: 'center' }}>
      {/* Score circle */}
      <div style={{ position: 'relative', width: '120px', height: '120px', margin: '0 auto 12px' }}>
        <svg width="120" height="120" style={{ transform: 'rotate(-90deg)' }}>
          <circle cx="60" cy="60" r="52" fill="none" stroke="#e5e7eb" strokeWidth="8" />
          <motion.circle
            cx="60" cy="60" r="52" fill="none" stroke={color} strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset: offset }}
            transition={{ duration: 1, ease: 'easeOut' }}
          />
        </svg>
        <div style={{
          position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        }}>
          <motion.span
            style={{ fontSize: '32px', fontWeight: 800, color, lineHeight: 1 }}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, type: 'spring' }}
          >{score}</motion.span>
          <span style={{ fontSize: '11px', color: '#9ca3af', fontWeight: 600 }}>{grade} · {label}</span>
        </div>
      </div>

      {/* Breakdown */}
      <div style={{ textAlign: 'left', marginTop: '16px' }}>
        {checks.map((check, i) => {
          const pct = (check.score / check.max) * 100;
          const isFull = check.score >= check.max;
          const isPartial = check.score > 0 && !isFull;
          return (
            <motion.div
              key={check.category}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 + i * 0.05 }}
              style={{ marginBottom: '10px' }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3px' }}>
                <span style={{ fontSize: '12px', fontWeight: 600, color: '#374151', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  {isFull && <Check size={12} color="#16a34a" />}
                  {check.category}
                </span>
                <span style={{ fontSize: '11px', color: isFull ? '#16a34a' : isPartial ? '#eab308' : '#ef4444', fontWeight: 600 }}>
                  {check.score}/{check.max}
                </span>
              </div>
              <div style={{ height: '4px', background: '#f3f4f6', borderRadius: '2px', overflow: 'hidden' }}>
                <motion.div
                  style={{
                    height: '100%',
                    background: isFull ? '#16a34a' : isPartial ? '#eab308' : '#ef4444',
                    borderRadius: '2px',
                  }}
                  initial={{ width: 0 }}
                  animate={{ width: `${pct}%` }}
                  transition={{ delay: 0.2 + i * 0.05, duration: 0.6 }}
                />
              </div>
              <p style={{ fontSize: '10.5px', color: '#9ca3af', marginTop: '2px' }}>{check.detail}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
