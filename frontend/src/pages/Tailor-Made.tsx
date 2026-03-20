import Navbar from '../components/Navbar';
import { motion } from 'framer-motion';
import { CalendarDays, Users, Bed, Home as HomeIcon, Heart } from 'lucide-react';

const TailorMade = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <div className="page-wrapper" style={{ overflowX: 'hidden' }}>
      <Navbar variant="dark" />

      {/* Form Section */}
      <section id="start-planning" className="py-6" style={{ position: 'relative', marginTop: '5rem' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'var(--primary)', backgroundImage: 'url("https://images.unsplash.com/photo-1544645224-b1b017def3b8?auto=format&fit=crop&w=1920&q=80")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed', zIndex: -2 }}></div>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(10,58,64,0.95) 0%, rgba(22,91,99,0.85) 100%)', zIndex: -1 }}></div>
        
        <div className="container">
          <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center"
            style={{ color: 'var(--surface)', marginBottom: '3rem' }}
          >
            <h2 className="section-title" style={{ color: 'var(--surface)', fontSize: '3.5rem' }}>Shape Your Dream</h2>
            <p className="section-subtitle" style={{ color: 'rgba(255,255,255,0.8)' }}>Share your vision. Let our experts orchestrate the perfect getaway.</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{
              background: 'rgba(255, 255, 255, 0.98)',
              backdropFilter: 'blur(20px)',
              padding: 'clamp(2rem, 5vw, 4rem)',
              borderRadius: '24px',
              boxShadow: '0 30px 60px rgba(0,0,0,0.3)',
              maxWidth: '900px',
              margin: '0 auto',
            }}
          >
            <form onSubmit={(e) => e.preventDefault()}>
              <h3 style={{ textAlign: 'center', fontSize: '1.2rem', textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--accent)', marginBottom: '2.5rem', fontWeight: 600 }}>Trip Details</h3>
              
              <div className="form-grid">
                <div className="form-group">
                  <label className="form-label" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <CalendarDays size={16} /> Travel Dates
                  </label>
                  <input type="text" className="form-control" placeholder="e.g. Dec 2026" />
                </div>
                <div className="form-group">
                  <label className="form-label" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Users size={16} /> Guests
                  </label>
                  <select className="form-control">
                    <option>1 Person</option>
                    <option>2 People</option>
                    <option>3 - 5 People</option>
                    <option>6+ People</option>
                  </select>
                </div>
              </div>

              <div className="form-grid" style={{ marginTop: '1.5rem' }}>
                <div className="form-group">
                  <label className="form-label" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Bed size={16} /> Rooms
                  </label>
                  <input type="text" className="form-control" placeholder="E.g. 1 Double" />
                </div>
                <div className="form-group">
                  <label className="form-label" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <HomeIcon size={16} /> Stay
                  </label>
                  <select className="form-control">
                    <option>Luxury (5 Star)</option>
                    <option>Standard (4 Star)</option>
                    <option>Budget (3 Star)</option>
                  </select>
                </div>
              </div>

              <div className="form-group" style={{ marginTop: '1.5rem' }}>
                <label className="form-label" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Heart size={16} /> Interests
                </label>
                <textarea className="form-control" placeholder="Beaches, Wildlife, History..."></textarea>
              </div>

              <h3 style={{ textAlign: 'center', fontSize: '1.2rem', textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--accent)', margin: '3rem 0 2rem', fontWeight: 600 }}>Your Contact</h3>
              
              <div className="form-grid">
                <div className="form-group">
                  <label className="form-label">First Name</label>
                  <input type="text" className="form-control" placeholder="Full Name" required />
                </div>
                <div className="form-group">
                  <label className="form-label">Email</label>
                  <input type="email" className="form-control" placeholder="email@example.com" required />
                </div>
              </div>

              <div className="text-center" style={{ marginTop: '3rem' }}>
                <button type="submit" className="btn btn-primary" style={{ padding: '1.2rem 4rem', fontSize: '1.2rem', borderRadius: '50px', boxShadow: '0 10px 25px rgba(212, 175, 55, 0.4)' }}>
                  Request Itinerary
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ backgroundColor: '#062529', color: 'var(--surface)', padding: '5rem 0 3rem' }}>
        <div className="container text-center">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <h2 style={{ color: 'var(--accent)', marginBottom: '1.5rem', fontSize: '2.5rem' }}>Visit Sri Lanka Tours</h2>
            <p style={{ color: 'rgba(255,255,255,0.7)', maxWidth: '500px', margin: '0 auto 3rem', fontSize: '1.1rem' }}>Crafting unforgettable tailor-made Sri Lankan journeys. Experience the magic of paradise.</p>
            <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '2rem', fontSize: '0.9rem', color: 'rgba(255,255,255,0.4)', display: 'flex', justifyContent: 'center', gap: '2rem' }}>
              <span>&copy; {new Date().getFullYear()} Visit Sri Lanka Tours.</span>
              <a href="#">Privacy</a>
              <a href="#">Terms</a>
            </div>
          </motion.div>
        </div>
      </footer>
    </div>
  );
};

export default TailorMade;
