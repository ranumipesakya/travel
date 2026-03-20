import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Users, Home, Info, Send, ChevronDown, MapPin } from 'lucide-react';
import Navbar from '../components/Navbar'; 
import negomboImage from '../assets/negombo.jpg';
import anuradapuraImage from '../assets/anuradapura.jpg'
import SigiriyaImage from '../assets/sigiriya.jpg'
import DambullaImage from '../assets/dambulla.jpg'

const Best: React.FC = () => {
  const itinerary = [
    {
      day: "Day 1",
      title: "Airport – Negambo",
      image: negomboImage, // Negombo Fishing
      text: "Arrive at Bandaranaike International Airport and met by \"Visit SL Travels\" representatives. Transfer to a beach hotel in Negambo, visit a fishing village or at leisure in the beach. Overnight stay in Negambo.",
      reversed: false
    },
    {
      day: "Day 2",
      title: "Anuradhapura",
      image: anuradapuraImage, // Anuradhapura Pagoda
      text: "Leave for Anuradhapura after breakfast. First Capital of Sri Lanka in the 3rd Century BC. Declared as a World Heritage Site. Visit Sri Maha Bodhi, the oldest historically documented tree in the world, the Brazen Palace, Dagobas, Ruwanwelisaya, Abeygiri & Jetawana Monasteries, finely preserved rock-cut statues of Lord Buddha and ruins of palaces, Isurumuniya rock temple. Overnight at Anuradhapura.",
      reversed: true
    },
    {
      day: "Day 3",
      title: "Sigiriya – Wildlife Safari",
      image: SigiriyaImage, // Elephants/Safari
      text: "Leave for Sigiriya, a 650 feet high rock fortress in the sky, a masterpiece of construction, artistry & irrigation. A world Heritage Site (5th Century AD). The world famous fresco paintings of Heavenly maidens are housed in a cave. In the afternoon Take a jeep safari through the Kaudulla National Park, looking for elephants, deer, peacocks, boars, and many kinds of birds. Overnight at Sigiriya.",
      reversed: false
    },
    {
      day: "Day 4",
      title: "Dambulla – Matale – Kandy",
      image: DambullaImage, // Dambulla Gold Buddha
      text: "Leave for Kandy via Dambulla. The Golden Rock is a cave temple which dates back to the 1st Century BC. Its rock ceiling is one large sweep of colorful frescoes which depict Buddhist mythology and the tales of the Buddha's previous births. The caves house the largest collection of Buddha statues in one place. From Dambulla drive to Matale to visit a spice garden. In Kandy, visit the Temple of the Tooth. View a cultural dance in evening. Overnight at Kandy.",
      reversed: true
    },
    {
      day: "Day 5",
      title: "Kandy – Pinnawala",
      image: "https://images.unsplash.com/photo-1546708973-b339540b5162?q=80&w=1000", // Kandy Dancers/Temple
      text: "Kandy, last seat of the Sinhala Kings, is a very popular destination for visitors from home and abroad. After breakfast, Visit Pinnawela, the Elephant Orphanage, where elephants are cared for. Have an elephant ride; (if you wish) and see Elephant museum at Millennium Elephant Foundation. Visit the Peradeniya Botanical Gardens, with a fine collection of over 4000 species of exotic plants and overnight stay at Kandy.",
      reversed: false
    },
    {
      day: "Day 6",
      title: "Nuwara Eliya",
      image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=1000", // Tea Plantations
      text: "After breakfast, Leave for Nuwara Eliya. Visit a tea factory en-route to see how the world's favorite drink is prepared. Nuwara Eliya resembles an old English town, complete with a lake, race track, well-kept lawns with hedges, an Anglican Church and an 18 hole golf course. Visit Hakgala Botanical Gardens, which houses an exotic collection of roses and ferns. Overnight at Nuwara Eliya.",
      reversed: true
    },
    {
      day: "Day 7",
      title: "Airport – Colombo",
      image: "https://images.unsplash.com/photo-1586902197503-e71026292412?q=80&w=1000", // Colombo Skyline
      text: "Leave for Colombo or to the airport.",
      reversed: false
    }
  ];

  const FORM_ID = "booking-form";

  return (
    <div style={{ backgroundColor: '#fff', minHeight: '100vh', fontFamily: '"Inter", sans-serif' }}>
      <Navbar variant="dark" />

      {/* Hero Header */}
      <header style={{ textAlign: 'center', padding: '120px 20px 60px' }}>
        <p style={{ fontSize: '1rem', fontWeight: 500, color: '#333', marginBottom: '8px' }}>7 Days / 6 Nights</p>
        <h1 style={{ 
          fontSize: 'clamp(2.5rem, 5vw, 4rem)', 
          fontFamily: '"Playfair Display", serif', 
          fontWeight: 600, 
          margin: 0 
        }}>Best of Sri Lanka</h1>
      </header>

      {/* Itinerary Sections */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
        {itinerary.map((item, index) => (
          <motion.section 
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ 
              display: 'flex', 
              flexDirection: item.reversed ? 'row-reverse' : 'row', 
              alignItems: 'center', 
              gap: '60px', 
              marginBottom: '100px',
              flexWrap: 'wrap'
            }}
          >
            {/* Image Block */}
            <div style={{ flex: '1', minWidth: '320px' }}>
              <img 
                src={item.image} 
                alt={item.title} 
                style={{ 
                  width: '100%', 
                  height: 'auto', 
                  borderRadius: '30px', 
                  boxShadow: '0 20px 40px rgba(0,0,0,0.08)' 
                }}
              />
            </div>

            {/* Content Block */}
            <div style={{ flex: '1.2', minWidth: '320px' }}>
              <h2 style={{ 
                fontSize: '2.5rem', 
                fontFamily: '"Playfair Display", serif', 
                color: '#444', 
                marginBottom: '8px' 
              }}>{item.title}</h2>
              <p style={{ fontWeight: 600, color: '#999', marginBottom: '25px', fontSize: '0.9rem' }}>{item.day}</p>
              <p style={{ 
                lineHeight: '1.8', 
                color: '#666', 
                fontSize: '1rem', 
                marginBottom: '35px',
                textAlign: 'justify'
              }}>
                {item.text}
              </p>
              <button 
                onClick={() => document.getElementById(FORM_ID)?.scrollIntoView({ behavior: 'smooth' })}
                style={buttonStyle}
              >
                Book Now
              </button>
            </div>
          </motion.section>
        ))}
      </div>

      {/* Tour Details Form Section */}
      <section style={{
        position: 'relative',
        padding: '100px 20px',
        backgroundImage: 'url("https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2000")', 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        display: 'flex',
        justifyContent: 'center'
      }}>
        <div id={FORM_ID} style={{
          backgroundColor: 'rgba(255,255,255,0.98)',
          width: '100%',
          maxWidth: '680px',
          borderRadius: '20px',
          padding: '50px 45px',
          boxShadow: '0 30px 60px rgba(0,0,0,0.15)'
        }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: 700, marginBottom: '30px', color: '#333' }}>Tour Details</h2>
          
          <form style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
            {/* Arrival/Departure */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
              <div>
                <label style={labelStyle}>Date of Arrival *</label>
                <input type="text" placeholder="mm/dd/yyyy" style={inputStyle} />
              </div>
              <div>
                <label style={labelStyle}>Date of Departure *</label>
                <input type="text" placeholder="mm/dd/yyyy" style={inputStyle} />
              </div>
            </div>

            {/* Guests Section */}
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginTop: '10px', color: '#333' }}>Number of Guests</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <input type="text" placeholder="Adults *" style={inputStyle} />
              <input type="text" placeholder="Children (06 – 11 Years)" style={inputStyle} />
              <input type="text" placeholder="Children (below 05 Years)" style={inputStyle} />
              <input type="text" placeholder="Number of Rooms Required *" style={inputStyle} />
            </div>

            {/* Accommodation */}
            <div style={{ marginTop: '10px' }}>
              <label style={labelStyle}>Accommodation Preferences</label>
              <div style={{ position: 'relative' }}>
                <select style={{ ...inputStyle, appearance: 'none' }}>
                  <option>Budget Guesthouses</option>
                  <option>2–3 Star Hotels</option>
                  <option>4–5 Star Hotels</option>
                  <option>Luxury Resorts / Villas</option>
                </select>
                <ChevronDown size={18} style={{ position: 'absolute', right: '15px', top: '15px', color: '#888', pointerEvents: 'none' }} />
              </div>
            </div>

            {/* Special Requests */}
            <textarea placeholder="Special Requests" style={{ ...inputStyle, height: '140px', resize: 'none' }} />

            {/* Personal Info */}
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginTop: '10px', color: '#333' }}>Personal Information</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <input type="text" placeholder="Name *" style={inputStyle} />
              <input type="email" placeholder="Email *" style={inputStyle} />
              <input type="text" placeholder="Phone / WhatsApp *" style={inputStyle} />
              <input type="text" placeholder="Country *" style={inputStyle} />
            </div>

            {/* reCAPTCHA Placeholder */}
            <div style={{ 
              border: '1px solid #e0e0e0', 
              padding: '12px 15px', 
              borderRadius: '6px', 
              backgroundColor: '#fafafa',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginTop: '10px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <input type="checkbox" id="captcha" style={{ width: '22px', height: '22px', cursor: 'pointer' }} />
                <label htmlFor="captcha" style={{ fontSize: '0.9rem', color: '#555' }}>I'm not a robot</label>
              </div>
              <img src="https://www.gstatic.com/recaptcha/api2/logo_48.png" alt="recaptcha" width="32" />
            </div>

            {/* Submit Button */}
            <button type="button" style={submitButtonStyle}>
              Design My Custom Tour
            </button>
          </form>
        </div>
      </section>

      {/* Simple Footer */}
      <footer style={{ backgroundColor: '#062529', color: '#fff', padding: '60px 20px', textAlign: 'center' }}>
        <p style={{ opacity: 0.6, fontSize: '0.9rem' }}>
          &copy; {new Date().getFullYear()} Visit Sri Lanka Travels. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

// Internal Styles
const buttonStyle: React.CSSProperties = {
  backgroundColor: '#7a6b5d',
  color: 'white',
  padding: '14px 40px',
  borderRadius: '50px',
  border: 'none',
  fontSize: '0.95rem',
  fontWeight: 600,
  cursor: 'pointer',
  transition: '0.3s',
};

const submitButtonStyle: React.CSSProperties = {
  backgroundColor: '#7a6b5d',
  color: 'white',
  padding: '18px',
  borderRadius: '50px',
  border: 'none',
  fontSize: '1rem',
  fontWeight: 600,
  cursor: 'pointer',
  marginTop: '15px',
  boxShadow: '0 10px 20px rgba(122, 107, 93, 0.25)',
};

const labelStyle: React.CSSProperties = {
  display: 'block',
  fontSize: '0.85rem',
  fontWeight: 700,
  marginBottom: '8px',
  color: '#444'
};

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '14px 18px',
  border: '1px solid #ddd',
  borderRadius: '8px',
  fontSize: '0.95rem',
  backgroundColor: '#fff',
  boxSizing: 'border-box',
  outline: 'none',
  color: '#333'
};

export default Best;
