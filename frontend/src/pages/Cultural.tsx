import React, { useState } from 'react';
import { motion, type Variants } from 'framer-motion';
import { 
  MapPin, Calendar, ChevronDown, Users, Info, Send 
} from 'lucide-react';
import negomboImage from '../assets/negombo.jpg';
import pinnawalaImage from '../assets/pinnawala.jpg';
import dambullaImage from '../assets/dambulla.jpg';
import isurumuniyaImage from '../assets/isurumuniya.jpg';
import peradeniyaImage from '../assets/peradeniya.webp';
import Navbar from '../components/Navbar';
import { apiRequest } from '../utils/api'; 


// Animation Variants
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

// Replicated content from the images
const itineraryData = [
  {
    day: "Day 1",
    title: "Negombo",
    description: "Be met at airport by guide. Transfer to a beach hotel in Negambo , visit a fishing village or at leisure in the beach . Overnight stay in Negambo.",
    image: negomboImage,
    color: '#7a6b5d',
    reversed: false
  },
  {
    day: "Day 2",
    title: "Sigiriya - Pinnawela Elephant Orphanage",
    description: "After breakfast proceed to Sigiriya - en route take a short break at Pinnawela Elephant Orphanage. At this orphanage you will find elephants of all ages that have been abandoned and the unique feature is that you feed the baby elephants with milk bottles during the feeding times. After lunch visit the Rock Fortress of Sigiriya which tells a tale of power, intrigue and tragedy.",
    image: pinnawalaImage,
    color: '#7a6b5d',
    reversed: true
  },
  {
    day: "Day 3",
    title: "Anuradhapura - Isurumuniya Rock Temple",
    description: "Leave for Anuradhapura after breakfast. First Capital of Sri Lanka in the 3 rd Century BC. Declared a World Heritage Site. Visit Sri Maha Bodhi, the oldest historically documented tree in the world, the Brazen Palace , Dagobas, Ruwanwelisaya, Abeygiri & Jetawana Monasteries, finely preserved rock-cut statues of Lord Buddha and ruins of palaces, Isurumuniya rock temple. overnight at Anuradhapura.",
    image: isurumuniyaImage,
    color: '#7a6b5d',
    reversed: false
  },
  {
    day: "Day 4",
    title: "Kandy - Dambulla",
    description: "Leave for Kandy via Dambulla. See the Golden Rock, a cave temple which dates back to the 1 st Century.BC. From Dambulla drive to Matale to visit a spice garden. In Kandy , visit the Temple of the Tooth. View a cultural dance. Dinner and overnight at Kandy.",
    image: dambullaImage, // Inside Dambulla cave temple
    color: '#7a6b5d',
    reversed: true
  },
  {
    day: "Day 5",
    title: "Peradeniya Botanical Gardens",
    description: "After early breakfast, Leave for Colombo or the airport. Enroute, visit the Peradeniya Botanical Gardens.",
    image: peradeniyaImage, // Botanical gardens pond
    color: '#7a6b5d',
    reversed: false
  }
];

const Cultural = () => {
  const [form, setForm] = useState({
    arrivalDate: '',
    departureDate: '',
    adults: '',
    children: '',
    childrenBelow: '',
    rooms: '',
    accommodation: '2-3 Star Hotels',
    specialRequests: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    country: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [submitSuccess, setSubmitSuccess] = useState('');

  const updateField = (field: keyof typeof form) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitError('');
    setSubmitSuccess('');
    setSubmitting(true);

    const travelDates = form.arrivalDate && form.departureDate
      ? `${form.arrivalDate} to ${form.departureDate}`
      : (form.arrivalDate || form.departureDate || '');

    const guestsCount = `Adults: ${form.adults || '0'}, Children 06-11: ${form.children || '0'}, Children <05: ${form.childrenBelow || '0'}`;

    const interestsParts = [];
    if (form.specialRequests) interestsParts.push(form.specialRequests);
    if (form.country) interestsParts.push(`Country: ${form.country}`);
    const interests = interestsParts.join(' | ') || undefined;

    try {
      await apiRequest('/requests', {
        method: 'POST',
        body: JSON.stringify({
          tourType: 'cultural-heritage',
          travelDates,
          guestsCount,
          roomsRequirements: form.rooms,
          accommodationPreferences: form.accommodation,
          interests,
          firstName: form.firstName,
          lastName: form.lastName,
          email: form.email,
          phone: form.phone
        }),
      });

      setSubmitSuccess('Request submitted successfully. We will contact you soon.');
      setForm({
        arrivalDate: '',
        departureDate: '',
        adults: '',
        children: '',
        childrenBelow: '',
        rooms: '',
        accommodation: '2-3 Star Hotels',
        specialRequests: '',
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        country: ''
      });
    } catch (err) {
      setSubmitError((err as Error).message);
    } finally {
      setSubmitting(false);
    }
  };

  // Use a unique ID for the form for smooth scrolling
  const FORM_ID = "tour-booking-form";

  const handleScrollToForm = () => {
    const element = document.getElementById(FORM_ID);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div style={{ backgroundColor: '#fff', overflowX: 'hidden', fontFamily: '"Inter", sans-serif' }}>
      <Navbar variant="dark" />

      {/* Main Header with framer-motion animations */}
      <header style={{ textAlign: 'center', padding: '100px 20px 40px' }}>
        <motion.p
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
          style={{ fontSize: '1rem', fontWeight: 500, color: '#333', marginBottom: '5px' }}
        >
          5 Days / 4 Nights
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          style={{ 
            fontSize: 'clamp(2.5rem, 5vw, 4rem)', 
            fontFamily: '"Playfair Display", serif', 
            fontWeight: 600, 
            margin: 0 
          }}
        >
          Cultural Heritage Tour
        </motion.h1>
      </header>

      {/* Itinerary Sections */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px' }}>
        <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true }}>
          {itineraryData.map((dayItem, index) => {
            const isReversed = dayItem.reversed;

            return (
              <motion.section 
                key={index} 
                variants={fadeUp}
                style={{ 
                  display: 'flex', 
                  flexDirection: isReversed ? 'row-reverse' : 'row', 
                  alignItems: 'center', 
                  gap: '60px', 
                  marginBottom: '100px',
                  flexWrap: 'wrap'
                }}
              >
                {/* Image Container */}
                <div style={{ flex: '1', minWidth: '300px' }}>
                  <img 
                    src={dayItem.image} 
                    alt={dayItem.title} 
                    style={{ 
                      width: '100%', 
                      height: 'auto', 
                      borderRadius: '30px', 
                      boxShadow: '0 20px 40px rgba(0,0,0,0.1)' 
                    }}
                  />
                </div>

                {/* Text Container */}
                <div style={{ flex: '1.2', minWidth: '300px', paddingTop: '1rem' }}>
                  <h2 style={{ 
                    fontSize: '2.5rem', 
                    fontFamily: '"Playfair Display", serif', 
                    color: '#555', 
                    marginBottom: '5px' 
                  }}>{dayItem.title}</h2>
                  <p style={{ fontWeight: 600, color: '#888', marginBottom: '25px', fontSize: '0.9rem' }}>{dayItem.day}</p>
                  <p style={{ 
                    lineHeight: '1.8', 
                    color: '#666', 
                    fontSize: '1rem', 
                    marginBottom: '30px',
                    textAlign: 'justify'
                  }}>
                    {dayItem.description}
                  </p>
                  <button 
                    onClick={handleScrollToForm}
                    style={bookNowButtonStyle}>
                    Book Now
                  </button>
                </div>
              </motion.section>
            );
          })}
        </motion.div>
      </div>

      {/* Form Section with Beach Background as requested in image_7.png */}
      <section 
        id={FORM_ID}
        style={{
        position: 'relative',
        padding: '100px 20px',
        // Example fixed beach background image from Unsplash, as the exact file from your local assets isn't accessible.
        backgroundImage: 'url("https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2000")', 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        display: 'flex',
        justifyContent: 'center'
      }}>
        {/* Overlay card for form content, replicating the structure of image_7.png */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          style={{
            backgroundColor: 'rgba(255,255,255,0.95)',
            width: '100%',
            maxWidth: '650px',
            borderRadius: '20px',
            padding: '50px 40px',
            boxShadow: '0 30px 60px rgba(0,0,0,0.15)'
          }}
        >
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '25px' }}>Tour Details</h2>
          
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {/* Arrival/Departure dates */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
              <div>
                <label style={labelStyle}><Calendar size={14} style={{ marginRight: '8px' }} />Date of Arrival *</label>
                <input
                  type="date"
                  style={inputStyle}
                  value={form.arrivalDate}
                  onChange={updateField('arrivalDate')}
                  required
                />
              </div>
              <div>
                <label style={labelStyle}><Calendar size={14} style={{ marginRight: '8px' }} />Date of Departure *</label>
                <input
                  type="date"
                  style={inputStyle}
                  value={form.departureDate}
                  onChange={updateField('departureDate')}
                  required
                />
              </div>
            </div>

            {/* Guests */}
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginTop: '10px' }}><Users size={18} style={{ marginRight: '8px' }} />Number of Guests</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <input
                type="text"
                placeholder="Adults *"
                style={inputStyle}
                value={form.adults}
                onChange={updateField('adults')}
                required
              />
              <input
                type="text"
                placeholder="Children (06-11 Years)"
                style={inputStyle}
                value={form.children}
                onChange={updateField('children')}
              />
              <input
                type="text"
                placeholder="Children (below 05 Years)"
                style={inputStyle}
                value={form.childrenBelow}
                onChange={updateField('childrenBelow')}
              />
              <input
                type="text"
                placeholder="Number of Rooms Required *"
                style={inputStyle}
                value={form.rooms}
                onChange={updateField('rooms')}
                required
              />
            </div>

            {/* Accommodation */}
            <div style={{ marginTop: '10px' }}>
              <label style={labelStyle}><MapPin size={14} style={{ marginRight: '8px' }} />Accommodation Preferences</label>
              <div style={{ position: 'relative' }}>
                <select
                  style={{ ...inputStyle, appearance: 'none' }}
                  value={form.accommodation}
                  onChange={updateField('accommodation')}
                >
                  <option>Budget Guesthouses</option>
                  <option>2-3 Star Hotels</option>
                  <option>4-5 Star Hotels</option>
                  <option>Luxury Resorts / Villas</option>
                </select>
                <ChevronDown size={18} style={{ position: 'absolute', right: '15px', top: '15px', color: '#888', pointerEvents: 'none' }} />
              </div>
            </div>

            {/* Special Requests */}
            <textarea
              placeholder="Special Requests"
              style={{ ...inputStyle, height: '150px', resize: 'none' }}
              value={form.specialRequests}
              onChange={updateField('specialRequests')}
            />

            {/* Personal Information */}
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginTop: '10px' }}><Info size={18} style={{ marginRight: '8px' }} />Personal Information</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <input
                type="text"
                placeholder="First Name *"
                style={inputStyle}
                value={form.firstName}
                onChange={updateField('firstName')}
                required
              />
              <input
                type="text"
                placeholder="Last Name *"
                style={inputStyle}
                value={form.lastName}
                onChange={updateField('lastName')}
                required
              />
              <input
                type="email"
                placeholder="Email *"
                style={inputStyle}
                value={form.email}
                onChange={updateField('email')}
                required
              />
              <input
                type="text"
                placeholder="Phone / WhatsApp"
                style={inputStyle}
                value={form.phone}
                onChange={updateField('phone')}
              />
              <input
                type="text"
                placeholder="Country"
                style={inputStyle}
                value={form.country}
                onChange={updateField('country')}
              />
            </div>

            {/* Captcha Placeholder */}
            <div style={{ 
              border: '1px solid #ddd', 
              padding: '15px', 
              borderRadius: '5px', 
              backgroundColor: '#f9f9f9',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <input type="checkbox" id="captcha" style={{ width: '20px', height: '20px', cursor: 'pointer' }} />
                <label htmlFor="captcha" style={{ fontSize: '0.9rem', color: '#444' }}>I'm not a robot</label>
              </div>
              <img src="https://www.gstatic.com/recaptcha/api2/logo_48.png" alt="recaptcha" width="30" />
            </div>

            {/* Submit button on beach background form as requested in image_7.png */}
            {submitError && (
              <div style={{ color: '#b91c1c', fontSize: '0.9rem' }}>{submitError}</div>
            )}
            {submitSuccess && (
              <div style={{ color: '#166534', fontSize: '0.9rem' }}>{submitSuccess}</div>
            )}

            <motion.button 
              type="submit" 
              whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
              style={submitButtonStyle}
              disabled={submitting}
            >
              {submitting ? 'Submitting...' : 'Design My Custom Tour'}
              <Send size={18} style={{ marginLeft: '10px' }} />
            </motion.button>
          </form>
        </motion.div>
      </section>
    </div>
  );
};

// Internal styles replicated from MiniTour.tsx context
const bookNowButtonStyle: React.CSSProperties = {
  backgroundColor: '#7a6b5d', // Specific brown color from the images
  color: 'white',
  padding: '15px 40px',
  borderRadius: '50px',
  border: 'none',
  fontSize: '0.95rem',
  fontWeight: 600,
  cursor: 'pointer',
  boxShadow: '0 10px 20px rgba(122, 107, 93, 0.2)',
  transition: 'transform 0.2s',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '10px'
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
  marginTop: '10px',
  width: '100%',
  textAlign: 'center',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: '0 10px 20px rgba(122, 107, 93, 0.2)',
};

const labelStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  fontSize: '0.85rem',
  fontWeight: 700,
  marginBottom: '8px',
  color: '#333'
};

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '12px 15px',
  border: '1px solid #ddd',
  borderRadius: '8px',
  fontSize: '0.95rem',
  backgroundColor: '#fff',
  boxSizing: 'border-box',
  outline: 'none'
};

export default Cultural;

