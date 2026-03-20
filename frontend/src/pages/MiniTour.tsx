import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import kandyImage from '../assets/kandy.jpg';
import dambullaImage from '../assets/dambulla.jpg';
import sigiriyaImage from '../assets/sigiriya.jpg';
import anuradapuraImage from '../assets/anuradapura.jpg';
import Navbar from '../components/Navbar'; 
import { apiRequest } from '../utils/api';

const MiniTour: React.FC = () => {
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
          tourType: 'mini-tour',
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

  const handleScrollToForm = () => {
    document.getElementById('booking-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  const itinerary = [
    {
      day: "Day 1",
      title: "Colombo – Kandy",
      image: kandyImage,
      text: "Arrive at Bandaranaike International Airport and met by \"Visit SL Travels\" representatives. You leave Colombo in the morning and drive along busy highways into the interior of the island. In Pinnewela you will visit the elephant orphanage... You can watch milk feeding for baby jumbos and the daily bath in the nearby river. After this you will reach, the old royal city of Kandy. In Kandy, you will visit the temple of the tooth relic... In the evening you'll have the opportunity to see a dance performance. Overnight in Kandy.",
      reversed: false
    },
    {
      day: "Day 2",
      title: "Dambulla - Sigiriya",
      image: dambullaImage, 
      text: "After breakfast visit the world famous Botanical Garden in Peradeniya. The park dates back to 1371 under the reign of king Vikrama Bahu III... Here will find a very large variety of orchids, palms, bushes, as well as tropical plants and flowers. Then you will leave Kandy and proceed to the north... Stop at one of the spice gardens. After this visit you will ascend for a visit the Dambulla cave temple. This temple complex consists of five separate caverns with numerous statues. Overnight in Sigiriya.",
      reversed: true
    },
    {
      day: "Day 3",
      title: "Sigiriya - Polonnaruwa",
      image: sigiriyaImage,
      text: "After breakfast you will visit the Sigiriya rock. This impressive monolith which rises 200 meters out of the jungle has been transformed in the 5th Century by king Kashyapa into a fortress. Here you will see the frescoes of the Sigiriya Maidens. In the afternoon you will drive to Polonnaruwa for the visit of the well preserved remains of the city which has been the capital from the 11th to the 13th Century. Overnight in Sigiriya.",
      reversed: false
    },
    {
      day: "Day 4",
      title: "Anuradhapura - Colombo",
      image: anuradapuraImage,
      text: "After breakfast you leave to Anuradhapura in order to visit the ancient 1st capital of Sri Lanka. You will see some of the most famous as well as the tallest Dagoba of Sri Lanka, remains from palaces, temples, monasteries, ceremonial baths and the temple of the holy Bo-tree. After the visit of Anuradhapura you leave for Colombo, on the way you pass paddy fields and coconut plantations. You will reach Colombo or the airport in the evening.",
      reversed: true
    }
  ];

  return (
    <div style={{ backgroundColor: '#fff', minHeight: '100vh', fontFamily: '"Inter", sans-serif' }}>
      <Navbar variant="dark" />

      {/* Main Header */}
      <header style={{ textAlign: 'center', padding: '100px 20px 40px' }}>
        <p style={{ fontSize: '1rem', fontWeight: 500, color: '#333', marginBottom: '5px' }}>4 Days / 3 Nights</p>
        <h1 style={{ 
          fontSize: 'clamp(2.5rem, 5vw, 4rem)', 
          fontFamily: '"Playfair Display", serif', 
          fontWeight: 600, 
          margin: 0 
        }}>Classic Mini Tour</h1>
      </header>

      {/* Itinerary Sections */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px' }}>
        {itinerary.map((item, index) => (
          <section 
            key={index} 
            style={{ 
              display: 'flex', 
              flexDirection: item.reversed ? 'row-reverse' : 'row', 
              alignItems: 'center', 
              gap: '60px', 
              marginBottom: '100px',
              flexWrap: 'wrap'
            }}
          >
            {/* Image Container */}
            <div style={{ flex: '1', minWidth: '300px' }}>
              <motion.img 
                initial={{ opacity: 0, x: item.reversed ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                src={item.image} 
                alt={item.title} 
                style={{ 
                  width: '100%', 
                  height: 'auto', 
                  borderRadius: '30px', 
                  boxShadow: '0 20px 40px rgba(0,0,0,0.1)' 
                }}
              />
            </div>

            {/* Text Container */}
            <div style={{ flex: '1.2', minWidth: '300px' }}>
              <h2 style={{ 
                fontSize: '2.5rem', 
                fontFamily: '"Playfair Display", serif', 
                color: '#555', 
                marginBottom: '5px' 
              }}>{item.title}</h2>
              <p style={{ fontWeight: 600, color: '#888', marginBottom: '25px', fontSize: '0.9rem' }}>{item.day}</p>
              <p style={{ 
                lineHeight: '1.8', 
                color: '#666', 
                fontSize: '1rem', 
                marginBottom: '30px',
                textAlign: 'justify'
              }}>
                {item.text}
              </p>
              <button style={bookNowButtonStyle} onClick={handleScrollToForm}>
                Book Now
              </button>
            </div>
          </section>
        ))}
      </div>

      {/* Form Section with Beach Background */}
      <section id="booking-form" style={{
        position: 'relative',
        padding: '100px 20px',
        backgroundImage: 'url("https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2000")', // Beach background
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        display: 'flex',
        justifyContent: 'center'
      }}>
        {/* Overlay to darken background slightly if needed, though the original is bright */}
        <div style={{
          backgroundColor: 'rgba(255,255,255,0.95)',
          width: '100%',
          maxWidth: '650px',
          borderRadius: '20px',
          padding: '50px 40px',
          boxShadow: '0 30px 60px rgba(0,0,0,0.15)'
        }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '25px' }}>Tour Details</h2>
          
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
              <div>
                <label style={labelStyle}>Date of Arrival *</label>
                <input
                  type="date"
                  style={inputStyle}
                  value={form.arrivalDate}
                  onChange={updateField('arrivalDate')}
                  required
                />
              </div>
              <div>
                <label style={labelStyle}>Date of Departure *</label>
                <input
                  type="date"
                  style={inputStyle}
                  value={form.departureDate}
                  onChange={updateField('departureDate')}
                  required
                />
              </div>
            </div>

            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginTop: '10px' }}>Number of Guests</h3>
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

            <div style={{ marginTop: '10px' }}>
              <label style={labelStyle}>Accommodation Preferences</label>
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
                <ChevronDown size={18} style={{ position: 'absolute', right: '15px', top: '15px', color: '#888' }} />
              </div>
            </div>

            <textarea
              placeholder="Special Requests"
              style={{ ...inputStyle, height: '150px', resize: 'none' }}
              value={form.specialRequests}
              onChange={updateField('specialRequests')}
            />

            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginTop: '10px' }}>Personal Information</h3>
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
                <input type="checkbox" id="captcha" style={{ width: '20px', height: '20px' }} />
                <label htmlFor="captcha" style={{ fontSize: '0.9rem' }}>I'm not a robot</label>
              </div>
              <img src="https://www.gstatic.com/recaptcha/api2/logo_48.png" alt="recaptcha" width="30" />
            </div>

            {submitError && (
              <div style={{ color: '#b91c1c', fontSize: '0.9rem' }}>{submitError}</div>
            )}
            {submitSuccess && (
              <div style={{ color: '#166534', fontSize: '0.9rem' }}>{submitSuccess}</div>
            )}

            <button type="submit" style={submitButtonStyle} disabled={submitting}>
              {submitting ? 'Submitting...' : 'Design My Custom Tour'}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

// Reusable Styles
const bookNowButtonStyle: React.CSSProperties = {
  backgroundColor: '#7a6b5d', // The brown/taupe color from your image
  color: 'white',
  padding: '15px 40px',
  borderRadius: '50px',
  border: 'none',
  fontSize: '0.95rem',
  fontWeight: 600,
  cursor: 'pointer',
  boxShadow: '0 10px 20px rgba(122, 107, 93, 0.2)',
  transition: 'transform 0.2s'
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
  textAlign: 'center'
};

const labelStyle: React.CSSProperties = {
  display: 'block',
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
  boxSizing: 'border-box'
};

export default MiniTour;
