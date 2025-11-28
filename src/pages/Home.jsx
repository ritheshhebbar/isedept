import { useState } from 'react';
import { Search, MapPin, Heart, Shield, TrendingUp, Users, Star, Phone } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { treatments } from '../data/hospitals';

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [location, setLocation] = useState('Bangalore');
  const navigate = useNavigate();

  const popularTreatments = treatments.slice(0, 6);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search?treatment=${encodeURIComponent(searchTerm)}&location=${location}`);
    }
  };

  const handleTreatmentClick = (treatment) => {
    navigate(`/search?treatment=${encodeURIComponent(treatment.name)}&location=${location}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Heart className="text-blue-600" size={32} />
              <h1 className="text-2xl font-bold text-gray-800">
                MediCompare<span className="text-blue-600">+</span>
              </h1>
            </div>
            <div className="flex items-center space-x-6">
              <button 
                onClick={() => navigate('/dashboard')}
                className="text-gray-600 hover:text-blue-600 font-medium"
              >
                Dashboard
              </button>
              <button 
                onClick={() => navigate('/compare')}
                className="text-gray-600 hover:text-blue-600 font-medium"
              >
                Compare
              </button>
              <button 
                onClick={() => navigate('/qr-profile')}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                My QR Profile
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            Find the <span className="text-blue-600">Best Healthcare</span>
            <br />at the <span className="text-purple-600">Right Price</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Compare hospital costs, quality, and doctor expertise in seconds
          </p>

          {/* Search Form */}
          <form onSubmit={handleSearch} className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-4 flex flex-col md:flex-row gap-4">
              <div className="flex-1 flex items-center border-r border-gray-200 px-4">
                <Search className="text-gray-400 mr-2" size={20} />
                <input
                  type="text"
                  placeholder="Search for treatments, surgeries, doctors..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="flex-1 outline-none text-gray-700"
                />
              </div>
              <div className="flex-1 flex items-center px-4">
                <MapPin className="text-gray-400 mr-2" size={20} />
                <input
                  type="text"
                  placeholder="Location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="flex-1 outline-none text-gray-700"
                />
              </div>
              <button
                type="submit"
                className="bg-blue-600 text-white px-8 py-3 rounded-xl hover:bg-blue-700 transition font-medium"
              >
                Search
              </button>
            </div>
          </form>
        </div>

        {/* Key Features */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <div className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="text-blue-600" size={28} />
            </div>
            <h3 className="font-bold text-gray-800 mb-2">Compare Costs</h3>
            <p className="text-gray-600 text-sm">
              See real-time pricing from multiple hospitals
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Star className="text-green-600" size={28} />
            </div>
            <h3 className="font-bold text-gray-800 mb-2">Quality Ratings</h3>
            <p className="text-gray-600 text-sm">
              Check NABH accreditation & patient reviews
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition">
            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="text-purple-600" size={28} />
            </div>
            <h3 className="font-bold text-gray-800 mb-2">Expert Doctors</h3>
            <p className="text-gray-600 text-sm">
              View doctor qualifications & experience
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition">
            <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="text-orange-600" size={28} />
            </div>
            <h3 className="font-bold text-gray-800 mb-2">Insurance Check</h3>
            <p className="text-gray-600 text-sm">
              Verify coverage instantly with your policy
            </p>
          </div>
        </div>

        {/* Popular Treatments */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Popular Treatments
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {popularTreatments.map((treatment) => (
              <div
                key={treatment.id}
                onClick={() => handleTreatmentClick(treatment)}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition cursor-pointer hover:scale-105 transform"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-bold text-lg text-gray-800 mb-1">
                      {treatment.name}
                    </h3>
                    <span className="inline-block bg-blue-100 text-blue-700 text-xs px-3 py-1 rounded-full">
                      {treatment.category}
                    </span>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-4">{treatment.description}</p>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">Starting from</span>
                  <span className="text-green-600 font-bold text-lg">
                    ₹{Math.min(...treatment.costs.map(c => c.minCost)).toLocaleString()}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="bg-red-50 border-2 border-red-200 rounded-xl p-8 text-center">
          <Phone className="text-red-600 mx-auto mb-4" size={48} />
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Medical Emergency?
          </h2>
          <p className="text-gray-600 mb-4">
            Call ambulance services immediately
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="tel:108"
              className="bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition font-bold text-xl"
            >
              📞 Call 108
            </a>
            <button
              onClick={() => navigate('/search?emergency=true')}
              className="bg-white text-red-600 border-2 border-red-600 px-8 py-3 rounded-lg hover:bg-red-50 transition font-bold"
            >
              Find Nearest Hospital
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            © 2024 MediCompare+. Empowering patients with transparent healthcare information.
          </p>
          <p className="text-gray-500 text-sm mt-2">
            For medical emergencies, always call 108 or visit the nearest hospital immediately.
          </p>
        </div>
      </footer>
    </div>
  );
}
