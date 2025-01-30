// src/components/Sidebar.jsx
import React, { useContext, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import {
  FaTachometerAlt,
  FaCalendarAlt,
  FaNotesMedical,
  FaUserAlt,
  FaSignOutAlt,
  FaBars,
  FaTimes,
  FaClipboardCheck,
} from 'react-icons/fa';

const Sidebar = () => {
  const { user, logout } = useContext(AuthContext);
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    logout();
  };

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const navigation = [
    
    {
      name: 'Dashboard',
      path: '/dashboard',
      icon: <FaTachometerAlt />,
      roles: ['patient', 'receptionist', 'doctor'],
    },
    {
      name: 'Appointment',
      path: '/dashboard/appointment',
      icon: <FaCalendarAlt />,
      roles: ['patient', 'receptionist', 'doctor'],
    },
    {
      name: 'Medical Details',
      path: '/dashboard/medical-details',
      icon: <FaNotesMedical />,
      roles: ['patient'],
    },{
      name: 'All Patients',
      path: '/dashboard/user-list',
      icon: <FaClipboardCheck />,
      roles: ['receptionist', 'doctor'],
    },
    {
      name: 'Create OPD Form',
      path: '/dashboard/opd-form',
      icon: <FaNotesMedical />,
      roles: ['receptionist', 'doctor'],
    },
    {
      name: 'OPD List',
      path: '/dashboard/opd-list',
      icon: <FaClipboardCheck />,
      roles: ['receptionist', 'doctor'],
    },
    
    {
      name: 'Profile',
      path: '/dashboard/profile',
      icon: <FaUserAlt />,
      roles: ['patient', ],
    },
    
  ];

  const filteredNavigation = navigation.filter((item) =>
    item.roles.includes(user?.role)
  );

  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* Mobile Header */}
      <div className="md:hidden flex items-center justify-between bg-gray-900 text-white p-4">
        <button onClick={toggleSidebar} aria-label="Toggle Sidebar">
          {isOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
        </button>
        <span>{ user.email}</span>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-10 md:hidden"
          onClick={toggleSidebar}
          aria-hidden="true"
        > </div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gray-900 text-white flex flex-col shadow-lg transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out z-20 md:translate-x-0 md:static md:shadow-none`}
      >
        {/* Logo / Title */}
        <div className="p-6 text-2xl font-bold border-b border-gray-700">
          <Link to="#" className="flex items-center">
            {/* <FaTachometerAlt className="text-3xl" /> */}
            {/* <span className="ml-3">Dashboard</span> */}
            <img src='https://res.cloudinary.com/dnkx3dnnn/image/upload/v1730302177/kodekalp/e7r7rxqva0roc3dvypiu.png' alt="logo"/>
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 p-6">
          <ul className="space-y-2">
            {filteredNavigation.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className={`flex items-center gap-3 p-2 text-base font-medium rounded-lg ${
                    isActive(item.path)
                      ? 'bg-gray-800 text-white'
                      : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                  }`}
                  onClick={() => setIsOpen(false)}
                  aria-current={isActive(item.path) ? 'page' : undefined}
                >
                  <span className="text-xl">{item.icon}</span>
                  <span>{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Logout Button */}
        <div className="p-6 border-t border-gray-700">
          <button
            onClick={() => {
              handleLogout();
              setIsOpen(false);
            }}
            className="w-full flex items-center gap-3 p-2 text-base font-medium rounded-lg text-gray-300 hover:bg-gray-800 hover:text-white focus:outline-none"
            aria-label="Logout"
          >
            <FaSignOutAlt className="text-xl" />
            <span>Logout</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
