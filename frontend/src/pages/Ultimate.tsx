import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import Navbar from '../components/Navbar'; 
import negomboImg from '../assets/negombo.jpg';
import pinnawalaImg from '../assets/pinnawala.jpg';
import sigiriyaImg from '../assets/sigiriya.jpg';
import dambullaImg from '../assets/Dambulla.jpg'; // For Habarana
import kandyImg from '../assets/kandy.jpg'; // For Matale-Kandy
import cultureImg from '../assets/culture.jpg'; // For Kandy City
import scenicImg from '../assets/scenic.jpg'; // For Nuwara Eliya
import peradeniyaImg from '../assets/peradeniya.webp'; // For Nuwara Eliya Gardens
import ellaImg from '../assets/ella.jpg';
import yalaImg from '../assets/yala.jpg';
import galleImg from '../assets/Galle.jpg';
import beachImg from '../assets/tour.jpg';
import ultimateImg from '../assets/Ultimate.webp';

const Ultimate: React.FC = () => {
  const itinerary = [
    {
      day: "Day 1",
      title: "Airport – Negambo",
      image: negomboImg,
      text: "Arrive in Sri Lanka, to be met at the airport and transfer by air-conditioned Vehicle to a Hotel in Negombo. Rest of the day at your leisure. Overnight stay in Negombo.",
      reversed: false
    },
    {
      day: "Day 2",
      title: "Pinnawala – Sigiriya",
      image: pinnawalaImg,
      text: "After an early breakfast travel to Sri Lanka’s cultural triangle via Elephant Orphanage, a institution that has been looking after orphaned or injured elephants that would otherwise have surely died. If you leave the hotel early then you can watch the elephants bath in the river after the youngest babies are milk fed. After lunch you will leave for the cultural triangle and check in at a hotel in Sigiriya. Overnight stay in Sigiriya.",
      reversed: true
    },
    {
      day: "Day 3",
      title: "Polonnaruwa",
      image: sigiriyaImg,
      text: "The next day explore the ancient city of Polonnaruwa, once the capital of an advanced and prosperous medieval kingdom. Afterwards return to the hotel. Overnight stay in Sigiriya.",
      reversed: false
    },
    {
      day: "Day 4",
      title: "Sigiriya – Habarana",
      image: dambullaImg,
      text: "The following day you can enjoy a relaxing morning at the hotel poolside or explore surrounding by walking or having a relaxing massage from an ayurvedic center. In evening visit a forest Buddhist monastery. Overnight stay in Sigiriya.",
      reversed: true
    },
    {
      day: "Day 5",
      title: "Matale – Kandy",
      image: kandyImg,
      text: "After breakfast checkout from the hotel and leave to visit Sigiriya rock fortress, one of Sri Lanka's most fascinating UNESCO world heritage sites. No matter how often you climb to the summit of this one-time hilltop fortress of the maverick Sinhalese king, Kassapa, the pleasure barely diminishes because of the abandon spectacular views at the summit. Afterwards travel to Kandy another fascinating city of Sri Lanka. En-route visit a spice garden in Matale. Overnight stay in Kandy.",
      reversed: false
    },
    {
      day: "Day 6",
      title: "Kandy",
      image: cultureImg,
      text: "After breakfast, you will have a city tour of Kandy, visiting the temple of the tooth and some leisure time for shopping. Evening you will be entertained with a spectacular Sri Lankan cultural show. Overnight stay in Kandy.",
      reversed: true
    },
    {
      day: "Day 7",
      title: "Nuwara Eliya",
      image: scenicImg,
      text: "After breakfast you will travel deeper into the tea-growing hills and have the option to wind through the mountains with magnificent views. En-route to Nuwara Eliya you will visit a factory of the popular Sri Lankan Tea. Rest of the day at your leisure. Overnight stay in Nuwara Eliya.",
      reversed: false
    },
    {
      day: "Day 8",
      title: "Nuwara Eliya",
      image: peradeniyaImg,
      text: "After breakfast you will explore “Little England” a city tour with option to walk around the streets. We will also visit the Haggala botanical gardens. Overnight stay in Nuwara Eliya.",
      reversed: true
    },
    {
      day: "Day 9",
      title: "Ella – Yala",
      image: ellaImg,
      text: "After breakfast you will travel to Yala. En-route visit Ella gap and Rawana waterfall. Overnight stay in Yala.",
      reversed: false
    },
    {
      day: "Day 10",
      title: "Yala national park",
      image: yalaImg,
      text: "Early morning go for a game drive to Yala, one of the island’s most popular wildlife parks where you could see all most all the animals which is found in Sri Lanka. Overnight stay in Yala.",
      reversed: true
    },
    {
      day: "Day 11",
      title: "Galle - Southern Beach",
      image: galleImg,
      text: "After breakfast you will check out from the hotel and drive up Sri Lanka’s west coast, en-route visit Galle fort and a turtle hatchery. By late afternoon, check in one of the most popular beach resorts and which is also situated in the “Golden Stretch of Beaches” in Sri Lanka. Here you will relax and enjoy your beach stay which you richly deserve for the rest of the tour. Overnight stay at a beach resort.",
      reversed: false
    },
    {
      day: "Day 12, 13, 14",
      title: "Beach stay",
      image: beachImg,
      text: "Leisure at your beach resort.",
      reversed: true
    },
    {
      day: "Day 15",
      title: "Airport",
      image: ultimateImg,
      text: "Leave to Colombo or to the airport.",
      reversed: false
    }
  ];

  const FORM_ID = "booking-form";

  return (
    <div style={{ backgroundColor: '#fff', minHeight: '100vh', fontFamily: '"Inter", sans-serif' }}>
      <Navbar variant="dark" />

      {/* Hero Header */}
      <header style={{ textAlign: 'center', padding: '120px 20px 60px' }}>
        <p style={{ fontSize: '1rem', fontWeight: 500, color: '#333', marginBottom: '8px' }}>15 Days / 14 Nights</p>
        <h1 style={{ 
          fontSize: 'clamp(2.5rem, 5vw, 4rem)', 
          fontFamily: '"Playfair Display", serif', 
          fontWeight: 600, 
          margin: 0 
        }}>Ultimate Sri Lanka</h1>
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
        backgroundImage: `url(${ultimateImg})`, 
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

export default Ultimate;
