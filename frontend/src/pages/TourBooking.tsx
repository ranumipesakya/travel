import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import Navbar from '../components/Navbar';
import { apiRequest } from '../utils/api';

const TourBooking: React.FC = () => {
  const [searchParams] = useSearchParams();
  const initialTour = searchParams.get('tour') || 'General Inquiry';
  
  const [formData, setFormData] = useState({
    arrival: '',
    departure: '',
    adults: '',
    children11: '',
    children5: '',
    rooms: '',
    accommodation: 'Budget Guesthouses',
    requests: '',
    name: '',
    email: '',
    phone: '',
    country: ''
  });
  const [status, setStatus] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Submitting...');
    try {
      const travelDates = `${formData.arrival} to ${formData.departure}`;
      const guestsCount = `Adults: ${formData.adults}, Children 06-11: ${formData.children11}, Children <05: ${formData.children5}`;
      const nameParts = formData.name.split(' ');
      const firstName = nameParts[0] || 'Unknown';
      const lastName = nameParts.slice(1).join(' ') || 'Unknown';
      
      const payload = {
        travelDates,
        guestsCount,
        roomsRequirements: formData.rooms || 'Not specified',
        accommodationPreferences: formData.accommodation,
        interests: `Tour: ${initialTour} | Country: ${formData.country} | Custom Requests: ${formData.requests}`,
        firstName,
        lastName,
        email: formData.email,
        phone: formData.phone,
        tourType: 'special-interest'
      };

      await apiRequest('/requests', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      
      setStatus('Success! We will contact you soon.');
      setFormData({
        arrival: '', departure: '', adults: '', children11: '', children5: '', rooms: '', accommodation: 'Budget Guesthouses', requests: '', name: '', email: '', phone: '', country: ''
      });
    } catch (err: any) {
      setStatus('Failed to submit: ' + err.message);
    }
  };

  return (
    <div style={{ backgroundColor: '#f9fafb', minHeight: '100vh', fontFamily: '"Inter", sans-serif' }}>
      <Navbar variant="dark" />

      {/* spacer for navbar */}
      <div style={{ height: '100px', backgroundColor: '#0a3a40' }}></div>

      {/* Tour Details Form Section */}
      <section style={{
        position: 'relative',
        padding: '60px 20px 100px',
        backgroundColor: '#eef2f3', 
        display: 'flex',
        justifyContent: 'center'
      }}>
        <div style={{
          backgroundColor: '#fff',
          width: '100%',
          maxWidth: '680px',
          borderRadius: '20px',
          padding: '50px 45px',
          boxShadow: '0 30px 60px rgba(0,0,0,0.08)'
        }}>
          <h1 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '20px', color: '#1a1a1a', textAlign: 'center', fontFamily: '"Playfair Display", serif' }}>Design Your Tour</h1>
          
          <div style={{ padding: '15px', backgroundColor: '#f0fdf4', borderLeft: '4px solid #16a34a', marginBottom: '30px', borderRadius: '4px' }}>
            <p style={{ margin: 0, fontSize: '0.95rem', color: '#166534', fontWeight: 600 }}>You are inquiring about:</p>
            <p style={{ margin: '5px 0 0 0', fontSize: '1.2rem', color: '#14532d', fontWeight: 700 }}>{initialTour}</p>
          </div>

          {status && (
            <div style={{ padding: '15px', backgroundColor: status.includes('Success') ? '#dcfce7' : '#fee2e2', color: status.includes('Success') ? '#166534' : '#991b1b', borderRadius: '8px', marginBottom: '20px', fontWeight: 600 }}>
              {status}
            </div>
          )}
          
          <form style={{ display: 'flex', flexDirection: 'column', gap: '22px' }} onSubmit={handleSubmit}>
            {/* Arrival/Departure */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
              <div>
                <label style={labelStyle}>Date of Arrival *</label>
                <input type="text" placeholder="mm/dd/yyyy" style={inputStyle} value={formData.arrival} onChange={e => setFormData({...formData, arrival: e.target.value})} required />
              </div>
              <div>
                <label style={labelStyle}>Date of Departure *</label>
                <input type="text" placeholder="mm/dd/yyyy" style={inputStyle} value={formData.departure} onChange={e => setFormData({...formData, departure: e.target.value})} required />
              </div>
            </div>

            {/* Guests Section */}
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginTop: '10px', color: '#333' }}>Number of Guests</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <input type="text" placeholder="Adults *" style={inputStyle} value={formData.adults} onChange={e => setFormData({...formData, adults: e.target.value})} required />
              <input type="text" placeholder="Children (06 – 11 Years)" style={inputStyle} value={formData.children11} onChange={e => setFormData({...formData, children11: e.target.value})} />
              <input type="text" placeholder="Children (below 05 Years)" style={inputStyle} value={formData.children5} onChange={e => setFormData({...formData, children5: e.target.value})} />
              <input type="text" placeholder="Number of Rooms Required *" style={inputStyle} value={formData.rooms} onChange={e => setFormData({...formData, rooms: e.target.value})} required />
            </div>

            {/* Accommodation */}
            <div style={{ marginTop: '10px' }}>
              <label style={labelStyle}>Accommodation Preferences</label>
              <div style={{ position: 'relative' }}>
                <select style={{ ...inputStyle, appearance: 'none' }} value={formData.accommodation} onChange={e => setFormData({...formData, accommodation: e.target.value})}>
                  <option>Budget Guesthouses</option>
                  <option>2–3 Star Hotels</option>
                  <option>4–5 Star Hotels</option>
                  <option>Luxury Resorts / Villas</option>
                </select>
                <ChevronDown size={18} style={{ position: 'absolute', right: '15px', top: '15px', color: '#888', pointerEvents: 'none' }} />
              </div>
            </div>

            {/* Special Requests */}
            <textarea placeholder="Special Requests" style={{ ...inputStyle, height: '140px', resize: 'none' }} value={formData.requests} onChange={e => setFormData({...formData, requests: e.target.value})} />

            {/* Personal Info */}
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginTop: '10px', color: '#333' }}>Personal Information</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <input type="text" placeholder="Name *" style={inputStyle} value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} required />
              <input type="email" placeholder="Email *" style={inputStyle} value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} required />
              <input type="text" placeholder="Phone / WhatsApp *" style={inputStyle} value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} required />
              <input type="text" placeholder="Country *" style={inputStyle} value={formData.country} onChange={e => setFormData({...formData, country: e.target.value})} required />
            </div>

            {/* Submit Button */}
            <button type="submit" style={submitButtonStyle}>
              Confirm & Book
            </button>
          </form>
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

export default TourBooking;

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
  width: '100%',
  transition: 'transform 0.2s ease'
};
