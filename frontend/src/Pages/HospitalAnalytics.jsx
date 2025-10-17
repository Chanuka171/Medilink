import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { Card, Badge, Button, Select } from '../Components/UIComponents';

const HospitalAnalytics = () => {
  const [timeRange, setTimeRange] = useState('month');

  const overviewStats = {
    totalRevenue: '$245,680',
    totalPatients: 1247,
    totalAppointments: 3456,
    averageRating: 4.8,
  };

  const departmentPerformance = [
    { name: 'Cardiology', patients: 245, revenue: '$68,500', rating: 4.9, growth: '+12%' },
    { name: 'General Medicine', patients: 389, revenue: '$52,300', rating: 4.7, growth: '+8%' },
    { name: 'Dermatology', patients: 156, revenue: '$34,200', rating: 4.8, growth: '+15%' },
    { name: 'Orthopedics', patients: 198, revenue: '$45,600', rating: 4.6, growth: '+5%' },
    { name: 'Neurology', patients: 123, revenue: '$38,900', rating: 4.9, growth: '+18%' },
    { name: 'Pediatrics', patients: 136, revenue: '$25,180', rating: 5.0, growth: '+22%' },
  ];

  const monthlyData = [
    { month: 'Jan', appointments: 280, revenue: 18500 },
    { month: 'Feb', appointments: 310, revenue: 21200 },
    { month: 'Mar', appointments: 295, revenue: 19800 },
    { month: 'Apr', appointments: 320, revenue: 23400 },
    { month: 'May', appointments: 340, revenue: 25600 },
    { month: 'Jun', appointments: 365, revenue: 27800 },
    { month: 'Jul', appointments: 385, revenue: 29200 },
    { month: 'Aug', appointments: 400, revenue: 31500 },
    { month: 'Sep', appointments: 420, revenue: 33700 },
    { month: 'Oct', appointments: 445, revenue: 36200 },
  ];

  const topDoctors = [
    { name: 'Dr. Sarah Johnson', specialty: 'Cardiology', patients: 145, rating: 4.9, revenue: '$42,300' },
    { name: 'Dr. Michael Chen', specialty: 'General Medicine', patients: 189, rating: 4.8, revenue: '$35,200' },
    { name: 'Dr. Emily Rodriguez', specialty: 'Dermatology', patients: 123, rating: 4.9, revenue: '$28,900' },
    { name: 'Dr. James Wilson', specialty: 'Orthopedics', patients: 156, rating: 4.7, revenue: '$38,500' },
    { name: 'Dr. Robert Taylor', specialty: 'Neurology', patients: 98, rating: 5.0, revenue: '$31,200' },
  ];

  const patientDemographics = {
    ageGroups: [
      { range: '0-18', count: 189, percentage: 15 },
      { range: '19-35', count: 362, percentage: 29 },
      { range: '36-50', count: 425, percentage: 34 },
      { range: '51-65', count: 187, percentage: 15 },
      { range: '65+', count: 84, percentage: 7 },
    ],
    gender: [
      { type: 'Male', count: 658, percentage: 53 },
      { type: 'Female', count: 589, percentage: 47 },
    ],
  };

  const maxAppointments = Math.max(...monthlyData.map(d => d.appointments));
  const maxRevenue = Math.max(...monthlyData.map(d => d.revenue));

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar userType="hospital" />
      
      <div className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Analytics & Reports</h1>
              <p className="mt-2 text-gray-600">Hospital performance insights and metrics</p>
            </div>
            <div className="flex items-center space-x-3 mt-4 md:mt-0">
              <Select
                value={timeRange}
                onChange={(e) => setTimeRange(e.target.value)}
                options={[
                  { value: 'week', label: 'This Week' },
                  { value: 'month', label: 'This Month' },
                  { value: 'quarter', label: 'This Quarter' },
                  { value: 'year', label: 'This Year' },
                ]}
              />
              <Button variant="outline" size="sm">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Export Report
              </Button>
            </div>
          </div>

          {/* Overview Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card className="bg-gradient-to-br from-blue-500 to-blue-700 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-blue-100 text-sm">Total Revenue</p>
                  <p className="text-3xl font-bold mt-2">{overviewStats.totalRevenue}</p>
                  <p className="text-blue-100 text-xs mt-1">+15% from last month</p>
                </div>
                <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </Card>

            <Card className="bg-gradient-to-br from-green-500 to-green-700 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-green-100 text-sm">Total Patients</p>
                  <p className="text-3xl font-bold mt-2">{overviewStats.totalPatients}</p>
                  <p className="text-green-100 text-xs mt-1">+8% from last month</p>
                </div>
                <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                  </svg>
                </div>
              </div>
            </Card>

            <Card className="bg-gradient-to-br from-purple-500 to-purple-700 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-100 text-sm">Total Appointments</p>
                  <p className="text-3xl font-bold mt-2">{overviewStats.totalAppointments}</p>
                  <p className="text-purple-100 text-xs mt-1">+12% from last month</p>
                </div>
                <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </Card>

            <Card className="bg-gradient-to-br from-orange-500 to-orange-700 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-orange-100 text-sm">Average Rating</p>
                  <p className="text-3xl font-bold mt-2">{overviewStats.averageRating}</p>
                  <p className="text-orange-100 text-xs mt-1">★★★★★</p>
                </div>
                <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
              </div>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Monthly Trends */}
            <Card>
              <h2 className="text-xl font-bold text-gray-900 mb-6">Monthly Appointments Trend</h2>
              <div className="space-y-3">
                {monthlyData.map((data, index) => (
                  <div key={index}>
                    <div className="flex items-center justify-between text-sm mb-1">
                      <span className="font-medium text-gray-700">{data.month}</span>
                      <span className="text-gray-600">{data.appointments} appointments</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-primary-500 to-primary-700 h-2 rounded-full transition-all"
                        style={{ width: `${(data.appointments / maxAppointments) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Revenue Trends */}
            <Card>
              <h2 className="text-xl font-bold text-gray-900 mb-6">Monthly Revenue Trend</h2>
              <div className="space-y-3">
                {monthlyData.map((data, index) => (
                  <div key={index}>
                    <div className="flex items-center justify-between text-sm mb-1">
                      <span className="font-medium text-gray-700">{data.month}</span>
                      <span className="text-gray-600">${data.revenue.toLocaleString()}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-green-500 to-green-700 h-2 rounded-full transition-all"
                        style={{ width: `${(data.revenue / maxRevenue) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Department Performance */}
          <Card className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Department Performance</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">Department</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">Patients</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">Revenue</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">Rating</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">Growth</th>
                  </tr>
                </thead>
                <tbody>
                  {departmentPerformance.map((dept, index) => (
                    <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-3 px-4 font-medium text-gray-900">{dept.name}</td>
                      <td className="py-3 px-4 text-gray-600">{dept.patients}</td>
                      <td className="py-3 px-4 text-gray-600">{dept.revenue}</td>
                      <td className="py-3 px-4">
                        <div className="flex items-center">
                          <span className="text-yellow-400 mr-1">★</span>
                          <span className="text-gray-900">{dept.rating}</span>
                        </div>
                      </td>
                      <td className="py-3 px-4">
                        <Badge variant="success">{dept.growth}</Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Top Doctors */}
            <Card>
              <h2 className="text-xl font-bold text-gray-900 mb-6">Top Performing Doctors</h2>
              <div className="space-y-4">
                {topDoctors.map((doctor, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center text-white font-bold">
                        {index + 1}
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">{doctor.name}</p>
                        <p className="text-sm text-gray-600">{doctor.specialty}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-gray-900">{doctor.revenue}</p>
                      <div className="flex items-center text-sm">
                        <span className="text-yellow-400 mr-1">★</span>
                        <span className="text-gray-600">{doctor.rating}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Patient Demographics */}
            <Card>
              <h2 className="text-xl font-bold text-gray-900 mb-6">Patient Demographics</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-gray-700 mb-3">Age Distribution</h3>
                  <div className="space-y-2">
                    {patientDemographics.ageGroups.map((group, index) => (
                      <div key={index}>
                        <div className="flex items-center justify-between text-sm mb-1">
                          <span className="text-gray-600">{group.range} years</span>
                          <span className="font-medium text-gray-900">{group.count} ({group.percentage}%)</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-gradient-to-r from-blue-500 to-blue-700 h-2 rounded-full"
                            style={{ width: `${group.percentage * 2}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-700 mb-3">Gender Distribution</h3>
                  <div className="space-y-2">
                    {patientDemographics.gender.map((g, index) => (
                      <div key={index}>
                        <div className="flex items-center justify-between text-sm mb-1">
                          <span className="text-gray-600">{g.type}</span>
                          <span className="font-medium text-gray-900">{g.count} ({g.percentage}%)</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className={`h-2 rounded-full ${
                              g.type === 'Male' ? 'bg-gradient-to-r from-blue-500 to-blue-700' : 'bg-gradient-to-r from-pink-500 to-pink-700'
                            }`}
                            style={{ width: `${g.percentage}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default HospitalAnalytics;
