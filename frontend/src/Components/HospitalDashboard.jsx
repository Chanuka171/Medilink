import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, Badge, Button } from './UIComponents';
import Navbar from './Navbar';
import Footer from './Footer';

const HospitalDashboard = () => {
  const [hospital] = useState({
    name: 'Central Medical Center',
    id: 'H54321',
    type: 'General Hospital',
    registrationNumber: 'REG-2024-001',
    phone: '+1 (555) 987-6543',
    email: 'contact@centralmedical.com',
  });

  const todayStats = {
    totalAppointments: 45,
    confirmed: 32,
    pending: 8,
    completed: 28,
    cancelled: 5,
    newPatients: 12,
    revenue: '$12,450',
  };

  const recentAppointments = [
    {
      id: 1,
      patient: 'John Doe',
      patientId: 'P12345',
      doctor: 'Dr. Sarah Johnson',
      department: 'Cardiology',
      time: '10:00 AM',
      status: 'confirmed',
      type: 'Checkup',
    },
    {
      id: 2,
      patient: 'Jane Smith',
      patientId: 'P67890',
      doctor: 'Dr. Michael Chen',
      department: 'General Medicine',
      time: '11:30 AM',
      status: 'pending',
      type: 'Consultation',
    },
    {
      id: 3,
      patient: 'Robert Brown',
      patientId: 'P24680',
      doctor: 'Dr. Emily Rodriguez',
      department: 'Dermatology',
      time: '2:00 PM',
      status: 'confirmed',
      type: 'Follow-up',
    },
  ];

  const recentPatients = [
    {
      id: 'P12345',
      name: 'John Doe',
      age: 32,
      bloodGroup: 'O+',
      lastVisit: '2025-10-15',
      status: 'active',
    },
    {
      id: 'P67890',
      name: 'Jane Smith',
      age: 28,
      bloodGroup: 'A+',
      lastVisit: '2025-10-14',
      status: 'active',
    },
    {
      id: 'P24680',
      name: 'Robert Brown',
      age: 45,
      bloodGroup: 'B+',
      lastVisit: '2025-10-13',
      status: 'active',
    },
  ];

  const departmentStats = [
    { name: 'Cardiology', patients: 24, appointments: 32, icon: '❤️' },
    { name: 'General Medicine', patients: 38, appointments: 45, icon: '🏥' },
    { name: 'Dermatology', patients: 15, appointments: 20, icon: '👨‍⚕️' },
    { name: 'Orthopedics', patients: 19, appointments: 25, icon: '🦴' },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'confirmed': return 'success';
      case 'pending': return 'warning';
      case 'completed': return 'info';
      case 'cancelled': return 'danger';
      case 'active': return 'success';
      default: return 'default';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar userType="hospital" />
      
      <div className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Welcome Section */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Welcome back, {hospital.name}!</h1>
            <p className="mt-2 text-gray-600">Here's what's happening today</p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card className="bg-gradient-to-br from-blue-500 to-blue-700 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-blue-100 text-sm">Today's Appointments</p>
                  <p className="text-3xl font-bold mt-2">{todayStats.totalAppointments}</p>
                  <p className="text-blue-100 text-xs mt-1">{todayStats.confirmed} confirmed</p>
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
                  <p className="text-green-100 text-sm">Total Patients</p>
                  <p className="text-3xl font-bold mt-2">1,247</p>
                  <p className="text-green-100 text-xs mt-1">+{todayStats.newPatients} new today</p>
                </div>
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                  </svg>
                </div>
              </div>
            </Card>

            <Card className="bg-gradient-to-br from-purple-500 to-purple-700 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-100 text-sm">Completed Today</p>
                  <p className="text-3xl font-bold mt-2">{todayStats.completed}</p>
                  <p className="text-purple-100 text-xs mt-1">{todayStats.pending} pending</p>
                </div>
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </Card>

            <Card className="bg-gradient-to-br from-orange-500 to-orange-700 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-orange-100 text-sm">Today's Revenue</p>
                  <p className="text-3xl font-bold mt-2">{todayStats.revenue}</p>
                  <p className="text-orange-100 text-xs mt-1">From {todayStats.completed} appointments</p>
                </div>
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - 2/3 width */}
            <div className="lg:col-span-2 space-y-6">
              {/* Today's Appointments */}
              <Card>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-gray-900">Today's Appointments</h2>
                  <Link to="/hospital/appointments">
                    <Button variant="outline" size="sm">View All</Button>
                  </Link>
                </div>
                <div className="space-y-4">
                  {recentAppointments.map((appointment) => (
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
                              <h3 className="font-semibold text-gray-900">{appointment.patient}</h3>
                              <p className="text-sm text-gray-600">ID: {appointment.patientId}</p>
                            </div>
                          </div>
                          <div className="grid grid-cols-2 gap-2 text-sm text-gray-600 ml-15">
                            <div>Doctor: {appointment.doctor}</div>
                            <div>Dept: {appointment.department}</div>
                            <div>Time: {appointment.time}</div>
                            <div>Type: {appointment.type}</div>
                          </div>
                        </div>
                        <div className="flex flex-col items-end space-y-2">
                          <Badge variant={getStatusColor(appointment.status)}>
                            {appointment.status}
                          </Badge>
                          <Button variant="outline" size="sm">View</Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Department Statistics */}
              <Card>
                <h2 className="text-xl font-bold text-gray-900 mb-6">Department Overview</h2>
                <div className="grid grid-cols-2 gap-4">
                  {departmentStats.map((dept, index) => (
                    <div
                      key={index}
                      className="border border-gray-200 rounded-lg p-4 hover:border-primary-300 transition-all"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-3xl">{dept.icon}</span>
                        <Badge variant="primary">{dept.appointments}</Badge>
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-2">{dept.name}</h3>
                      <div className="text-sm text-gray-600">
                        <p>{dept.patients} active patients</p>
                        <p>{dept.appointments} appointments</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>

            {/* Right Column - 1/3 width */}
            <div className="space-y-6">
              {/* Quick Actions */}
              <Card>
                <h2 className="text-xl font-bold text-gray-900 mb-4">Quick Actions</h2>
                <div className="space-y-3">
                  <Link to="/hospital/patients/new">
                    <Button variant="primary" className="w-full justify-center">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                      </svg>
                      Add New Patient
                    </Button>
                  </Link>
                  <Link to="/hospital/appointments/new">
                    <Button variant="outline" className="w-full justify-center">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      Schedule Appointment
                    </Button>
                  </Link>
                  <Link to="/hospital/analytics">
                    <Button variant="outline" className="w-full justify-center">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                      View Analytics
                    </Button>
                  </Link>
                </div>
              </Card>

              {/* Recent Patients */}
              <Card>
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-bold text-gray-900">Recent Patients</h2>
                  <Link to="/hospital/patients" className="text-sm text-primary-600 hover:text-primary-700 font-medium">
                    View All
                  </Link>
                </div>
                <div className="space-y-3">
                  {recentPatients.map((patient) => (
                    <div
                      key={patient.id}
                      className="border border-gray-200 rounded-lg p-3 hover:border-primary-300 cursor-pointer transition-all"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-medium text-gray-900">{patient.name}</h3>
                        <Badge variant={getStatusColor(patient.status)}>
                          {patient.status}
                        </Badge>
                      </div>
                      <div className="text-xs text-gray-600 space-y-1">
                        <p>ID: {patient.id}</p>
                        <p>Age: {patient.age} • Blood: {patient.bloodGroup}</p>
                        <p>Last visit: {new Date(patient.lastVisit).toLocaleDateString()}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Hospital Info */}
              <Card className="bg-gradient-to-br from-primary-50 to-blue-50">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Hospital Info</h2>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Hospital ID</span>
                    <span className="text-sm font-medium text-gray-900">{hospital.id}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Type</span>
                    <Badge variant="info">{hospital.type}</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Registration</span>
                    <span className="text-sm font-medium text-gray-900">{hospital.registrationNumber}</span>
                  </div>
                  <Link to="/hospital/settings">
                    <Button variant="outline" size="sm" className="w-full mt-4">
                      Manage Settings
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

export default HospitalDashboard;
