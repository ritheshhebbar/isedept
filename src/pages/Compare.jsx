import { useNavigate } from 'react-router-dom';
import { ArrowLeft, X, Star, MapPin, Check, Minus } from 'lucide-react';
import { useApp } from '../context/AppContext';

export default function Compare() {
  const navigate = useNavigate();
  const { compareList, removeFromCompare, clearCompare } = useApp();

  if (compareList.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            No Hospitals to Compare
          </h2>
          <p className="text-gray-600 mb-6">
            Add hospitals from search results to compare them
          </p>
          <button
            onClick={() => navigate('/')}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Go to Home
          </button>
        </div>
      </div>
    );
  }

  const features = [
    { key: 'rating', label: 'Rating', type: 'rating' },
    { key: 'distance', label: 'Distance', type: 'text', suffix: ' km' },
    { key: 'emergency', label: '24/7 Emergency', type: 'boolean' },
    { key: 'insurance', label: 'Insurance', type: 'boolean' },
    { key: 'nabh', label: 'NABH Accredited', type: 'boolean' },
    { key: 'ambulance', label: 'Ambulance', type: 'boolean' },
    { key: 'parking', label: 'Parking', type: 'boolean' },
    { key: 'pharmacy', label: 'Pharmacy', type: 'boolean' },
    { key: 'bloodBank', label: 'Blood Bank', type: 'boolean' },
    { key: 'beds', label: 'Total Beds', type: 'text' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => navigate(-1)}
              className="flex items-center text-gray-600 hover:text-blue-600"
            >
              <ArrowLeft size={20} className="mr-2" />
              Back
            </button>
            <div className="flex items-center gap-4">
              <span className="text-gray-600">
                Comparing {compareList.length} hospital{compareList.length > 1 ? 's' : ''}
              </span>
              <button
                onClick={clearCompare}
                className="text-red-600 hover:underline text-sm"
              >
                Clear All
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">
          Hospital Comparison
        </h1>

        {/* Comparison Table */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-4 text-left font-bold text-gray-800 sticky left-0 bg-gray-50 z-10">
                  Feature
                </th>
                {compareList.map((hospital) => (
                  <th key={hospital.id} className="px-6 py-4 min-w-[250px]">
                    <div className="relative">
                      <button
                        onClick={() => removeFromCompare(hospital.id)}
                        className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600"
                      >
                        <X size={16} />
                      </button>
                      <img
                        src={hospital.image}
                        alt={hospital.name}
                        className="w-full h-32 object-cover rounded-lg mb-3"
                      />
                      <h3 className="font-bold text-gray-800 text-left">
                        {hospital.name}
                      </h3>
                      <p className="text-sm text-gray-600 text-left">
                        {hospital.location}
                      </p>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {features.map((feature, idx) => (
                <tr key={feature.key} className={idx % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                  <td className="px-6 py-4 font-medium text-gray-800 sticky left-0 bg-inherit z-10">
                    {feature.label}
                  </td>
                  {compareList.map((hospital) => (
                    <td key={hospital.id} className="px-6 py-4 text-center">
                      {feature.type === 'rating' && (
                        <div className="flex items-center justify-center">
                          <Star size={18} className="text-yellow-400 fill-current mr-1" />
                          <span className="font-bold">{hospital[feature.key]}</span>
                        </div>
                      )}
                      {feature.type === 'text' && (
                        <span className="font-medium">
                          {hospital[feature.key]}{feature.suffix || ''}
                        </span>
                      )}
                      {feature.type === 'boolean' && (
                        <div className="flex justify-center">
                          {hospital[feature.key] ? (
                            <div className="bg-green-100 text-green-700 rounded-full p-2">
                              <Check size={20} />
                            </div>
                          ) : (
                            <div className="bg-red-100 text-red-700 rounded-full p-2">
                              <Minus size={20} />
                            </div>
                          )}
                        </div>
                      )}
                    </td>
                  ))}
                </tr>
              ))}

              {/* Facilities Row */}
              <tr>
                <td className="px-6 py-4 font-medium text-gray-800 sticky left-0 bg-white z-10">
                  Facilities
                </td>
                {compareList.map((hospital) => (
                  <td key={hospital.id} className="px-6 py-4">
                    <div className="text-left space-y-1">
                      {hospital.facilities.map((facility, idx) => (
                        <div key={idx} className="text-sm text-gray-700">
                          • {facility}
                        </div>
                      ))}
                    </div>
                  </td>
                ))}
              </tr>

              {/* Contact Row */}
              <tr className="bg-gray-50">
                <td className="px-6 py-4 font-medium text-gray-800 sticky left-0 bg-gray-50 z-10">
                  Contact
                </td>
                {compareList.map((hospital) => (
                  <td key={hospital.id} className="px-6 py-4">
                    <div className="text-left space-y-1 text-sm">
                      <div className="text-blue-600">{hospital.contact}</div>
                      <div className="text-gray-600">{hospital.email}</div>
                    </div>
                  </td>
                ))}
              </tr>

              {/* Action Row */}
              <tr>
                <td className="px-6 py-4 font-medium text-gray-800 sticky left-0 bg-white z-10">
                  Actions
                </td>
                {compareList.map((hospital) => (
                  <td key={hospital.id} className="px-6 py-4">
                    <button
                      onClick={() => navigate(`/hospital/${hospital.id}`)}
                      className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
                    >
                      View Details
                    </button>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>

        {/* Add More */}
        {compareList.length < 4 && (
          <div className="mt-6 text-center">
            <p className="text-gray-600 mb-4">
              You can compare up to 4 hospitals. {4 - compareList.length} slot{4 - compareList.length > 1 ? 's' : ''} remaining.
            </p>
            <button
              onClick={() => navigate('/')}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Add More Hospitals
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
