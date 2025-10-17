# MediLink - Healthcare Management Platform

A comprehensive healthcare management system built with the MERN stack, connecting patients with healthcare providers through an intuitive interface.

## 🚀 Features

### For Patients
- **Dashboard**: View health overview, upcoming appointments, and medical records
- **Appointment Management**: Book, view, and manage appointments with doctors
- **Medical Records**: Upload, view, and manage medical documents securely
- **Find Doctors**: Search and filter doctors by specialty, location, and availability
- **Health Tracking**: Monitor vital health statistics
- **Profile Management**: Manage personal information and settings

### For Hospitals/Clinics
- **Dashboard**: Overview of daily operations, appointments, and revenue
- **Patient Management**: Manage patient records and information
- **Appointment Scheduling**: View and manage all appointments
- **Department Analytics**: Track performance across departments
- **Staff Management**: Manage doctors and staff members

### General Features
- **Responsive Design**: Fully responsive UI that works on all devices
- **Modern UI/UX**: Clean, professional interface with Tailwind CSS
- **Secure Authentication**: Separate login for patients and healthcare providers
- **Real-time Updates**: Dynamic data updates and notifications
- **Form Validation**: Comprehensive input validation for all forms

## 🛠️ Tech Stack

### Frontend
- **React.js** (v19.2.0) - UI framework
- **React Router DOM** (v7.9.4) - Navigation and routing
- **Tailwind CSS** (v3.4.1) - Styling framework
- **React Scripts** (v5.0.1) - Build tools

### Styling
- Custom Tailwind configuration with healthcare-focused color palette
- Responsive design breakpoints
- Reusable UI components (Button, Input, Card, Modal, Badge, etc.)
- Custom utility classes for common patterns

## 📁 Project Structure

```
frontend/
├── public/
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
├── src/
│   ├── Components/
│   │   ├── Navbar.jsx                 # Main navigation component
│   │   ├── Footer.jsx                 # Footer component
│   │   ├── Sidebar.jsx                # Sidebar navigation
│   │   ├── UIComponents.jsx           # Reusable UI components
│   │   ├── PatientDashboard.jsx       # Patient dashboard
│   │   └── HospitalDashboard.jsx      # Hospital dashboard
│   ├── Pages/
│   │   ├── Home.jsx                   # Landing page
│   │   ├── Login.jsx                  # Login page
│   │   ├── SignUp.jsx                 # Registration page
│   │   ├── PatientAppointments.jsx    # Appointments management
│   │   ├── MedicalRecords.jsx         # Medical records viewer
│   │   └── FindDoctors.jsx            # Doctor search and listing
│   ├── App.js                         # Main app with routing
│   ├── App.css                        # Application styles
│   ├── index.js                       # Entry point
│   └── index.css                      # Global styles with Tailwind
├── tailwind.config.js                 # Tailwind configuration
├── postcss.config.js                  # PostCSS configuration
└── package.json                       # Dependencies and scripts
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   cd frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm eject` - Ejects from Create React App (one-way operation)

## 🎨 Design System

### Color Palette
- **Primary**: Blue shades (#1890ff to #002766)
- **Secondary**: Indigo shades (#2f54eb to #030852)
- **Success**: #52c41a
- **Warning**: #faad14
- **Error**: #f5222d
- **Info**: #1890ff

### Components
- **Button**: Primary, Secondary, Outline, Danger, Success variants
- **Input**: Text, Email, Password, Date, Tel with validation
- **Select**: Dropdown with custom styling
- **Card**: Container with shadow and hover effects
- **Badge**: Status indicators with multiple variants
- **Modal**: Overlay dialogs with multiple sizes
- **Alert**: Success, Error, Warning, Info notifications
- **LoadingSpinner**: Animated loading indicator

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🔐 Authentication Flow

1. User selects account type (Patient/Hospital)
2. Enters credentials or registers
3. Form validation checks inputs
4. On success, redirects to appropriate dashboard
5. Session management (to be implemented with backend)

## 🗺️ Routes

### Public Routes
- `/` - Home/Landing page
- `/login` - Login page
- `/signup` - Registration page

### Patient Routes
- `/patient/dashboard` - Patient dashboard
- `/patient/appointments` - Appointments management
- `/patient/records` - Medical records
- `/patient/doctors` - Find doctors

### Hospital Routes
- `/hospital/dashboard` - Hospital dashboard
- `/hospital/patients` - Patient management
- `/hospital/appointments` - Appointment management
- `/hospital/analytics` - Analytics and reports

## 🎯 Key Features Implementation

### Dashboard
- Real-time statistics cards
- Upcoming appointments list
- Quick action buttons
- Recent activity feed
- Health metrics visualization

### Appointments
- Calendar view (to be enhanced)
- Filter by status (All, Confirmed, Pending, Completed)
- Detailed appointment cards
- Book new appointments
- Cancel/reschedule functionality

### Medical Records
- Category-based filtering
- Upload new records
- View/Download documents
- Secure storage indicators
- Search functionality

### Doctor Search
- Advanced search with filters
- Specialty and location filters
- Doctor profiles with ratings
- Availability status
- Direct booking integration

## 🔄 State Management

Currently using React hooks (useState, useEffect) for local state management. For production, consider:
- Redux/Redux Toolkit for global state
- React Query for server state
- Context API for theme/auth state

## 🚧 Future Enhancements

- [ ] Backend API integration
- [ ] Real-time chat with doctors
- [ ] Video consultation feature
- [ ] Payment gateway integration
- [ ] Email/SMS notifications
- [ ] Advanced analytics dashboard
- [ ] Mobile app (React Native)
- [ ] Multi-language support
- [ ] Dark mode
- [ ] Prescription management
- [ ] Lab results integration
- [ ] Emergency services
- [ ] Insurance integration

## 📝 Development Notes

### Best Practices Followed
- Component-based architecture
- Reusable UI components
- Consistent naming conventions
- Responsive design first approach
- Accessibility considerations
- Form validation
- Error handling
- Loading states

### Code Style
- Functional components with hooks
- Arrow functions for component definition
- Destructuring for props
- Consistent file naming (PascalCase for components)
- Organized imports

## 🤝 Contributing

This is a project for Y3S1-WE-09. For contributions:
1. Create feature branches
2. Follow existing code style
3. Test thoroughly before committing
4. Document new features

## 📄 License

This project is part of an academic assignment for Y3S1-WE-09.

## 👥 Team

- Project: MediLink Healthcare Platform
- Course: Y3S1-WE-09
- Branch: IT23187450

## 📧 Support

For issues or questions, please refer to the project documentation or contact the development team.

---

**Note**: This is a frontend implementation. Backend API integration is required for full functionality. All data is currently mocked for demonstration purposes.
