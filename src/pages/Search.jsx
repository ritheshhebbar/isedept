import { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { Filter, MapPin, Star, Heart, ArrowLeft, TrendingUp, Shield, Clock } from 'lucide-react';
import { hospitals, treatments, doctors } from '../data/hospitals';
import { useApp } from '../context/AppContext';

export default function Search() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { saveHospital, isSaved, addToCompare, isInCompare } = useApp();

  const treatmentQuery = searchParams.get('treatment');
  const locationQuery = searchParams.get('location');
  const emergency = searchParams.get('emergency');

  const [selectedTreatment, setSelectedTreatment] = useState(null);
  const [results, setResults] = useState([]);
  const [sortBy, setSortBy] = useState('cost');
  const [filters, setFilters] = useState({
    maxDistance: 10,
    minRating: 0,
    insurance: false,
    emergency: emergency === 'true',
    nabh: false
  });

  useEffect(() => {
    if (treatmentQuery) {
      const treatment = treatments.find(
        t => t.name.toLowerCase().includes(treatmentQuery.toLowerCase())
      );
      setSelectedTreatment(treatment);

      if (treatment) {
        // Get hospitals with this treatment
        const hospitalResults = treatment.costs.map(cost => {
          const hospital = hospitals.find(h => h.id === cost.hospitalId);
          const doctor = doctors.find(d => d.id === cost.doctorId);
          return {
            ...hospital,
            treatmentCost: { min: cost.minCost, max: cost.maxCost },
            doctor
          };
        });

        // Apply filters
        let filtered = hospitalResults.filter(h => {
          if (filters.maxDistance && h.distance > filters.maxDistance) return false;
          if (filters.minRating && h.rating < filters.minRating) return false;
          if (filters.insurance && !h.insurance) return false;
          if (filters.emergency && !h.emergency) return false;
          if (filters.nabh && !h.nabh) return false;
          return true;
        });

        // Sort results
        if (sortBy === 'cost') {
          filtered.sort((a, b) => a.treatmentCost.min - b.treatmentCost.min);
        } else if (sortBy === 'distance') {
          filtered.sort((a, b) => a.distance - b.distance);
        } else if (sortBy === 'rating') {
          filtered.sort((a, b) => b.rating - a.rating);
        }

        setResults(filtered);
      }
    } else if (emergency) {
      // Emergency search - show all hospitals with emergency services
      const emergencyHospitals = hospitals
        .filter(h => h.emergency)
        .sort((a, b) => a.distance - b.distance);
      setResults(emergencyHospitals);
    }
  }, [treatmentQuery, sortBy, filters, emergency]);

  const toggleFilter = (key) => {
    setFilters(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => navigate('/')}
                className="text-gray-600 hover:text-blue-600"
              >
                <ArrowLeft size={24} />
              </button>
              <div>
                <h1 className="text-xl font-bold text-gray-800">
                  {emergency ? 'Emergency Hospitals' : `Results for "${treatmentQuery}"`}
                </h1>
                <p className="text-sm text-gray-600">
                  {results.length} hospitals found in {locationQuery || 'Bangalore'}
                </p>
              </div>
            </div>
            <button
              onClick={() => navigate('/compare')}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
            >
              Compare ({isInCompare.length || 0})
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
              <div className="flex items-center mb-4">
                <Filter size={20} className="mr-2 text-blue-600" />
                <h2 className="font-bold text-gray-800">Filters</h2>
              </div>

              {/* Sort By */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Sort By
                </label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2"
                >
                  <option value="cost">Cost (Low to High)</option>
                  <option value="distance">Distance (Nearest)</option>
                  <option value="rating">Rating (Highest)</option>
                </select>
              </div>

              {/* Distance Filter */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Max Distance: {filters.maxDistance} km
                </label>
                <input
                  type="range"
                  min="1"
                  max="20"
                  value={filters.maxDistance}
                  onChange={(e) => setFilters(prev => ({ ...prev, maxDistance: parseInt(e.target.value) }))}
                  className="w-full"
                />
              </div>

              {/* Rating Filter */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Minimum Rating
                </label>
                <div className="flex gap-2">
                  {[3, 3.5, 4, 4.5].map(rating => (
                    <button
                      key={rating}
                      onClick={() => setFilters(prev => ({ ...prev, minRating: rating }))}
                      className={`px-3 py-1 rounded-lg text-sm ${
                        filters.minRating === rating
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-200 text-gray-700'
                      }`}
                    >
                      {rating}+
                    </button>
                  ))}
                </div>
              </div>

              {/* Boolean Filters */}
              <div className="space-y-3">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={filters.insurance}
                    onChange={() => toggleFilter('insurance')}
                    className="mr-2"
                  />
                  <span className="text-sm text-gray-700">Insurance Accepted</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={filters.emergency}
                    onChange={() => toggleFilter('emergency')}
                    className="mr-2"
                  />
                  <span className="text-sm text-gray-700">24/7 Emergency</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={filters.nabh}
                    onChange={() => toggleFilter('nabh')}
                    className="mr-2"
                  />
                  <span className="text-sm text-gray-700">NABH Accredited</span>
                </label>
              </div>

              <button
                onClick={() => setFilters({
                  maxDistance: 10,
                  minRating: 0,
                  insurance: false,
                  emergency: false,
                  nabh: false
                })}
                className="w-full mt-6 text-blue-600 text-sm font-medium hover:underline"
              >
                Clear All Filters
              </button>
            </div>
          </div>

          {/* Results */}
          <div className="lg:col-span-3 space-y-4">
            {results.length === 0 ? (
              <div className="bg-white rounded-xl shadow-lg p-12 text-center">
                <p className="text-gray-600 text-lg">
                  No hospitals found matching your criteria.
                </p>
                <button
                  onClick={() => navigate('/')}
                  className="mt-4 text-blue-600 hover:underline"
                >
                  Try a different search
                </button>
              </div>
            ) : (
              results.map((hospital, index) => (
                <div
                  key={hospital.id}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition p-6"
                >
                  <div className="flex flex-col md:flex-row gap-6">
                    {/* Hospital Image */}
                    <div className="md:w-1/4">
                      <img
                        src={hospital.image}
                        alt={hospital.name}
                        className="w-full h-40 object-cover rounded-lg"
                      />
                      {index === 0 && sortBy === 'cost' && (
                        <div className="mt-2 bg-green-100 text-green-700 text-xs font-bold py-1 px-3 rounded-full text-center">
                          🏆 BEST PRICE
                        </div>
                      )}
                    </div>

                    {/* Hospital Info */}
                    <div className="md:w-3/4">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="text-xl font-bold text-gray-800 mb-1">
                            {hospital.name}
                          </h3>
                          <div className="flex items-center gap-4 text-sm text-gray-600">
                            <div className="flex items-center">
                              <MapPin size={16} className="mr-1" />
                              {hospital.distance} km away
                            </div>
                            <div className="flex items-center">
                              <Star size={16} className="mr-1 fill-yellow-400 text-yellow-400" />
                              {hospital.rating} Rating
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          {hospital.treatmentCost && (
                            <>
                              <div className="text-2xl font-bold text-green-600">
                                ₹{hospital.treatmentCost.min.toLocaleString()}
                              </div>
                              <div className="text-sm text-gray-500">
                                to ₹{hospital.treatmentCost.max.toLocaleString()}
                              </div>
                            </>
                          )}
                        </div>
                      </div>

                      {/* Doctor Info */}
                      {hospital.doctor && (
                        <div className="bg-blue-50 rounded-lg p-3 mb-3">
                          <p className="text-sm font-medium text-gray-800">
                            {hospital.doctor.name}
                          </p>
                          <p className="text-xs text-gray-600">
                            {hospital.doctor.qualification} • {hospital.doctor.experience} years exp • {hospital.doctor.casesHandled}+ cases
                          </p>
                        </div>
                      )}

                      {/* Badges */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {hospital.emergency && (
                          <span className="bg-red-100 text-red-700 text-xs px-3 py-1 rounded-full">
                            24/7 Emergency
                          </span>
                        )}
                        {hospital.insurance && (
                          <span className="bg-blue-100 text-blue-700 text-xs px-3 py-1 rounded-full">
                            Insurance
                          </span>
                        )}
                        {hospital.nabh && (
                          <span className="bg-purple-100 text-purple-700 text-xs px-3 py-1 rounded-full">
                            NABH Certified
                          </span>
                        )}
                      </div>

                      {/* Facilities */}
                      <div className="text-sm text-gray-600 mb-4">
                        <strong>Facilities:</strong> {hospital.facilities.join(', ')}
                      </div>

                      {/* Actions */}
                      <div className="flex gap-3">
                        <button
                          onClick={() => navigate(`/hospital/${hospital.id}`)}
                          className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
                        >
                          View Details
                        </button>
                        <button
                          onClick={() => addToCompare(hospital)}
                          disabled={isInCompare(hospital.id)}
                          className={`px-4 py-2 rounded-lg transition ${
                            isInCompare(hospital.id)
                              ? 'bg-gray-300 text-gray-600 cursor-not-allowed'
                              : 'bg-purple-600 text-white hover:bg-purple-700'
                          }`}
                        >
                          {isInCompare(hospital.id) ? 'Added' : 'Compare'}
                        </button>
                        <button
                          onClick={() => saveHospital(hospital)}
                          className={`px-4 py-2 rounded-lg transition ${
                            isSaved(hospital.id)
                              ? 'bg-red-100 text-red-600'
                              : 'bg-gray-100 text-gray-600 hover:bg-red-100 hover:text-red-600'
                          }`}
                        >
                          <Heart
                            size={20}
                            className={isSaved(hospital.id) ? 'fill-current' : ''}
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
