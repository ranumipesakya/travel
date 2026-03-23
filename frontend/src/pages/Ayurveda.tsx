import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import Navbar from '../components/Navbar'; 
import nuwaraImg from '../assets/scenic.jpg';
import pinnawalaImg from '../assets/pinnawala.jpg';
import dambullaImg from '../assets/Dambulla.jpg';
import sigiriyaImg from '../assets/sigiriya.jpg';
import anuradapuraImg from '../assets/anuradapura.jpg';
import ayurvedaImg from '../assets/Ayurveda.jpg';
import ultimateImg from '../assets/Ultimate.webp';

const Ayurveda: React.FC = () => {
  const itinerary = [
    {
      day: "Day 1",
      title: "Colombo – Nuwara Eliya",
      image: nuwaraImg,
      text: "Arrive at Bandaranaike International Airport and met by \"Visit SL Travels\" representatives. You leave Colombo in the morning and drive along busy highways into the highlands of the island. You will see waterfalls, tea plantations, tea factories and vegetable plantations along the way. The countryside around Nuwara Eliya rises from 3000 fts to over 8000fts., making Nuwara Eliya the highest hill country of Sri Lanka and so for many visitors is considered the most beautiful part of Sri Lanka, being home to mist shrouded tea plantations, cool green hills, rushing water falls and colonial style buildings. Overnight stay in Nuwara Eliya.",
      reversed: false
    },
    {
      day: "Day 2",
      title: "Pinnawala – Kandy",
      image: pinnawalaImg,
      text: "After breakfast you will leave to Pinnawala. In Pinnewela you will visit the elephant orphanage, where about eighty elephants are well looked after, which have been found throughout the country abandoned by their herd and brought there. You can watch milk feeding for baby jumbos and the daily bath in the nearby river. After this you will reach, the old royal city of Kandy, beautifully nestled between green hills. In Kandy, you will visit the temple of the tooth relic, which is the holiest shrine in Sri Lanka, where the tooth relic of Lord Buddha is highly venerated. In the evening you'll have the opportunity to see a dance performance, where you will see the famous Kandyan dances, as well as up-country and devil dances. Overnight stay in Kandy.",
      reversed: true
    },
    {
      day: "Day 3",
      title: "Dambulla - Sigiriya",
      image: dambullaImg,
      text: "After breakfast you will leave Kandy and will proceed to the north. Along the road you will see paddy fields, coconut groves, rubber and spice gardens and plantations. You will stop at one of the spice gardens and there you can see a lot of spice plants, bushes and plants cropping spices. After this visit you will ascend for a visit the Dambulla cave temple. This temple complex consists of five separate caverns with numerous statues of the Buddha and Hindu deities. In afternoon do a jeep safari at Minneriya national park. This park is consists of a mix of ever green forest and scrub areas. The central feature of the park being the Minnariya tank, which you can still observe the large number of elephant who come to bath and graze on nearby grass, as well as many more animals and vast flocks of birds. Overnight stay in Sigiriya.",
      reversed: false
    },
    {
      day: "Day 4",
      title: "Sigiriya - Polonnaruwa",
      image: sigiriyaImg,
      text: "After breakfast you will visit the Sigiriya rock. This impressive monolith which rises 200 meters out of the jungle has been transformed in the 5th Century by king Kashyapa into a fortress and became his capital. Here you will see the frescoes of the Sigiriya Maidens. In the afternoon you will drive to Polonnaruwa for the visit of the well preserved remains of the city which has been the capital in Sri Lanka from the 11th to the 13th Century. You will see the excavations: Temples, Dagobas, the royal palace, the royal library, ect. Overnight in Sigiriya.",
      reversed: true
    },
    {
      day: "Day 5",
      title: "Anuradhapura",
      image: anuradapuraImg,
      text: "After breakfast you leave to Anuradhapura in order to visit the ancient 1st capital of Sri Lanka. You will see some of the most famous as well as the tallest Dagoba of Sri Lanka, remains from palaces, temples, monasteries, ceremonial baths and the temple of the holy Bo-tree. Overnight stay in Anuradhapura.",
      reversed: false
    },
    {
      day: "Day 6, 7, 8 & 9",
      title: "Ayurveda resort – Maho",
      image: ayurvedaImg,
      text: "At the Ayurveda resort in Maho, you will have relaxing Ayurveda treatments by qualified Ayurvedic doctors and therapists for 4 days. During this period you they will serve you all three vegetarian meals and herbal snacks.",
      reversed: true
    },
    {
      day: "Day 10",
      title: "Colombo Airport",
      image: ultimateImg,
      text: "After breakfast you will leave for the airport or Colombo.",
      reversed: false
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
        }}>Round Tour with Ayurveda</h1>
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
        backgroundImage: `url(${ayurvedaImg})`, 
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

export default Ayurveda;
