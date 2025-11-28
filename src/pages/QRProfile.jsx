import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Download, Share2, QrCode } from 'lucide-react';
import QRCode from 'qrcode.react';
import { useApp } from '../context/AppContext';

export default function QRProfile() {
  const navigate = useNavigate();
  const { userProfile, updateUserProfile } = useApp();
  const qrRef = useRef();

  const [formData, setFormData] = useState({
    name: userProfile?.name || '',
    age: userProfile?.age || '',
    bloodGroup: userProfile?.bloodGroup || '',
    gender: userProfile?.gender || '',
    phone: userProfile?.phone || '',
    emergencyContact: userProfile?.emergencyContact || '',
    emergencyName: userProfile?.emergencyName || '',
    address: userProfile?.address || '',
    allergies: userProfile?.allergies || '',
    medications: userProfile?.medications || '',
    conditions: userProfile?.conditions || '',
    insurance: userProfile?.insurance || '',
    policyNumber: userProfile?.policyNumber || '',
  });

  const [showQR, setShowQR] = useState(!!userProfile);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUserProfile(formData);
    setShowQR(true);
    alert('Profile saved successfully!');
  };

  const downloadQR = () => {
    const canvas = document.getElementById('qr-code');
    const pngUrl = canvas
      .toDataURL('image/png')
      .replace('image/png', 'image/octet-stream');
    const downloadLink = document.createElement('a');
    downloadLink.href = pngUrl;
    downloadLink.download = `${formData.name}_medical_qr.png`;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  const shareQR = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'My Medical QR Profile',
          text: 'Scan this QR code to access my medical information in emergencies',
        });
      } catch (err) {
        console.log('Error sharing:', err);
      }
    } else {
      alert('Sharing not supported on this device');
    }
  };

  const qrData = JSON.stringify({
    name: formData.name,
    age: formData.age,
    bloodGroup: formData.bloodGroup,
    gender: formData.gender,
    phone: formData.phone,
    emergencyContact: formData.emergencyContact,
    emergencyName: formData.emergencyName,
    allergies: formData.allergies,
    conditions: formData.conditions,
    insurance: formData.insurance,
    policyNumber: formData.policyNumber,
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center text-gray-600 hover:text-blue-600"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back
          </button>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <QrCode className="mx-auto mb-4 text-blue-600" size={48} />
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              My Medical QR Profile
            </h1>
            <p className="text-gray-600">
              Create a QR code with your medical information for quick access in emergencies
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Form */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-6">
                Personal Information
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 rounded-lg px-3 py-2"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Age *
                    </label>
                    <input
                      type="number"
                      name="age"
                      value={formData.age}
                      onChange={handleChange}
                      required
                      className="w-full border border-gray-300 rounded-lg px-3 py-2"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Blood Group *
                    </label>
                    <select
                      name="bloodGroup"
                      value={formData.bloodGroup}
                      onChange={handleChange}
                      required
                      className="w-full border border-gray-300 rounded-lg px-3 py-2"
                    >
                      <option value="">Select</option>
                      <option value="A+">A+</option>
                      <option value="A-">A-</option>
                      <option value="B+">B+</option>
                      <option value="B-">B-</option>
                      <option value="AB+">AB+</option>
                      <option value="AB-">AB-</option>
                      <option value="O+">O+</option>
                      <option value="O-">O-</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Gender *
                  </label>
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 rounded-lg px-3 py-2"
                  >
                    <option value="">Select</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 rounded-lg px-3 py-2"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Emergency Contact Name *
                  </label>
                  <input
                    type="text"
                    name="emergencyName"
                    value={formData.emergencyName}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 rounded-lg px-3 py-2"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Emergency Contact Number *
                  </label>
                  <input
                    type="tel"
                    name="emergencyContact"
                    value={formData.emergencyContact}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 rounded-lg px-3 py-2"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Address
                  </label>
                  <textarea
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    rows="2"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Known Allergies
                  </label>
                  <input
                    type="text"
                    name="allergies"
                    value={formData.allergies}
                    onChange={handleChange}
                    placeholder="e.g., Penicillin, Peanuts"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Current Medications
                  </label>
                  <input
                    type="text"
                    name="medications"
                    value={formData.medications}
                    onChange={handleChange}
                    placeholder="e.g., Aspirin, Insulin"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Medical Conditions
                  </label>
                  <input
                    type="text"
                    name="conditions"
                    value={formData.conditions}
                    onChange={handleChange}
                    placeholder="e.g., Diabetes, Hypertension"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Insurance Provider
                  </label>
                  <input
                    type="text"
                    name="insurance"
                    value={formData.insurance}
                    onChange={handleChange}
                    placeholder="e.g., Star Health"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Policy Number
                  </label>
                  <input
                    type="text"
                    name="policyNumber"
                    value={formData.policyNumber}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition font-medium"
                >
                  {showQR ? 'Update Profile' : 'Generate QR Code'}
                </button>
              </form>
            </div>

            {/* QR Code Display */}
            {showQR && (
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h2 className="text-xl font-bold text-gray-800 mb-6 text-center">
                  Your Medical QR Code
                </h2>
                <div className="flex justify-center mb-6">
                  <div className="bg-white p-4 rounded-lg shadow-lg">
                    <QRCode
                      id="qr-code"
                      value={qrData}
                      size={256}
                      level="H"
                      includeMargin={true}
                    />
                  </div>
                </div>
                <div className="text-center mb-6">
                  <h3 className="font-bold text-lg text-gray-800 mb-2">
                    {formData.name}
                  </h3>
                  <p className="text-gray-600">
                    Blood Group: <span className="font-bold text-red-600">{formData.bloodGroup}</span>
                  </p>
                  <p className="text-gray-600">
                    Emergency: {formData.emergencyName} - {formData.emergencyContact}
                  </p>
                </div>

                <div className="space-y-3">
                  <button
                    onClick={downloadQR}
                    className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition flex items-center justify-center"
                  >
                    <Download size={20} className="mr-2" />
                    Download QR Code
                  </button>
                  <button
                    onClick={shareQR}
                    className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition flex items-center justify-center"
                  >
                    <Share2 size={20} className="mr-2" />
                    Share QR Code
                  </button>
                </div>

                <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <p className="text-sm text-gray-700">
                    <strong>💡 Tip:</strong> Print this QR code and keep it in your wallet or phone case. Hospitals can scan it in emergencies to instantly access your medical information.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
