import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { Card, Button, Badge } from '../Components/UIComponents';

const doctors = [
  {
    id: '1',
    name: 'Dr. Sarah Johnson',
    specialty: 'Cardiology',
    experience: '15 years',
    hospital: 'Central Medical Center',
    location: 'New York',
    rating: 4.9,
    reviews: 234,
    fee: '$150',
    bio: 'Specialized in cardiovascular diseases and interventional cardiology with a patient-centered approach.',
    qualifications: ['MD, Cardiology - Harvard Medical School', 'FACC', 'Interventional Cardiology Fellowship'],
    services: ['Heart checkup', 'ECG review', 'Echo interpretation', 'Post-op follow-up'],
    availability: ['Mon', 'Wed', 'Fri'],
  },
  {
    id: '2',
    name: 'Dr. Michael Chen',
    specialty: 'General Physician',
    experience: '10 years',
    hospital: 'City Hospital',
    location: 'Los Angeles',
    rating: 4.7,
    reviews: 189,
    fee: '$100',
    bio: 'Expert in general medicine and preventive healthcare.',
    qualifications: ['MBBS - UCLA', 'Residency in Internal Medicine'],
    services: ['General consultation', 'Chronic disease management', 'Preventive care'],
    availability: ['Tue', 'Thu', 'Sat'],
  },
];

const DoctorProfile = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const doctor = doctors.find(d => d.id === id);

  if (!doctor) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Navbar userType="patient" />
        <div className="flex-1 flex items-center justify-center p-8">
          <Card className="text-center">
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">Doctor not found</h2>
            <p className="text-gray-600 mb-4">The profile you are looking for does not exist.</p>
            <Button variant="primary" onClick={() => navigate('/patient/doctors')}>Back to search</Button>
          </Card>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar userType="patient" />
      <div className="flex-1">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-1">
              <Card>
                <div className="w-24 h-24 bg-gradient-to-br from-primary-400 to-primary-600 rounded-xl flex items-center justify-center text-4xl text-white mb-4">
                  {doctor.name.split(' ')[1][0]}{doctor.name.split(' ')[2]?.[0] || ''}
                </div>
                <h1 className="text-2xl font-bold text-gray-900">{doctor.name}</h1>
                <p className="text-primary-600 font-medium">{doctor.specialty}</p>
                <div className="mt-3 space-y-1 text-sm text-gray-600">
                  <p>{doctor.hospital}</p>
                  <p>{doctor.location}</p>
                  <p>{doctor.experience} experience</p>
                </div>
                <div className="mt-3 flex items-center space-x-2">
                  <Badge variant="info">Rating: {doctor.rating}</Badge>
                  <span className="text-sm text-gray-600">({doctor.reviews} reviews)</span>
                </div>
                <div className="mt-4">
                  <Badge variant="primary">Consultation Fee: {doctor.fee}</Badge>
                </div>
                <div className="mt-6">
                  <Link to={`/patient/appointments/new?doctor=${doctor.id}`}>
                    <Button variant="primary" className="w-full">Book Appointment</Button>
                  </Link>
                </div>
              </Card>
            </div>

            <div className="md:col-span-2 space-y-6">
              <Card>
                <h2 className="text-lg font-semibold text-gray-900 mb-2">About</h2>
                <p className="text-gray-700">{doctor.bio}</p>
              </Card>

              <Card>
                <h2 className="text-lg font-semibold text-gray-900 mb-3">Qualifications</h2>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  {doctor.qualifications.map((q, i) => (
                    <li key={i}>{q}</li>
                  ))}
                </ul>
              </Card>

              <Card>
                <h2 className="text-lg font-semibold text-gray-900 mb-3">Services</h2>
                <div className="flex flex-wrap gap-2">
                  {doctor.services.map((s, i) => (
                    <Badge key={i} variant="default">{s}</Badge>
                  ))}
                </div>
              </Card>

              <Card>
                <h2 className="text-lg font-semibold text-gray-900 mb-3">Availability</h2>
                <div className="flex gap-2">
                  {doctor.availability.map((d, i) => (
                    <Badge key={i} variant="success">{d}</Badge>
                  ))}
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

export default DoctorProfile;
