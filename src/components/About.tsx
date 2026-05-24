import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Server, PenTool } from 'lucide-react';

const About: React.FC = () => {
  const skills = [
    { title: 'Frontend Dev', icon: <Code2 size={32} />, desc: 'Building responsive, accessible, and performant user interfaces using React, HTML, CSS, and modern JS.' },
    { title: 'Backend Dev', icon: <Server size={32} />, desc: 'Architecting scalable server-side solutions, RESTful APIs, and database management.' },
    { title: 'UI/UX Design', icon: <PenTool size={32} />, desc: 'Crafting intuitive user experiences and premium visual designs using Figma and modern design principles.' }
  ];

  return (
    <section id="about" className="section" style={{ position: 'relative' }}>
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '64px' }}
        >
          <h2 style={{ fontSize: '3rem', marginBottom: '16px' }}>My <span className="text-gradient">Expertise</span></h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
            A versatile developer and designer dedicated to delivering exceptional digital products from concept to deployment.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
          {skills.map((skill, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="glass"
              style={{ padding: '40px', transition: 'transform 0.3s ease, border-color 0.3s ease' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)';
                e.currentTarget.style.borderColor = 'var(--accent-primary)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'var(--glass-border)';
              }}
            >
              <div style={{ color: 'var(--accent-secondary)', marginBottom: '24px' }}>
                {skill.icon}
              </div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '16px' }}>{skill.title}</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>{skill.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
