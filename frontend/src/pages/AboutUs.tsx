import Navbar from '../components/Navbar';
import { motion } from 'framer-motion';
import { Heart, Sparkles, Shield, Leaf, ArrowRight } from 'lucide-react';
import teamImage from '../assets/team.avif';
import authenticityImage from '../assets/authenticity.jpg';
import personalisationImage from '../assets/Personalisation.jpg';
import serviceExcellenceImage from '../assets/Service Excellence.jpg';
import sustainabilityImage from '../assets/Sustainability.jpg';
import aboutHeroImage from '../assets/hero.jpg';

const AboutUs = () => {

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } }
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 1, ease: "easeOut" as const } }
  };

  const values = [
    {
      icon: Sparkles,
      title: 'Authenticity',
      description: 'Showcasing the true spirit of Sri Lanka, from its cultural treasures to its natural wonders.',
      image: authenticityImage,
      color: '#d4af37'
    },
    {
      icon: Heart,
      title: 'Personalisation',
      description: 'Every itinerary is tailor-made to match your passions, preferences, and pace.',
      image: personalisationImage,
      color: '#e8766a'
    },
    {
      icon: Shield,
      title: 'Service Excellence',
      description: 'Professional planning, warm hospitality, and 24/7 support at every stage of your journey.',
      image: serviceExcellenceImage,
      color: '#165b63'
    },
    {
      icon: Leaf,
      title: 'Sustainability',
      description: 'Promoting responsible tourism that respects communities, heritage, and the environment.',
      image: sustainabilityImage,
      color: '#2d8a4e'
    }
  ];

  return (
    <div className="page-wrapper" style={{ overflowX: 'hidden' }}>
      <Navbar />

      {/* Hero Section */}
      <section style={{
        position: 'relative',
        height: '70vh',
        minHeight: '500px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden'
      }}>
        <img
          src={aboutHeroImage}
          alt="Sri Lanka Landscape"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: -2 }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(10,58,64,0.5) 0%, rgba(10,58,64,0.85) 100%)', zIndex: -1 }}></div>

        <div className="container" style={{ position: 'relative', zIndex: 10, textAlign: 'center' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              style={{ color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '5px', fontWeight: 600, marginBottom: '1rem', fontSize: '0.9rem' }}
            >
              About Visit Sri Lanka
            </motion.p>
            <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', lineHeight: 1.15, textShadow: '0 8px 25px rgba(0,0,0,0.3)', color: '#fff', marginBottom: '1.5rem' }}>
              Crafting Journeys That <br />
              <span style={{ color: 'var(--accent)', fontStyle: 'italic' }}>Touch Your Soul</span>
            </h1>
            <p style={{ fontSize: '1.2rem', maxWidth: '650px', margin: '0 auto', color: 'rgba(255,255,255,0.85)', fontWeight: 300, lineHeight: 1.8 }}>
              We are passionate storytellers of Sri Lanka, dedicated to creating extraordinary travel experiences that go beyond the ordinary.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-6" style={{ backgroundColor: 'var(--bg-color)' }}>
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
            className="about-story-grid"
            style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }}
          >
            {/* Image Side */}
            <motion.div variants={fadeUp} style={{ position: 'relative' }}>
              <div style={{
                position: 'absolute',
                top: '-20px',
                left: '-20px',
                width: '100%',
                height: '100%',
                border: '3px solid var(--accent)',
                borderRadius: '20px',
                zIndex: 0
              }} />
              <img
                src={teamImage}
                alt="Our Team"
                style={{
                  width: '100%',
                  height: '450px',
                  objectFit: 'cover',
                  borderRadius: '20px',
                  position: 'relative',
                  zIndex: 1,
                  boxShadow: '0 25px 50px rgba(0,0,0,0.15)'
                }}
              />
              <div style={{
                position: 'absolute',
                bottom: '-15px',
                right: '-15px',
                background: 'var(--accent)',
                color: '#fff',
                padding: '1.5rem 2rem',
                borderRadius: '16px',
                zIndex: 2,
                boxShadow: '0 10px 30px rgba(212,175,55,0.3)'
              }}>
                <span style={{ fontSize: '2.5rem', fontWeight: 700, fontFamily: '"Playfair Display", serif', display: 'block', lineHeight: 1 }}>10+</span>
                <span style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px', opacity: 0.9 }}>Years of Passion</span>
              </div>
            </motion.div>

            {/* Text Side */}
            <motion.div variants={fadeUp}>
              <p style={{ color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '3px', fontWeight: 600, fontSize: '0.85rem', marginBottom: '0.75rem' }}>
                Our Story
              </p>
              <h2 style={{ fontSize: '2.8rem', lineHeight: 1.2, marginBottom: '1.5rem', color: 'var(--primary)' }}>
                Born from a Love for <span style={{ color: 'var(--accent)', fontStyle: 'italic' }}>Paradise</span>
              </h2>
              <p style={{ fontSize: '1.1rem', lineHeight: 1.9, color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
                Visit Sri Lanka was born from a simple belief — that the best travel experiences are deeply personal. Founded by a group of passionate travellers and locals who fell in love with the island's beauty, culture, and warmth, we set out to share Sri Lanka in a way no one else could.
              </p>
              <p style={{ fontSize: '1.1rem', lineHeight: 1.9, color: 'var(--text-muted)', marginBottom: '2rem' }}>
                Over the past decade, we've guided thousands of travellers through unforgettable journeys — from the misty peaks of Ella to the golden shores of the south coast, from ancient temples steeped in history to the vibrant streets where modern Sri Lanka comes alive.
              </p>

              <div style={{ display: 'flex', gap: '3rem' }}>
                <div>
                  <span style={{ fontSize: '2.2rem', fontWeight: 700, fontFamily: '"Playfair Display", serif', color: 'var(--primary)', display: 'block' }}>5,000+</span>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px' }}>Happy Travellers</span>
                </div>
                <div>
                  <span style={{ fontSize: '2.2rem', fontWeight: 700, fontFamily: '"Playfair Display", serif', color: 'var(--primary)', display: 'block' }}>200+</span>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px' }}>Custom Itineraries</span>
                </div>
                <div>
                  <span style={{ fontSize: '2.2rem', fontWeight: 700, fontFamily: '"Playfair Display", serif', color: 'var(--primary)', display: 'block' }}>98%</span>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px' }}>Satisfaction Rate</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-6" style={{ background: 'linear-gradient(135deg, var(--primary) 0%, #165b63 100%)', position: 'relative', overflow: 'hidden' }}>
        {/* Decorative circles */}
        <div style={{ position: 'absolute', top: '-80px', right: '-80px', width: '300px', height: '300px', borderRadius: '50%', border: '1px solid rgba(212,175,55,0.1)' }} />
        <div style={{ position: 'absolute', bottom: '-100px', left: '-60px', width: '400px', height: '400px', borderRadius: '50%', border: '1px solid rgba(212,175,55,0.08)' }} />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeIn}
            style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}
          >
            <p style={{ color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '5px', fontWeight: 600, fontSize: '0.85rem', marginBottom: '1rem' }}>
              Our Mission
            </p>
            <h2 style={{ fontSize: '2.8rem', color: '#fff', lineHeight: 1.3, marginBottom: '2rem' }}>
              To reveal the true magic of Sri Lanka through journeys that are as <span style={{ color: 'var(--accent)', fontStyle: 'italic' }}>unique</span> as you are.
            </h2>
            <p style={{ fontSize: '1.15rem', color: 'rgba(255,255,255,0.75)', lineHeight: 1.9, maxWidth: '700px', margin: '0 auto' }}>
              We believe travel should be transformative. Every trip we craft is designed to immerse you in the culture, nature, and soul of this incredible island — creating memories that last a lifetime.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-6" style={{ backgroundColor: 'var(--bg-color)' }}>
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            style={{ textAlign: 'center', marginBottom: '4rem' }}
          >
            <p style={{ color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '4px', fontWeight: 600, fontSize: '0.85rem', marginBottom: '0.75rem' }}>
              What We Stand For
            </p>
            <h2 className="section-title" style={{ fontSize: '2.8rem' }}>Our Values</h2>
            <p className="section-subtitle">The principles that guide every journey we create.</p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="about-values-grid"
            style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2.5rem' }}
          >
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  variants={fadeUp}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  style={{
                    background: 'var(--surface)',
                    borderRadius: '24px',
                    overflow: 'hidden',
                    boxShadow: '0 15px 40px rgba(0,0,0,0.06)',
                    display: 'flex',
                    minHeight: '280px',
                    cursor: 'default'
                  }}
                >
                  {/* Image Side */}
                  <div className="about-value-card-image" style={{ width: '45%', position: 'relative', overflow: 'hidden' }}>
                    <img
                      src={value.image}
                      alt={value.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s ease' }}
                    />
                    <div style={{
                      position: 'absolute',
                      inset: 0,
                      background: `linear-gradient(135deg, ${value.color}33 0%, transparent 60%)`,
                    }} />
                  </div>

                  {/* Content Side */}
                  <div className="about-value-card-content" style={{ width: '55%', padding: '2.5rem 2rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <div style={{
                      width: '56px',
                      height: '56px',
                      borderRadius: '14px',
                      background: `${value.color}15`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '1.25rem'
                    }}>
                      <Icon size={26} color={value.color} />
                    </div>
                    <h3 style={{ fontSize: '1.5rem', color: 'var(--primary)', marginBottom: '0.75rem', fontFamily: '"Playfair Display", serif' }}>
                      {value.title}
                    </h3>
                    <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, fontSize: '0.95rem', margin: 0 }}>
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-6" style={{ position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, #0a3a40 0%, #124a52 50%, #0a3a40 100%)', zIndex: -1 }} />
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(212,175,55,0.08) 0%, transparent 70%)',
          pointerEvents: 'none'
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 style={{ fontSize: '2.8rem', color: '#fff', marginBottom: '1.5rem', lineHeight: 1.3 }}>
              Ready to Begin Your <span style={{ color: 'var(--accent)', fontStyle: 'italic' }}>Sri Lankan Adventure</span>?
            </h2>
            <p style={{ fontSize: '1.15rem', color: 'rgba(255,255,255,0.7)', maxWidth: '600px', margin: '0 auto 2.5rem', lineHeight: 1.8 }}>
              Let us turn your dream trip into reality. Start your journey with a personalised consultation today.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <a href="/#start-planning" className="btn btn-primary" style={{ padding: '1.1rem 3rem', fontSize: '1rem', borderRadius: '50px', display: 'inline-flex', alignItems: 'center', gap: '0.75rem', boxShadow: '0 10px 30px rgba(212,175,55,0.35)' }}>
                Plan Your Journey <ArrowRight size={18} />
              </a>
            </motion.div>
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

export default AboutUs;
