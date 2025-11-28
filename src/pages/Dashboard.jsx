import { useNavigate } from 'react-router-dom';
import { Heart, Clock, User, ArrowLeft, Trash2 } from 'lucide-react';
import { useApp } from '../context/AppContext';

export default function Dashboard() {
  const navigate = useNavigate();
  const { savedHospitals, saveHospital, userProfile, searchHistory } = useApp();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => navigate('/')}
              className="flex items-center text-gray-600 hover:text-blue-600"
            >
              <ArrowLeft size={20} className="mr-2" />
              Back to Home
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

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">
          My Dashboard
        </h1>

        {/* User Profile Section */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-gray-800 flex items-center">
              <User className="mr-2 text-blue-600" size={24} />
              Profile Information
            </h2>
            <button
              onClick={() => navigate('/qr-profile')}
              className="text-blue-600 hover:underline text-sm"
            >
              {userProfile ? 'Edit Profile' : 'Create Profile'}
            </button>
          </div>
          {userProfile ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <p className="text-sm text-gray-600">Name</p>
                <p className="font-medium">{userProfile.name}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Age</p>
                <p className="font-medium">{userProfile.age} years</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Blood Group</p>
                <p className="font-medium">{userProfile.bloodGroup}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Emergency Contact</p>
                <p className="font-medium">{userProfile.emergencyContact}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Insurance</p>
                <p className="font-medium">{userProfile.insurance || 'Not provided'}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Policy Number</p>
                <p className="font-medium">{userProfile.policyNumber || 'Not provided'}</p>
              </div>
            </div>
          ) : (
            <p className="text-gray-600">
              Create your medical profile to enable quick QR code scanning at hospitals
            </p>
          )}
        </div>

        {/* Saved Hospitals */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
            <Heart className="mr-2 text-red-600 fill-current" size={24} />
            Saved Hospitals ({savedHospitals.length})
          </h2>
          {savedHospitals.length === 0 ? (
            <p className="text-gray-600 text-center py-8">
              No saved hospitals yet. Start exploring!
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {savedHospitals.map((hospital) => (
                <div
                  key={hospital.id}
                  className="border border-gray-200 rounded-lg p-4 hover:shadow-lg transition"
                >
                  <img
                    src={hospital.image}
                    alt={hospital.name}
                    className="w-full h-32 object-cover rounded-lg mb-3"
                  />
                  <h3 className="font-bold text-gray-800 mb-1">
                    {hospital.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    {hospital.location} • {hospital.distance} km
                  </p>
                  <div className="flex gap-2">
                    <button
                      onClick={() => navigate(`/hospital/${hospital.id}`)}
                      className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition text-sm"
                    >
                      View
                    </button>
                    <button
                      onClick={() => saveHospital(hospital)}
                      className="bg-red-100 text-red-600 px-3 py-2 rounded-lg hover:bg-red-200 transition"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Search History */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
            <Clock className="mr-2 text-purple-600" size={24} />
            Recent Searches
          </h2>
          {searchHistory.length === 0 ? (
            <p className="text-gray-600 text-center py-8">
              No search history yet
            </p>
          ) : (
            <div className="flex flex-wrap gap-2">
              {searchHistory.map((term, idx) => (
                <button
                  key={idx}
                  onClick={() => navigate(`/search?treatment=${term}`)}
                  className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-blue-100 hover:text-blue-700 transition"
                >
                  {term}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
