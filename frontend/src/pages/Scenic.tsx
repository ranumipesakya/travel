import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import Navbar from '../components/Navbar'; 
import negomboImg from '../assets/negombo.jpg';
import sigiriyaImg from '../assets/sigiriya.jpg';
import dambullaImg from '../assets/Dambulla.jpg';
import pinnawalaImg from '../assets/pinnawala.jpg';
import scenicImg from '../assets/scenic.jpg';
import ellaImg from '../assets/ella.jpg';
import yalaImg from '../assets/yala.jpg';
import galleImg from '../assets/Galle.jpg';
import beachImg from '../assets/tour.jpg';
import ultimateImg from '../assets/Ultimate.webp';

const Scenic: React.FC = () => {
  const itinerary = [
    {
      day: "Day 1",
      title: "Colombo airport - Negombo",
      image: negomboImg,
      text: "Meet your guide on arrival. Transfer to a beach hotel in Negombo, visit a fishing village or at leisure in the beach . Overnight stay in Negombo.",
      reversed: false
    },
    {
      day: "Day 2",
      title: "Sigiriya - Traditional village visit",
      image: sigiriyaImg,
      text: "After breakfast checkout from the hotel and leave to visit Sigiriya rock fortress, one of Sri Lanka's most fascinating UNESCO world heritage sites. No matter how often you climb to the summit of this one-time hilltop fortress of the maverick Sinhalese king, Kassapa, the pleasure barely diminishes because of the abandon spectacular views at the summit. In afternoon, visit a traditional village in Habarana. This program is designed for you to experience the real traditional Sri Lankan rural village style, where you will travel in a Bullock cart to a rural village. This program is highly recommended as a \"must do\" activity to get feel the real Sri Lanka. Overnight stay in Sigiriya.",
      reversed: true
    },
    {
      day: "Day 3",
      title: "Dambulla - Kandy",
      image: dambullaImg,
      text: "After breakfast travel to Kandy another fascinating city of Sri Lanka. En route visit Dambulla cave temple, which contains more than 150 Statues of the Buddha. This was where a king of the 1st Century B.C. took refuge and latter converted them into a monastery In Kandy visit temple of tooth. This temple, the most important one for The Sri Lankan Buddhists was built in the 16th Century A.D, solely for the purpose of housing the tooth relic. Observe the magnificent Architecture of that period and experience the tranquility of the atmosphere. In evening witness a spectacular Sri Lankan cultural show. Overnight stay in Kandy.",
      reversed: false
    },
    {
      day: "Day 4",
      title: "Pinnawala - Peradeniya – Kandy city tour",
      image: pinnawalaImg,
      text: "After breakfast travel to visit pinnawala elephant orphanage, The foster – home of elephants of different age and size feed, bathe, play together and even mate. These great animals have been found injured or left abandoned in the wilderness. Now they even breed in captivity. And then visit peradeniya botanical garden, which was a pleasure garden of a Kandyan King of the 16th Century and later made in to a Botanical Garden during the British regime. This garden, one of the best in Asia is a place of beauty and site for bird watchers. In evening do a city tour in Kandy. Overnight stay in Kandy.",
      reversed: true
    },
    {
      day: "Day 5",
      title: "Nuwara Eliya",
      image: scenicImg,
      text: "After breakfast, travel deeper into the tea-growing hills and have the option to wind through the mountains with magnificent views. En-route to Nuwara Eliya you will visit Ramboda waterfall and a factory of the popular Sri Lankan Tea. Arrive in Nuwara Eliya to be greeted by the fresh wintry atmosphere, the cottage type bungalows and the colonial air. ( Nuwara Eliya is also known as “Little England”) Overnight stay in Nuwara Eliya.",
      reversed: false
    },
    {
      day: "Day 6",
      title: "Horton’s plains - Ella",
      image: ellaImg,
      text: "Early in the morning travel to explore the Horton’s plains national park. Horton’s plains offers some excellent hikes in an unusual environment, characterized by forest patches, grasslands and some high-altitude vegetation. Highlights include the dramatic 880 metre drop at World's End and the beautiful Baker's Falls. In afternoon travel to Ella for overnight stay.",
      reversed: true
    },
    {
      day: "Day 7",
      title: "Yala National Park",
      image: yalaImg,
      text: "After breakfast you travel to Yala. En-route visit famous Ella gap and enjoy the most beautiful sceneries in the Sri Lanka highlands. In afternoon, explore the Yala national wildlife park. Yala is one of Sri Lanka 's premier eco tourism destinations, where you can watch closely Leopard, Elephants and unique varieties of Birds. Overnight stay in Yala.",
      reversed: false
    },
    {
      day: "Day 8",
      title: "Galle - Beach stay",
      image: galleImg,
      text: "Travel to a beach resort for your beach holiday. En-route visit Galle fort, which was built first in 1588 by the Portuguese, then extensively fortified by the Dutch during the 17th century. Then visit a turtle hatchery in the southern cost. These sea turtle hatcheries are for the survival of sea turtles for the next generation. In the afternoon, relax at your beach resort. Overnight stay at a beach resort.",
      reversed: true
    },
    {
      day: "Day 9",
      title: "Beach",
      image: beachImg,
      text: "Beach Stay with many choices of spending your time. Leisurely strolling on the Golden Beaches enthralled in the magical atmosphere. Lazing on a Sun deck reading a book of you choice, and sipping a cool fresh tropical fruit drink of pine apple, Mango, Banana. Water skiing, Wind Surfing, Snorkeling or cutting through the choppy on a jet water scooter, whale watching trips and much more... (only if you wish, not included in the package price)",
      reversed: false
    },
    {
      day: "Day 10",
      title: "Beach - Airport",
      image: ultimateImg,
      text: "Leave Air port for Departure.",
      reversed: true
    }
  ];

  const FORM_ID = "booking-form";

  return (
    <div style={{ backgroundColor: '#fff', minHeight: '100vh', fontFamily: '"Inter", sans-serif' }}>
      <Navbar variant="dark" />

      {/* Hero Header */}
      <header style={{ textAlign: 'center', padding: '120px 20px 60px' }}>
        <p style={{ fontSize: '1rem', fontWeight: 500, color: '#333', marginBottom: '8px' }}>10 Days / 9 Nights</p>
        <h1 style={{ 
          fontSize: 'clamp(2.5rem, 5vw, 4rem)', 
          fontFamily: '"Playfair Display", serif', 
          fontWeight: 600, 
          margin: 0 
        }}>Scenic Sri Lanka</h1>
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
        backgroundImage: `url(${scenicImg})`, 
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

export default Scenic;
