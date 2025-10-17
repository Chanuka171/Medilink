import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { Card, Button, Input } from '../Components/UIComponents';

const HospitalSettings = () => {
  const [activeTab, setActiveTab] = useState('general');
  const [isSaving, setIsSaving] = useState(false);

  // General Settings State
  const [generalSettings, setGeneralSettings] = useState({
    hospitalName: 'Medilink Hospital',
    registrationNumber: 'MH-2024-001',
    email: 'info@medilink.com',
    phone: '+1 234-567-8900',
    address: '123 Medical Center Drive',
    city: 'New York',
    state: 'NY',
    zipCode: '10001',
    website: 'www.medilink.com',
  });

  // Notification Settings State
  const [notificationSettings, setNotificationSettings] = useState({
    emailNotifications: true,
    smsNotifications: false,
    appointmentReminders: true,
    patientUpdates: true,
    systemAlerts: true,
    marketingEmails: false,
  });

  // Operating Hours State
  const [operatingHours, setOperatingHours] = useState({
    monday: { open: '08:00', close: '18:00', closed: false },
    tuesday: { open: '08:00', close: '18:00', closed: false },
    wednesday: { open: '08:00', close: '18:00', closed: false },
    thursday: { open: '08:00', close: '18:00', closed: false },
    friday: { open: '08:00', close: '18:00', closed: false },
    saturday: { open: '09:00', close: '14:00', closed: false },
    sunday: { open: '09:00', close: '14:00', closed: true },
  });

  // Security Settings State
  const [securitySettings, setSecuritySettings] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const handleGeneralChange = (e) => {
    const { name, value } = e.target;
    setGeneralSettings(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleNotificationChange = (e) => {
    const { name, checked } = e.target;
    setNotificationSettings(prev => ({
      ...prev,
      [name]: checked,
    }));
  };

  const handleOperatingHoursChange = (day, field, value) => {
    setOperatingHours(prev => ({
      ...prev,
      [day]: {
        ...prev[day],
        [field]: value,
      },
    }));
  };

  const handleSecurityChange = (e) => {
    const { name, value } = e.target;
    setSecuritySettings(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSaveGeneral = () => {
    setIsSaving(true);
    setTimeout(() => {
      alert('General settings saved successfully!');
      setIsSaving(false);
    }, 1000);
  };

  const handleSaveNotifications = () => {
    setIsSaving(true);
    setTimeout(() => {
      alert('Notification settings saved successfully!');
      setIsSaving(false);
    }, 1000);
  };

  const handleSaveOperatingHours = () => {
    setIsSaving(true);
    setTimeout(() => {
      alert('Operating hours saved successfully!');
      setIsSaving(false);
    }, 1000);
  };

  const handleChangePassword = (e) => {
    e.preventDefault();
    if (securitySettings.newPassword !== securitySettings.confirmPassword) {
      alert('New passwords do not match!');
      return;
    }
    setIsSaving(true);
    setTimeout(() => {
      alert('Password changed successfully!');
      setSecuritySettings({
        currentPassword: '',
        newPassword: '',
        confirmPassword: '',
      });
      setIsSaving(false);
    }, 1000);
  };

  const tabs = [
    { id: 'general', name: 'General', icon: '🏥' },
    { id: 'notifications', name: 'Notifications', icon: '🔔' },
    { id: 'hours', name: 'Operating Hours', icon: '🕒' },
    { id: 'security', name: 'Security', icon: '🔒' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar userType="hospital" />
      
      <div className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Hospital Settings</h1>
            <p className="mt-2 text-gray-600">Manage your hospital preferences and configuration</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar Navigation */}
            <div className="lg:col-span-1">
              <Card className="p-2">
                <nav className="space-y-1">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${
                        activeTab === tab.id
                          ? 'bg-primary-100 text-primary-700 font-medium'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      <span className="text-xl">{tab.icon}</span>
                      <span>{tab.name}</span>
                    </button>
                  ))}
                </nav>
              </Card>
            </div>

            {/* Content Area */}
            <div className="lg:col-span-3">
              {/* General Settings */}
              {activeTab === 'general' && (
                <Card>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">General Information</h2>
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Input
                          label="Hospital Name"
                          name="hospitalName"
                          value={generalSettings.hospitalName}
                          onChange={handleGeneralChange}
                        />
                      </div>
                      <div>
                        <Input
                          label="Registration Number"
                          name="registrationNumber"
                          value={generalSettings.registrationNumber}
                          onChange={handleGeneralChange}
                        />
                      </div>
                      <div>
                        <Input
                          label="Email Address"
                          type="email"
                          name="email"
                          value={generalSettings.email}
                          onChange={handleGeneralChange}
                        />
                      </div>
                      <div>
                        <Input
                          label="Phone Number"
                          type="tel"
                          name="phone"
                          value={generalSettings.phone}
                          onChange={handleGeneralChange}
                        />
                      </div>
                      <div className="md:col-span-2">
                        <Input
                          label="Address"
                          name="address"
                          value={generalSettings.address}
                          onChange={handleGeneralChange}
                        />
                      </div>
                      <div>
                        <Input
                          label="City"
                          name="city"
                          value={generalSettings.city}
                          onChange={handleGeneralChange}
                        />
                      </div>
                      <div>
                        <Input
                          label="State"
                          name="state"
                          value={generalSettings.state}
                          onChange={handleGeneralChange}
                        />
                      </div>
                      <div>
                        <Input
                          label="ZIP Code"
                          name="zipCode"
                          value={generalSettings.zipCode}
                          onChange={handleGeneralChange}
                        />
                      </div>
                      <div>
                        <Input
                          label="Website"
                          name="website"
                          value={generalSettings.website}
                          onChange={handleGeneralChange}
                        />
                      </div>
                    </div>
                    <div className="flex justify-end pt-4">
                      <Button
                        variant="primary"
                        size="md"
                        onClick={handleSaveGeneral}
                        disabled={isSaving}
                      >
                        {isSaving ? 'Saving...' : 'Save Changes'}
                      </Button>
                    </div>
                  </div>
                </Card>
              )}

              {/* Notification Settings */}
              {activeTab === 'notifications' && (
                <Card>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Notification Preferences</h2>
                  <div className="space-y-6">
                    <div className="space-y-4">
                      {[
                        { key: 'emailNotifications', label: 'Email Notifications', description: 'Receive notifications via email' },
                        { key: 'smsNotifications', label: 'SMS Notifications', description: 'Receive notifications via text message' },
                        { key: 'appointmentReminders', label: 'Appointment Reminders', description: 'Get reminders for upcoming appointments' },
                        { key: 'patientUpdates', label: 'Patient Updates', description: 'Receive updates about patient status changes' },
                        { key: 'systemAlerts', label: 'System Alerts', description: 'Important system notifications and alerts' },
                        { key: 'marketingEmails', label: 'Marketing Emails', description: 'Promotional content and updates' },
                      ].map((item) => (
                        <div key={item.key} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                          <div>
                            <p className="font-medium text-gray-900">{item.label}</p>
                            <p className="text-sm text-gray-600">{item.description}</p>
                          </div>
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input
                              type="checkbox"
                              name={item.key}
                              checked={notificationSettings[item.key]}
                              onChange={handleNotificationChange}
                              className="sr-only peer"
                            />
                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
                          </label>
                        </div>
                      ))}
                    </div>
                    <div className="flex justify-end pt-4">
                      <Button
                        variant="primary"
                        size="md"
                        onClick={handleSaveNotifications}
                        disabled={isSaving}
                      >
                        {isSaving ? 'Saving...' : 'Save Preferences'}
                      </Button>
                    </div>
                  </div>
                </Card>
              )}

              {/* Operating Hours */}
              {activeTab === 'hours' && (
                <Card>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Operating Hours</h2>
                  <div className="space-y-4">
                    {Object.keys(operatingHours).map((day) => (
                      <div key={day} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                        <div className="w-32">
                          <p className="font-medium text-gray-900 capitalize">{day}</p>
                        </div>
                        <div className="flex items-center space-x-4 flex-1">
                          <input
                            type="time"
                            value={operatingHours[day].open}
                            onChange={(e) => handleOperatingHoursChange(day, 'open', e.target.value)}
                            disabled={operatingHours[day].closed}
                            className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent disabled:bg-gray-200"
                          />
                          <span className="text-gray-600">to</span>
                          <input
                            type="time"
                            value={operatingHours[day].close}
                            onChange={(e) => handleOperatingHoursChange(day, 'close', e.target.value)}
                            disabled={operatingHours[day].closed}
                            className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent disabled:bg-gray-200"
                          />
                          <label className="flex items-center space-x-2 ml-4">
                            <input
                              type="checkbox"
                              checked={operatingHours[day].closed}
                              onChange={(e) => handleOperatingHoursChange(day, 'closed', e.target.checked)}
                              className="w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                            />
                            <span className="text-sm text-gray-600">Closed</span>
                          </label>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-end pt-6">
                    <Button
                      variant="primary"
                      size="md"
                      onClick={handleSaveOperatingHours}
                      disabled={isSaving}
                    >
                      {isSaving ? 'Saving...' : 'Save Hours'}
                    </Button>
                  </div>
                </Card>
              )}

              {/* Security Settings */}
              {activeTab === 'security' && (
                <Card>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Security Settings</h2>
                  <form onSubmit={handleChangePassword} className="space-y-6">
                    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                      <div className="flex">
                        <div className="flex-shrink-0">
                          <svg className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div className="ml-3">
                          <p className="text-sm text-yellow-700">
                            Make sure you use a strong password that you haven't used elsewhere.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <Input
                          label="Current Password"
                          type="password"
                          name="currentPassword"
                          value={securitySettings.currentPassword}
                          onChange={handleSecurityChange}
                          required
                        />
                      </div>
                      <div>
                        <Input
                          label="New Password"
                          type="password"
                          name="newPassword"
                          value={securitySettings.newPassword}
                          onChange={handleSecurityChange}
                          required
                        />
                      </div>
                      <div>
                        <Input
                          label="Confirm New Password"
                          type="password"
                          name="confirmPassword"
                          value={securitySettings.confirmPassword}
                          onChange={handleSecurityChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="flex justify-end pt-4">
                      <Button
                        type="submit"
                        variant="primary"
                        size="md"
                        disabled={isSaving}
                      >
                        {isSaving ? 'Changing...' : 'Change Password'}
                      </Button>
                    </div>
                  </form>

                  <div className="mt-8 pt-8 border-t border-gray-200">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">Two-Factor Authentication</h3>
                    <p className="text-gray-600 mb-4">Add an extra layer of security to your account.</p>
                    <Button variant="outline" size="md">
                      Enable Two-Factor Authentication
                    </Button>
                  </div>
                </Card>
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default HospitalSettings;
