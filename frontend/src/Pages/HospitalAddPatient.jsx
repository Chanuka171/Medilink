import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { Card, Button, Input, Select } from '../Components/UIComponents';

const HospitalAddPatient = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    // Personal Information
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    gender: '',
    bloodGroup: '',
    
    // Contact Information
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    
    // Medical Information
    allergies: '',
    currentMedications: '',
    medicalHistory: '',
    
    // Emergency Contact
    emergencyName: '',
    emergencyRelation: '',
    emergencyPhone: '',
    
    // Insurance Information
    insuranceProvider: '',
    insuranceNumber: '',
    insurancePlan: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    // Personal Information Validation
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.dateOfBirth) newErrors.dateOfBirth = 'Date of birth is required';
    if (!formData.gender) newErrors.gender = 'Gender is required';
    if (!formData.bloodGroup) newErrors.bloodGroup = 'Blood group is required';

    // Contact Information Validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\+?[\d\s-()]+$/.test(formData.phone)) {
      newErrors.phone = 'Phone number is invalid';
    }
    if (!formData.address.trim()) newErrors.address = 'Address is required';
    if (!formData.city.trim()) newErrors.city = 'City is required';

    // Emergency Contact Validation
    if (!formData.emergencyName.trim()) newErrors.emergencyName = 'Emergency contact name is required';
    if (!formData.emergencyPhone.trim()) newErrors.emergencyPhone = 'Emergency contact phone is required';

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
      console.log('Patient data submitted:', formData);
      alert('Patient registered successfully!');
      navigate('/hospital/patients');
      setIsSubmitting(false);
    }, 1500);
  };

  const handleReset = () => {
    setFormData({
      firstName: '',
      lastName: '',
      dateOfBirth: '',
      gender: '',
      bloodGroup: '',
      email: '',
      phone: '',
      address: '',
      city: '',
      state: '',
      zipCode: '',
      allergies: '',
      currentMedications: '',
      medicalHistory: '',
      emergencyName: '',
      emergencyRelation: '',
      emergencyPhone: '',
      insuranceProvider: '',
      insuranceNumber: '',
      insurancePlan: '',
    });
    setErrors({});
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar userType="hospital" />
      
      <div className="flex-1">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center space-x-2 text-sm text-gray-600 mb-4">
              <button onClick={() => navigate('/hospital/patients')} className="hover:text-primary-600">
                Patients
              </button>
              <span>/</span>
              <span className="text-gray-900 font-medium">Add New Patient</span>
            </div>
            <h1 className="text-3xl font-bold text-gray-900">Register New Patient</h1>
            <p className="mt-2 text-gray-600">Fill in the patient details to create a new medical record</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Information */}
            <Card>
              <h2 className="text-xl font-bold text-gray-900 mb-6">Personal Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Input
                    label="First Name"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    error={errors.firstName}
                    required
                  />
                </div>
                <div>
                  <Input
                    label="Last Name"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    error={errors.lastName}
                    required
                  />
                </div>
                <div>
                  <Input
                    label="Date of Birth"
                    type="date"
                    name="dateOfBirth"
                    value={formData.dateOfBirth}
                    onChange={handleChange}
                    error={errors.dateOfBirth}
                    required
                  />
                </div>
                <div>
                  <Select
                    label="Gender"
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    options={[
                      { value: '', label: 'Select gender' },
                      { value: 'Male', label: 'Male' },
                      { value: 'Female', label: 'Female' },
                      { value: 'Other', label: 'Other' },
                    ]}
                    error={errors.gender}
                    required
                  />
                </div>
                <div>
                  <Select
                    label="Blood Group"
                    name="bloodGroup"
                    value={formData.bloodGroup}
                    onChange={handleChange}
                    options={[
                      { value: '', label: 'Select blood group' },
                      { value: 'A+', label: 'A+' },
                      { value: 'A-', label: 'A-' },
                      { value: 'B+', label: 'B+' },
                      { value: 'B-', label: 'B-' },
                      { value: 'AB+', label: 'AB+' },
                      { value: 'AB-', label: 'AB-' },
                      { value: 'O+', label: 'O+' },
                      { value: 'O-', label: 'O-' },
                    ]}
                    error={errors.bloodGroup}
                    required
                  />
                </div>
              </div>
            </Card>

            {/* Contact Information */}
            <Card>
              <h2 className="text-xl font-bold text-gray-900 mb-6">Contact Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Input
                    label="Email Address"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    error={errors.email}
                    required
                  />
                </div>
                <div>
                  <Input
                    label="Phone Number"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    error={errors.phone}
                    placeholder="+1 234-567-8900"
                    required
                  />
                </div>
                <div className="md:col-span-2">
                  <Input
                    label="Address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    error={errors.address}
                    placeholder="Street address"
                    required
                  />
                </div>
                <div>
                  <Input
                    label="City"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    error={errors.city}
                    required
                  />
                </div>
                <div>
                  <Input
                    label="State"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <Input
                    label="ZIP Code"
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </Card>

            {/* Medical Information */}
            <Card>
              <h2 className="text-xl font-bold text-gray-900 mb-6">Medical Information</h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Known Allergies
                  </label>
                  <textarea
                    name="allergies"
                    value={formData.allergies}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="List any known allergies (medications, food, environmental, etc.)"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Current Medications
                  </label>
                  <textarea
                    name="currentMedications"
                    value={formData.currentMedications}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="List current medications and dosages"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Medical History
                  </label>
                  <textarea
                    name="medicalHistory"
                    value={formData.medicalHistory}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Previous conditions, surgeries, chronic illnesses, etc."
                  />
                </div>
              </div>
            </Card>

            {/* Emergency Contact */}
            <Card>
              <h2 className="text-xl font-bold text-gray-900 mb-6">Emergency Contact</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Input
                    label="Contact Name"
                    name="emergencyName"
                    value={formData.emergencyName}
                    onChange={handleChange}
                    error={errors.emergencyName}
                    required
                  />
                </div>
                <div>
                  <Input
                    label="Relationship"
                    name="emergencyRelation"
                    value={formData.emergencyRelation}
                    onChange={handleChange}
                    placeholder="e.g., Spouse, Parent, Sibling"
                  />
                </div>
                <div>
                  <Input
                    label="Contact Phone"
                    type="tel"
                    name="emergencyPhone"
                    value={formData.emergencyPhone}
                    onChange={handleChange}
                    error={errors.emergencyPhone}
                    placeholder="+1 234-567-8900"
                    required
                  />
                </div>
              </div>
            </Card>

            {/* Insurance Information */}
            <Card>
              <h2 className="text-xl font-bold text-gray-900 mb-6">Insurance Information (Optional)</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Input
                    label="Insurance Provider"
                    name="insuranceProvider"
                    value={formData.insuranceProvider}
                    onChange={handleChange}
                    placeholder="e.g., Blue Cross, Aetna"
                  />
                </div>
                <div>
                  <Input
                    label="Policy Number"
                    name="insuranceNumber"
                    value={formData.insuranceNumber}
                    onChange={handleChange}
                  />
                </div>
                <div className="md:col-span-2">
                  <Input
                    label="Plan Type"
                    name="insurancePlan"
                    value={formData.insurancePlan}
                    onChange={handleChange}
                    placeholder="e.g., PPO, HMO, Individual"
                  />
                </div>
              </div>
            </Card>

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
                  onClick={() => navigate('/hospital/patients')}
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
                      Registering...
                    </>
                  ) : (
                    <>
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                      Register Patient
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

export default HospitalAddPatient;
