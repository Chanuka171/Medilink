import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, Badge, Button } from './UIComponents';
import Navbar from './Navbar';
import Footer from './Footer';

const PatientDashboard = () => {
  const [patient] = useState({
    name: 'John Doe',
    id: 'P12345',
    age: 32,
    bloodGroup: 'O+',
    phone: '+1 (555) 123-4567',
    email: 'john.doe@example.com',
  });

  const upcomingAppointments = [
    {
      id: 1,
      doctor: 'Dr. Sarah Johnson',
      specialty: 'Cardiology',
      date: '2025-10-20',
      time: '10:00 AM',
      type: 'Checkup',
      status: 'confirmed',
    },
    {
      id: 2,
      doctor: 'Dr. Michael Chen',
      specialty: 'General Physician',
      date: '2025-10-25',
      time: '2:30 PM',
      type: 'Follow-up',
      status: 'pending',
    },
  ];

  const recentRecords = [
    {
      id: 1,
      title: 'Blood Test Report',
      date: '2025-10-15',
      doctor: 'Dr. Sarah Johnson',
      type: 'Lab Report',
    },
    {
      id: 2,
      title: 'X-Ray Chest',
      date: '2025-10-10',
      doctor: 'Dr. Michael Chen',
      type: 'Imaging',
    },
    {
      id: 3,
      title: 'Prescription',
      date: '2025-10-08',
      doctor: 'Dr. Sarah Johnson',
      type: 'Prescription',
    },
  ];

  const healthStats = [
    { label: 'Blood Pressure', value: '120/80', unit: 'mmHg', trend: 'normal', icon: '❤️' },
    { label: 'Heart Rate', value: '72', unit: 'bpm', trend: 'normal', icon: '💓' },
    { label: 'Weight', value: '75', unit: 'kg', trend: 'down', icon: '⚖️' },
    { label: 'Temperature', value: '98.6', unit: '°F', trend: 'normal', icon: '🌡️' },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'confirmed': return 'success';
      case 'pending': return 'warning';
      case 'completed': return 'info';
      default: return 'default';
    }
  };

  const getTrendIcon = (trend) => {
    switch (trend) {
      case 'up': return '↗️';
      case 'down': return '↘️';
      default: return '→';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar userType="patient" />
      
      <div className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Welcome Section */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Welcome back, {patient.name}!</h1>
            <p className="mt-2 text-gray-600">Here's your health overview for today</p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card className="bg-gradient-to-br from-primary-500 to-primary-700 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-primary-100 text-sm">Total Appointments</p>
                  <p className="text-3xl font-bold mt-2">24</p>
                </div>
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </Card>

            <Card className="bg-gradient-to-br from-green-500 to-green-700 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-green-100 text-sm">Medical Records</p>
                  <p className="text-3xl font-bold mt-2">18</p>
                </div>
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 2a2 2 0 00-2 2v8a2 2 0 002 2h6a2 2 0 002-2V6.414A2 2 0 0016.414 5L14 2.586A2 2 0 0012.586 2H9z" />
                    <path d="M3 8a2 2 0 012-2v10h8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" />
                  </svg>
                </div>
              </div>
            </Card>

            <Card className="bg-gradient-to-br from-orange-500 to-orange-700 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-orange-100 text-sm">Active Prescriptions</p>
                  <p className="text-3xl font-bold mt-2">5</p>
                </div>
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </Card>

            <Card className="bg-gradient-to-br from-purple-500 to-purple-700 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-100 text-sm">Health Score</p>
                  <p className="text-3xl font-bold mt-2">85%</p>
                </div>
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                  </svg>
                </div>
              </div>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-6">
              {/* Upcoming Appointments */}
              <Card>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-gray-900">Upcoming Appointments</h2>
                  <Link to="/patient/appointments">
                    <Button variant="outline" size="sm">View All</Button>
                  </Link>
                </div>
                <div className="space-y-4">
                  {upcomingAppointments.map((appointment) => (
                    <div
                      key={appointment.id}
                      className="border border-gray-200 rounded-lg p-4 hover:border-primary-300 hover:shadow-md transition-all"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                              <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                              </svg>
                            </div>
                            <div>
                              <h3 className="font-semibold text-gray-900">{appointment.doctor}</h3>
                              <p className="text-sm text-gray-600">{appointment.specialty}</p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-4 text-sm text-gray-600 ml-15">
                            <div className="flex items-center">
                              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                              </svg>
                              {new Date(appointment.date).toLocaleDateString()}
                            </div>
                            <div className="flex items-center">
                              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              {appointment.time}
                            </div>
                          </div>
                        </div>
                        <Badge variant={getStatusColor(appointment.status)}>
                          {appointment.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Health Statistics */}
              <Card>
                <h2 className="text-xl font-bold text-gray-900 mb-6">Health Statistics</h2>
                <div className="grid grid-cols-2 gap-4">
                  {healthStats.map((stat, index) => (
                    <div
                      key={index}
                      className="border border-gray-200 rounded-lg p-4 hover:border-primary-300 transition-all"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-2xl">{stat.icon}</span>
                        <span className="text-xl">{getTrendIcon(stat.trend)}</span>
                      </div>
                      <p className="text-sm text-gray-600">{stat.label}</p>
                      <p className="text-2xl font-bold text-gray-900 mt-1">
                        {stat.value} <span className="text-sm font-normal text-gray-500">{stat.unit}</span>
                      </p>
                    </div>
                  ))}
                </div>
              </Card>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              {/* Quick Actions */}
              <Card>
                <h2 className="text-xl font-bold text-gray-900 mb-4">Quick Actions</h2>
                <div className="space-y-3">
                  <Link to="/patient/appointments/new">
                    <Button variant="primary" className="w-full justify-center">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                      </svg>
                      Book Appointment
                    </Button>
                  </Link>
                  <Link to="/patient/doctors">
                    <Button variant="outline" className="w-full justify-center">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                      Find Doctors
                    </Button>
                  </Link>
                  <Link to="/patient/records">
                    <Button variant="outline" className="w-full justify-center">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      View Records
                    </Button>
                  </Link>
                </div>
              </Card>

              {/* Recent Medical Records */}
              <Card>
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-bold text-gray-900">Recent Records</h2>
                  <Link to="/patient/records" className="text-sm text-primary-600 hover:text-primary-700 font-medium">
                    View All
                  </Link>
                </div>
                <div className="space-y-3">
                  {recentRecords.map((record) => (
                    <div
                      key={record.id}
                      className="border border-gray-200 rounded-lg p-3 hover:border-primary-300 cursor-pointer transition-all"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className="font-medium text-gray-900 text-sm">{record.title}</h3>
                          <p className="text-xs text-gray-600 mt-1">{record.doctor}</p>
                          <p className="text-xs text-gray-500 mt-1">
                            {new Date(record.date).toLocaleDateString()}
                          </p>
                        </div>
                        <Badge variant="info" className="text-xs">{record.type}</Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Profile Summary */}
              <Card className="bg-gradient-to-br from-primary-50 to-blue-50">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Profile Summary</h2>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Patient ID</span>
                    <span className="text-sm font-medium text-gray-900">{patient.id}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Age</span>
                    <span className="text-sm font-medium text-gray-900">{patient.age} years</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Blood Group</span>
                    <Badge variant="danger">{patient.bloodGroup}</Badge>
                  </div>
                  <Link to="/patient/settings">
                    <Button variant="outline" size="sm" className="w-full mt-4">
                      Edit Profile
                    </Button>
                  </Link>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PatientDashboard;
