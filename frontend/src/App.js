import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';

// Auth Pages
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';

// Patient Pages
import PatientDashboard from './Components/PatientDashboard';
import PatientAppointments from './Pages/PatientAppointments';
import MedicalRecords from './Pages/MedicalRecords';
import FindDoctors from './Pages/FindDoctors';
import AppointmentBooking from './Pages/AppointmentBooking';
import DoctorProfile from './Pages/DoctorProfile';

// Hospital Pages
import HospitalDashboard from './Components/HospitalDashboard';
import HospitalPatients from './Pages/HospitalPatients';
import HospitalAddPatient from './Pages/HospitalAddPatient';
import HospitalAppointments from './Pages/HospitalAppointments';
import HospitalAddAppointment from './Pages/HospitalAddAppointment';
import HospitalAnalytics from './Pages/HospitalAnalytics';
import HospitalSettings from './Pages/HospitalSettings';
import HospitalDoctors from './Pages/HospitalDoctors';

// Landing Page
import Home from './Pages/Home';

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        
        {/* Patient Routes */}
        <Route path="/patient/dashboard" element={<PatientDashboard />} />
        <Route path="/patient/appointments" element={<PatientAppointments />} />
  <Route path="/patient/appointments/new" element={<AppointmentBooking />} />
        <Route path="/patient/records" element={<MedicalRecords />} />
  <Route path="/patient/doctors" element={<FindDoctors />} />
  <Route path="/patient/doctors/:id" element={<DoctorProfile />} />
        
        {/* Hospital Routes */}
        <Route path="/hospital/dashboard" element={<HospitalDashboard />} />
        <Route path="/hospital/patients" element={<HospitalPatients />} />
        <Route path="/hospital/patients/new" element={<HospitalAddPatient />} />
        <Route path="/hospital/appointments" element={<HospitalAppointments />} />
        <Route path="/hospital/appointments/new" element={<HospitalAddAppointment />} />
        <Route path="/hospital/analytics" element={<HospitalAnalytics />} />
        <Route path="/hospital/settings" element={<HospitalSettings />} />
        <Route path="/hospital/doctors" element={<HospitalDoctors />} />
        
        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}


export default App;
