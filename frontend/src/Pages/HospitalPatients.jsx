import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { Card, Badge, Button, Input, Select } from '../Components/UIComponents';

const HospitalPatients = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [filterBloodGroup, setFilterBloodGroup] = useState('');

  const patients = [
    {
      id: 'P12345',
      name: 'John Doe',
      age: 32,
      gender: 'Male',
      bloodGroup: 'O+',
      phone: '+1 (555) 123-4567',
      email: 'john.doe@email.com',
      lastVisit: '2025-10-15',
      nextAppointment: '2025-10-25',
      status: 'active',
      address: '123 Main St, New York, NY',
      emergencyContact: '+1 (555) 987-6543',
      diagnosis: 'Hypertension',
    },
    {
      id: 'P67890',
      name: 'Jane Smith',
      age: 28,
      gender: 'Female',
      bloodGroup: 'A+',
      phone: '+1 (555) 234-5678',
      email: 'jane.smith@email.com',
      lastVisit: '2025-10-14',
      nextAppointment: '2025-10-22',
      status: 'active',
      address: '456 Oak Ave, Los Angeles, CA',
      emergencyContact: '+1 (555) 876-5432',
      diagnosis: 'Diabetes Type 2',
    },
    {
      id: 'P24680',
      name: 'Robert Brown',
      age: 45,
      gender: 'Male',
      bloodGroup: 'B+',
      phone: '+1 (555) 345-6789',
      email: 'robert.brown@email.com',
      lastVisit: '2025-10-13',
      nextAppointment: null,
      status: 'active',
      address: '789 Pine Rd, Chicago, IL',
      emergencyContact: '+1 (555) 765-4321',
      diagnosis: 'Asthma',
    },
    {
      id: 'P13579',
      name: 'Emily Wilson',
      age: 35,
      gender: 'Female',
      bloodGroup: 'AB+',
      phone: '+1 (555) 456-7890',
      email: 'emily.wilson@email.com',
      lastVisit: '2025-09-28',
      nextAppointment: '2025-10-30',
      status: 'inactive',
      address: '321 Elm St, Miami, FL',
      emergencyContact: '+1 (555) 654-3210',
      diagnosis: 'Migraine',
    },
    {
      id: 'P98765',
      name: 'Michael Johnson',
      age: 50,
      gender: 'Male',
      bloodGroup: 'O-',
      phone: '+1 (555) 567-8901',
      email: 'michael.j@email.com',
      lastVisit: '2025-10-10',
      nextAppointment: '2025-10-28',
      status: 'active',
      address: '654 Maple Dr, Boston, MA',
      emergencyContact: '+1 (555) 543-2109',
      diagnosis: 'Coronary Artery Disease',
    },
  ];

  const filteredPatients = patients.filter(patient => {
    const matchesSearch = patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         patient.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         patient.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'all' || patient.status === filterStatus;
    const matchesBloodGroup = !filterBloodGroup || patient.bloodGroup === filterBloodGroup;
    return matchesSearch && matchesStatus && matchesBloodGroup;
  });

  const getStatusColor = (status) => {
    return status === 'active' ? 'success' : 'warning';
  };

  const bloodGroups = ['', 'A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar userType="hospital" />
      
      <div className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Patient Management</h1>
              <p className="mt-2 text-gray-600">Manage all registered patients</p>
            </div>
            <Link to="/hospital/patients/new">
              <Button variant="primary" className="mt-4 md:mt-0">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                Add New Patient
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card className="bg-gradient-to-br from-blue-500 to-blue-700 text-white">
              <div className="text-center">
                <p className="text-4xl font-bold">{patients.length}</p>
                <p className="text-blue-100 mt-2">Total Patients</p>
              </div>
            </Card>
            <Card className="bg-gradient-to-br from-green-500 to-green-700 text-white">
              <div className="text-center">
                <p className="text-4xl font-bold">{patients.filter(p => p.status === 'active').length}</p>
                <p className="text-green-100 mt-2">Active Patients</p>
              </div>
            </Card>
            <Card className="bg-gradient-to-br from-purple-500 to-purple-700 text-white">
              <div className="text-center">
                <p className="text-4xl font-bold">{patients.filter(p => p.nextAppointment).length}</p>
                <p className="text-purple-100 mt-2">Upcoming Appointments</p>
              </div>
            </Card>
            <Card className="bg-gradient-to-br from-orange-500 to-orange-700 text-white">
              <div className="text-center">
                <p className="text-4xl font-bold">3</p>
                <p className="text-orange-100 mt-2">New This Week</p>
              </div>
            </Card>
          </div>

          {/* Filters */}
          <Card className="mb-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="md:col-span-2">
                <Input
                  placeholder="Search by name, ID, or email"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <Select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                options={[
                  { value: 'all', label: 'All Status' },
                  { value: 'active', label: 'Active' },
                  { value: 'inactive', label: 'Inactive' },
                ]}
              />
              <Select
                value={filterBloodGroup}
                onChange={(e) => setFilterBloodGroup(e.target.value)}
                options={bloodGroups.map(bg => ({ value: bg, label: bg || 'All Blood Groups' }))}
                placeholder="Blood Group"
              />
            </div>
          </Card>

          {/* Patients List */}
          <div className="grid grid-cols-1 gap-6">
            {filteredPatients.map((patient) => (
              <Card key={patient.id} className="hover:shadow-lg transition-shadow">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="flex items-start space-x-4 flex-1">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                      {patient.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-lg font-bold text-gray-900">{patient.name}</h3>
                        <Badge variant={getStatusColor(patient.status)}>
                          {patient.status}
                        </Badge>
                        <Badge variant="info">{patient.bloodGroup}</Badge>
                      </div>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm text-gray-600 mb-2">
                        <div>ID: {patient.id}</div>
                        <div>Age: {patient.age} • {patient.gender}</div>
                        <div>📞 {patient.phone}</div>
                        <div>✉️ {patient.email}</div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-gray-600">
                        <div>Last Visit: {new Date(patient.lastVisit).toLocaleDateString()}</div>
                        <div>
                          Next Appointment: {patient.nextAppointment 
                            ? new Date(patient.nextAppointment).toLocaleDateString() 
                            : 'Not scheduled'}
                        </div>
                      </div>
                      <div className="mt-2 text-sm">
                        <span className="font-medium text-gray-700">Diagnosis:</span> {patient.diagnosis}
                      </div>
                    </div>
                  </div>
                  <div className="flex space-x-2 mt-4 md:mt-0 md:ml-4">
                    <Button variant="primary" size="sm">
                      View Details
                    </Button>
                    <Button variant="outline" size="sm">
                      Edit
                    </Button>
                    <Button variant="outline" size="sm">
                      Records
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {filteredPatients.length === 0 && (
            <Card className="text-center py-12">
              <svg className="w-16 h-16 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No patients found</h3>
              <p className="text-gray-600 mb-4">Try adjusting your search or filters</p>
              <Button variant="primary" onClick={() => {
                setSearchTerm('');
                setFilterStatus('all');
                setFilterBloodGroup('');
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

export default HospitalPatients;
