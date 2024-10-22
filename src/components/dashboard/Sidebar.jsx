import React, { useState, useEffect } from 'react';
import { AiOutlineMenu } from "react-icons/ai";
import { MdDashboardCustomize } from "react-icons/md";
import { BsFillPersonPlusFill } from "react-icons/bs";
import { BiSolidCalendarEvent, BiSupport } from "react-icons/bi";
import { PiDotsThreeCircleFill } from "react-icons/pi";
import { FaUsers } from "react-icons/fa";
import { CiSettings } from "react-icons/ci";
import classNames from 'classnames';
import logo from '../../assets/logo.png';
import smLogo from '../../assets/sm-logo.png';
import SidebarLink from './SidebarLink';

const sideBarLinksRender = [
  {
    name: 'Dashboard',
    path: '/',
    icon: MdDashboardCustomize,
  },
  {
    name: 'Recruitment',
    path: '/recruitment',
    icon: BsFillPersonPlusFill,
  },
  {
    name: 'Schedule',
    path: '/schedule',
    icon: BiSolidCalendarEvent,
  },
  {
    name: 'Employee',
    path: '/employee',
    icon: FaUsers,
  },
  {
    name: 'Department',
    path: '/department',
    icon: PiDotsThreeCircleFill,
  },
];

const otherLinks = [
  {
    name: 'Support',
    path: '/support',
    icon: BiSupport,
  },
  {
    name: 'Settings',
    path: '/settings',
    icon: CiSettings,
  },
];

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1024) {
        setCollapsed(true);
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div
      className={classNames(
        'flex flex-col border-r border-gray-200 h-screen sm:h-screen transition-all duration-300 ease-in-out ',
        collapsed ? 'w-20' : 'w-64',
        'bg-gradient-to-b from-gray-100 to-gray-50 shadow-lg'
      )}
    >
      {/* Logo */}
      <div
        className={classNames(
          'flex items-center transition-all duration-300 overflow-hidden',
          collapsed ? 'justify-center p-4' : 'px-6 py-4'
        )}
      >
        <img
          src={!collapsed ? logo : smLogo}
          alt="Logo"
          className={classNames('transition-all duration-300', collapsed ? 'w-10' : 'w-32')}
        />
      </div>

      {/* Main Menu */}
      <div className="flex-1 px-4 py-6 space-y-8">
        {/* Main Menu */}
        <div>
          {!collapsed && (
            <p className="px-2 text-xs font-medium text-gray-500 uppercase">
              Main Menu
            </p>
          )}
          <div className="mt-4 space-y-2">
            {sideBarLinksRender.map((link) => (
              <SidebarLink
                key={link.name}
                title={link.name}
                route={link.path}
                icon={link.icon}
                collapsed={collapsed}
              />
            ))}
          </div>
        </div>

        {/* Other Links */}
        <div>
          {!collapsed && (
            <p className="px-2 text-xs font-medium text-gray-500 uppercase">
              Other
            </p>
          )}
          <div className="mt-4 space-y-2">
            {otherLinks.map((link) => (
              <SidebarLink
                key={link.name}
                title={link.name}
                route={link.path}
                icon={link.icon}
                collapsed={collapsed}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Unified Toggle Button - Stays at Bottom */}
      <div className="flex items-center justify-center p-4 mt-auto">
        <button
          className="flex items-center justify-center p-2 text-gray-600 rounded-lg hover:bg-gray-100 transition-colors duration-300"
          onClick={() => setCollapsed(!collapsed)}
        >
          <AiOutlineMenu className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
