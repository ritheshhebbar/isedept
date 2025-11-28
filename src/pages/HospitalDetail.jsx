import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { 
  ArrowLeft, MapPin, Star, Phone, Mail, Globe, Heart,
  Bed, Ambulance, Shield, Building, Clock, Users, TrendingUp
} from 'lucide-react';
import { hospitals, doctors, treatments, reviews } from '../data/hospitals';
import { useApp } from '../context/AppContext';

export default function HospitalDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { saveHospital, isSaved, addToCompare } = useApp();
  const [activeTab, setActiveTab] = useState('overview');

  const hospital = hospitals.find(h => h.id === parseInt(id));
  const hospitalDoctors = doctors.filter(d => d.hospitalId === parseInt(id));
  const hospitalReviews = reviews.filter(r => r.hospitalId === parseInt(id));

  // Get treatments available at this hospital
  const availableTreatments = treatments.filter(t => 
    t.costs.some(c => c.hospitalId === parseInt(id))
  ).map(t => ({
    ...t,
    cost: t.costs.find(c => c.hospitalId === parseInt(id))
  }));

  if (!hospital) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Hospital not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center text-gray-600 hover:text-blue-600 mb-4"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Results
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-white">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <img
                src={hospital.image}
                alt={hospital.name}
                className="w-full h-64 object-cover rounded-xl shadow-lg"
              />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-800 mb-4">
                {hospital.name}
              </h1>
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-gray-600">
                  <MapPin size={18} className="mr-2 text-blue-600" />
                  {hospital.address}
                </div>
                <div className="flex items-center text-gray-600">
                  <Star size={18} className="mr-2 text-yellow-400 fill-current" />
                  {hospital.rating} Rating • {hospitalReviews.length} Reviews
                </div>
                <div className="flex items-center text-gray-600">
                  <Building size={18} className="mr-2 text-green-600" />
                  {hospital.beds} Beds Available
                </div>
              </div>

              {/* Quick Actions */}
              <div className="flex gap-3">
                <button
                  onClick={() => saveHospital(hospital)}
                  className={`flex-1 py-3 rounded-lg transition ${
                    isSaved(hospital.id)
                      ? 'bg-red-100 text-red-600'
                      : 'bg-gray-100 text-gray-600 hover:bg-red-100 hover:text-red-600'
                  }`}
                >
                  <Heart
                    size={20}
                    className={`inline mr-2 ${isSaved(hospital.id) ? 'fill-current' : ''}`}
                  />
                  {isSaved(hospital.id) ? 'Saved' : 'Save'}
                </button>
                <button
                  onClick={() => addToCompare(hospital)}
                  className="flex-1 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
                >
                  Add to Compare
                </button>
              </div>

              {/* Contact Info */}
              <div className="mt-6 bg-gray-50 rounded-lg p-4 space-y-2">
                <a
                  href={`tel:${hospital.contact}`}
                  className="flex items-center text-blue-600 hover:underline"
                >
                  <Phone size={16} className="mr-2" />
                  {hospital.contact}
                </a>
                <a
                  href={`mailto:${hospital.email}`}
                  className="flex items-center text-blue-600 hover:underline"
                >
                  <Mail size={16} className="mr-2" />
                  {hospital.email}
                </a>
                <a
                  href={`https://${hospital.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-blue-600 hover:underline"
                >
                  <Globe size={16} className="mr-2" />
                  {hospital.website}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white border-b sticky top-0 z-10">
        <div className="container mx-auto px-4">
          <div className="flex space-x-8">
            {['overview', 'treatments', 'doctors', 'reviews'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-4 font-medium capitalize ${
                  activeTab === tab
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Tab Content */}
      <div className="container mx-auto px-4 py-8">
        {activeTab === 'overview' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Facilities */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Facilities</h2>
              <div className="grid grid-cols-2 gap-4">
                {hospital.facilities.map((facility, idx) => (
                  <div key={idx} className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    {facility}
                  </div>
                ))}
              </div>
            </div>

            {/* Amenities */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Amenities</h2>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">24/7 Emergency</span>
                  <span className={hospital.emergency ? 'text-green-600' : 'text-red-600'}>
                    {hospital.emergency ? '✓ Available' : '✗ Not Available'}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">Insurance Accepted</span>
                  <span className={hospital.insurance ? 'text-green-600' : 'text-red-600'}>
                    {hospital.insurance ? '✓ Yes' : '✗ No'}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">NABH Accredited</span>
                  <span className={hospital.nabh ? 'text-green-600' : 'text-red-600'}>
                    {hospital.nabh ? '✓ Yes' : '✗ No'}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">Ambulance Service</span>
                  <span className={hospital.ambulance ? 'text-green-600' : 'text-red-600'}>
                    {hospital.ambulance ? '✓ Available' : '✗ Not Available'}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">Blood Bank</span>
                  <span className={hospital.bloodBank ? 'text-green-600' : 'text-red-600'}>
                    {hospital.bloodBank ? '✓ Available' : '✗ Not Available'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'treatments' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {availableTreatments.map((treatment) => (
              <div key={treatment.id} className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  {treatment.name}
                </h3>
                <span className="inline-block bg-blue-100 text-blue-700 text-xs px-3 py-1 rounded-full mb-3">
                  {treatment.category}
                </span>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Duration:</span>
                    <span className="font-medium">{treatment.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Recovery:</span>
                    <span className="font-medium">{treatment.recovery}</span>
                  </div>
                  <div className="flex justify-between items-center pt-3 border-t">
                    <span className="text-gray-600">Cost Range:</span>
                    <span className="font-bold text-green-600">
                      ₹{treatment.cost.minCost.toLocaleString()} - ₹{treatment.cost.maxCost.toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'doctors' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {hospitalDoctors.map((doctor) => (
              <div key={doctor.id} className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">{doctor.name}</h3>
                    <p className="text-blue-600 font-medium">{doctor.specialization}</p>
                  </div>
                  <div className="flex items-center bg-yellow-100 px-3 py-1 rounded-lg">
                    <Star size={16} className="text-yellow-600 fill-current mr-1" />
                    <span className="font-bold text-yellow-600">{doctor.rating}</span>
                  </div>
                </div>
                <div className="space-y-2 text-sm mb-4">
                  <p><strong>Qualification:</strong> {doctor.qualification}</p>
                  <p><strong>Experience:</strong> {doctor.experience} years</p>
                  <p><strong>Cases Handled:</strong> {doctor.casesHandled}+</p>
                  <p><strong>Available:</strong> {doctor.availableDays.join(', ')}</p>
                </div>
                <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
                  Book Appointment
                </button>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'reviews' && (
          <div className="space-y-4">
            {hospitalReviews.length === 0 ? (
              <div className="bg-white rounded-xl shadow-lg p-12 text-center">
                <p className="text-gray-600">No reviews yet. Be the first to review!</p>
              </div>
            ) : (
              hospitalReviews.map((review) => (
                <div key={review.id} className="bg-white rounded-xl shadow-lg p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="font-bold text-gray-800">{review.userName}</h4>
                      <p className="text-sm text-gray-500">{review.date}</p>
                    </div>
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          className={`${
                            i < review.rating
                              ? 'text-yellow-400 fill-current'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                      {review.verified && (
                        <span className="ml-2 bg-green-100 text-green-700 text-xs px-2 py-1 rounded">
                          Verified
                        </span>
                      )}
                    </div>
                  </div>
                  <p className="text-gray-700">{review.comment}</p>
                </div>
              ))
            )}
            <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition">
              Write a Review
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
