import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Compass, FileText, Clock, MapPin, ArrowRight, ChevronDown 
} from 'lucide-react';
import heroVideo from '../assets/hero.mp4';
import sigiriyaImage from '../assets/Sigiriya Rock Fortress.webp';
import ellaImage from '../assets/ella.jpg';
import galleImage from '../assets/Galle.jpg';
import yalaImage from '../assets/Yala.jpg';
import type { LucideIcon } from 'lucide-react';

const Home = () => {
  const { scrollYProgress } = useScroll();
  const yPos = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const destinations = [
    {
      name: 'Sigiriya Rock Fortress',
      location: 'Central Province',
      image: sigiriyaImage,
      description: 'UNESCO World Heritage site with an ancient rock fortress rising majestically from the jungle.',
    },
    {
      name: 'Ella Gap',
      location: 'Uva Province',
      image: ellaImage,
      description: 'Spectacular mountain scenery, lush tea gardens, and iconic hiking trails offering breathtaking panoramas.',
    },
    {
      name: 'Galle Dutch Fort',
      location: 'Southern Province',
      image: galleImage,
      description: 'A beautifully preserved historic fort blending rich colonial architecture with boutique charm.',
    },
    {
      name: 'Yala National Park',
      location: 'Southern Province',
      image: yalaImage,
      description: 'An unparalleled wildlife destination spanning native forests, renowned for its dense leopard population.',
    },
  ];

  const steps: { icon: LucideIcon; title: string; desc: string }[] = [
    { 
      icon: Compass, 
      title: 'Share Your Vision', 
      desc: 'Tell us where you dream of going, the pace you enjoy, and the luxury you expect.' 
    },
    { 
      icon: FileText, 
      title: 'Bespoke Curation', 
      desc: 'Our travel artisans will knit together a masterpiece itinerary tailored precisely to your soul.' 
    },
    { 
      icon: Clock, 
      title: 'Seamless Booking', 
      desc: 'Receive your personalized quote in 24 hours. Approve it, and we handle every single detail.' 
    }
  ];

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <div className="page-wrapper" style={{ overflowX: 'hidden' }}>
      <Navbar />

      {/* Hero Section */}
      <section className="hero-section" style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
        <video 
          className="video-background"
          autoPlay 
          loop 
          muted 
          playsInline
          style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', zIndex: -2 }}
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(10,58,64,0.4) 0%, rgba(10,58,64,0.8) 100%)', zIndex: -1 }}></div>
        
        <div className="container" style={{ position: 'relative', zIndex: 10, textAlign: 'center' }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            style={{ y: yPos, opacity }}
          >
            <motion.p 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              style={{ color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '4px', fontWeight: 600, marginBottom: '1rem' }}
            >
              Discover The Pearl of the Indian Ocean
            </motion.p>
            <h1 style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', lineHeight: 1.1, textShadow: '0 10px 30px rgba(0,0,0,0.3)', color: '#fff' }}>
              Your Trip, <br /><span style={{ color: 'var(--accent)', fontStyle: 'italic' }}>Your Way</span>
            </h1>
            <p style={{ margin: '1.5rem auto 3rem', fontSize: '1.25rem', maxWidth: '750px', color: 'rgba(255,255,255,0.9)', fontWeight: 300, lineHeight: 1.8 }}>
              Design your dream Sri Lanka holiday — fully personalised just for you. We curate experiences that match your exact interests, pace, and passions.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link to="/tailor-made" className="btn btn-primary" style={{ padding: '1rem 3rem', fontSize: '1.1rem', borderRadius: '50px', display: 'inline-flex', alignItems: 'center', gap: '0.75rem', boxShadow: '0 10px 25px rgba(212, 175, 55, 0.4)' }}>
                Start Planning <ArrowRight size={18} />
              </Link>
            </motion.div>
          </motion.div>
        </div>

        <motion.div 
          animate={{ y: [0, 10, 0] }} 
          transition={{ repeat: Infinity, duration: 2 }}
          style={{ position: 'absolute', bottom: '40px', left: '50%', transform: 'translateX(-50%)', color: 'var(--surface)', opacity: 0.7 }}
        >
          <ChevronDown size={32} />
        </motion.div>
      </section>

      {/* How it works Section */}
      <section className="py-6" style={{ backgroundColor: 'var(--bg-color)', position: 'relative', overflow: 'hidden' }}>
        <div className="container">
          <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            style={{ textAlign: 'center', marginBottom: '4rem' }}
          >
            <h2 className="section-title" style={{ fontSize: '3rem' }}>The Journey Begins</h2>
            <p className="section-subtitle">We make designing your perfect Sri Lankan adventure entirely effortless.</p>
          </motion.div>

          <motion.div 
            className="how-it-works-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}
          >
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div key={index} variants={fadeUp} className="step-card" style={{ border: 'none', background: 'var(--surface)', boxShadow: '0 20px 40px rgba(0,0,0,0.03)', borderRadius: '20px', padding: '3rem 2rem', position: 'relative', overflow: 'hidden' }}>
                  <div style={{ position: 'absolute', top: 0, right: 0, fontSize: '10rem', fontWeight: 900, color: 'var(--bg-color)', lineHeight: 0.8, opacity: 0.5, pointerEvents: 'none' }}>
                    0{index + 1}
                  </div>
                  <div className="step-icon">
                    <Icon size={32} />
                  </div>
                  <h3 className="step-title" style={{ fontSize: '1.5rem', color: 'var(--primary)', position: 'relative', zIndex: 1 }}>{step.title}</h3>
                  <p style={{ position: 'relative', zIndex: 1, color: 'var(--text-muted)' }}>{step.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Sri Lanka Destinations Section */}
      <section className="py-6" style={{ background: 'linear-gradient(to bottom, var(--bg-color), #f0f4f5)' }}>
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            style={{ textAlign: 'center', marginBottom: '4rem' }}
          >
            <h2 className="section-title" style={{ fontSize: '3rem' }}>Extraordinary Places</h2>
            <p className="section-subtitle">Discover the breathtaking gems that make Sri Lanka a paradise.</p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}
          >
            {destinations.map((dest) => (
              <motion.article
                key={dest.name}
                variants={fadeUp}
                whileHover={{ y: -10 }}
                style={{
                  background: 'var(--surface)',
                  borderRadius: '24px',
                  overflow: 'hidden',
                  boxShadow: '0 15px 35px rgba(0,0,0,0.05)',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <div style={{ position: 'relative', height: '240px', overflow: 'hidden' }}>
                  <motion.img 
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6 }}
                    src={dest.image} 
                    alt={dest.name} 
                    loading="lazy" 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div style={{ position: 'absolute', top: '15px', right: '15px', background: 'rgba(255,255,255,0.9)', padding: '0.4rem 1rem', borderRadius: '50px', fontSize: '0.8rem', fontWeight: 600, color: 'var(--primary)', display: 'flex', alignItems: 'center', gap: '0.4rem', backdropFilter: 'blur(4px)' }}>
                    <MapPin size={14} /> {dest.location}
                  </div>
                </div>
                <div style={{ padding: '2rem', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                  <h3 style={{ fontSize: '1.4rem', marginBottom: '0.5rem', fontFamily: '"Playfair Display", serif' }}>{dest.name}</h3>
                  <p style={{ color: 'var(--text-muted)', lineHeight: 1.6, fontSize: '0.95rem', flexGrow: 1 }}>{dest.description}</p>
                  <Link to="/tailor-made" className="btn btn-outline" style={{ display: 'block', textAlign: 'center', width: '100%', borderRadius: '50px', paddingTop: '0.8rem', paddingBottom: '0.8rem' }}>Include in Itinerary</Link>
                </div>
              </motion.article>
            ))}
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

export default Home;
