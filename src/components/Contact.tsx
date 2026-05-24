import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, MapPin, CheckCircle, AlertCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    
    const formData = new FormData(e.currentTarget);
    formData.append('access_key', 'e512e874-8c9b-4427-b103-1e012fbb486a');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });
      
      const data = await response.json();
      
      if (data.success) {
        setStatus('success');
        (e.target as HTMLFormElement).reset();
        setTimeout(() => setStatus('idle'), 5000); // Hide toast after 5s
      } else {
        console.error("Error", data);
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      }
    } catch (error) {
      console.error("Fetch error", error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '64px' }}
        >
          <h2 style={{ fontSize: '3rem', marginBottom: '16px' }}>Get In <span className="text-gradient">Touch</span></h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
            Ready to start a project together? Let's discuss how I can help bring your vision to life.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '64px', alignItems: 'center' }}>
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div style={{ marginBottom: '40px' }}>
              <h3 style={{ fontSize: '2rem', marginBottom: '24px' }}>Let's talk about everything!</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                Hate forms? Send me an <a href="mailto:ibitayo.akinnibosun@gmail.com" className="text-gradient" style={{ fontWeight: 600 }}>email</a> instead.
              </p>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{ padding: '16px', background: 'var(--glass-bg)', borderRadius: '12px', color: 'var(--accent-primary)' }}>
                  <Mail size={24} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.1rem', marginBottom: '4px' }}>Email</h4>
                  <p style={{ color: 'var(--text-secondary)' }}>ibitayo.akinnibosun@gmail.com</p>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{ padding: '16px', background: 'var(--glass-bg)', borderRadius: '12px', color: 'var(--accent-secondary)' }}>
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.1rem', marginBottom: '4px' }}>Location</h4>
                  <p style={{ color: 'var(--text-secondary)' }}>Available Worldwide (Remote)</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass"
            style={{ padding: '40px' }}
          >
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
                <input type="text" name="name" required placeholder="Your Name" style={{ width: '100%', padding: '16px', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--glass-border)', borderRadius: '8px', color: '#fff', outline: 'none', fontFamily: 'inherit' }} />
                <input type="email" name="email" required placeholder="Your Email" style={{ width: '100%', padding: '16px', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--glass-border)', borderRadius: '8px', color: '#fff', outline: 'none', fontFamily: 'inherit' }} />
              </div>
              <input type="text" name="subject" required placeholder="Subject" style={{ width: '100%', padding: '16px', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--glass-border)', borderRadius: '8px', color: '#fff', outline: 'none', fontFamily: 'inherit' }} />
              <textarea name="message" required placeholder="Message" rows={5} style={{ width: '100%', padding: '16px', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--glass-border)', borderRadius: '8px', color: '#fff', outline: 'none', resize: 'vertical', fontFamily: 'inherit' }}></textarea>
              <button disabled={status === 'submitting'} type="submit" className="bg-gradient" style={{ padding: '16px', borderRadius: '8px', color: '#fff', fontWeight: 600, fontSize: '1.1rem', marginTop: '8px', transition: 'opacity 0.3s', cursor: status === 'submitting' ? 'not-allowed' : 'pointer', opacity: status === 'submitting' ? 0.7 : 1 }}>
                {status === 'submitting' ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {status === 'success' && (
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            style={{
              position: 'fixed', bottom: '24px', right: '24px', 
              background: 'rgba(16, 185, 129, 0.9)', backdropFilter: 'blur(10px)',
              color: '#fff', padding: '16px 24px', borderRadius: '8px',
              display: 'flex', alignItems: 'center', gap: '12px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)', zIndex: 1000,
              border: '1px solid rgba(255,255,255,0.1)'
            }}
          >
            <CheckCircle size={20} />
            <span style={{ fontWeight: 500 }}>Message sent successfully!</span>
          </motion.div>
        )}
        
        {status === 'error' && (
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            style={{
              position: 'fixed', bottom: '24px', right: '24px', 
              background: 'rgba(239, 68, 68, 0.9)', backdropFilter: 'blur(10px)',
              color: '#fff', padding: '16px 24px', borderRadius: '8px',
              display: 'flex', alignItems: 'center', gap: '12px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)', zIndex: 1000,
              border: '1px solid rgba(255,255,255,0.1)'
            }}
          >
            <AlertCircle size={20} />
            <span style={{ fontWeight: 500 }}>Failed to send message. Try again.</span>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Contact;
