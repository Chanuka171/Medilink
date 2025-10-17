import React, { useMemo, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { Card, Button, Select, Input, Badge } from '../Components/UIComponents';

function useQuery() {
  const { search } = useLocation();
  return useMemo(() => new URLSearchParams(search), [search]);
}

const mockDoctors = [
  { id: '1', name: 'Dr. Sarah Johnson', specialty: 'Cardiology', hospital: 'Central Medical Center' },
  { id: '2', name: 'Dr. Michael Chen', specialty: 'General Physician', hospital: 'City Hospital' },
  { id: '3', name: 'Dr. Emily Rodriguez', specialty: 'Dermatology', hospital: 'Skin Care Clinic' },
  { id: '4', name: 'Dr. James Wilson', specialty: 'Orthopedics', hospital: 'Sports Medicine Center' },
];

const timeSlots = ['09:00 AM','09:30 AM','10:00 AM','10:30 AM','11:00 AM','11:30 AM','02:00 PM','02:30 PM','03:00 PM','03:30 PM','04:00 PM'];

const AppointmentBooking = () => {
  const query = useQuery();
  const navigate = useNavigate();
  const doctorFromQuery = query.get('doctor') || '';

  const [doctorId, setDoctorId] = useState(doctorFromQuery);
  const [date, setDate] = useState('');
  const [slot, setSlot] = useState('');
  const [type, setType] = useState('Consultation');
  const [notes, setNotes] = useState('');

  const selectedDoctor = mockDoctors.find(d => d.id === doctorId);

  const canSubmit = doctorId && date && slot && type;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!canSubmit) return;
    // Simulate booking then redirect back to appointments list
    navigate('/patient/appointments', { state: { flash: `Appointment booked with ${selectedDoctor?.name} on ${date} at ${slot}` } });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar userType="patient" />
      <div className="flex-1">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-gray-900">Book Appointment</h1>
            <p className="text-gray-600 mt-2">Choose doctor, date and time to schedule your visit</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <Card>
                <form className="space-y-5" onSubmit={handleSubmit}>
                  <Select
                    label="Select Doctor"
                    required
                    value={doctorId}
                    onChange={(e) => setDoctorId(e.target.value)}
                    options={mockDoctors.map(d => ({ value: d.id, label: `${d.name} — ${d.specialty}` }))}
                    placeholder="Choose a doctor"
                  />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input
                      label="Date"
                      type="date"
                      required
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                    />
                    <Select
                      label="Time Slot"
                      required
                      value={slot}
                      onChange={(e) => setSlot(e.target.value)}
                      options={timeSlots.map(t => ({ value: t, label: t }))}
                      placeholder="Select time"
                    />
                  </div>

                  <Select
                    label="Appointment Type"
                    required
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                    options={[
                      { value: 'Consultation', label: 'Consultation' },
                      { value: 'Follow-up', label: 'Follow-up' },
                      { value: 'Checkup', label: 'Checkup' },
                      { value: 'Treatment', label: 'Treatment' },
                    ]}
                  />

                  <Input
                    label="Notes (optional)"
                    placeholder="Share any information for the doctor"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                  />

                  <div className="flex gap-3 pt-2">
                    <Button type="button" variant="outline" className="flex-1" onClick={() => navigate(-1)}>Back</Button>
                    <Button type="submit" variant="primary" className="flex-1" disabled={!canSubmit}>Confirm Booking</Button>
                  </div>
                </form>
              </Card>
            </div>

            <div className="lg:col-span-1">
              <Card>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Summary</h3>
                {selectedDoctor ? (
                  <div className="space-y-2">
                    <p className="text-gray-900 font-medium">{selectedDoctor.name}</p>
                    <p className="text-gray-600">{selectedDoctor.specialty}</p>
                    <p className="text-gray-600">{selectedDoctor.hospital}</p>
                    <div className="pt-2 space-y-1 text-sm">
                      <div className="flex justify-between"><span className="text-gray-600">Date</span><span className="font-medium">{date || '-'}</span></div>
                      <div className="flex justify-between"><span className="text-gray-600">Time</span><span className="font-medium">{slot || '-'}</span></div>
                      <div className="flex justify-between"><span className="text-gray-600">Type</span><span className="font-medium">{type}</span></div>
                    </div>
                    <div className="pt-3">
                      <Badge variant="info">Consultation Fee: $120</Badge>
                    </div>
                  </div>
                ) : (
                  <p className="text-gray-600">Select a doctor to see summary</p>
                )}
              </Card>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AppointmentBooking;
