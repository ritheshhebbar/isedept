# 🎯 MediCompare+ - Quick Reference Guide

## 🏃 Quick Start Commands

```bash
# Development
npm run dev          # Start dev server at http://localhost:5173

# Production
npm run build        # Build for production (output: dist/)
npm run preview      # Preview production build

# Git
git add .
git commit -m "Your message"
git push
```

---

## 📁 File Structure Quick Reference

```
src/
├── data/hospitals.js           # All mock data
├── context/AppContext.jsx      # Global state management
├── routes.jsx                  # Route definitions
├── pages/
│   ├── Home.jsx               # Landing page
│   ├── Search.jsx             # Search results with filters
│   ├── HospitalDetail.jsx     # Single hospital view
│   ├── Compare.jsx            # Side-by-side comparison
│   ├── Dashboard.jsx          # User dashboard
│   └── QRProfile.jsx          # QR code generator
```

---

## 🔑 Key Features & Where to Find Them

| Feature | File | Key Functions |
|---------|------|---------------|
| Search & Filter | `Search.jsx` | Treatment search, distance/rating filters |
| Cost Comparison | `Search.jsx`, `Compare.jsx` | Display min/max costs |
| Save Hospitals | `AppContext.jsx` | `saveHospital()`, `isSaved()` |
| Compare List | `AppContext.jsx` | `addToCompare()`, `removeFromCompare()` |
| QR Generation | `QRProfile.jsx` | `QRCode` component, download/share |
| User Profile | `AppContext.jsx` | `updateUserProfile()` |

---

## 🎨 Tailwind CSS Classes Used

**Colors:**
- `bg-blue-600` - Primary blue
- `bg-green-600` - Success/best price
- `bg-red-600` - Emergency/delete
- `bg-purple-600` - Compare feature
- `bg-gray-50` - Background

**Common Patterns:**
```jsx
// Card
<div className="bg-white rounded-xl shadow-lg p-6">

// Button Primary
<button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">

// Badge
<span className="bg-blue-100 text-blue-700 text-xs px-3 py-1 rounded-full">
```

---

## 🔄 State Management (AppContext)

### Available Functions:

```javascript
// Saved Hospitals
saveHospital(hospital)          // Toggle save
isSaved(hospitalId)            // Check if saved
savedHospitals                 // Array of saved hospitals

// Compare List
addToCompare(hospital)         // Add to compare (max 4)
removeFromCompare(hospitalId)  // Remove from compare
clearCompare()                 // Clear all
isInCompare(hospitalId)        // Check if in compare
compareList                    // Array of hospitals to compare

// User Profile
updateUserProfile(profile)     // Save user profile
userProfile                    // Current user profile

// Search History
addSearchHistory(term)         // Add search term
searchHistory                  // Array of recent searches
```

### Usage in Components:

```javascript
import { useApp } from '../context/AppContext';

function MyComponent() {
  const { saveHospital, isSaved, compareList } = useApp();
  
  // Use the functions
  return (
    <button onClick={() => saveHospital(hospital)}>
      {isSaved(hospital.id) ? 'Saved' : 'Save'}
    </button>
  );
}
```

---

## 📊 Data Structure

### Hospital Object:
```javascript
{
  id: 1,
  name: "Apollo Hospital",
  location: "Bangalore",
  distance: 2.3,
  rating: 4.5,
  emergency: true,
  insurance: true,
  nabh: true,
  facilities: ["ICU", "NICU", "OT"],
  contact: "+91-80-2692-2222",
  email: "info@apollo.com",
  address: "Full address...",
  beds: 300,
  ambulance: true,
  parking: true,
  pharmacy: true,
  bloodBank: true
}
```

### Treatment Object:
```javascript
{
  id: 1,
  name: "Appendix Surgery",
  category: "Surgery",
  description: "...",
  duration: "1-2 hours",
  recovery: "1-2 weeks",
  costs: [
    { hospitalId: 1, minCost: 35000, maxCost: 50000, doctorId: 1 }
  ]
}
```

### Doctor Object:
```javascript
{
  id: 1,
  name: "Dr. Rajesh Mehta",
  specialization: "General Surgery",
  experience: 12,
  qualification: "MBBS, MS",
  casesHandled: 450,
  rating: 4.6,
  hospitalId: 1,
  availableDays: ["Mon", "Wed", "Fri"]
}
```

---

## 🛣️ Navigation Patterns

```javascript
import { useNavigate } from 'react-router-dom';

const navigate = useNavigate();

// Navigate to routes
navigate('/')                                    // Home
navigate('/search?treatment=Surgery')            // Search with query
navigate(`/hospital/${id}`)                      // Hospital detail
navigate('/compare')                             // Compare page
navigate('/dashboard')                           // Dashboard
navigate('/qr-profile')                          // QR Profile
navigate(-1)                                     // Go back
```

---

## 🎨 Component Patterns

### Standard Page Layout:
```jsx
<div className="min-h-screen bg-gray-50">
  {/* Header */}
  <div className="bg-white shadow-sm">
    <div className="container mx-auto px-4 py-4">
      {/* Header content */}
    </div>
  </div>

  {/* Content */}
  <div className="container mx-auto px-4 py-8">
    {/* Page content */}
  </div>
</div>
```

### Card Component:
```jsx
<div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition">
  <h3 className="text-xl font-bold text-gray-800 mb-4">Title</h3>
  {/* Card content */}
</div>
```

---

## 🔍 Search Parameters

### Reading Query Params:
```javascript
import { useSearchParams } from 'react-router-dom';

const [searchParams] = useSearchParams();
const treatment = searchParams.get('treatment');
const location = searchParams.get('location');
```

### Setting Query Params:
```javascript
navigate(`/search?treatment=${treatment}&location=${location}`);
```

---

## 💾 Local Storage Keys

```javascript
'savedHospitals'    // Array of saved hospitals
'compareList'       // Array of hospitals in compare
'userProfile'       // User profile object
'searchHistory'     // Array of search terms
```

---

## 🎯 Common Tasks

### Add a New Page:
1. Create `src/pages/NewPage.jsx`
2. Add route in `src/routes.jsx`
3. Add navigation links

### Add More Mock Data:
1. Edit `src/data/hospitals.js`
2. Add to `hospitals`, `treatments`, or `doctors` arrays

### Modify Colors/Theme:
1. Edit `tailwind.config.js` for theme colors
2. Use Tailwind classes throughout components

### Add New Filter:
1. Add state in `Search.jsx`
2. Update filter logic in `useEffect`
3. Add UI control in filters sidebar

---

## 🐛 Debugging Tips

```javascript
// Check state
console.log('Saved Hospitals:', savedHospitals);
console.log('Compare List:', compareList);

// Check local storage
console.log(localStorage.getItem('savedHospitals'));

// React DevTools
// Install React DevTools browser extension
```

---

## 📱 Responsive Breakpoints (Tailwind)

```
sm:  640px   // Small tablets
md:  768px   // Tablets
lg:  1024px  // Desktops
xl:  1280px  // Large desktops
```

Usage:
```jsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
```

---

## 🚀 Performance Tips

1. **Images**: Use placeholder images or optimize with WebP
2. **Lazy Loading**: Implement for routes (already done by React Router)
3. **Memoization**: Use `useMemo` for expensive calculations
4. **Code Splitting**: Vite handles this automatically

---

## 🔧 Customization Ideas

- Add more hospitals and treatments
- Implement actual map integration (Google Maps API)
- Add appointment booking flow
- Create admin panel for data management
- Add user authentication
- Implement review submission
- Add payment gateway for booking
- Create mobile app version

---

## 📞 Quick Links

- **Repository**: https://github.com/ritheshhebbar/isedept
- **Live Demo**: (Deploy and add URL)
- **Documentation**: See README.md
- **Deployment**: See DEPLOYMENT.md

---

**💡 Pro Tip:** Keep this file open while developing for quick reference!
