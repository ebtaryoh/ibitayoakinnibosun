import React from 'react';

const TechMarquee: React.FC = () => {
  const technologies = [
    "React", "TypeScript", "Node.js", "Next.js", "TailwindCSS", 
    "Figma", "UI/UX Design", "GraphQL", "PostgreSQL", "Git",
    "React", "TypeScript", "Node.js", "Next.js", "TailwindCSS", 
    "Figma", "UI/UX Design", "GraphQL", "PostgreSQL", "Git"
  ];

  return (
    <div style={{ width: '100%', overflow: 'hidden', padding: '40px 0', background: 'rgba(255,255,255,0.01)', borderTop: '1px solid var(--glass-border)', borderBottom: '1px solid var(--glass-border)' }}>
      <div className="animate-marquee" style={{ display: 'flex', gap: '64px', paddingLeft: '64px' }}>
        {technologies.map((tech, index) => (
          <div key={index} style={{ 
            fontSize: '1.5rem', 
            fontWeight: 800, 
            color: 'var(--text-secondary)',
            textTransform: 'uppercase',
            letterSpacing: '2px',
            whiteSpace: 'nowrap',
            display: 'flex',
            alignItems: 'center'
          }}>
            {tech} <span style={{ color: 'var(--accent-primary)', marginLeft: '64px' }}>•</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechMarquee;
