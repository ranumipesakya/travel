import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Calendar, Users, BedDouble, Building, 
  Heart, Mail, Phone, Clock, Search, Map, MessageSquare
} from 'lucide-react';
import AdminNavbar from '../components/AdminNavbar';
import { apiRequest, clearAdminToken, getAdminToken } from '../utils/api';

type TourRequest = {
  _id: string;
  tourType?: 'mini-tour' | 'cultural-heritage' | 'general' | 'special-interest' | 'scenic' | 'ayurveda' | 'ultimate';
  travelDates: string;
  guestsCount: string;
  roomsRequirements: string;
  accommodationPreferences: string;
  interests?: string;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  status?: 'pending' | 'accepted' | 'rejected';
  createdAt: string;
};

type ContactMessage = {
  _id: string;
  name: string;
  email: string;
  phone: string;
  country: string;
  message: string;
  status: 'new' | 'read' | 'replied';
  createdAt: string;
};

const AdminRequests = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'tours' | 'contact'>('tours');
  const [requests, setRequests] = useState<TourRequest[]>([]);
  const [contactMessages, setContactMessages] = useState<ContactMessage[]>([]);
  
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const token = getAdminToken();

  useEffect(() => {
    if (!token) {
      navigate('/admin');
      return;
    }

    setLoading(true);

    const fetchTours = apiRequest('/requests', {
      headers: { Authorization: `Bearer ${token}` },
    }).then((data) => setRequests(data));

    const fetchContacts = apiRequest('/contact', {
      headers: { Authorization: `Bearer ${token}` },
    }).then((res: any) => setContactMessages(res.data || []));

    Promise.all([fetchTours, fetchContacts])
      .catch((err) => {
        setError((err as Error).message);
        if ((err as Error).message.toLowerCase().includes('not authorized')) {
          clearAdminToken();
          navigate('/admin');
        }
      })
      .finally(() => setLoading(false));
  }, [navigate, token]);

  if (!token) return null;

  const filteredRequests = requests.filter(req => 
    `${req.firstName} ${req.lastName} ${req.email}`.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredContacts = contactMessages.filter(msg =>
    `${msg.name} ${msg.email}`.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const updateStatus = async (id: string, status: 'accepted' | 'rejected') => {
    try {
      const updated = await apiRequest(`/requests/${id}/status`, {
        method: 'PATCH',
        headers: { Authorization: `Bearer ${token}` },
        body: JSON.stringify({ status }),
      });
      setRequests((prev) => prev.map((r) => (r._id === id ? updated : r)));
    } catch (err) {
      setError((err as Error).message);
    }
  };

  const updateContactStatus = async (id: string, status: 'read' | 'replied') => {
    try {
      const updatedData = await apiRequest(`/contact/${id}/status`, {
        method: 'PATCH',
        headers: { Authorization: `Bearer ${token}` },
        body: JSON.stringify({ status }),
      });
      const updatedMsg = updatedData.data;
      setContactMessages((prev) => prev.map((r) => (r._id === id ? updatedMsg : r)));
    } catch (err) {
      setError((err as Error).message);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: 'spring' as const, stiffness: 300, damping: 24 } }
  };

  return (
    <div className="page-wrapper" style={{ backgroundColor: 'var(--bg-color)', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <AdminNavbar />
      
      <section className="py-6" style={{ flexGrow: 1, paddingTop: '7rem' }}>
        <div className="container">
          {/* Header Section */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{ marginBottom: '2rem', textAlign: 'center' }}
          >
            <h2 className="section-title" style={{ marginBottom: '1rem', fontSize: '3rem' }}>
              Admin Dashboard
            </h2>
            <p className="section-subtitle" style={{ margin: '0 auto 2rem', fontSize: '1.2rem' }}>
              Review and manage tour requests and contact messages from clients.
            </p>

            {/* Tabs */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '2rem' }}>
              <button 
                onClick={() => setActiveTab('tours')}
                style={{
                  padding: '0.8rem 2rem', border: 'none', borderRadius: '50px',
                  fontWeight: 600, fontSize: '1rem', cursor: 'pointer',
                  background: activeTab === 'tours' ? 'var(--primary)' : '#e5e7eb',
                  color: activeTab === 'tours' ? '#fff' : 'var(--text-muted)',
                  transition: 'all 0.3s ease', display: 'flex', alignItems: 'center', gap: '0.5rem'
                }}
              >
                <Map size={18} /> Tour Requests
              </button>
              <button 
                onClick={() => setActiveTab('contact')}
                style={{
                  padding: '0.8rem 2rem', border: 'none', borderRadius: '50px',
                  fontWeight: 600, fontSize: '1rem', cursor: 'pointer',
                  background: activeTab === 'contact' ? 'var(--primary)' : '#e5e7eb',
                  color: activeTab === 'contact' ? '#fff' : 'var(--text-muted)',
                  transition: 'all 0.3s ease', display: 'flex', alignItems: 'center', gap: '0.5rem'
                }}
              >
                <MessageSquare size={18} /> Contact Messages
              </button>
            </div>

            {/* Search Bar */}
            <div style={{ 
              maxWidth: '500px', 
              margin: '0 auto', 
              position: 'relative',
              boxShadow: 'var(--shadow-md)',
              borderRadius: '50px',
              overflow: 'hidden'
            }}>
              <Search style={{ 
                position: 'absolute', 
                left: '20px', 
                top: '50%', 
                transform: 'translateY(-50%)',
                color: 'var(--text-muted)'
              }} size={20} />
              <input 
                type="text" 
                placeholder={activeTab === 'tours' ? "Search tour requests..." : "Search contact messages..."} 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{
                  width: '100%',
                  padding: '1rem 1rem 1rem 3.5rem',
                  border: 'none',
                  outline: 'none',
                  fontSize: '1rem',
                  fontFamily: 'inherit',
                  color: 'var(--text-main)'
                }}
              />
            </div>
          </motion.div>

          {loading && (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '20vh' }}>
              <motion.div 
                animate={{ rotate: 360 }} 
                transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
              >
                <Map size={40} color="var(--accent)" />
              </motion.div>
            </div>
          )}

          {error && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              style={{ 
                background: '#fee2e2', 
                color: '#991b1b', 
                padding: '1rem 2rem', 
                borderRadius: '8px', 
                textAlign: 'center',
                margin: '2rem auto',
                maxWidth: '600px',
                border: '1px solid #f87171'
              }}
            >
              {error}
            </motion.div>
          )}

          {/* Render Tour Requests */}
          {activeTab === 'tours' && !loading && !error && filteredRequests.length === 0 && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              style={{ textAlign: 'center', padding: '4rem 0', color: 'var(--text-muted)' }}
            >
              <Map size={64} style={{ opacity: 0.2, margin: '0 auto 1rem' }} />
              <p style={{ fontSize: '1.2rem' }}>No requests found matching your search.</p>
            </motion.div>
          )}

          {activeTab === 'tours' && !loading && filteredRequests.length > 0 && (
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate="show"
              style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', 
                gap: '2rem' 
              }}
            >
              {filteredRequests.map((r) => (
                <motion.div 
                  key={r._id} 
                  variants={itemVariants}
                  whileHover={{ y: -5, boxShadow: 'var(--shadow-xl)' }}
                  style={{
                    background: 'var(--surface)',
                    borderRadius: '16px',
                    padding: '2rem',
                    boxShadow: 'var(--shadow-lg)',
                    border: '1px solid var(--border-color)',
                    position: 'relative',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1.5rem'
                  }}
                >
                  <div style={{ position: 'absolute', top: 0, left: 0, width: '4px', height: '100%', backgroundColor: 'var(--accent)' }} />
                  
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', borderBottom: '1px solid var(--border-color)', paddingBottom: '1rem' }}>
                    <div>
                      <h3 style={{ margin: 0, fontSize: '1.5rem', color: 'var(--primary)', fontFamily: '"Playfair Display", serif' }}>
                        {r.firstName} {r.lastName}
                      </h3>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '0.5rem' }}>
                        <Clock size={14} />
                        <span>{new Date(r.createdAt).toLocaleString()}</span>
                      </div>
                    </div>
                    <span style={{
                      fontSize: '0.7rem',
                      textTransform: 'uppercase',
                      letterSpacing: '1px',
                      padding: '0.35rem 0.6rem',
                      borderRadius: '999px',
                      background: r.status === 'accepted' ? 'rgba(34,197,94,0.15)'
                        : r.status === 'rejected' ? 'rgba(239,68,68,0.15)'
                        : 'rgba(212,175,55,0.15)',
                      color: r.status === 'accepted' ? '#166534'
                        : r.status === 'rejected' ? '#991b1b'
                        : 'var(--accent)'
                    }}>
                      {r.status || 'pending'}
                    </span>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', flexGrow: 1 }}>
                    <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.5px', color: 'var(--text-muted)' }}>
                      Tour: <span style={{ color: 'var(--text-main)', fontWeight: 600 }}>{r.tourType || 'general'}</span>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        <div style={{ backgroundColor: 'rgba(212, 175, 55, 0.1)', padding: '0.5rem', borderRadius: '8px', color: 'var(--accent)' }}><Calendar size={18} /></div>
                        <div>
                          <p style={{ margin: 0, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.5px', color: 'var(--text-muted)' }}>Dates</p>
                          <p style={{ margin: 0, fontWeight: 500, fontSize: '0.9rem', color: 'var(--text-main)' }}>{r.travelDates}</p>
                        </div>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        <div style={{ backgroundColor: 'rgba(212, 175, 55, 0.1)', padding: '0.5rem', borderRadius: '8px', color: 'var(--accent)' }}><Users size={18} /></div>
                        <div>
                          <p style={{ margin: 0, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.5px', color: 'var(--text-muted)' }}>Guests</p>
                          <p style={{ margin: 0, fontWeight: 500, fontSize: '0.9rem', color: 'var(--text-main)' }}>{r.guestsCount}</p>
                        </div>
                      </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        <div style={{ backgroundColor: 'rgba(10, 58, 64, 0.1)', padding: '0.5rem', borderRadius: '8px', color: 'var(--primary)' }}><BedDouble size={18} /></div>
                        <div>
                          <p style={{ margin: 0, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.5px', color: 'var(--text-muted)' }}>Rooms</p>
                          <p style={{ margin: 0, fontWeight: 500, fontSize: '0.9rem', color: 'var(--text-main)' }}>{r.roomsRequirements}</p>
                        </div>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        <div style={{ backgroundColor: 'rgba(10, 58, 64, 0.1)', padding: '0.5rem', borderRadius: '8px', color: 'var(--primary)' }}><Building size={18} /></div>
                        <div>
                          <p style={{ margin: 0, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.5px', color: 'var(--text-muted)' }}>Type</p>
                          <p style={{ margin: 0, fontWeight: 500, fontSize: '0.9rem', color: 'var(--text-main)' }}>{r.accommodationPreferences}</p>
                        </div>
                      </div>
                    </div>

                    {r.interests && (
                      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', backgroundColor: 'var(--bg-color)', padding: '0.75rem', borderRadius: '8px', marginTop: '0.5rem' }}>
                        <Heart size={16} color="var(--accent)" style={{ marginTop: '0.1rem', flexShrink: 0 }} />
                        <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--text-main)', fontStyle: 'italic', lineHeight: 1.4 }}>"{r.interests}"</p>
                      </div>
                    )}
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', borderTop: '1px solid var(--border-color)', paddingTop: '1rem', marginTop: 'auto' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)' }}>
                      <Mail size={14} />
                      <a href={`mailto:${r.email}`} style={{ fontSize: '0.85rem', color: 'var(--primary)', textDecoration: 'none' }}>{r.email}</a>
                    </div>
                    {r.phone && (
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)' }}>
                        <Phone size={14} />
                        <a href={`tel:${r.phone}`} style={{ fontSize: '0.85rem', color: 'var(--primary)', textDecoration: 'none' }}>{r.phone}</a>
                      </div>
                    )}
                    <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.75rem' }}>
                      <button
                        onClick={() => updateStatus(r._id, 'accepted')}
                        disabled={r.status === 'accepted'}
                        style={{
                          flex: 1,
                          padding: '0.6rem 0.75rem',
                          borderRadius: '8px',
                          border: '1px solid #16a34a',
                          background: r.status === 'accepted' ? '#dcfce7' : '#16a34a',
                          color: r.status === 'accepted' ? '#166534' : '#fff',
                          fontWeight: 600,
                          cursor: r.status === 'accepted' ? 'default' : 'pointer'
                        }}
                      >
                        Accept
                      </button>
                      <button
                        onClick={() => updateStatus(r._id, 'rejected')}
                        disabled={r.status === 'rejected'}
                        style={{
                          flex: 1,
                          padding: '0.6rem 0.75rem',
                          borderRadius: '8px',
                          border: '1px solid #dc2626',
                          background: r.status === 'rejected' ? '#fee2e2' : '#dc2626',
                          color: r.status === 'rejected' ? '#991b1b' : '#fff',
                          fontWeight: 600,
                          cursor: r.status === 'rejected' ? 'default' : 'pointer'
                        }}
                      >
                        Reject
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* Render Contact Messages */}
          {activeTab === 'contact' && !loading && !error && filteredContacts.length === 0 && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              style={{ textAlign: 'center', padding: '4rem 0', color: 'var(--text-muted)' }}
            >
              <MessageSquare size={64} style={{ opacity: 0.2, margin: '0 auto 1rem' }} />
              <p style={{ fontSize: '1.2rem' }}>No messages found matching your search.</p>
            </motion.div>
          )}

          {activeTab === 'contact' && !loading && filteredContacts.length > 0 && (
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate="show"
              style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', 
                gap: '2rem' 
              }}
            >
              {filteredContacts.map((c) => (
                <motion.div 
                  key={c._id} 
                  variants={itemVariants}
                  whileHover={{ y: -5, boxShadow: 'var(--shadow-xl)' }}
                  style={{
                    background: 'var(--surface)',
                    borderRadius: '16px',
                    padding: '2rem',
                    boxShadow: 'var(--shadow-lg)',
                    border: '1px solid var(--border-color)',
                    position: 'relative',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1.5rem'
                  }}
                >
                  <div style={{ position: 'absolute', top: 0, left: 0, width: '4px', height: '100%', backgroundColor: 'var(--primary)' }} />
                  
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', borderBottom: '1px solid var(--border-color)', paddingBottom: '1rem' }}>
                    <div>
                      <h3 style={{ margin: 0, fontSize: '1.5rem', color: 'var(--primary)', fontFamily: '"Playfair Display", serif' }}>
                        {c.name}
                      </h3>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '0.5rem' }}>
                        <Clock size={14} />
                        <span>{new Date(c.createdAt).toLocaleString()}</span>
                      </div>
                    </div>
                    <span style={{
                      fontSize: '0.7rem',
                      textTransform: 'uppercase',
                      letterSpacing: '1px',
                      padding: '0.35rem 0.6rem',
                      borderRadius: '999px',
                      background: c.status === 'replied' ? 'rgba(34,197,94,0.15)'
                        : c.status === 'read' ? 'rgba(37,99,235,0.15)'
                        : 'rgba(212,175,55,0.15)',
                      color: c.status === 'replied' ? '#166534'
                        : c.status === 'read' ? '#1e40af'
                        : 'var(--accent)'
                    }}>
                      {c.status || 'new'}
                    </span>
                  </div>

                  <div style={{ flexGrow: 1 }}>
                    <p style={{
                      margin: 0, fontSize: '0.95rem', color: 'var(--text-main)', 
                      lineHeight: 1.6, background: '#f9fafb', padding: '1rem', 
                      borderRadius: '8px', borderLeft: '3px solid rgba(0,0,0,0.1)'
                    }}>
                      "{c.message}"
                    </p>
                    
                    {c.country && (
                      <p style={{ marginTop: '1rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                        <strong>Country:</strong> {c.country}
                      </p>
                    )}
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', borderTop: '1px solid var(--border-color)', paddingTop: '1rem', marginTop: 'auto' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)' }}>
                      <Mail size={14} />
                      <a href={`mailto:${c.email}`} style={{ fontSize: '0.85rem', color: 'var(--primary)', textDecoration: 'none' }}>{c.email}</a>
                    </div>
                    {c.phone && (
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)' }}>
                        <Phone size={14} />
                        <a href={`tel:${c.phone}`} style={{ fontSize: '0.85rem', color: 'var(--primary)', textDecoration: 'none' }}>{c.phone}</a>
                      </div>
                    )}
                    <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.75rem' }}>
                      <button
                        onClick={() => updateContactStatus(c._id, 'read')}
                        disabled={c.status === 'read' || c.status === 'replied'}
                        style={{
                          flex: 1,
                          padding: '0.6rem 0.75rem',
                          borderRadius: '8px',
                          border: '1px solid #3b82f6',
                          background: c.status === 'read' || c.status === 'replied' ? '#eff6ff' : '#3b82f6',
                          color: c.status === 'read' || c.status === 'replied' ? '#1d4ed8' : '#fff',
                          fontWeight: 600,
                          cursor: c.status === 'read' || c.status === 'replied' ? 'default' : 'pointer'
                        }}
                      >
                        Mark Read
                      </button>
                      <button
                        onClick={() => updateContactStatus(c._id, 'replied')}
                        disabled={c.status === 'replied'}
                        style={{
                          flex: 1,
                          padding: '0.6rem 0.75rem',
                          borderRadius: '8px',
                          border: '1px solid #16a34a',
                          background: c.status === 'replied' ? '#dcfce7' : '#16a34a',
                          color: c.status === 'replied' ? '#166534' : '#fff',
                          fontWeight: 600,
                          cursor: c.status === 'replied' ? 'default' : 'pointer'
                        }}
                      >
                        Replied
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

        </div>
      </section>
    </div>
  );
};

export default AdminRequests;
