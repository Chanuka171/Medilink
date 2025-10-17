import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, Badge, Button, Modal } from '../Components/UIComponents';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const PatientAppointments = () => {
  const [filter, setFilter] = useState('all');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedAppointment, setSelectedAppointment] = useState(null);

  const appointments = [
    {
      id: 1,
      doctor: 'Dr. Sarah Johnson',
      specialty: 'Cardiology',
      hospital: 'Central Medical Center',
      date: '2025-10-20',
      time: '10:00 AM',
      type: 'Checkup',
      status: 'confirmed',
      notes: 'Annual heart checkup',
    },
    {
      id: 2,
      doctor: 'Dr. Michael Chen',
      specialty: 'General Physician',
      hospital: 'City Hospital',
      date: '2025-10-25',
      time: '2:30 PM',
      type: 'Follow-up',
      status: 'pending',
      notes: 'Follow-up after medication',
    },
    {
      id: 3,
      doctor: 'Dr. Emily Rodriguez',
      specialty: 'Dermatology',
      hospital: 'Skin Care Clinic',
      date: '2025-10-15',
      time: '11:00 AM',
      type: 'Consultation',
      status: 'completed',
      notes: 'Skin allergy consultation',
    },
    {
      id: 4,
      doctor: 'Dr. James Wilson',
      specialty: 'Orthopedics',
      hospital: 'Sports Medicine Center',
      date: '2025-10-18',
      time: '3:00 PM',
      type: 'Treatment',
      status: 'completed',
      notes: 'Knee pain treatment',
    },
  ];

  const filteredAppointments = appointments.filter(apt => {
    if (filter === 'all') return true;
    return apt.status === filter;
  });

  const getStatusColor = (status) => {
    switch (status) {
      case 'confirmed': return 'success';
      case 'pending': return 'warning';
      case 'completed': return 'info';
      case 'cancelled': return 'danger';
      default: return 'default';
    }
  };

  const handleViewDetails = (appointment) => {
    setSelectedAppointment(appointment);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar userType="patient" />
      
      <div className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">My Appointments</h1>
              <p className="mt-2 text-gray-600">Manage all your medical appointments</p>
            </div>
            <Link to="/patient/appointments/new">
              <Button variant="primary" className="mt-4 md:mt-0">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                Book New Appointment
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card className="bg-primary-50 border-2 border-primary-200">
              <div className="text-center">
                <p className="text-4xl font-bold text-primary-700">{appointments.length}</p>
                <p className="text-sm text-gray-600 mt-2">Total Appointments</p>
              </div>
            </Card>
            <Card className="bg-green-50 border-2 border-green-200">
              <div className="text-center">
                <p className="text-4xl font-bold text-green-700">
                  {appointments.filter(a => a.status === 'confirmed').length}
                </p>
                <p className="text-sm text-gray-600 mt-2">Confirmed</p>
              </div>
            </Card>
            <Card className="bg-yellow-50 border-2 border-yellow-200">
              <div className="text-center">
                <p className="text-4xl font-bold text-yellow-700">
                  {appointments.filter(a => a.status === 'pending').length}
                </p>
                <p className="text-sm text-gray-600 mt-2">Pending</p>
              </div>
            </Card>
            <Card className="bg-blue-50 border-2 border-blue-200">
              <div className="text-center">
                <p className="text-4xl font-bold text-blue-700">
                  {appointments.filter(a => a.status === 'completed').length}
                </p>
                <p className="text-sm text-gray-600 mt-2">Completed</p>
              </div>
            </Card>
          </div>

          {/* Filters */}
          <Card className="mb-6">
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => setFilter('all')}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  filter === 'all'
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                All
              </button>
              <button
                onClick={() => setFilter('confirmed')}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  filter === 'confirmed'
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Confirmed
              </button>
              <button
                onClick={() => setFilter('pending')}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  filter === 'pending'
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Pending
              </button>
              <button
                onClick={() => setFilter('completed')}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  filter === 'completed'
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Completed
              </button>
            </div>
          </Card>

          {/* Appointments List */}
          <div className="grid grid-cols-1 gap-6">
            {filteredAppointments.map((appointment) => (
              <Card key={appointment.id} className="hover:shadow-lg transition-shadow">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="flex items-start space-x-4 flex-1">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                      {appointment.doctor.split(' ')[1][0]}{appointment.doctor.split(' ')[2]?.[0] || ''}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-lg font-bold text-gray-900">{appointment.doctor}</h3>
                        <Badge variant={getStatusColor(appointment.status)}>
                          {appointment.status}
                        </Badge>
                      </div>
                      <p className="text-gray-600 mb-1">{appointment.specialty}</p>
                      <p className="text-sm text-gray-500 mb-2">{appointment.hospital}</p>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                        <div className="flex items-center">
                          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          {new Date(appointment.date).toLocaleDateString('en-US', {
                            weekday: 'short',
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric',
                          })}
                        </div>
                        <div className="flex items-center">
                          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {appointment.time}
                        </div>
                        <div className="flex items-center">
                          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                          </svg>
                          {appointment.type}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex space-x-2 mt-4 md:mt-0">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleViewDetails(appointment)}
                    >
                      View Details
                    </Button>
                    {appointment.status === 'confirmed' && (
                      <Button variant="danger" size="sm">
                        Cancel
                      </Button>
                    )}
                    {appointment.status === 'pending' && (
                      <Button variant="primary" size="sm">
                        Confirm
                      </Button>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {filteredAppointments.length === 0 && (
            <Card className="text-center py-12">
              <svg className="w-16 h-16 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No appointments found</h3>
              <p className="text-gray-600 mb-4">You don't have any {filter !== 'all' ? filter : ''} appointments</p>
              <Link to="/patient/appointments/new">
                <Button variant="primary">Book Your First Appointment</Button>
              </Link>
            </Card>
          )}
        </div>
      </div>

      {/* Appointment Details Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Appointment Details"
      >
        {selectedAppointment && (
          <div className="space-y-4">
            <div className="flex items-center space-x-4 pb-4 border-b">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                {selectedAppointment.doctor.split(' ')[1][0]}{selectedAppointment.doctor.split(' ')[2]?.[0] || ''}
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">{selectedAppointment.doctor}</h3>
                <p className="text-gray-600">{selectedAppointment.specialty}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-600">Hospital</p>
                <p className="font-medium text-gray-900">{selectedAppointment.hospital}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Status</p>
                <Badge variant={getStatusColor(selectedAppointment.status)}>
                  {selectedAppointment.status}
                </Badge>
              </div>
              <div>
                <p className="text-sm text-gray-600">Date</p>
                <p className="font-medium text-gray-900">
                  {new Date(selectedAppointment.date).toLocaleDateString()}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Time</p>
                <p className="font-medium text-gray-900">{selectedAppointment.time}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Type</p>
                <p className="font-medium text-gray-900">{selectedAppointment.type}</p>
              </div>
            </div>

            <div>
              <p className="text-sm text-gray-600 mb-2">Notes</p>
              <p className="text-gray-900">{selectedAppointment.notes}</p>
            </div>

            <div className="flex space-x-3 pt-4 border-t">
              <Button variant="outline" className="flex-1" onClick={() => setIsModalOpen(false)}>
                Close
              </Button>
              {selectedAppointment.status === 'confirmed' && (
                <Button variant="danger" className="flex-1">
                  Cancel Appointment
                </Button>
              )}
            </div>
          </div>
        )}
      </Modal>

      <Footer />
    </div>
  );
};

export default PatientAppointments;
