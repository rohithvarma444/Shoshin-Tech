import { FaHome, FaUserPlus, FaCalendarAlt, FaUsers, FaBuildingUser } from 'react-icons/fa6';
import React from 'react';


export const navLinks = [
    {
        name: 'Dashboard',
        path: '/dashboard',
        icon: <FaHome />
    },
    {
        name: 'Recruitment',
        path: '/recruitment',
        icon: <FaUserPlus />
    },
    {
        name: 'Schedule',
        path: '/schedule',
        icon: <FaCalendarAlt />
    },
    {
        name: 'Employee',
        path: '/employee',
        icon: <FaUsers />
    },
    {
        name: 'Department',
        path: '/department',
        icon: <FaBuildingUser />
    }
];

