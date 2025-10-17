import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { Card, Badge, Button, Input, Select } from '../Components/UIComponents';

const HospitalDoctors = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterDepartment, setFilterDepartment] = useState('all');
  const [filterAvailability, setFilterAvailability] = useState('all');

  const mockDoctors = [
    {
      id: 'DOC001',
      name: 'Dr. Sarah Johnson',
      specialty: 'Cardiology',
      qualifications: 'MBBS, MD, DM (Cardiology)',
      experience: '15 years',
      phone: '+1 234-567-8901',
      email: 'sarah.johnson@medilink.com',
      rating: 4.9,
      patients: 245,
      availability: 'Available',
      schedule: 'Mon-Fri, 9:00 AM - 5:00 PM',
      image: null,
    },
    {
      id: 'DOC002',
      name: 'Dr. Michael Chen',
      specialty: 'General Medicine',
      qualifications: 'MBBS, MD (Internal Medicine)',
      experience: '12 years',
      phone: '+1 234-567-8902',
      email: 'michael.chen@medilink.com',
      rating: 4.8,
      patients: 389,
      availability: 'Available',
      schedule: 'Mon-Sat, 8:00 AM - 4:00 PM',
      image: null,
    },
    {
      id: 'DOC003',
      name: 'Dr. Emily Rodriguez',
      specialty: 'Dermatology',
      qualifications: 'MBBS, MD (Dermatology)',
      experience: '10 years',
      phone: '+1 234-567-8903',
      email: 'emily.rodriguez@medilink.com',
      rating: 4.9,
      patients: 156,
      availability: 'On Leave',
      schedule: 'Tue-Sat, 10:00 AM - 6:00 PM',
      image: null,
    },
    {
      id: 'DOC004',
      name: 'Dr. James Wilson',
      specialty: 'Orthopedics',
      qualifications: 'MBBS, MS (Orthopedics)',
      experience: '18 years',
      phone: '+1 234-567-8904',
      email: 'james.wilson@medilink.com',
      rating: 4.7,
      patients: 198,
      availability: 'Available',
      schedule: 'Mon-Fri, 9:00 AM - 5:00 PM',
      image: null,
    },
    {
      id: 'DOC005',
      name: 'Dr. Robert Taylor',
      specialty: 'Neurology',
      qualifications: 'MBBS, MD, DM (Neurology)',
      experience: '20 years',
      phone: '+1 234-567-8905',
      email: 'robert.taylor@medilink.com',
      rating: 5.0,
      patients: 123,
      availability: 'Available',
      schedule: 'Mon-Thu, 10:00 AM - 4:00 PM',
      image: null,
    },
    {
      id: 'DOC006',
      name: 'Dr. Lisa Anderson',
      specialty: 'Pediatrics',
      qualifications: 'MBBS, MD (Pediatrics)',
      experience: '14 years',
      phone: '+1 234-567-8906',
      email: 'lisa.anderson@medilink.com',
      rating: 5.0,
      patients: 267,
      availability: 'Busy',
      schedule: 'Mon-Sat, 9:00 AM - 5:00 PM',
      image: null,
    },
    {
      id: 'DOC007',
      name: 'Dr. David Martinez',
      specialty: 'Psychiatry',
      qualifications: 'MBBS, MD (Psychiatry)',
      experience: '11 years',
      phone: '+1 234-567-8907',
      email: 'david.martinez@medilink.com',
      rating: 4.8,
      patients: 145,
      availability: 'Available',
      schedule: 'Mon-Fri, 11:00 AM - 7:00 PM',
      image: null,
    },
    {
      id: 'DOC008',
      name: 'Dr. Rachel Kim',
      specialty: 'Gynecology',
      qualifications: 'MBBS, MS (OB/GYN)',
      experience: '13 years',
      phone: '+1 234-567-8908',
      email: 'rachel.kim@medilink.com',
      rating: 4.9,
      patients: 298,
      availability: 'Available',
      schedule: 'Tue-Sat, 9:00 AM - 5:00 PM',
      image: null,
    },
  ];

  const departments = [
    { value: 'all', label: 'All Departments' },
    { value: 'Cardiology', label: 'Cardiology' },
    { value: 'General Medicine', label: 'General Medicine' },
    { value: 'Dermatology', label: 'Dermatology' },
    { value: 'Orthopedics', label: 'Orthopedics' },
    { value: 'Neurology', label: 'Neurology' },
    { value: 'Pediatrics', label: 'Pediatrics' },
    { value: 'Psychiatry', label: 'Psychiatry' },
    { value: 'Gynecology', label: 'Gynecology' },
  ];

  const filteredDoctors = mockDoctors.filter((doctor) => {
    const matchesSearch =
      doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doctor.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesDepartment =
      filterDepartment === 'all' || doctor.specialty === filterDepartment;

    const matchesAvailability =
      filterAvailability === 'all' || doctor.availability === filterAvailability;

    return matchesSearch && matchesDepartment && matchesAvailability;
  });

  const availableDoctors = mockDoctors.filter(d => d.availability === 'Available').length;
  const totalPatients = mockDoctors.reduce((sum, d) => sum + d.patients, 0);
  const averageRating = (mockDoctors.reduce((sum, d) => sum + d.rating, 0) / mockDoctors.length).toFixed(1);

  const getAvailabilityBadge = (availability) => {
    switch (availability) {
      case 'Available':
        return <Badge variant="success">Available</Badge>;
      case 'Busy':
        return <Badge variant="warning">Busy</Badge>;
      case 'On Leave':
        return <Badge variant="error">On Leave</Badge>;
      default:
        return <Badge variant="default">{availability}</Badge>;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar userType="hospital" />
      
      <div className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Doctor Management</h1>
              <p className="mt-2 text-gray-600">Manage hospital doctors and their schedules</p>
            </div>
            <Button variant="primary" size="md" className="mt-4 md:mt-0">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              Add New Doctor
            </Button>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Total Doctors</p>
                  <p className="text-3xl font-bold text-gray-900 mt-1">{mockDoctors.length}</p>
                </div>
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
                  </svg>
                </div>
              </div>
            </Card>

            <Card>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Available Now</p>
                  <p className="text-3xl font-bold text-gray-900 mt-1">{availableDoctors}</p>
                </div>
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </Card>

            <Card>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Total Patients</p>
                  <p className="text-3xl font-bold text-gray-900 mt-1">{totalPatients}</p>
                </div>
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                  </svg>
                </div>
              </div>
            </Card>

            <Card>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Average Rating</p>
                  <p className="text-3xl font-bold text-gray-900 mt-1">{averageRating}</p>
                </div>
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
              </div>
            </Card>
          </div>

          {/* Search and Filters */}
          <Card className="mb-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="md:col-span-2">
                <Input
                  type="text"
                  placeholder="Search by name, ID, or specialty..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  icon={
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  }
                />
              </div>
              <Select
                value={filterDepartment}
                onChange={(e) => setFilterDepartment(e.target.value)}
                options={departments}
              />
              <Select
                value={filterAvailability}
                onChange={(e) => setFilterAvailability(e.target.value)}
                options={[
                  { value: 'all', label: 'All Availability' },
                  { value: 'Available', label: 'Available' },
                  { value: 'Busy', label: 'Busy' },
                  { value: 'On Leave', label: 'On Leave' },
                ]}
              />
            </div>
          </Card>

          {/* Doctor List */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDoctors.length > 0 ? (
              filteredDoctors.map((doctor) => (
                <Card key={doctor.id} className="hover:shadow-lg transition-shadow">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center text-white text-xl font-bold">
                        {doctor.name.split(' ').map((n) => n[0]).join('')}
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900">{doctor.name}</h3>
                        <p className="text-sm text-gray-600">{doctor.id}</p>
                      </div>
                    </div>
                    {getAvailabilityBadge(doctor.availability)}
                  </div>

                  <div className="space-y-3 mb-4">
                    <div className="flex items-start space-x-2">
                      <svg className="w-5 h-5 text-gray-400 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                      <div>
                        <p className="text-sm font-medium text-gray-900">{doctor.specialty}</p>
                        <p className="text-xs text-gray-500">{doctor.qualifications}</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-2">
                      <svg className="w-5 h-5 text-gray-400 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <div>
                        <p className="text-sm text-gray-600">{doctor.experience} experience</p>
                        <p className="text-xs text-gray-500">{doctor.schedule}</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2">
                      <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <p className="text-sm text-gray-600">{doctor.phone}</p>
                    </div>

                    <div className="flex items-center space-x-2">
                      <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <p className="text-sm text-gray-600">{doctor.email}</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-4 pt-4 border-t border-gray-200">
                    <div className="flex items-center space-x-4">
                      <div className="text-center">
                        <p className="text-2xl font-bold text-gray-900">{doctor.rating}</p>
                        <p className="text-xs text-gray-500">Rating</p>
                      </div>
                      <div className="text-center">
                        <p className="text-2xl font-bold text-gray-900">{doctor.patients}</p>
                        <p className="text-xs text-gray-500">Patients</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex space-x-2">
                    <Button variant="primary" size="sm" className="flex-1">
                      View Profile
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      Schedule
                    </Button>
                    <Button variant="outline" size="sm">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                      </svg>
                    </Button>
                  </div>
                </Card>
              ))
            ) : (
              <Card className="col-span-3 text-center py-12">
                <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No doctors found</h3>
                <p className="text-gray-600 mb-6">Try adjusting your search or filter criteria</p>
                <Button
                  variant="outline"
                  size="md"
                  onClick={() => {
                    setSearchTerm('');
                    setFilterDepartment('all');
                    setFilterAvailability('all');
                  }}
                >
                  Clear Filters
                </Button>
              </Card>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default HospitalDoctors;
