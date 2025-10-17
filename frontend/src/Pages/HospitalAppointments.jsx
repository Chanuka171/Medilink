import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { Card, Badge, Button, Modal } from '../Components/UIComponents';

const HospitalAppointments = () => {
  const [filter, setFilter] = useState('all');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedAppointment, setSelectedAppointment] = useState(null);

  const appointments = [
    {
      id: 1,
      patient: 'John Doe',
      patientId: 'P12345',
      doctor: 'Dr. Sarah Johnson',
      department: 'Cardiology',
      date: '2025-10-20',
      time: '10:00 AM',
      type: 'Checkup',
      status: 'confirmed',
      notes: 'Regular heart checkup',
      room: '301',
    },
    {
      id: 2,
      patient: 'Jane Smith',
      patientId: 'P67890',
      doctor: 'Dr. Michael Chen',
      department: 'General Medicine',
      date: '2025-10-20',
      time: '11:30 AM',
      type: 'Consultation',
      status: 'pending',
      notes: 'Follow-up consultation',
      room: '205',
    },
    {
      id: 3,
      patient: 'Robert Brown',
      patientId: 'P24680',
      doctor: 'Dr. Emily Rodriguez',
      department: 'Dermatology',
      date: '2025-10-20',
      time: '2:00 PM',
      type: 'Follow-up',
      status: 'confirmed',
      notes: 'Skin allergy follow-up',
      room: '410',
    },
    {
      id: 4,
      patient: 'Emily Wilson',
      patientId: 'P13579',
      doctor: 'Dr. James Wilson',
      department: 'Orthopedics',
      date: '2025-10-21',
      time: '9:00 AM',
      type: 'Treatment',
      status: 'confirmed',
      notes: 'Knee treatment session',
      room: '502',
    },
    {
      id: 5,
      patient: 'Michael Johnson',
      patientId: 'P98765',
      doctor: 'Dr. Sarah Johnson',
      department: 'Cardiology',
      date: '2025-10-19',
      time: '3:00 PM',
      type: 'Surgery',
      status: 'completed',
      notes: 'Post-op checkup',
      room: '301',
    },
    {
      id: 6,
      patient: 'Lisa Anderson',
      patientId: 'P11223',
      doctor: 'Dr. Robert Taylor',
      department: 'Neurology',
      date: '2025-10-18',
      time: '1:00 PM',
      type: 'Consultation',
      status: 'cancelled',
      notes: 'Patient cancelled',
      room: 'N/A',
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

  const todayAppointments = appointments.filter(apt => apt.date === '2025-10-20');

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar userType="hospital" />
      
      <div className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Appointment Management</h1>
              <p className="mt-2 text-gray-600">Manage and schedule hospital appointments</p>
            </div>
            <Link to="/hospital/appointments/new">
              <Button variant="primary" className="mt-4 md:mt-0">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                Schedule Appointment
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card className="bg-gradient-to-br from-blue-500 to-blue-700 text-white">
              <div className="text-center">
                <p className="text-4xl font-bold">{todayAppointments.length}</p>
                <p className="text-blue-100 mt-2">Today's Appointments</p>
              </div>
            </Card>
            <Card className="bg-gradient-to-br from-green-500 to-green-700 text-white">
              <div className="text-center">
                <p className="text-4xl font-bold">
                  {appointments.filter(a => a.status === 'confirmed').length}
                </p>
                <p className="text-green-100 mt-2">Confirmed</p>
              </div>
            </Card>
            <Card className="bg-gradient-to-br from-yellow-500 to-yellow-700 text-white">
              <div className="text-center">
                <p className="text-4xl font-bold">
                  {appointments.filter(a => a.status === 'pending').length}
                </p>
                <p className="text-yellow-100 mt-2">Pending</p>
              </div>
            </Card>
            <Card className="bg-gradient-to-br from-purple-500 to-purple-700 text-white">
              <div className="text-center">
                <p className="text-4xl font-bold">
                  {appointments.filter(a => a.status === 'completed').length}
                </p>
                <p className="text-purple-100 mt-2">Completed</p>
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
                All ({appointments.length})
              </button>
              <button
                onClick={() => setFilter('confirmed')}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  filter === 'confirmed'
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Confirmed ({appointments.filter(a => a.status === 'confirmed').length})
              </button>
              <button
                onClick={() => setFilter('pending')}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  filter === 'pending'
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Pending ({appointments.filter(a => a.status === 'pending').length})
              </button>
              <button
                onClick={() => setFilter('completed')}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  filter === 'completed'
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Completed ({appointments.filter(a => a.status === 'completed').length})
              </button>
              <button
                onClick={() => setFilter('cancelled')}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  filter === 'cancelled'
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Cancelled ({appointments.filter(a => a.status === 'cancelled').length})
              </button>
            </div>
          </Card>

          {/* Appointments List */}
          <div className="grid grid-cols-1 gap-6">
            {filteredAppointments.map((appointment) => (
              <Card key={appointment.id} className="hover:shadow-lg transition-shadow">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="flex items-start space-x-4 flex-1">
                    <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-lg font-bold text-gray-900">{appointment.patient}</h3>
                        <Badge variant={getStatusColor(appointment.status)}>
                          {appointment.status}
                        </Badge>
                        <Badge variant="info">{appointment.type}</Badge>
                      </div>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm text-gray-600 mb-2">
                        <div>ID: {appointment.patientId}</div>
                        <div>Doctor: {appointment.doctor}</div>
                        <div>Dept: {appointment.department}</div>
                        <div>Room: {appointment.room}</div>
                      </div>
                      <div className="flex items-center space-x-4 text-sm text-gray-600">
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
                      </div>
                    </div>
                  </div>
                  <div className="flex space-x-2 mt-4 md:mt-0 md:ml-4">
                    <Button
                      variant="primary"
                      size="sm"
                      onClick={() => handleViewDetails(appointment)}
                    >
                      View Details
                    </Button>
                    {appointment.status === 'pending' && (
                      <Button variant="success" size="sm">
                        Confirm
                      </Button>
                    )}
                    {appointment.status === 'confirmed' && (
                      <Button variant="outline" size="sm">
                        Reschedule
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
              <p className="text-gray-600 mb-4">There are no {filter !== 'all' ? filter : ''} appointments</p>
              <Link to="/hospital/appointments/new">
                <Button variant="primary">Schedule New Appointment</Button>
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
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">{selectedAppointment.patient}</h3>
                <p className="text-gray-600">ID: {selectedAppointment.patientId}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-600">Doctor</p>
                <p className="font-medium text-gray-900">{selectedAppointment.doctor}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Department</p>
                <p className="font-medium text-gray-900">{selectedAppointment.department}</p>
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
                <p className="text-sm text-gray-600">Room</p>
                <p className="font-medium text-gray-900">{selectedAppointment.room}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Type</p>
                <p className="font-medium text-gray-900">{selectedAppointment.type}</p>
              </div>
              <div className="col-span-2">
                <p className="text-sm text-gray-600">Status</p>
                <Badge variant={getStatusColor(selectedAppointment.status)}>
                  {selectedAppointment.status}
                </Badge>
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
              {selectedAppointment.status === 'pending' && (
                <Button variant="success" className="flex-1">
                  Confirm Appointment
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

export default HospitalAppointments;
