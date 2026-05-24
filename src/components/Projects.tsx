import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Roots & Radiance Network',
      category: 'Community Enterprise Platform',
      desc: 'A creative and enterprise community empowering diverse voices through arts, movement, and economic opportunity.',
      tech: ['React', 'Next.js', 'TailwindCSS', 'Node.js'],
      image: '/roots-radiance.png',
      liveLink: 'https://www.rootsandradiancenetwork.com/',
      githubLink: 'https://github.com/ebtaryoh/rootsandradiance'
    },
    {
      title: 'Finance Dashboard',
      category: 'Frontend & UI/UX',
      desc: 'An intuitive analytics dashboard for financial data, featuring complex data visualizations and dark mode.',
      tech: ['React', 'TypeScript', 'Chart.js', 'Figma'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      liveLink: '#',
      githubLink: '#'
    },
    {
      title: 'Social Media App',
      category: 'Mobile & Backend',
      desc: 'A responsive social platform allowing users to share moments, chat in real-time, and discover content.',
      tech: ['React Native', 'Firebase', 'GraphQL'],
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      liveLink: '#',
      githubLink: '#'
    }
  ];

  return (
    <section id="projects" className="section" style={{ background: 'rgba(255,255,255,0.01)' }}>
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '64px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}
        >
          <div>
            <h2 style={{ fontSize: '3rem', marginBottom: '16px' }}>Featured <span className="text-gradient">Projects</span></h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '600px' }}>
              A selection of my best work across frontend, backend, and design.
            </p>
          </div>
        </motion.div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '80px' }}>
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
                          style={{ 
                display: 'grid',
                gridTemplateColumns: index % 2 === 0 ? '1fr 1fr' : '1fr 1fr', 
                gap: '48px', 
                alignItems: 'center'
              }}
              className="projects-item"
            >
              <div style={{ order: index % 2 === 0 ? 1 : 2 }} className="glass">
                <div className="project-img-wrapper">
                  <img src={project.image} alt={project.title} style={{ width: '100%', height: '400px', objectFit: 'cover' }} />
                </div>
              </div>
              
              <div style={{ order: index % 2 === 0 ? 2 : 1, padding: '24px' }}>
                <span style={{ color: 'var(--accent-secondary)', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', fontSize: '0.9rem' }}>
                  {project.category}
                </span>
                <h3 style={{ fontSize: '2.5rem', margin: '16px 0' }}>{project.title}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: 1.6, marginBottom: '24px' }}>
                  {project.desc}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '32px' }}>
                  {project.tech.map((tech, i) => (
                    <span key={i} style={{ padding: '6px 16px', background: 'var(--glass-bg)', border: '1px solid var(--glass-border)', borderRadius: '20px', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                      {tech}
                    </span>
                  ))}
                </div>
                <div style={{ display: 'flex', gap: '16px' }}>
                  <a href={project.liveLink} target="_blank" rel="noreferrer" className="bg-gradient" style={{ padding: '12px 24px', borderRadius: '8px', color: '#fff', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}>
                    View Live <ExternalLink size={18} />
                  </a>
                  <a href={project.githubLink} target="_blank" rel="noreferrer" style={{ padding: '12px 24px', borderRadius: '8px', color: 'var(--text-primary)', border: '1px solid var(--glass-border)', display: 'flex', alignItems: 'center', gap: '8px', background: 'var(--glass-bg)', textDecoration: 'none' }}>
                    Source Code <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
