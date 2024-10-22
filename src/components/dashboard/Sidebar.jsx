import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import classNames from 'classnames';
import { AiOutlineMenu } from "react-icons/ai";
import { MdDashboardCustomize } from "react-icons/md";
import { BsFillPersonPlusFill } from "react-icons/bs";
import { BiSolidCalendarEvent, BiSupport } from "react-icons/bi";
import { PiDotsThreeCircleFill } from "react-icons/pi";
import { FaUsers } from "react-icons/fa";
import { CiSettings } from "react-icons/ci";
import logo from '../../assets/logo.png'
import smLogo from '../../assets/sm-logo.png'
import SidebarLink from './SidebarLink';
import { useEffect } from 'react';

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
  }
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
    <div className={classNames(
      'flex flex-col border-r border-gray-200 h-screen transition-all duration-300 ease-in-out',
      'bg-white relative',
      collapsed ? 'w-20' : 'w-64'
    )}>
      {isMobile && (
        <button
          className={`lg:hidden absolute right-4 top-[20px] ${collapsed? "left-[90px]" : "left-[230px]"}`}
          onClick={() => setCollapsed(!collapsed)}
        >
          <AiOutlineMenu className="w-6 h-6 text-gray-600" />
        </button>
      )}

      {/* Logo */}
      <div className={classNames(
        'flex items-center p-4',
        collapsed ? 'justify-center' : 'px-6'
      )}>
        <img
          src={!collapsed? logo: smLogo}
          alt="Logo"
          className={classNames(
            'transition-all duration-300',
            collapsed ? 'w-10' : 'w-32'
          )}
        />
      </div>

      {/* Navigation */}
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

      {/* Collapse Toggle - Only show on desktop */}
      {!isMobile && (
        <button
          className="hidden lg:flex items-center justify-center p-2 mx-4 mb-4 text-gray-600 rounded-lg hover:bg-gray-100"
          onClick={() => setCollapsed(!collapsed)}
        >
          <AiOutlineMenu className="w-6 h-6" />
        </button>
      )}
    </div>
  );
};

export default Sidebar;