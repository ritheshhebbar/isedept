export const hospitals = [
  {
    id: 1,
    name: "Apollo Hospital",
    location: "Bangalore",
    distance: 2.3,
    rating: 4.5,
    emergency: true,
    insurance: true,
    nabh: true,
    facilities: ["ICU", "NICU", "OT", "Emergency"],
    contact: "+91-80-2692-2222",
    email: "info@apollobangalore.com",
    website: "www.apollohospitals.com",
    address: "154/11, Bannerghatta Road, Bangalore - 560076",
    image: "https://via.placeholder.com/400x200/4F46E5/FFFFFF?text=Apollo+Hospital",
    beds: 300,
    ambulance: true,
    parking: true,
    pharmacy: true,
    bloodBank: true
  },
  {
    id: 2,
    name: "Fortis Hospital",
    location: "Bangalore",
    distance: 4.1,
    rating: 4.3,
    emergency: true,
    insurance: true,
    nabh: true,
    facilities: ["ICU", "OT", "Emergency"],
    contact: "+91-80-6621-4444",
    email: "info@fortisbangalore.com",
    website: "www.fortishealthcare.com",
    address: "14, Cunningham Road, Bangalore - 560052",
    image: "https://via.placeholder.com/400x200/7C3AED/FFFFFF?text=Fortis+Hospital",
    beds: 250,
    ambulance: true,
    parking: true,
    pharmacy: true,
    bloodBank: false
  },
  {
    id: 3,
    name: "Manipal Hospital",
    location: "Bangalore",
    distance: 5.8,
    rating: 4.6,
    emergency: true,
    insurance: false,
    nabh: true,
    facilities: ["ICU", "NICU", "OT", "Emergency", "Trauma Center"],
    contact: "+91-80-2502-4444",
    email: "info@manipalhospitals.com",
    website: "www.manipalhospitals.com",
    address: "98, HAL Airport Road, Bangalore - 560017",
    image: "https://via.placeholder.com/400x200/EC4899/FFFFFF?text=Manipal+Hospital",
    beds: 400,
    ambulance: true,
    parking: true,
    pharmacy: true,
    bloodBank: true
  },
  {
    id: 4,
    name: "Government Medical College",
    location: "Bangalore",
    distance: 3.5,
    rating: 3.8,
    emergency: true,
    insurance: false,
    nabh: false,
    facilities: ["ICU", "OT", "Emergency"],
    contact: "+91-80-2670-4000",
    email: "info@bmcri.edu.in",
    website: "www.bmcri.edu.in",
    address: "Fort Road, Bangalore - 560002",
    image: "https://via.placeholder.com/400x200/10B981/FFFFFF?text=Govt+Medical+College",
    beds: 500,
    ambulance: true,
    parking: false,
    pharmacy: true,
    bloodBank: true
  }
];

export const treatments = [
  {
    id: 1,
    name: "Appendix Surgery",
    category: "Surgery",
    description: "Surgical removal of the appendix",
    duration: "1-2 hours",
    recovery: "1-2 weeks",
    costs: [
      { hospitalId: 1, minCost: 35000, maxCost: 50000, doctorId: 1 },
      { hospitalId: 2, minCost: 42000, maxCost: 60000, doctorId: 2 },
      { hospitalId: 3, minCost: 38000, maxCost: 55000, doctorId: 3 },
      { hospitalId: 4, minCost: 15000, maxCost: 25000, doctorId: 4 }
    ]
  },
  {
    id: 2,
    name: "C-Section Delivery",
    category: "Obstetrics",
    description: "Cesarean section delivery",
    duration: "45-60 minutes",
    recovery: "4-6 weeks",
    costs: [
      { hospitalId: 1, minCost: 45000, maxCost: 70000, doctorId: 5 },
      { hospitalId: 2, minCost: 50000, maxCost: 75000, doctorId: 6 },
      { hospitalId: 3, minCost: 48000, maxCost: 72000, doctorId: 7 },
      { hospitalId: 4, minCost: 20000, maxCost: 35000, doctorId: 8 }
    ]
  },
  {
    id: 3,
    name: "Heart Angioplasty",
    category: "Cardiology",
    description: "Procedure to open blocked heart arteries",
    duration: "1-3 hours",
    recovery: "2-4 weeks",
    costs: [
      { hospitalId: 1, minCost: 150000, maxCost: 250000, doctorId: 9 },
      { hospitalId: 2, minCost: 180000, maxCost: 280000, doctorId: 10 },
      { hospitalId: 3, minCost: 165000, maxCost: 260000, doctorId: 11 },
      { hospitalId: 4, minCost: 80000, maxCost: 120000, doctorId: 12 }
    ]
  },
  {
    id: 4,
    name: "Kidney Stone Removal",
    category: "Urology",
    description: "Removal of kidney stones via minimally invasive procedure",
    duration: "30-90 minutes",
    recovery: "1-2 weeks",
    costs: [
      { hospitalId: 1, minCost: 55000, maxCost: 85000, doctorId: 13 },
      { hospitalId: 2, minCost: 60000, maxCost: 90000, doctorId: 14 },
      { hospitalId: 3, minCost: 58000, maxCost: 88000, doctorId: 15 },
      { hospitalId: 4, minCost: 25000, maxCost: 40000, doctorId: 16 }
    ]
  },
  {
    id: 5,
    name: "Gallbladder Removal",
    category: "Surgery",
    description: "Laparoscopic removal of gallbladder",
    duration: "1-2 hours",
    recovery: "1-2 weeks",
    costs: [
      { hospitalId: 1, minCost: 65000, maxCost: 95000, doctorId: 1 },
      { hospitalId: 2, minCost: 70000, maxCost: 100000, doctorId: 2 },
      { hospitalId: 3, minCost: 68000, maxCost: 98000, doctorId: 3 },
      { hospitalId: 4, minCost: 30000, maxCost: 45000, doctorId: 4 }
    ]
  },
  {
    id: 6,
    name: "Knee Replacement",
    category: "Orthopedics",
    description: "Total knee replacement surgery",
    duration: "2-3 hours",
    recovery: "6-12 weeks",
    costs: [
      { hospitalId: 1, minCost: 200000, maxCost: 350000, doctorId: 17 },
      { hospitalId: 2, minCost: 220000, maxCost: 380000, doctorId: 18 },
      { hospitalId: 3, minCost: 210000, maxCost: 365000, doctorId: 19 },
      { hospitalId: 4, minCost: 100000, maxCost: 180000, doctorId: 20 }
    ]
  },
  {
    id: 7,
    name: "Cataract Surgery",
    category: "Ophthalmology",
    description: "Removal of cloudy lens and replacement with artificial lens",
    duration: "20-30 minutes",
    recovery: "1-2 weeks",
    costs: [
      { hospitalId: 1, minCost: 25000, maxCost: 50000, doctorId: 21 },
      { hospitalId: 2, minCost: 30000, maxCost: 55000, doctorId: 22 },
      { hospitalId: 3, minCost: 28000, maxCost: 52000, doctorId: 23 },
      { hospitalId: 4, minCost: 10000, maxCost: 20000, doctorId: 24 }
    ]
  },
  {
    id: 8,
    name: "Hernia Repair",
    category: "Surgery",
    description: "Surgical repair of hernia",
    duration: "1-2 hours",
    recovery: "2-4 weeks",
    costs: [
      { hospitalId: 1, minCost: 45000, maxCost: 75000, doctorId: 1 },
      { hospitalId: 2, minCost: 50000, maxCost: 80000, doctorId: 2 },
      { hospitalId: 3, minCost: 48000, maxCost: 78000, doctorId: 3 },
      { hospitalId: 4, minCost: 20000, maxCost: 35000, doctorId: 4 }
    ]
  }
];

export const doctors = [
  { id: 1, name: "Dr. Rajesh Mehta", specialization: "General Surgery", experience: 12, qualification: "MBBS, MS", casesHandled: 450, rating: 4.6, hospitalId: 1, availableDays: ["Mon", "Wed", "Fri"] },
  { id: 2, name: "Dr. Priya Sharma", specialization: "General Surgery", experience: 8, qualification: "MBBS, MS", casesHandled: 320, rating: 4.4, hospitalId: 2, availableDays: ["Tue", "Thu", "Sat"] },
  { id: 3, name: "Dr. Anil Kumar", specialization: "General Surgery", experience: 15, qualification: "MBBS, MS, MCh", casesHandled: 580, rating: 4.7, hospitalId: 3, availableDays: ["Mon", "Wed", "Fri"] },
  { id: 4, name: "Dr. Sunita Reddy", specialization: "General Surgery", experience: 10, qualification: "MBBS, MS", casesHandled: 400, rating: 4.2, hospitalId: 4, availableDays: ["Mon", "Tue", "Wed", "Thu", "Fri"] },
  { id: 5, name: "Dr. Kavita Iyer", specialization: "Obstetrics", experience: 14, qualification: "MBBS, MD", casesHandled: 650, rating: 4.8, hospitalId: 1, availableDays: ["Mon", "Wed", "Fri"] },
  { id: 6, name: "Dr. Meera Nair", specialization: "Obstetrics", experience: 11, qualification: "MBBS, MD", casesHandled: 520, rating: 4.5, hospitalId: 2, availableDays: ["Tue", "Thu", "Sat"] },
  { id: 7, name: "Dr. Lakshmi Rao", specialization: "Obstetrics", experience: 16, qualification: "MBBS, MD, DNB", casesHandled: 720, rating: 4.9, hospitalId: 3, availableDays: ["Mon", "Wed", "Fri"] },
  { id: 8, name: "Dr. Sneha Patel", specialization: "Obstetrics", experience: 9, qualification: "MBBS, MD", casesHandled: 380, rating: 4.3, hospitalId: 4, availableDays: ["Mon", "Tue", "Wed", "Thu", "Fri"] },
  { id: 9, name: "Dr. Vijay Singh", specialization: "Cardiology", experience: 18, qualification: "MBBS, MD, DM", casesHandled: 890, rating: 4.9, hospitalId: 1, availableDays: ["Mon", "Wed", "Fri"] },
  { id: 10, name: "Dr. Ashok Verma", specialization: "Cardiology", experience: 20, qualification: "MBBS, MD, DM", casesHandled: 1020, rating: 4.8, hospitalId: 2, availableDays: ["Tue", "Thu", "Sat"] },
  { id: 11, name: "Dr. Ramesh Gupta", specialization: "Cardiology", experience: 17, qualification: "MBBS, MD, DM", casesHandled: 850, rating: 4.7, hospitalId: 3, availableDays: ["Mon", "Wed", "Fri"] },
  { id: 12, name: "Dr. Sanjay Desai", specialization: "Cardiology", experience: 12, qualification: "MBBS, MD, DM", casesHandled: 600, rating: 4.4, hospitalId: 4, availableDays: ["Mon", "Tue", "Wed", "Thu", "Fri"] },
  { id: 13, name: "Dr. Arvind Joshi", specialization: "Urology", experience: 13, qualification: "MBBS, MS, MCh", casesHandled: 540, rating: 4.6, hospitalId: 1, availableDays: ["Mon", "Wed", "Fri"] },
  { id: 14, name: "Dr. Nitin Kapoor", specialization: "Urology", experience: 10, qualification: "MBBS, MS, MCh", casesHandled: 420, rating: 4.5, hospitalId: 2, availableDays: ["Tue", "Thu", "Sat"] },
  { id: 15, name: "Dr. Deepak Malhotra", specialization: "Urology", experience: 15, qualification: "MBBS, MS, MCh, DNB", casesHandled: 680, rating: 4.8, hospitalId: 3, availableDays: ["Mon", "Wed", "Fri"] },
  { id: 16, name: "Dr. Kiran Bhat", specialization: "Urology", experience: 8, qualification: "MBBS, MS, MCh", casesHandled: 350, rating: 4.3, hospitalId: 4, availableDays: ["Mon", "Tue", "Wed", "Thu", "Fri"] },
  { id: 17, name: "Dr. Vikram Rao", specialization: "Orthopedics", experience: 16, qualification: "MBBS, MS (Ortho)", casesHandled: 720, rating: 4.7, hospitalId: 1, availableDays: ["Mon", "Wed", "Fri"] },
  { id: 18, name: "Dr. Anita Deshmukh", specialization: "Orthopedics", experience: 14, qualification: "MBBS, MS (Ortho)", casesHandled: 650, rating: 4.6, hospitalId: 2, availableDays: ["Tue", "Thu", "Sat"] },
  { id: 19, name: "Dr. Suresh Babu", specialization: "Orthopedics", experience: 18, qualification: "MBBS, MS, DNB (Ortho)", casesHandled: 850, rating: 4.8, hospitalId: 3, availableDays: ["Mon", "Wed", "Fri"] },
  { id: 20, name: "Dr. Madhavi Reddy", specialization: "Orthopedics", experience: 11, qualification: "MBBS, MS (Ortho)", casesHandled: 480, rating: 4.4, hospitalId: 4, availableDays: ["Mon", "Tue", "Wed", "Thu", "Fri"] },
  { id: 21, name: "Dr. Prasad Kumar", specialization: "Ophthalmology", experience: 13, qualification: "MBBS, MS (Ophthal)", casesHandled: 920, rating: 4.7, hospitalId: 1, availableDays: ["Mon", "Wed", "Fri"] },
  { id: 22, name: "Dr. Revathi Menon", specialization: "Ophthalmology", experience: 10, qualification: "MBBS, MS (Ophthal)", casesHandled: 780, rating: 4.5, hospitalId: 2, availableDays: ["Tue", "Thu", "Sat"] },
  { id: 23, name: "Dr. Sridhar Nair", specialization: "Ophthalmology", experience: 15, qualification: "MBBS, MS, DNB (Ophthal)", casesHandled: 1050, rating: 4.8, hospitalId: 3, availableDays: ["Mon", "Wed", "Fri"] },
  { id: 24, name: "Dr. Geeta Iyer", specialization: "Ophthalmology", experience: 9, qualification: "MBBS, MS (Ophthal)", casesHandled: 650, rating: 4.4, hospitalId: 4, availableDays: ["Mon", "Tue", "Wed", "Thu", "Fri"] }
];

export const reviews = [
  { id: 1, hospitalId: 1, userName: "Ramesh K.", rating: 5, comment: "Excellent care and professional staff. Highly recommend!", date: "2024-11-15", verified: true },
  { id: 2, hospitalId: 1, userName: "Priya S.", rating: 4, comment: "Good facilities but waiting time was long.", date: "2024-11-10", verified: true },
  { id: 3, hospitalId: 2, userName: "Arun M.", rating: 4, comment: "Quality treatment at reasonable cost.", date: "2024-11-12", verified: false },
  { id: 4, hospitalId: 3, userName: "Deepa R.", rating: 5, comment: "Best hospital in the area. Saved my father's life!", date: "2024-11-08", verified: true },
  { id: 5, hospitalId: 4, userName: "Sunil P.", rating: 3, comment: "Affordable but very crowded. Long waiting times.", date: "2024-11-05", verified: true }
];

export const insuranceProviders = [
  { id: 1, name: "Star Health Insurance", coverage: 80 },
  { id: 2, name: "ICICI Lombard", coverage: 75 },
  { id: 3, name: "HDFC ERGO", coverage: 70 },
  { id: 4, name: "Max Bupa", coverage: 85 },
  { id: 5, name: "Care Health Insurance", coverage: 78 },
  { id: 6, name: "Bajaj Allianz", coverage: 72 },
  { id: 7, name: "Niva Bupa", coverage: 80 },
  { id: 8, name: "Government (CGHS/ESI)", coverage: 90 }
];
