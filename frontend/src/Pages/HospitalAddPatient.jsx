import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const HospitalAddPatient = () => (
  <div className="min-h-screen bg-gray-50 flex flex-col">
    <Navbar userType="hospital" />
    <div className="flex-1 flex items-center justify-center">
      <h1 className="text-3xl font-bold text-gray-900">Add New Patient Page</h1>
    </div>
    <Footer />
  </div>
);
export default HospitalAddPatient;
