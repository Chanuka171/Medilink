import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, Badge, Button, Input, Select } from '../Components/UIComponents';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const FindDoctors = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');

  const doctors = [
    {
      id: 1,
      name: 'Dr. Sarah Johnson',
      specialty: 'Cardiology',
      experience: '15 years',
      hospital: 'Central Medical Center',
      location: 'New York',
      rating: 4.9,
      reviews: 234,
      availability: 'Available Today',
      consultationFee: '$150',
      image: '👩‍⚕️',
      about: 'Specialized in cardiovascular diseases and interventional cardiology.',
    },
    {
      id: 2,
      name: 'Dr. Michael Chen',
      specialty: 'General Physician',
      experience: '10 years',
      hospital: 'City Hospital',
      location: 'Los Angeles',
      rating: 4.7,
      reviews: 189,
      availability: 'Tomorrow',
      consultationFee: '$100',
      image: '👨‍⚕️',
      about: 'Expert in general medicine and preventive healthcare.',
    },
    {
      id: 3,
      name: 'Dr. Emily Rodriguez',
      specialty: 'Dermatology',
      experience: '8 years',
      hospital: 'Skin Care Clinic',
      location: 'Chicago',
      rating: 4.8,
      reviews: 156,
      availability: 'Available Today',
      consultationFee: '$120',
      image: '👩‍⚕️',
      about: 'Specialized in skin disorders, cosmetic dermatology, and laser treatments.',
    },
    {
      id: 4,
      name: 'Dr. James Wilson',
      specialty: 'Orthopedics',
      experience: '12 years',
      hospital: 'Sports Medicine Center',
      location: 'Miami',
      rating: 4.9,
      reviews: 298,
      availability: 'Available Today',
      consultationFee: '$180',
      image: '👨‍⚕️',
      about: 'Expert in sports injuries, joint replacement, and spine surgery.',
    },
    {
      id: 5,
      name: 'Dr. Lisa Anderson',
      specialty: 'Pediatrics',
      experience: '13 years',
      hospital: 'Children\'s Hospital',
      location: 'Boston',
      rating: 5.0,
      reviews: 412,
      availability: 'Tomorrow',
      consultationFee: '$110',
      image: '👩‍⚕️',
      about: 'Dedicated to child healthcare, vaccination, and developmental pediatrics.',
    },
    {
      id: 6,
      name: 'Dr. Robert Taylor',
      specialty: 'Neurology',
      experience: '18 years',
      hospital: 'Brain & Spine Institute',
      location: 'San Francisco',
      rating: 4.8,
      reviews: 267,
      availability: 'Next Week',
      consultationFee: '$200',
      image: '👨‍⚕️',
      about: 'Specialist in neurological disorders, stroke, and epilepsy treatment.',
    },
  ];

  const specialties = [
    { value: '', label: 'All Specialties' },
    { value: 'Cardiology', label: 'Cardiology' },
    { value: 'General Physician', label: 'General Physician' },
    { value: 'Dermatology', label: 'Dermatology' },
    { value: 'Orthopedics', label: 'Orthopedics' },
    { value: 'Pediatrics', label: 'Pediatrics' },
    { value: 'Neurology', label: 'Neurology' },
  ];

  const locations = [
    { value: '', label: 'All Locations' },
    { value: 'New York', label: 'New York' },
    { value: 'Los Angeles', label: 'Los Angeles' },
    { value: 'Chicago', label: 'Chicago' },
    { value: 'Miami', label: 'Miami' },
    { value: 'Boston', label: 'Boston' },
    { value: 'San Francisco', label: 'San Francisco' },
  ];

  const filteredDoctors = doctors.filter(doctor => {
    const matchesSearch = doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doctor.hospital.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSpecialty = !selectedSpecialty || doctor.specialty === selectedSpecialty;
    const matchesLocation = !selectedLocation || doctor.location === selectedLocation;
    return matchesSearch && matchesSpecialty && matchesLocation;
  });

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar userType="patient" />
      
      <div className="flex-1">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold mb-4">Find Your Perfect Doctor</h1>
            <p className="text-xl text-primary-100">Book appointments with top healthcare professionals</p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Search and Filters */}
          <Card className="mb-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="md:col-span-2">
                <Input
                  placeholder="Search by doctor name, specialty, or hospital"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full"
                />
              </div>
              <Select
                value={selectedSpecialty}
                onChange={(e) => setSelectedSpecialty(e.target.value)}
                options={specialties}
                placeholder="Specialty"
              />
              <Select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                options={locations}
                placeholder="Location"
              />
            </div>
          </Card>

          {/* Results Count */}
          <div className="mb-6">
            <p className="text-gray-600">
              Found <span className="font-semibold text-gray-900">{filteredDoctors.length}</span> doctors
            </p>
          </div>

          {/* Doctors Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredDoctors.map((doctor) => (
              <Card key={doctor.id} className="hover:shadow-xl transition-shadow">
                <div className="flex items-start space-x-4">
                  {/* Doctor Avatar */}
                  <div className="w-24 h-24 bg-gradient-to-br from-primary-400 to-primary-600 rounded-xl flex items-center justify-center text-4xl flex-shrink-0 shadow-lg">
                    {doctor.image}
                  </div>

                  {/* Doctor Info */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{doctor.name}</h3>
                        <p className="text-primary-600 font-medium">{doctor.specialty}</p>
                      </div>
                      <Badge variant="success">{doctor.availability}</Badge>
                    </div>

                    <div className="flex items-center mb-2">
                      <div className="flex items-center mr-4">
                        <svg className="w-5 h-5 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <span className="font-semibold text-gray-900">{doctor.rating}</span>
                        <span className="text-gray-600 ml-1">({doctor.reviews})</span>
                      </div>
                      <span className="text-gray-600">• {doctor.experience} exp.</span>
                    </div>

                    <div className="space-y-1 mb-3">
                      <div className="flex items-center text-sm text-gray-600">
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                        {doctor.hospital}
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {doctor.location}
                      </div>
                    </div>

                    <p className="text-sm text-gray-600 mb-3 line-clamp-2">{doctor.about}</p>

                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-600">Consultation Fee</p>
                        <p className="text-xl font-bold text-primary-600">{doctor.consultationFee}</p>
                      </div>
                      <div className="flex space-x-2">
                        <Link to={`/patient/doctors/${doctor.id}`}>
                          <Button variant="outline" size="sm">
                            View Profile
                          </Button>
                        </Link>
                        <Link to={`/patient/appointments/new?doctor=${doctor.id}`}>
                          <Button variant="primary" size="sm">
                            Book Now
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {filteredDoctors.length === 0 && (
            <Card className="text-center py-12">
              <svg className="w-16 h-16 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No doctors found</h3>
              <p className="text-gray-600 mb-4">Try adjusting your search or filters</p>
              <Button variant="primary" onClick={() => {
                setSearchTerm('');
                setSelectedSpecialty('');
                setSelectedLocation('');
              }}>
                Clear Filters
              </Button>
            </Card>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default FindDoctors;
