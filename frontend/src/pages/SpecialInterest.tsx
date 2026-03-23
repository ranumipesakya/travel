import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import cultureImg from '../assets/cultural3.jpg';
import ayurvedaImg from '../assets/yoga.webp';
import scenicImg from '../assets/scenic.jpg';
import wildlifeImg from '../assets/yala.jpg';
import adventureImg from '../assets/ella.jpg';
import pilgrimageImg from '../assets/Dambulla.jpg';
import campingImg from '../assets/Camping.jpg';
import heroImg from '../assets/Cultural 2.jpg';

const tours = [
  {
    title: "Cultural Tours",
    description: "Discover Sri Lanka’s seven UNESCO World Heritage Sites. Walk through the ancient cities of Anuradhapura and Polonnaruwa, climb Sigiriya Rock Fortress, and immerse yourself in Kandy’s living traditions.",
    image: cultureImg,
    delay: 0.1
  },
  {
    title: "Ayurveda & Yoga Retreats Tours",
    description: "Discover the balance of body and mind with our Ayurveda and Yoga Retreat Tours in Sri Lanka. These tours combine ancient healing therapies, daily yoga sessions, and peaceful natural environments for a total wellness getaway.",
    image: ayurvedaImg,
    delay: 0.2
  },
  {
    title: "Scenic Sri Lanka Tours",
    description: "Experience the island’s natural splendor with our Scenic Sri Lanka Tours, featuring rolling tea hills, cascading waterfalls, and the famous train journey to Ella, where you’ll cross the iconic Nine Arches Bridge surrounded by breathtaking mountain views.",
    image: scenicImg,
    delay: 0.3
  },
  {
    title: "Wildlife & Bird Watching Tours",
    description: "From Yala’s elusive leopards to Udawalawe’s gentle elephants and Sinharaja’s rare birds, Sri Lanka is a wildlife paradise. Explore expert-led safaris and sanctuaries rich in biodiversity.",
    image: wildlifeImg,
    delay: 0.4
  },
  {
    title: "Adventure Tours",
    description: "Trek misty mountains, raft the rapids of Kitulgala, cycle through rolling tea country, or surf Sri Lanka’s southern coast—adventure seekers will find unforgettable thrills at every turn.",
    image: adventureImg,
    delay: 0.5
  },
  {
    title: "Pilgrimage & Ramayana Tours",
    description: "Follow Sri Lanka’s sacred trail of Buddhist and Hindu heritage—visit the Temple of the Tooth, climb Adam’s Peak, explore Dambulla Golden Temple, and discover Ramayana sites like Sita Amman Temple and Ravana’s Caves.",
    image: pilgrimageImg,
    delay: 0.6
  },
  {
    title: "Camping Tours",
    description: "Experience the wild beauty of nature with our Camping Tours in Sri Lanka, offering unforgettable stays in stunning locations such as Yala & Wilpattu national parks, Knuckles, and Kitulgala, where you can camp under the stars and connect with the island’s breathtaking wilderness.",
    image: campingImg,
    delay: 0.7
  }
];

const SpecialInterest: React.FC = () => {
  return (
    <div style={{ backgroundColor: '#f9fafb', minHeight: '100vh', fontFamily: '"Inter", sans-serif' }}>
      <Navbar variant="dark" />

      {/* Hero Header Section */}
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
          src={heroImg}
          alt="Special Interest Tours"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0 }}
        />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to bottom, rgba(10,58,64,0.7) 0%, rgba(10,58,64,0.95) 100%)',
          zIndex: 1
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 10, textAlign: 'center', padding: '0 20px' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <p style={{
              color: '#d4af37', textTransform: 'uppercase',
              letterSpacing: '3px', fontWeight: 600,
              marginBottom: '1rem', fontSize: '0.9rem'
            }}>
              Looking for something beyond the ordinary?
            </p>
            <h1 style={{
              fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
              lineHeight: 1.2,
              color: '#fff',
              fontFamily: '"Playfair Display", serif',
              marginBottom: '1.5rem',
              fontWeight: 700
            }}>
              Special Interest Tours
            </h1>
            <p style={{
              fontSize: '1.15rem', maxWidth: '750px',
              margin: '0 auto', color: 'rgba(255,255,255,0.85)',
              fontWeight: 300, lineHeight: 1.8
            }}>
              Our Special Interest Tours are crafted for travellers with unique passions — from wellness retreats and cultural heritage to wildlife adventures and spiritual journeys. Dive deeper into what inspires you, with carefully curated itineraries guided by our expert team.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tours Grid Section */}
      <section style={{ padding: '100px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: '40px'
        }}>
          {tours.map((tour, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: tour.delay }}
              style={{
                backgroundColor: '#fff',
                borderRadius: '20px',
                overflow: 'hidden',
                boxShadow: '0 15px 40px rgba(0,0,0,0.06)',
                display: 'flex',
                flexDirection: 'column',
                border: '1px solid rgba(0,0,0,0.03)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)';
                e.currentTarget.style.boxShadow = '0 25px 50px rgba(0,0,0,0.12)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 15px 40px rgba(0,0,0,0.06)';
              }}
            >
              {/* Card Image */}
              <div style={{ height: '260px', overflow: 'hidden', position: 'relative' }}>
                <img
                  src={tour.image}
                  alt={tour.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.5s ease'
                  }}
                  onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                  onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                />
              </div>

              {/* Card Content */}
              <div style={{ padding: '35px 30px', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                <h3 style={{
                  fontSize: '1.6rem',
                  fontFamily: '"Playfair Display", serif',
                  color: '#1a1a1a',
                  marginBottom: '15px',
                  fontWeight: 700
                }}>
                  {tour.title}
                </h3>

                <p style={{
                  color: '#666',
                  lineHeight: '1.7',
                  fontSize: '0.95rem',
                  marginBottom: '30px',
                  flexGrow: 1
                }}>
                  {tour.description}
                </p>

                {/* Let's Talk Button */}
                <a
                  href="/tailor-made"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '10px',
                    backgroundColor: '#0a3a40',
                    color: '#fff',
                    padding: '12px 25px',
                    borderRadius: '50px',
                    textDecoration: 'none',
                    fontWeight: 600,
                    fontSize: '0.9rem',
                    letterSpacing: '0.5px',
                    textTransform: 'uppercase',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#d4af37'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#0a3a40'}
                >
                  <MessageCircle size={18} />
                  Let's Talk
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section style={{ backgroundColor: '#0a3a40', padding: '80px 20px', textAlign: 'center' }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 style={{ color: '#fff', fontSize: '2.5rem', fontFamily: '"Playfair Display", serif', marginBottom: '20px' }}>
            Ready to design your unique experience?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto 40px' }}>
            Reach out to our specialists today and let us tailor a tour perfectly matching your special interests.
          </p>
          <a
            href="/tailor-made"
            style={{
              backgroundColor: '#d4af37',
              color: '#fff',
              padding: '16px 40px',
              borderRadius: '50px',
              textDecoration: 'none',
              fontWeight: 700,
              fontSize: '1.05rem',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              boxShadow: '0 10px 30px rgba(212, 175, 55, 0.3)',
              transition: 'background-color 0.3s, transform 0.2s'
            }}
            onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
            onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
          >
            Start Planning <ArrowRight size={20} />
          </a>
        </motion.div>
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

export default SpecialInterest;
