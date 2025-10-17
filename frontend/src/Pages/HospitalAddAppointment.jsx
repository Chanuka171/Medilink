import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { Card, Button, Input, Select } from '../Components/UIComponents';

const HospitalAddAppointment = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    patientId: '',
    patientName: '',
    doctorId: '',
    department: '',
    appointmentDate: '',
    appointmentTime: '',
    appointmentType: 'consultation',
    reason: '',
    notes: '',
    duration: '30',
    room: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Mock data for dropdowns
  const mockPatients = [
    { value: 'P001', label: 'John Doe (P001)' },
    { value: 'P002', label: 'Jane Smith (P002)' },
    { value: 'P003', label: 'Robert Johnson (P003)' },
    { value: 'P004', label: 'Emily Williams (P004)' },
    { value: 'P005', label: 'Michael Brown (P005)' },
  ];

  const mockDoctors = [
    { value: 'DOC001', label: 'Dr. Sarah Johnson - Cardiology', department: 'Cardiology' },
    { value: 'DOC002', label: 'Dr. Michael Chen - General Medicine', department: 'General Medicine' },
    { value: 'DOC003', label: 'Dr. Emily Rodriguez - Dermatology', department: 'Dermatology' },
    { value: 'DOC004', label: 'Dr. James Wilson - Orthopedics', department: 'Orthopedics' },
    { value: 'DOC005', label: 'Dr. Robert Taylor - Neurology', department: 'Neurology' },
  ];

  const timeSlots = [
    '08:00', '08:30', '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
    '12:00', '12:30', '13:00', '13:30', '14:00', '14:30', '15:00', '15:30',
    '16:00', '16:30', '17:00', '17:30', '18:00'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Auto-fill department when doctor is selected
    if (name === 'doctorId') {
      const selectedDoctor = mockDoctors.find(doc => doc.value === value);
      if (selectedDoctor) {
        setFormData((prev) => ({
          ...prev,
          department: selectedDoctor.department,
        }));
      }
    }

    // Clear error for this field
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.patientId) newErrors.patientId = 'Patient is required';
    if (!formData.doctorId) newErrors.doctorId = 'Doctor is required';
    if (!formData.appointmentDate) newErrors.appointmentDate = 'Appointment date is required';
    if (!formData.appointmentTime) newErrors.appointmentTime = 'Appointment time is required';
    if (!formData.reason.trim()) newErrors.reason = 'Reason for visit is required';

    // Validate date is not in the past
    const selectedDate = new Date(formData.appointmentDate);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (selectedDate < today) {
      newErrors.appointmentDate = 'Appointment date cannot be in the past';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      console.log('Appointment data submitted:', formData);
      alert('Appointment scheduled successfully!');
      navigate('/hospital/appointments');
      setIsSubmitting(false);
    }, 1500);
  };

  const handleReset = () => {
    setFormData({
      patientId: '',
      patientName: '',
      doctorId: '',
      department: '',
      appointmentDate: '',
      appointmentTime: '',
      appointmentType: 'consultation',
      reason: '',
      notes: '',
      duration: '30',
      room: '',
    });
    setErrors({});
  };

  // Get minimum date (today)
  const today = new Date().toISOString().split('T')[0];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar userType="hospital" />
      
      <div className="flex-1">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center space-x-2 text-sm text-gray-600 mb-4">
              <button onClick={() => navigate('/hospital/appointments')} className="hover:text-primary-600">
                Appointments
              </button>
              <span>/</span>
              <span className="text-gray-900 font-medium">Schedule New Appointment</span>
            </div>
            <h1 className="text-3xl font-bold text-gray-900">Schedule New Appointment</h1>
            <p className="mt-2 text-gray-600">Fill in the appointment details to schedule a new visit</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Patient & Doctor Selection */}
            <Card>
              <h2 className="text-xl font-bold text-gray-900 mb-6">Patient & Doctor Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Select
                    label="Select Patient"
                    name="patientId"
                    value={formData.patientId}
                    onChange={handleChange}
                    options={[
                      { value: '', label: 'Select a patient' },
                      ...mockPatients,
                    ]}
                    error={errors.patientId}
                    required
                  />
                  <p className="mt-2 text-sm text-gray-500">
                    Can't find patient? <button type="button" onClick={() => navigate('/hospital/patients/new')} className="text-primary-600 hover:text-primary-700 font-medium">Register new patient</button>
                  </p>
                </div>
                <div>
                  <Select
                    label="Select Doctor"
                    name="doctorId"
                    value={formData.doctorId}
                    onChange={handleChange}
                    options={[
                      { value: '', label: 'Select a doctor' },
                      ...mockDoctors,
                    ]}
                    error={errors.doctorId}
                    required
                  />
                </div>
                <div>
                  <Input
                    label="Department"
                    name="department"
                    value={formData.department}
                    disabled
                    placeholder="Auto-filled based on doctor"
                  />
                </div>
                <div>
                  <Select
                    label="Appointment Type"
                    name="appointmentType"
                    value={formData.appointmentType}
                    onChange={handleChange}
                    options={[
                      { value: 'consultation', label: 'Consultation' },
                      { value: 'follow-up', label: 'Follow-up' },
                      { value: 'procedure', label: 'Procedure' },
                      { value: 'checkup', label: 'Regular Checkup' },
                      { value: 'emergency', label: 'Emergency' },
                    ]}
                    required
                  />
                </div>
              </div>
            </Card>

            {/* Date & Time */}
            <Card>
              <h2 className="text-xl font-bold text-gray-900 mb-6">Date & Time</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <Input
                    label="Appointment Date"
                    type="date"
                    name="appointmentDate"
                    value={formData.appointmentDate}
                    onChange={handleChange}
                    min={today}
                    error={errors.appointmentDate}
                    required
                  />
                </div>
                <div>
                  <Select
                    label="Appointment Time"
                    name="appointmentTime"
                    value={formData.appointmentTime}
                    onChange={handleChange}
                    options={[
                      { value: '', label: 'Select time' },
                      ...timeSlots.map(time => ({ value: time, label: time })),
                    ]}
                    error={errors.appointmentTime}
                    required
                  />
                </div>
                <div>
                  <Select
                    label="Duration (minutes)"
                    name="duration"
                    value={formData.duration}
                    onChange={handleChange}
                    options={[
                      { value: '15', label: '15 minutes' },
                      { value: '30', label: '30 minutes' },
                      { value: '45', label: '45 minutes' },
                      { value: '60', label: '1 hour' },
                      { value: '90', label: '1.5 hours' },
                      { value: '120', label: '2 hours' },
                    ]}
                  />
                </div>
              </div>
            </Card>

            {/* Appointment Details */}
            <Card>
              <h2 className="text-xl font-bold text-gray-900 mb-6">Appointment Details</h2>
              <div className="space-y-6">
                <div>
                  <Input
                    label="Room/Location"
                    name="room"
                    value={formData.room}
                    onChange={handleChange}
                    placeholder="e.g., Room 201, Building A"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Reason for Visit <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="reason"
                    value={formData.reason}
                    onChange={handleChange}
                    rows={3}
                    className={`w-full px-4 py-2 border ${
                      errors.reason ? 'border-red-500' : 'border-gray-300'
                    } rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent`}
                    placeholder="Brief description of the reason for this appointment"
                    required
                  />
                  {errors.reason && (
                    <p className="mt-1 text-sm text-red-500">{errors.reason}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Additional Notes
                  </label>
                  <textarea
                    name="notes"
                    value={formData.notes}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Any additional information, special requirements, or instructions"
                  />
                </div>
              </div>
            </Card>

            {/* Appointment Summary */}
            {formData.patientId && formData.doctorId && formData.appointmentDate && formData.appointmentTime && (
              <Card className="bg-blue-50 border-blue-200">
                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                  <svg className="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Appointment Summary
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-gray-600">Patient:</p>
                    <p className="font-semibold text-gray-900">
                      {mockPatients.find(p => p.value === formData.patientId)?.label || 'N/A'}
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-600">Doctor:</p>
                    <p className="font-semibold text-gray-900">
                      {mockDoctors.find(d => d.value === formData.doctorId)?.label || 'N/A'}
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-600">Date & Time:</p>
                    <p className="font-semibold text-gray-900">
                      {new Date(formData.appointmentDate).toLocaleDateString('en-US', { 
                        weekday: 'long', 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })} at {formData.appointmentTime}
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-600">Duration:</p>
                    <p className="font-semibold text-gray-900">{formData.duration} minutes</p>
                  </div>
                  {formData.room && (
                    <div>
                      <p className="text-gray-600">Location:</p>
                      <p className="font-semibold text-gray-900">{formData.room}</p>
                    </div>
                  )}
                  <div>
                    <p className="text-gray-600">Type:</p>
                    <p className="font-semibold text-gray-900 capitalize">{formData.appointmentType}</p>
                  </div>
                </div>
              </Card>
            )}

            {/* Form Actions */}
            <Card>
              <div className="flex flex-col sm:flex-row gap-4 justify-end">
                <Button
                  type="button"
                  variant="outline"
                  size="md"
                  onClick={handleReset}
                  disabled={isSubmitting}
                >
                  Reset Form
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  size="md"
                  onClick={() => navigate('/hospital/appointments')}
                  disabled={isSubmitting}
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  variant="primary"
                  size="md"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Scheduling...
                    </>
                  ) : (
                    <>
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      Schedule Appointment
                    </>
                  )}
                </Button>
              </div>
            </Card>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default HospitalAddAppointment;
