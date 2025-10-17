import React, { useState } from 'react';
import { Card, Badge, Button, Modal, Input } from '../Components/UIComponents';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const MedicalRecords = () => {
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const [filter, setFilter] = useState('all');

  const records = [
    {
      id: 1,
      title: 'Blood Test Report',
      type: 'Lab Report',
      date: '2025-10-15',
      doctor: 'Dr. Sarah Johnson',
      hospital: 'Central Medical Center',
      fileSize: '2.4 MB',
      status: 'reviewed',
    },
    {
      id: 2,
      title: 'X-Ray Chest',
      type: 'Imaging',
      date: '2025-10-10',
      doctor: 'Dr. Michael Chen',
      hospital: 'City Hospital',
      fileSize: '5.1 MB',
      status: 'pending',
    },
    {
      id: 3,
      title: 'Prescription - Heart Medication',
      type: 'Prescription',
      date: '2025-10-08',
      doctor: 'Dr. Sarah Johnson',
      hospital: 'Central Medical Center',
      fileSize: '156 KB',
      status: 'reviewed',
    },
    {
      id: 4,
      title: 'MRI Scan Report',
      type: 'Imaging',
      date: '2025-09-28',
      doctor: 'Dr. Emily Rodriguez',
      hospital: 'Advanced Diagnostics',
      fileSize: '8.7 MB',
      status: 'reviewed',
    },
    {
      id: 5,
      title: 'Vaccination Record',
      type: 'Vaccination',
      date: '2025-09-15',
      doctor: 'Dr. James Wilson',
      hospital: 'Community Health Center',
      fileSize: '340 KB',
      status: 'reviewed',
    },
  ];

  const categories = [
    { name: 'All Records', value: 'all', count: records.length },
    { name: 'Lab Reports', value: 'Lab Report', count: records.filter(r => r.type === 'Lab Report').length },
    { name: 'Imaging', value: 'Imaging', count: records.filter(r => r.type === 'Imaging').length },
    { name: 'Prescriptions', value: 'Prescription', count: records.filter(r => r.type === 'Prescription').length },
    { name: 'Vaccinations', value: 'Vaccination', count: records.filter(r => r.type === 'Vaccination').length },
  ];

  const filteredRecords = filter === 'all' 
    ? records 
    : records.filter(r => r.type === filter);

  const getTypeIcon = (type) => {
    switch (type) {
      case 'Lab Report':
        return '🧪';
      case 'Imaging':
        return '🔬';
      case 'Prescription':
        return '💊';
      case 'Vaccination':
        return '💉';
      default:
        return '📄';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar userType="patient" />
      
      <div className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Medical Records</h1>
              <p className="mt-2 text-gray-600">Access and manage all your medical documents</p>
            </div>
            <Button variant="primary" className="mt-4 md:mt-0" onClick={() => setIsUploadModalOpen(true)}>
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
              </svg>
              Upload Record
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar - Categories */}
            <div className="lg:col-span-1">
              <Card>
                <h2 className="font-bold text-gray-900 mb-4">Categories</h2>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category.value}
                      onClick={() => setFilter(category.value)}
                      className={`w-full flex items-center justify-between px-4 py-3 rounded-lg transition-colors ${
                        filter === category.value
                          ? 'bg-primary-100 text-primary-700'
                          : 'hover:bg-gray-100 text-gray-700'
                      }`}
                    >
                      <span className="font-medium">{category.name}</span>
                      <Badge variant={filter === category.value ? 'primary' : 'default'}>
                        {category.count}
                      </Badge>
                    </button>
                  ))}
                </div>
              </Card>

              {/* Quick Stats */}
              <Card className="mt-6">
                <h2 className="font-bold text-gray-900 mb-4">Statistics</h2>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Total Records</span>
                    <span className="text-lg font-bold text-gray-900">{records.length}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">This Month</span>
                    <span className="text-lg font-bold text-primary-600">3</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Storage Used</span>
                    <span className="text-lg font-bold text-gray-900">16.7 MB</span>
                  </div>
                </div>
              </Card>
            </div>

            {/* Main Content - Records List */}
            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 gap-4">
                {filteredRecords.map((record) => (
                  <Card key={record.id} className="hover:shadow-lg transition-shadow cursor-pointer">
                    <div className="flex items-start space-x-4">
                      <div className="text-4xl">{getTypeIcon(record.type)}</div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h3 className="text-lg font-bold text-gray-900">{record.title}</h3>
                            <div className="flex items-center space-x-3 mt-1 text-sm text-gray-600">
                              <span>{record.doctor}</span>
                              <span>•</span>
                              <span>{record.hospital}</span>
                            </div>
                          </div>
                          <Badge variant={record.status === 'reviewed' ? 'success' : 'warning'}>
                            {record.status}
                          </Badge>
                        </div>
                        <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                          <div className="flex items-center">
                            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            {new Date(record.date).toLocaleDateString('en-US', {
                              year: 'numeric',
                              month: 'short',
                              day: 'numeric',
                            })}
                          </div>
                          <div className="flex items-center">
                            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                            </svg>
                            {record.fileSize}
                          </div>
                          <Badge variant="info">{record.type}</Badge>
                        </div>
                        <div className="flex space-x-2">
                          <Button variant="primary" size="sm">
                            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                            View
                          </Button>
                          <Button variant="outline" size="sm">
                            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                            </svg>
                            Download
                          </Button>
                          <Button variant="outline" size="sm">
                            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                            </svg>
                            Share
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              {filteredRecords.length === 0 && (
                <Card className="text-center py-12">
                  <svg className="w-16 h-16 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">No records found</h3>
                  <p className="text-gray-600 mb-4">You don't have any {filter !== 'all' ? filter.toLowerCase() : ''} records</p>
                  <Button variant="primary" onClick={() => setIsUploadModalOpen(true)}>
                    Upload Your First Record
                  </Button>
                </Card>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Upload Modal */}
      <Modal
        isOpen={isUploadModalOpen}
        onClose={() => setIsUploadModalOpen(false)}
        title="Upload Medical Record"
      >
        <form className="space-y-4">
          <Input
            label="Record Title"
            placeholder="Enter record title"
            required
          />
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Record Type <span className="text-error">*</span>
            </label>
            <select className="input-field">
              <option value="">Select type</option>
              <option value="Lab Report">Lab Report</option>
              <option value="Imaging">Imaging</option>
              <option value="Prescription">Prescription</option>
              <option value="Vaccination">Vaccination</option>
            </select>
          </div>
          <Input
            label="Date"
            type="date"
            required
          />
          <Input
            label="Doctor Name"
            placeholder="Enter doctor's name"
          />
          <Input
            label="Hospital/Clinic"
            placeholder="Enter hospital or clinic name"
          />
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Upload File <span className="text-error">*</span>
            </label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-primary-400 transition-colors">
              <svg className="w-12 h-12 mx-auto text-gray-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
              </svg>
              <p className="text-sm text-gray-600 mb-1">Click to upload or drag and drop</p>
              <p className="text-xs text-gray-500">PDF, PNG, JPG or JPEG (max 10MB)</p>
              <input type="file" className="hidden" accept=".pdf,.png,.jpg,.jpeg" />
            </div>
          </div>
          <div className="flex space-x-3 pt-4">
            <Button type="button" variant="outline" className="flex-1" onClick={() => setIsUploadModalOpen(false)}>
              Cancel
            </Button>
            <Button type="submit" variant="primary" className="flex-1">
              Upload Record
            </Button>
          </div>
        </form>
      </Modal>

      <Footer />
    </div>
  );
};

export default MedicalRecords;
