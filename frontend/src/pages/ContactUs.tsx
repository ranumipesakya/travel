import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Phone, Mail, Send, MessageSquare, CheckCircle, AlertCircle } from 'lucide-react';

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    country: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Something went wrong. Please try again.');
      }

      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        country: '',
        message: ''
      });
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error: any) {
      console.error('Submission error:', error);
      setSubmitStatus('error');
      setErrorMessage(error.message || 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  return (
    <div className="page-wrapper" style={{ overflowX: 'hidden' }}>
      <Navbar variant="dark" />

      {/* Hero Section */}
      <section style={{
        position: 'relative',
        height: '60vh',
        minHeight: '400px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, rgba(10,58,64,0.9) 0%, rgba(6,37,41,0.95) 100%)',
        overflow: 'hidden'
      }}>
        {/* Abstract shapes in background */}
        <div style={{
          position: 'absolute', top: '-10%', right: '-5%', width: '400px', height: '400px',
          background: 'radial-gradient(circle, rgba(212,175,55,0.15) 0%, transparent 70%)',
          borderRadius: '50%', zIndex: 0
        }} />
        <div style={{
          position: 'absolute', bottom: '-20%', left: '-10%', width: '600px', height: '600px',
          background: 'radial-gradient(circle, rgba(22,91,99,0.3) 0%, transparent 70%)',
          borderRadius: '50%', zIndex: 0
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 10, textAlign: 'center', paddingTop: '80px' }}>
          <motion.div initial="hidden" animate="show" variants={fadeUp}>
            <p style={{
              color: 'var(--accent)', textTransform: 'uppercase',
              letterSpacing: '5px', fontWeight: 600,
              marginBottom: '1rem', fontSize: '0.9rem'
            }}>
              We’re here to help
            </p>
            <h1 style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              lineHeight: 1.15,
              color: '#fff',
              marginBottom: '1rem',
              fontFamily: '"Playfair Display", serif'
            }}>
              Plan your Sri Lanka journey
            </h1>
            <p style={{
              fontSize: '1.2rem', maxWidth: '700px',
              margin: '0 auto', color: 'rgba(255,255,255,0.8)',
              fontWeight: 300, lineHeight: 1.6
            }}>
              Tell us a little about your trip and we’ll come back with ideas, pricing, and a personalised plan within 24 hours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content Sections */}
      <section style={{ padding: '6rem 0', background: 'var(--bg-color)', position: 'relative' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '4rem',
            alignItems: 'start'
          }}>
            
            {/* Left Col - Form */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              style={{
                background: '#fff',
                padding: '3rem',
                borderRadius: '24px',
                boxShadow: '0 20px 40px rgba(0,0,0,0.06)',
                border: '1px solid rgba(0,0,0,0.04)'
              }}
            >
              <h3 style={{
                fontSize: '2rem',
                color: 'var(--primary)',
                marginBottom: '2rem',
                fontFamily: '"Playfair Display", serif',
                display: 'flex', alignItems: 'center', gap: '1rem'
              }}>
                <MessageSquare color="var(--accent)" size={28} />
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: 'var(--text)', fontWeight: 600 }}>
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    style={{
                      width: '100%', padding: '1rem', borderRadius: '12px',
                      border: '1px solid rgba(0,0,0,0.1)', background: '#f9fafa',
                      fontSize: '1rem', outline: 'none', transition: 'border 0.3s ease'
                    }}
                    placeholder="John Doe"
                    onFocus={(e) => e.target.style.borderColor = 'var(--primary)'}
                    onBlur={(e) => e.target.style.borderColor = 'rgba(0,0,0,0.1)'}
                  />
                </div>
                
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: 'var(--text)', fontWeight: 600 }}>
                    Your Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    style={{
                      width: '100%', padding: '1rem', borderRadius: '12px',
                      border: '1px solid rgba(0,0,0,0.1)', background: '#f9fafa',
                      fontSize: '1rem', outline: 'none', transition: 'border 0.3s ease'
                    }}
                    placeholder="john@example.com"
                    onFocus={(e) => e.target.style.borderColor = 'var(--primary)'}
                    onBlur={(e) => e.target.style.borderColor = 'rgba(0,0,0,0.1)'}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: 'var(--text)', fontWeight: 600 }}>
                    Your Phone / WhatsApp *
                  </label>
                  <input
                    type="text"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    style={{
                      width: '100%', padding: '1rem', borderRadius: '12px',
                      border: '1px solid rgba(0,0,0,0.1)', background: '#f9fafa',
                      fontSize: '1rem', outline: 'none', transition: 'border 0.3s ease'
                    }}
                    placeholder="+1 234 567 890"
                    onFocus={(e) => e.target.style.borderColor = 'var(--primary)'}
                    onBlur={(e) => e.target.style.borderColor = 'rgba(0,0,0,0.1)'}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: 'var(--text)', fontWeight: 600 }}>
                    Your Country
                  </label>
                  <input
                    type="text"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    style={{
                      width: '100%', padding: '1rem', borderRadius: '12px',
                      border: '1px solid rgba(0,0,0,0.1)', background: '#f9fafa',
                      fontSize: '1rem', outline: 'none', transition: 'border 0.3s ease'
                    }}
                    placeholder="e.g. United Kingdom"
                    onFocus={(e) => e.target.style.borderColor = 'var(--primary)'}
                    onBlur={(e) => e.target.style.borderColor = 'rgba(0,0,0,0.1)'}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: 'var(--text)', fontWeight: 600 }}>
                    Your Message *
                  </label>
                  <textarea
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    style={{
                      width: '100%', padding: '1rem', borderRadius: '12px',
                      border: '1px solid rgba(0,0,0,0.1)', background: '#f9fafa',
                      fontSize: '1rem', outline: 'none', transition: 'border 0.3s ease',
                      resize: 'none'
                    }}
                    placeholder="Tell us about the places you want to visit, dates, group size..."
                    onFocus={(e) => e.target.style.borderColor = 'var(--primary)'}
                    onBlur={(e) => e.target.style.borderColor = 'rgba(0,0,0,0.1)'}
                  />
                </div>

                {/* Status Messages */}
                <AnimatePresence>
                  {submitStatus === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}
                      style={{ padding: '1rem', background: '#d4edda', color: '#155724', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem' }}
                    >
                      <CheckCircle size={18} /> Message sent successfully! We'll get back to you within 24 hours.
                    </motion.div>
                  )}
                  {submitStatus === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}
                      style={{ padding: '1rem', background: '#f8d7da', color: '#721c24', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem' }}
                    >
                      <AlertCircle size={18} /> {errorMessage}
                    </motion.div>
                  )}
                </AnimatePresence>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  style={{
                    background: 'var(--primary)', color: '#fff', padding: '1.2rem',
                    borderRadius: '50px', border: 'none', fontSize: '1rem', fontWeight: 600,
                    cursor: isSubmitting ? 'not-allowed' : 'pointer', letterSpacing: '1px', textTransform: 'uppercase',
                    display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem',
                    boxShadow: '0 8px 20px rgba(10,58,64,0.3)', transition: 'transform 0.3s ease',
                    opacity: isSubmitting ? 0.7 : 1
                  }}
                  onMouseOver={(e) => !isSubmitting && (e.currentTarget.style.transform = 'translateY(-3px)')}
                  onMouseOut={(e) => !isSubmitting && (e.currentTarget.style.transform = 'translateY(0)')}
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>Send Message <Send size={18} /></>
                  )}
                </button>
              </form>
            </motion.div>

            {/* Right Col - Contact Info */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}
            >
              <div>
                <p style={{
                  color: 'var(--accent)', textTransform: 'uppercase',
                  letterSpacing: '3px', fontWeight: 600,
                  fontSize: '0.8rem', marginBottom: '0.5rem'
                }}>
                  Get In Touch
                </p>
                <h2 style={{
                  fontSize: '2.5rem',
                  color: 'var(--primary)',
                  marginBottom: '1.5rem',
                  fontFamily: '"Playfair Display", serif',
                  lineHeight: 1.2
                }}>
                  Talk to us
                </h2>
                <p style={{ color: 'var(--text-muted)', lineHeight: 1.6, fontSize: '1.05rem', marginBottom: '2rem' }}>
                  Whether you have a question about our itineraries, need help customising a trip, or just want to say hi, we'd love to hear from you.
                </p>
              </div>

              {/* Phone Information */}
              <motion.div variants={fadeUp} style={{ display: 'flex', gap: '1.5rem' }}>
                <div style={{
                  width: '60px', height: '60px', borderRadius: '50%', background: 'rgba(212,175,55,0.1)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0
                }}>
                  <Phone color="var(--accent)" size={24} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.1rem', color: 'var(--primary)', marginBottom: '0.5rem', fontWeight: 700 }}>Call Us</h4>
                  <p style={{ color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '0.5rem' }}>
                    +94 77 668 6965 <br/>
                    +94 78 803 2515
                  </p>
                  <p style={{ color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '0.5rem' }}>
                    <strong>WhatsApp:</strong> +94 72 105 8986
                  </p>
                  <p style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>
                    <strong>Kataragama Branch:</strong> 0472234174
                  </p>
                </div>
              </motion.div>

              {/* Email Information */}
              <motion.div variants={fadeUp} style={{ display: 'flex', gap: '1.5rem' }}>
                <div style={{
                  width: '60px', height: '60px', borderRadius: '50%', background: 'rgba(212,175,55,0.1)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0
                }}>
                  <Mail color="var(--accent)" size={24} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.1rem', color: 'var(--primary)', marginBottom: '0.5rem', fontWeight: 700 }}>Email Us</h4>
                  <p style={{ color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '0.2rem' }}>
                    info@visitsrilankatours.com
                  </p>
                  <p style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>
                    pesakya@gmail.com
                  </p>
                </div>
              </motion.div>

              {/* Address Information */}
              <motion.div variants={fadeUp} style={{ display: 'flex', gap: '1.5rem' }}>
                <div style={{
                  width: '60px', height: '60px', borderRadius: '50%', background: 'rgba(212,175,55,0.1)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0
                }}>
                  <MapPin color="var(--accent)" size={24} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.1rem', color: 'var(--primary)', marginBottom: '0.5rem', fontWeight: 700 }}>Address</h4>
                  <p style={{ color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '0.5rem' }}>
                    <strong>Head Office:</strong><br/>
                    No. 29, Carmel Group, Dambulla Road,<br/>
                    Kurunegala 60499, Sri Lanka
                  </p>
                  <p style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>
                    <strong>Kataragama Branch:</strong><br/>
                    Kataragama, Sri Lanka
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section style={{ height: '450px', width: '100%', position: 'relative' }}>
        <iframe 
          title="Kataragama Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31758.10620317618!2d81.33202574999999!3d6.4162059!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae5ccb9542a2757%3A0xeae3e8a4a5bb867b!2sKataragama!5e0!3m2!1sen!2slk!4v1711221434382!5m2!1sen!2slk" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen={true} 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>

      {/* Footer */}
      <footer style={{ backgroundColor: '#062529', color: '#fff', padding: '50px 20px', textAlign: 'center' }}>
         <p style={{ opacity: 0.6, fontSize: '0.9rem' }}>
           &copy; {new Date().getFullYear()} Visit Sri Lanka Travels. All rights reserved.
         </p>
      </footer>
    </div>
  );
};

export default ContactUs;
