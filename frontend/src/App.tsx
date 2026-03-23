import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import TailorMade from './pages/Tailor-Made';
import DestinationPage from './pages/destinations';
import MiniTour from './pages/MiniTour';
import Cultural from './pages/Cultural';
import Best from './pages/Best';
import Scenic from './pages/Scenic';
import AdminLogin from './pages/AdminLogin';
import AdminRegister from './pages/AdminRegister';
import AdminRequests from './pages/AdminRequests';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/tailor-made" element={<TailorMade />} />
        <Route path="/destinations" element={<DestinationPage />} />
        <Route path="/mini-tour" element={<MiniTour />} />
        <Route path="/cultural-heritage" element={<Cultural />} />
        <Route path="/best-of-sri-lanka" element={<Best />} />
        <Route path="/scenic-sri-lanka" element={<Scenic />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/admin/register" element={<AdminRegister />} />
        <Route path="/admin/requests" element={<AdminRequests />} />
      </Routes>
    </Router>
  );
}

export default App;
