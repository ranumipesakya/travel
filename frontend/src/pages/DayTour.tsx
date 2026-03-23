import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Clock, CheckCircle, XCircle, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import kandyImg from '../assets/kandy.jpg';
import sigiriyaImg from '../assets/sigiriya.jpg';
import galleImg from '../assets/Galle.jpg';
import adventureImg from '../assets/ella.jpg';
import scenicImg from '../assets/scenic.jpg';
import anuradapuraImg from '../assets/anuradapura.jpg';
import colomboImg from '../assets/tour.jpg'; 
import heroImg from '../assets/Ultimate.webp';

const dayTours = [
  {
    title: "Kandy & Pinnawala Day Tour",
    duration: "Full day",
    description: "Visit the world-famous Pinnawala Elephant Orphanage, explore the sacred Temple of the Tooth Relic, stroll through the Peradeniya Botanical Gardens, and enjoy a Kandy city tour.",
    image: kandyImg,
    highlights: ["Pinnawala", "Temple of the Tooth", "Peradeniya", "Kandy City"],
    inclusions: ["Private transfers", "Air-conditioned vehicle", "English-speaking chauffeur-guide"],
    exclusions: ["Entrance fees", "Personal expenses", "Meals"],
    color: '#d4af37'
  },
  {
    title: "Sigiriya & Dambulla Day Tour",
    duration: "Full day",
    description: "Climb the legendary Sigiriya Rock Fortress and explore the Dambulla Cave Temple, home to ancient Buddhist murals and statues.",
    image: sigiriyaImg,
    highlights: ["Sigiriya Rock", "Dambulla Cave Temple", "Ancient Murals"],
    inclusions: ["Private transfers", "Air-conditioned vehicle", "English-speaking chauffeur-guide"],
    exclusions: ["Entrance tickets", "Personal expenses", "Lunch"],
    color: '#e8766a'
  },
  {
    title: "Galle City Day Tour",
    duration: "Full day",
    description: "Discover the UNESCO-listed Galle Fort, visit a turtle hatchery, cruise along the Madu River, and meet traditional stilt fishermen.",
    image: galleImg,
    highlights: ["Galle Fort", "Turtle Hatchery", "Madu River Cruise", "Stilt Fishermen"],
    inclusions: ["Private transfers", "Air-conditioned vehicle", "English-speaking chauffeur-guide"],
    exclusions: ["Activity entrance fees", "Lunch", "Personal expenses"],
    color: '#165b63'
  },
  {
    title: "Kitulgala Adventure Day Tour",
    duration: "Full day",
    description: "Thrill-seekers will love white-water rafting in Kitulgala. Surrounded by rainforest, this is one of Sri Lanka’s top adventure escapes.",
    image: adventureImg,
    highlights: ["White-Water Rafting", "Kitulgala Rainforest", "Adventure"],
    inclusions: ["Private transfers", "Air-conditioned vehicle", "English-speaking chauffeur-guide"],
    exclusions: ["Rafting fees", "Safety gear rental", "Lunch"],
    color: '#2d8a4e'
  },
  {
    title: "Nuwara Eliya Day Tour",
    duration: "Full day",
    description: "Journey through Sri Lanka’s scenic hill country. Visit Ramboda Falls, lush tea plantations, and the charming city of Nuwara Eliya, also known as “Little England.”",
    image: scenicImg,
    highlights: ["Ramboda Falls", "Tea Plantations", "Nuwara Eliya City"],
    inclusions: ["Private transfers", "Air-conditioned vehicle", "English-speaking chauffeur-guide"],
    exclusions: ["Entrance fees", "Lunch", "Personal costs"],
    color: '#8b5e3c'
  },
  {
    title: "Anuradhapura Day Tour",
    duration: "Full day",
    description: "Step back in time with a visit to the ancient city of Anuradhapura, Sri Lanka’s first capital and a UNESCO World Heritage Site.",
    image: anuradapuraImg,
    highlights: ["Ancient Ruins", "Sacred Bo Tree", "UNESCO Site"],
    inclusions: ["Private transfers", "Air-conditioned vehicle", "English-speaking chauffeur-guide"],
    exclusions: ["Entrance tickets", "Lunch", "Personal expenses"],
    color: '#34495e'
  },
  {
    title: "Colombo City Tour",
    duration: "Half or full day",
    description: "Explore Sri Lanka’s vibrant capital: Galle Face Green, Pettah Bazaar, Independence Square, Colombo Museum, Seema Malaka Temple, and more.",
    image: colomboImg,
    highlights: ["Galle Face Green", "Pettah Bazaar", "Independence Square", "Seema Malaka"],
    inclusions: ["Private transfers", "Air-conditioned vehicle", "English-speaking chauffeur-guide"],
    exclusions: ["Entrance fees", "Meals", "Personal shopping"],
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

const DayTour: React.FC = () => {
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
          src={heroImg}
          alt="Sri Lanka Day Tours"
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
              Short on time but want to see it all?
            </motion.p>
            <h1 style={{
              fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
              lineHeight: 1.15,
              textShadow: '0 8px 25px rgba(0,0,0,0.3)',
              color: '#fff',
              marginBottom: '1.5rem'
            }}>
              Guided Day Tours <br />
              <span style={{ color: 'var(--accent)', fontStyle: 'italic' }}>Across Paradise</span>
            </h1>
            <p style={{
              fontSize: '1.2rem', maxWidth: '800px',
              margin: '0 auto', color: 'rgba(255,255,255,0.85)',
              fontWeight: 300, lineHeight: 1.8
            }}>
              Our guided day tours give you unforgettable snapshots of the island’s culture, history, wildlife, and landscapes. Ideal starting from Colombo or Negombo.
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
            { number: '7', label: 'Day Tour Options' },
            { number: '1', label: 'Day Duration' },
            { number: '20+', label: 'Quick Escapes' },
            { number: '100%', label: 'Private Guided' }
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
              Sri Lanka Day Tours
            </h2>
            <p className="section-subtitle">
              Short on time? Pick the perfect day trip and let us handle all the details.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}
          >
            {dayTours.map((tour, index) => {
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
                      <Link
                        to={`/book-tour?tour=${encodeURIComponent(tour.title)}`}
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
                        Book Now <ArrowRight size={16} />
                      </Link>
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
        background: 'var(--primary)',
        padding: '6rem 0',
        position: 'relative',
        overflow: 'hidden',
        textAlign: 'center'
      }}>
        <div className="container" style={{ position: 'relative', zIndex: 10 }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 style={{
              color: 'var(--surface)', fontSize: '2.5rem',
              fontFamily: '"Playfair Display", serif', marginBottom: '1.5rem'
            }}>
              Want Something More Specialized?
            </h2>
            <p style={{
              color: 'rgba(255,255,255,0.8)', fontSize: '1.1rem',
              maxWidth: '600px', margin: '0 auto 3rem', lineHeight: 1.6
            }}>
              Our expert travel planners can craft a specialized tour exactly to your liking.
            </p>
            <Link
              to="/special-interest"
              style={{
                display: 'inline-block', background: 'var(--accent)',
                color: '#fff', padding: '1rem 3rem', borderRadius: '50px',
                fontWeight: 600, fontSize: '1rem', letterSpacing: '1px', textTransform: 'uppercase',
                textDecoration: 'none', boxShadow: '0 10px 30px rgba(212,175,55,0.3)',
                transition: 'transform 0.3s ease'
              }}
              onMouseOver={(e) => (e.currentTarget.style.transform = 'translateY(-3px)')}
              onMouseOut={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
            >
              Custom Tours
            </Link>
          </motion.div>
        </div>
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

export default DayTour;
