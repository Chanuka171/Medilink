import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = ({ userType }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const patientMenuItems = [
    { icon: '📊', name: 'Dashboard', path: '/patient/dashboard' },
    { icon: '📅', name: 'Appointments', path: '/patient/appointments' },
    { icon: '📋', name: 'Medical Records', path: '/patient/records' },
    { icon: '👨‍⚕️', name: 'Find Doctors', path: '/patient/doctors' },
    { icon: '💊', name: 'Prescriptions', path: '/patient/prescriptions' },
    { icon: '⚙️', name: 'Settings', path: '/patient/settings' },
  ];

  const hospitalMenuItems = [
    { icon: '📊', name: 'Dashboard', path: '/hospital/dashboard' },
    { icon: '🏥', name: 'Patients', path: '/hospital/patients' },
    { icon: '📅', name: 'Appointments', path: '/hospital/appointments' },
    { icon: '👨‍⚕️', name: 'Doctors', path: '/hospital/doctors' },
    { icon: '📈', name: 'Analytics', path: '/hospital/analytics' },
    { icon: '⚙️', name: 'Settings', path: '/hospital/settings' },
  ];

  const menuItems = userType === 'hospital' ? hospitalMenuItems : patientMenuItems;

  return (
    <aside 
      className={`bg-white border-r border-gray-200 transition-all duration-300 ${
        isCollapsed ? 'w-20' : 'w-64'
      } flex flex-col`}
    >
      {/* Collapse Toggle */}
      <div className="p-4 border-b border-gray-200 flex justify-end">
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
        >
          <svg 
            className={`w-5 h-5 text-gray-600 transition-transform ${isCollapsed ? 'rotate-180' : ''}`} 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
          </svg>
        </button>
      </div>

      {/* Menu Items */}
      <nav className="flex-1 p-4 space-y-2">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
              isActive(item.path)
                ? 'bg-primary-100 text-primary-700 font-medium'
                : 'text-gray-700 hover:bg-gray-100'
            }`}
            title={isCollapsed ? item.name : ''}
          >
            <span className="text-xl">{item.icon}</span>
            {!isCollapsed && <span>{item.name}</span>}
          </Link>
        ))}
      </nav>

      {/* User Section */}
      <div className="p-4 border-t border-gray-200">
        <Link
          to="/logout"
          className="flex items-center space-x-3 px-4 py-3 rounded-lg text-error hover:bg-red-50 transition-colors"
          title={isCollapsed ? 'Logout' : ''}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
          </svg>
          {!isCollapsed && <span>Logout</span>}
        </Link>
      </div>
    </aside>
  );
};

export default Sidebar;
