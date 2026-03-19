import Navbar from '../components/Navbar';
import { motion } from 'framer-motion';
import { Compass, FileText, Clock, CalendarDays, Users, Bed, Home as HomeIcon, Heart } from 'lucide-react';
import heroVideo from '../assets/hero.mp4.mov';

const Home = () => {
  const destinations = [
    {
      name: 'Sigiriya Rock Fortress',
      location: 'Central Province',
      image: 'https://images.unsplash.com/photo-1562486591-0f80f1e871a7?auto=format&fit=crop&w=1200&q=80',
      description: 'UNESCO World Heritage site with an ancient rock fortress and stunning views.',
    },
    {
      name: 'Ella Gap',
      location: 'Uva Province',
      image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80',
      description: 'Spectacular mountain scenery, tea gardens, and hiking trails like Little Adam’s Peak.',
    },
    {
      name: 'Galle Dutch Fort',
      location: 'Southern Province',
      image: 'https://images.unsplash.com/photo-1529921879218-8e3ec761593e?auto=format&fit=crop&w=1200&q=80',
      description: 'Historic fort with colonial architecture, boutiques, and ocean views.',
    },
    {
      name: 'Yala National Park',
      location: 'Southern Province',
      image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=80',
      description: 'Top wildlife destination for leopards, elephants, and diverse birdlife.',
    },
  ];

  return (
    <div className="page-wrapper">
      <Navbar />

      {/* Hero Section */}
      <section className="hero-section">
        <video 
          className="video-background"
          autoPlay 
          loop 
          muted 
          playsInline
        >
          {/* A high quality nature video placeholder showing lush scenery (mimicking Sri Lanka) */}
          <source src={heroVideo} type="video/quicktime" />
        </video>
        <div className="video-overlay"></div>
        
        <div className="container" style={{ position: 'relative', zIndex: 10 }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>Your Trip, Your Way</h1>
            <p>Design your dream Sri Lanka holiday — fully personalised just for you.</p>
            <p style={{ marginTop: '1rem', fontSize: '1rem', maxWidth: '700px' }}>
              Every traveller is different — and so should every holiday be. At Visit Sri Lanka Tours, we don’t believe in one-size-fits-all packages. Instead, we create personalised itineraries designed around your interests, budget, and travel style.
            </p>
            <div className="mt-2">
              <a href="#start-planning" className="btn btn-primary">Start Planning</a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How it works Section */}
      <section className="py-6" style={{ backgroundColor: 'var(--bg-color)' }}>
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">How It Works</h2>
            <p className="section-subtitle">We make designing your perfect Sri Lankan adventure simple and stress-free.</p>
          </motion.div>

          <div className="how-it-works-grid">
            <motion.div 
              className="step-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="step-icon">
                <Compass size={28} />
              </div>
              <h3 className="step-title">Tell us your preferences</h3>
              <p>Where you'd like to go, what you'd like to do, and the type of accommodation you prefer.</p>
            </motion.div>

            <motion.div 
              className="step-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="step-icon">
                <FileText size={28} />
              </div>
              <h3 className="step-title">We design your itinerary</h3>
              <p>Our travel experts will prepare a custom plan tailored to your needs and wishes.</p>
            </motion.div>

            <motion.div 
              className="step-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="step-icon">
                <Clock size={28} />
              </div>
              <h3 className="step-title">Get your quote in 24 hours</h3>
              <p>Receive a clear, detailed proposal straight to your inbox within 24 hours.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sri Lanka Destinations Section */}
      <section className="py-6" style={{ backgroundColor: 'var(--bg-color)' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">Top Sri Lanka Destinations</h2>
            <p className="section-subtitle">Explore iconic landmarks, beaches, wildlife parks, and hills with inspiring photos.</p>
          </motion.div>

          <div className="destinations-grid">
            {destinations.map((dest) => (
              <motion.article
                key={dest.name}
                className="destination-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <img src={dest.image} alt={dest.name} loading="lazy" />
                <div className="destination-content">
                  <h3>{dest.name}</h3>
                  <small>{dest.location}</small>
                  <p>{dest.description}</p>
                  <a href="#start-planning" className="btn btn-outline">Plan this</a>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section id="start-planning" className="py-6" style={{ backgroundColor: '#f4f6f8' }}>
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="section-title">Let's Plan Your Trip Together</h2>
            <p className="section-subtitle">Fill out the form below to give us an idea of your dream holiday in Sri Lanka.</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="form-container"
          >
            <form onSubmit={(e) => e.preventDefault()}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '2rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '1rem' }}>Plan Your Adventure</h3>
              
              <div className="form-grid">
                <div className="form-group">
                  <label className="form-label" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <CalendarDays size={18} /> Travel Dates
                  </label>
                  <input type="text" className="form-control" placeholder="e.g. Dec 2026 or Approximate Dates" />
                </div>
                <div className="form-group">
                  <label className="form-label" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Users size={18} /> Number of Guests
                  </label>
                  <select className="form-control">
                    <option>1 Person</option>
                    <option>2 People</option>
                    <option>3 - 5 People</option>
                    <option>6+ People</option>
                  </select>
                </div>
              </div>

              <div className="form-grid">
                <div className="form-group">
                  <label className="form-label" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Bed size={18} /> Rooms Requirements
                  </label>
                  <input type="text" className="form-control" placeholder="E.g. 1 Double, 1 Twin" />
                </div>
                <div className="form-group">
                  <label className="form-label" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <HomeIcon size={18} /> Accommodation Preferences
                  </label>
                  <select className="form-control">
                    <option>Budget (3 Star)</option>
                    <option>Standard (4 Star)</option>
                    <option>Luxury (5 Star / Boutique)</option>
                    <option>Mixed Categories</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label className="form-label" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Heart size={18} /> Interests & Specific Requirements
                </label>
                <textarea className="form-control" placeholder="Tell us what you love (e.g. Beaches, Wildlife, Culture, Hiking...)"></textarea>
              </div>

              <h4 style={{ marginTop: '2rem', marginBottom: '1rem', borderTop: '1px solid var(--border-color)', paddingTop: '2rem', fontSize: '1.25rem' }}>Personal Information</h4>
              
              <div className="form-grid">
                <div className="form-group">
                  <label className="form-label">First Name</label>
                  <input type="text" className="form-control" placeholder="Your First Name" required />
                </div>
                <div className="form-group">
                  <label className="form-label">Last Name</label>
                  <input type="text" className="form-control" placeholder="Your Last Name" required />
                </div>
              </div>

              <div className="form-grid">
                <div className="form-group">
                  <label className="form-label">Email Address</label>
                  <input type="email" className="form-control" placeholder="your.email@example.com" required />
                </div>
                <div className="form-group">
                  <label className="form-label">Phone Number (Optional)</label>
                  <input type="tel" className="form-control" placeholder="WhatsApp / Phone" />
                </div>
              </div>

              <div className="text-center mt-2">
                <button type="submit" className="btn btn-primary" style={{ padding: '1rem 3rem', fontSize: '1.1rem' }}>
                  Get Your Free Quote
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ backgroundColor: 'var(--primary)', color: 'var(--surface)', padding: '4rem 0 2rem' }}>
        <div className="container text-center">
          <h2 style={{ color: 'var(--accent)', marginBottom: '1rem' }}>Visit Sri Lanka Tours</h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', maxWidth: '500px', margin: '0 auto 2rem' }}>Crafting unforgettable tailor-made Sri Lankan journeys since 2010.</p>
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '2rem', fontSize: '0.875rem', color: 'rgba(255,255,255,0.5)' }}>
            &copy; {new Date().getFullYear()} Visit Sri Lanka Tours. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
