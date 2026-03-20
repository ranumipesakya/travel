import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Clock, CheckCircle, XCircle, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import tourImage from '../assets/tour.jpg';
import cultureImage from '../assets/culture.jpg';
import yalaImage from '../assets/yala.jpg';
import scenicImage from '../assets/Scenic.jpg';
import ayurvedaImage from '../assets/Ayurveda.jpg';
import ultimateImage from '../assets/Ultimate.webp';

const destinations = [
  {
    title: "Classic Mini Tour",
    duration: "4 Days / 3 Nights",
    description: "A short but powerful journey through Sri Lanka's Cultural Triangle. Perfect for travellers with limited time.",
    image: tourImage,
    highlights: ["Colombo", "Kandy", "Dambulla", "Sigiriya", "Polonnaruwa", "Anuradhapura"],
    inclusions: ["Accommodation", "Transfers", "English-speaking guide", "Daily breakfast"],
    exclusions: ["Air tickets", "Entrance fees", "Personal expenses"],
    color: '#d4af37'
  },
  {
    title: "Cultural Heritage Tour",
    duration: "5 Days / 4 Nights",
    description: "Step into 2,000+ years of history with visits to UNESCO sites, ancient capitals, and sacred temples.",
    image: cultureImage,
    highlights: ["Negombo", "Sigiriya", "Pinnawala", "Anuradhapura", "Kandy", "Dambulla"],
    inclusions: ["Accommodation", "Private transport", "Guide", "Daily breakfast"],
    exclusions: ["Flights", "Entrance tickets", "Personal expenses"],
    color: '#e8766a'
  },
  {
    title: "Best of Sri Lanka",
    duration: "7 Days / 6 Nights",
    description: "A one-week escape covering cultural wonders, scenic highlands, and thrilling wildlife safaris.",
    image: yalaImage,
    highlights: ["Negombo", "Anuradhapura", "Sigiriya", "Wildlife Safari", "Dambulla", "Kandy", "Nuwara Eliya"],
    inclusions: ["Hotels", "Transport", "English-speaking chauffeur", "Daily breakfast"],
    exclusions: ["International flights", "Meals not listed", "Entrance fees"],
    color: '#165b63'
  },
  {
    title: "Scenic Sri Lanka",
    duration: "10 Days / 9 Nights",
    description: "A scenic journey through misty tea hills, waterfalls, ancient temples, and wild safaris.",
    image: scenicImage,
    highlights: ["Sigiriya", "Dambulla", "Kandy", "Pinnawala", "Nuwara Eliya", "Ella", "Yala National Park"],
    inclusions: ["Accommodation", "Chauffeur-guide", "Private transfers", "Daily breakfast"],
    exclusions: ["Flights", "Optional activities", "Personal costs"],
    color: '#2d8a4e'
  },
  {
    title: "Round Tour with Ayurveda",
    duration: "10 Days / 9 Nights",
    description: "Blend cultural discovery with Ayurveda wellness sessions for a truly restorative holiday.",
    image: ayurvedaImage,
    highlights: ["Colombo", "Pinnawala", "Kandy", "Dambulla", "Sigiriya", "Polonnaruwa", "Nuwara Eliya"],
    inclusions: ["Accommodation", "Transport", "Ayurveda therapy sessions", "Guide"],
    exclusions: ["Flights", "Meals not mentioned", "Optional spa add-ons"],
    color: '#8b5e3c'
  },
  {
    title: "Ultimate Sri Lanka",
    duration: "15 Days / 14 Nights",
    description: "The ultimate island experience — two weeks of heritage, safaris, rail journeys, and golden beaches.",
    image: ultimateImage,
    highlights: ["Negombo", "Pinnawala", "Sigiriya", "Polonnaruwa", "Matale", "Kandy", "Nuwara Eliya", "Ella", "Yala", "Galle"],
    inclusions: ["Accommodation", "Transport", "English-speaking chauffeur", "Daily breakfast"],
    exclusions: ["International airfare", "Meals not listed", "Personal expenses"],
    color: '#d4af37'
  }
];

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const DestinationPage: React.FC = () => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const toggleCard = (index: number) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  return (
    <div className="page-wrapper" style={{ overflowX: 'hidden' }}>
      <Navbar variant="dark" />

      {/* Hero Section */}
      <section style={{
        position: 'relative',
        height: '75vh',
        minHeight: '550px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden'
      }}>
        <img
          src={tourImage}
          alt="Sri Lanka Destinations"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: -2 }}
        />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(135deg, rgba(10,58,64,0.75) 0%, rgba(6,37,41,0.6) 50%, rgba(22,91,99,0.55) 100%)',
          zIndex: -1
        }} />

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
              style={{
                color: 'var(--accent)', textTransform: 'uppercase',
                letterSpacing: '5px', fontWeight: 600,
                marginBottom: '1rem', fontSize: '0.9rem'
              }}
            >
              Curated Experiences
            </motion.p>
            <h1 style={{
              fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
              lineHeight: 1.15,
              textShadow: '0 8px 25px rgba(0,0,0,0.3)',
              color: '#fff',
              marginBottom: '1.5rem'
            }}>
              Handcrafted Journeys <br />
              <span style={{ color: 'var(--accent)', fontStyle: 'italic' }}>Across Paradise</span>
            </h1>
            <p style={{
              fontSize: '1.2rem', maxWidth: '650px',
              margin: '0 auto', color: 'rgba(255,255,255,0.85)',
              fontWeight: 300, lineHeight: 1.8
            }}>
              From cultural treasures to scenic highlands, choose a package that matches your pace, style, and story.
            </p>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          style={{
            position: 'absolute', bottom: '2rem',
            left: '50%', transform: 'translateX(-50%)',
            display: 'flex', flexDirection: 'column', alignItems: 'center',
            color: 'rgba(255,255,255,0.6)', fontSize: '0.8rem',
            letterSpacing: '2px', textTransform: 'uppercase'
          }}
        >
          <span>Explore</span>
          <ChevronDown size={20} style={{ marginTop: '0.25rem' }} />
        </motion.div>
      </section>

      {/* Tour Counter Bar */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{
          background: 'var(--primary)',
          padding: '2.5rem 0',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <div style={{
          position: 'absolute', top: 0, right: 0, width: '300px', height: '100%',
          background: 'linear-gradient(90deg, transparent, rgba(212,175,55,0.08))',
          pointerEvents: 'none'
        }} />
        <div className="container" style={{
          display: 'flex', justifyContent: 'center', gap: '5rem',
          flexWrap: 'wrap'
        }}>
          {[
            { number: '6', label: 'Tour Packages' },
            { number: '4–15', label: 'Days Duration' },
            { number: '50+', label: 'Destinations' },
            { number: '100%', label: 'Customizable' }
          ].map((stat) => (
            <div key={stat.label} style={{ textAlign: 'center' }}>
              <span style={{
                fontSize: '2rem', fontWeight: 700,
                fontFamily: '"Playfair Display", serif',
                color: 'var(--accent)', display: 'block', lineHeight: 1
              }}>
                {stat.number}
              </span>
              <span style={{
                fontSize: '0.8rem', color: 'rgba(255,255,255,0.65)',
                textTransform: 'uppercase', letterSpacing: '2px', marginTop: '0.5rem',
                display: 'block'
              }}>
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Tour Packages Section */}
      <section style={{
        background: 'linear-gradient(180deg, var(--bg-color) 0%, #f0f2f5 100%)',
        padding: '6rem 0'
      }}>
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            style={{ textAlign: 'center', marginBottom: '4rem' }}
          >
            <p style={{
              color: 'var(--accent)', textTransform: 'uppercase',
              letterSpacing: '4px', fontWeight: 600,
              fontSize: '0.85rem', marginBottom: '0.75rem'
            }}>
              Choose Your Adventure
            </p>
            <h2 className="section-title" style={{ fontSize: '2.8rem' }}>
              Our Tour Packages
            </h2>
            <p className="section-subtitle">
              Every journey is unique. Find the perfect tour that speaks to your soul.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}
          >
            {destinations.map((tour, index) => {
              const isReversed = index % 2 !== 0;
              const isExpanded = expandedCard === index;

              return (
                <motion.div
                  key={tour.title}
                  variants={fadeUp}
                  whileHover={{ y: -6, transition: { duration: 0.3 } }}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: isReversed ? '1fr 1.2fr' : '1.2fr 1fr',
                    gap: '0',
                    background: 'var(--surface)',
                    borderRadius: '24px',
                    overflow: 'hidden',
                    boxShadow: '0 15px 50px rgba(0,0,0,0.08)',
                    transition: 'box-shadow 0.4s ease',
                    border: '1px solid rgba(0,0,0,0.04)'
                  }}
                  className="dest-tour-card"
                >
                  {/* Image Side */}
                  <div
                    style={{
                      position: 'relative',
                      overflow: 'hidden',
                      minHeight: '380px',
                      order: isReversed ? 2 : 1
                    }}
                    className="dest-tour-card-image"
                  >
                    <img
                      src={tour.image}
                      alt={tour.title}
                      loading="lazy"
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.8s ease'
                      }}
                      onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.08)')}
                      onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                    />
                    <div style={{
                      position: 'absolute', inset: 0,
                      background: `linear-gradient(135deg, ${tour.color}30 0%, transparent 60%)`
                    }} />

                    {/* Duration Badge */}
                    <div style={{
                      position: 'absolute', top: '1.5rem',
                      left: isReversed ? 'auto' : '1.5rem',
                      right: isReversed ? '1.5rem' : 'auto',
                      background: 'rgba(255,255,255,0.95)',
                      backdropFilter: 'blur(10px)',
                      padding: '0.6rem 1.2rem',
                      borderRadius: '50px',
                      display: 'flex', alignItems: 'center', gap: '0.5rem',
                      boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
                    }}>
                      <Clock size={14} color={tour.color} />
                      <span style={{
                        fontSize: '0.8rem', fontWeight: 600,
                        color: 'var(--primary)', letterSpacing: '0.5px'
                      }}>
                        {tour.duration}
                      </span>
                    </div>

                    {/* Tour number */}
                    <div style={{
                      position: 'absolute', bottom: '1.5rem',
                      right: isReversed ? 'auto' : '1.5rem',
                      left: isReversed ? '1.5rem' : 'auto',
                      fontSize: '4rem',
                      fontFamily: '"Playfair Display", serif',
                      fontWeight: 700,
                      color: 'rgba(255,255,255,0.2)',
                      lineHeight: 1
                    }}>
                      {String(index + 1).padStart(2, '0')}
                    </div>
                  </div>

                  {/* Content Side */}
                  <div
                    style={{
                      padding: '3rem 2.5rem',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      order: isReversed ? 1 : 2
                    }}
                    className="dest-tour-card-content"
                  >
                    <div style={{
                      width: '40px', height: '3px',
                      background: tour.color, borderRadius: '2px',
                      marginBottom: '1.5rem'
                    }} />

                    <h3 style={{
                      fontSize: '1.8rem',
                      color: 'var(--primary)',
                      marginBottom: '1rem',
                      fontFamily: '"Playfair Display", serif',
                      lineHeight: 1.3
                    }}>
                      {tour.title}
                    </h3>

                    <p style={{
                      color: 'var(--text-muted)',
                      lineHeight: 1.8,
                      fontSize: '1rem',
                      marginBottom: '1.5rem'
                    }}>
                      {tour.description}
                    </p>

                    {/* Highlights as location pills */}
                    <div style={{
                      display: 'flex', flexWrap: 'wrap',
                      gap: '0.5rem', marginBottom: '1.5rem'
                    }}>
                      {tour.highlights.map((place) => (
                        <span key={place} style={{
                          display: 'inline-flex', alignItems: 'center', gap: '0.3rem',
                          background: `${tour.color}12`,
                          color: tour.color,
                          padding: '0.35rem 0.8rem',
                          borderRadius: '50px',
                          fontSize: '0.78rem',
                          fontWeight: 600,
                          letterSpacing: '0.3px'
                        }}>
                          <MapPin size={11} />
                          {place}
                        </span>
                      ))}
                    </div>

                    {/* Expandable Details */}
                    <button
                      onClick={() => toggleCard(index)}
                      style={{
                        display: 'flex', alignItems: 'center', gap: '0.5rem',
                        background: 'none', border: 'none',
                        color: tour.color, fontWeight: 600,
                        fontSize: '0.85rem', cursor: 'pointer',
                        padding: '0.5rem 0', marginBottom: '1rem',
                        letterSpacing: '0.5px', textTransform: 'uppercase',
                        fontFamily: 'Inter, sans-serif'
                      }}
                    >
                      {isExpanded ? 'Hide Details' : 'View Details'}
                      {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </button>

                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          style={{ overflow: 'hidden' }}
                        >
                          <div style={{
                            display: 'grid', gridTemplateColumns: '1fr 1fr',
                            gap: '1rem', paddingBottom: '1.5rem'
                          }}>
                            {/* Inclusions */}
                            <div>
                              <p style={{
                                fontSize: '0.75rem', fontWeight: 700,
                                textTransform: 'uppercase', letterSpacing: '1.5px',
                                color: 'var(--primary)', marginBottom: '0.75rem'
                              }}>
                                Inclusions
                              </p>
                              {tour.inclusions.map((item) => (
                                <div key={item} style={{
                                  display: 'flex', alignItems: 'center', gap: '0.5rem',
                                  marginBottom: '0.4rem', fontSize: '0.85rem',
                                  color: 'var(--text-muted)'
                                }}>
                                  <CheckCircle size={13} color="#2d8a4e" />
                                  {item}
                                </div>
                              ))}
                            </div>

                            {/* Exclusions */}
                            <div>
                              <p style={{
                                fontSize: '0.75rem', fontWeight: 700,
                                textTransform: 'uppercase', letterSpacing: '1.5px',
                                color: 'var(--primary)', marginBottom: '0.75rem'
                              }}>
                                Exclusions
                              </p>
                              {tour.exclusions.map((item) => (
                                <div key={item} style={{
                                  display: 'flex', alignItems: 'center', gap: '0.5rem',
                                  marginBottom: '0.4rem', fontSize: '0.85rem',
                                  color: 'var(--text-muted)'
                                }}>
                                  <XCircle size={13} color="#c0392b" />
                                  {item}
                                </div>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* CTA Button */}
                    <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                      {tour.title === "Classic Mini Tour" ? (
                        <Link
                          to="/mini-tour"
                          style={{
                            display: 'inline-flex', alignItems: 'center', gap: '0.6rem',
                            background: tour.color,
                            color: '#fff',
                            padding: '0.85rem 2rem',
                            borderRadius: '50px',
                            fontSize: '0.85rem',
                            fontWeight: 600,
                            letterSpacing: '0.5px',
                            textTransform: 'uppercase',
                            textDecoration: 'none',
                            boxShadow: `0 8px 25px ${tour.color}40`,
                            transition: 'box-shadow 0.3s ease'
                          }}
                        >
                          Enquire Now <ArrowRight size={16} />
                        </Link>
                      ) : tour.title === "Cultural Heritage Tour" ? (
                        <Link
                          to="/cultural-heritage"
                          style={{
                            display: 'inline-flex', alignItems: 'center', gap: '0.6rem',
                            background: tour.color,
                            color: '#fff',
                            padding: '0.85rem 2rem',
                            borderRadius: '50px',
                            fontSize: '0.85rem',
                            fontWeight: 600,
                            letterSpacing: '0.5px',
                            textTransform: 'uppercase',
                            textDecoration: 'none',
                            boxShadow: `0 8px 25px ${tour.color}40`,
                            transition: 'box-shadow 0.3s ease'
                          }}
                        >
                          Enquire Now <ArrowRight size={16} />
                        </Link>
                      ) : tour.title === "Best of Sri Lanka" ? (
                        <Link
                          to="/best-of-sri-lanka"
                          style={{
                            display: 'inline-flex', alignItems: 'center', gap: '0.6rem',
                            background: tour.color,
                            color: '#fff',
                            padding: '0.85rem 2rem',
                            borderRadius: '50px',
                            fontSize: '0.85rem',
                            fontWeight: 600,
                            letterSpacing: '0.5px',
                            textTransform: 'uppercase',
                            textDecoration: 'none',
                            boxShadow: `0 8px 25px ${tour.color}40`,
                            transition: 'box-shadow 0.3s ease'
                          }}
                        >
                          Enquire Now <ArrowRight size={16} />
                        </Link>
                      ) : (
                        <a
                          href="/#start-planning"
                          style={{
                            display: 'inline-flex', alignItems: 'center', gap: '0.6rem',
                            background: tour.color,
                            color: '#fff',
                            padding: '0.85rem 2rem',
                            borderRadius: '50px',
                            fontSize: '0.85rem',
                            fontWeight: 600,
                            letterSpacing: '0.5px',
                            textTransform: 'uppercase',
                            textDecoration: 'none',
                            boxShadow: `0 8px 25px ${tour.color}40`,
                            transition: 'box-shadow 0.3s ease'
                          }}
                        >
                          Enquire Now <ArrowRight size={16} />
                        </a>
                      )}
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        position: 'relative', overflow: 'hidden',
        padding: '6rem 0'
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(135deg, #0a3a40 0%, #124a52 50%, #0a3a40 100%)',
          zIndex: -1
        }} />
        <div style={{
          position: 'absolute', top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '600px', height: '600px', borderRadius: '50%',
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
            <h2 style={{
              fontSize: '2.8rem', color: '#fff',
              marginBottom: '1.5rem', lineHeight: 1.3
            }}>
              Can't Decide? Let Us <span style={{ color: 'var(--accent)', fontStyle: 'italic' }}>Design Your Dream Trip</span>
            </h2>
            <p style={{
              fontSize: '1.15rem', color: 'rgba(255,255,255,0.7)',
              maxWidth: '600px', margin: '0 auto 2.5rem', lineHeight: 1.8
            }}>
              Every tour is fully customizable. Share your preferences and we'll craft a journey that's uniquely yours.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <a
                href="/#start-planning"
                className="btn btn-primary"
                style={{
                  padding: '1.1rem 3rem', fontSize: '1rem',
                  borderRadius: '50px', display: 'inline-flex',
                  alignItems: 'center', gap: '0.75rem',
                  boxShadow: '0 10px 30px rgba(212,175,55,0.35)'
                }}
              >
                Start Planning <ArrowRight size={18} />
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
            <p style={{ color: 'rgba(255,255,255,0.7)', maxWidth: '500px', margin: '0 auto 3rem', fontSize: '1.1rem' }}>
              Crafting unforgettable tailor-made Sri Lankan journeys. Experience the magic of paradise.
            </p>
            <div style={{
              borderTop: '1px solid rgba(255,255,255,0.05)',
              paddingTop: '2rem', fontSize: '0.9rem',
              color: 'rgba(255,255,255,0.4)',
              display: 'flex', justifyContent: 'center', gap: '2rem'
            }}>
              <span>&copy; {new Date().getFullYear()} Visit Sri Lanka Tours. All rights reserved.</span>
              <a href="#">Privacy</a>
              <a href="#">Terms</a>
            </div>
          </motion.div>
        </div>
      </footer>
    </div>
  );
};

export default DestinationPage;
