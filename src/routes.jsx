import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Search from './pages/Search';
import HospitalDetail from './pages/HospitalDetail';
import Compare from './pages/Compare';
import Dashboard from './pages/Dashboard';
import QRProfile from './pages/QRProfile';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search" element={<Search />} />
      <Route path="/hospital/:id" element={<HospitalDetail />} />
      <Route path="/compare" element={<Compare />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/qr-profile" element={<QRProfile />} />
    </Routes>
  );
}
