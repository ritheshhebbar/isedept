# 🏥 MediCompare+ - Hospital Comparison & Medical Information Platform

[![React](https://img.shields.io/badge/React-18-blue.svg)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5-purple.svg)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-teal.svg)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

**MediCompare+** is a comprehensive healthcare platform that empowers patients to make informed decisions by comparing hospital costs, quality ratings, doctor expertise, and facilities. Built for hackathons and real-world use.

## 🌟 Features

### Core Features
- ✅ **Smart Search** - Find treatments and hospitals with advanced filtering
- ✅ **Cost Comparison** - Compare treatment costs across multiple hospitals
- ✅ **Hospital Details** - View comprehensive information about facilities and amenities
- ✅ **Side-by-Side Comparison** - Compare up to 4 hospitals simultaneously
- ✅ **Doctor Profiles** - View qualifications, experience, and patient reviews
- ✅ **QR Medical Profile** - Generate and share your medical information via QR code
- ✅ **User Dashboard** - Save favorite hospitals and track search history
- ✅ **Reviews & Ratings** - Read patient experiences and ratings

### Additional Features
- 🚨 **Emergency Mode** - Quick access to nearest emergency hospitals
- 💳 **Insurance Checker** - Verify insurance acceptance
- 📍 **Location-Based Search** - Find hospitals by distance
- ⭐ **NABH Accreditation** - Filter by quality certifications
- 📱 **Mobile Responsive** - Works perfectly on all devices
- 💾 **Local Storage** - Persist user data without backend

## 🚀 Quick Start

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- Git

### Installation

```bash
# Clone the repository
git clone https://github.com/ritheshhebbar/isedept.git
cd isedept

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be available at `http://localhost:5173/`

### Build for Production

```bash
# Create production build
npm run build

# Preview production build
npm run preview
```

## 📂 Project Structure

```
medicompare-plus/
├── src/
│   ├── components/        # Reusable UI components (future)
│   ├── context/          # React Context for state management
│   │   └── AppContext.jsx
│   ├── data/             # Mock data and constants
│   │   └── hospitals.js
│   ├── pages/            # Page components
│   │   ├── Home.jsx
│   │   ├── Search.jsx
│   │   ├── HospitalDetail.jsx
│   │   ├── Compare.jsx
│   │   ├── Dashboard.jsx
│   │   └── QRProfile.jsx
│   ├── App.jsx           # Main App component
│   ├── routes.jsx        # Route definitions
│   ├── main.jsx          # App entry point
│   └── index.css         # Global styles with Tailwind
├── public/               # Static assets
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## 🎨 Technology Stack

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **Icons**: Lucide React
- **QR Code**: qrcode.react
- **State Management**: React Context API

## 📱 Key Pages & Routes

| Route | Page | Description |
|-------|------|-------------|
| `/` | Home | Landing page with search and popular treatments |
| `/search` | Search Results | Filtered hospital results with sorting options |
| `/hospital/:id` | Hospital Detail | Comprehensive hospital information |
| `/compare` | Compare Hospitals | Side-by-side comparison of up to 4 hospitals |
| `/dashboard` | User Dashboard | Saved hospitals and search history |
| `/qr-profile` | QR Profile | Generate medical QR code for emergencies |

## 🔑 Key Features Explained

### 1. Smart Search & Filters
- Search by treatment name
- Filter by distance, rating, insurance, emergency services, NABH accreditation
- Sort by cost, distance, or rating
- Real-time results update

### 2. Cost Transparency
- View minimum and maximum treatment costs
- Compare costs across multiple hospitals
- Cost breakdown with doctor information
- Identify best value options

### 3. QR Medical Profile
- Create a QR code with essential medical information
- Include allergies, medications, emergency contacts
- Download and share your QR code
- Quick access for healthcare providers in emergencies

### 4. Hospital Comparison
- Compare up to 4 hospitals simultaneously
- Side-by-side feature comparison
- Visual indicators for available amenities
- Easy-to-read comparison table

## 📊 Sample Data

The application includes comprehensive sample data:
- **4 Hospitals** with detailed information
- **8 Treatments** across various specialties
- **24 Doctors** with qualifications and experience
- **Insurance Providers** information
- **Patient Reviews** and ratings

## 🎯 Use Cases

1. **Cost-Conscious Patients**: Compare treatment costs to find affordable options
2. **Emergency Situations**: Quick access to nearest hospitals with emergency services
3. **Medical Tourists**: Research hospitals and plan medical visits
4. **Insurance Verification**: Check which hospitals accept your insurance
5. **Quality Assurance**: Filter by NABH accreditation and patient ratings

## 🛠️ Development

### Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

### Adding New Features

1. **Add New Pages**: Create component in `src/pages/` and add route in `src/routes.jsx`
2. **Add Mock Data**: Update `src/data/hospitals.js`
3. **Global State**: Use `AppContext` in `src/context/AppContext.jsx`

## 🔐 Privacy & Security

- All data is stored locally in browser's localStorage
- No backend or external API calls
- QR code data is generated client-side
- No personal information is transmitted over the network

## 🚧 Future Enhancements

- [ ] Real-time availability checking
- [ ] Online appointment booking
- [ ] Integration with actual hospital APIs
- [ ] User authentication
- [ ] Review submission with photo uploads
- [ ] Map integration for navigation
- [ ] Multi-language support
- [ ] Dark mode
- [ ] PWA support for offline access
- [ ] Push notifications for appointments

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Authors

- **Your Name** - *Initial work* - [ritheshhebbar](https://github.com/ritheshhebbar)

## 🙏 Acknowledgments

- Icons by [Lucide](https://lucide.dev/)
- UI inspiration from modern healthcare platforms
- Mock data based on general hospital information

## 📞 Support

For support, email your-email@example.com or create an issue in the repository.

## 🌟 Show Your Support

Give a ⭐️ if this project helped you!

---

**Built with ❤️ for better healthcare accessibility**
