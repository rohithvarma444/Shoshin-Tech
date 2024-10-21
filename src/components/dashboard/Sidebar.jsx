import logo from '../../assets/logo.png';
import { MdDashboardCustomize } from "react-icons/md";
import { BsFillPersonPlusFill } from "react-icons/bs";
import { BiSolidCalendarEvent } from "react-icons/bi";
import { PiDotsThreeCircleFill } from "react-icons/pi";
import { FaUsers } from "react-icons/fa";
import SideBarLink from './SidebarLink';
import { BiSupport } from "react-icons/bi";
import { CiSettings } from "react-icons/ci";

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
]

function Sidebar() {
  return (
    <div className='flex flex-col gap-y-5 border-r border-gray-200 sm:w-[250px] lg:w-[18%] h-screen overflow-y-auto'>
      <div className='flex flex-col items-center justify-center relative top-4 font-medium text-lg'>
        <img src={logo} alt='Logo' className="w-3/4 max-w-[150px]" />
      </div>

      <div className='flex flex-col gap-y-5 p-5 mt-10 mx-auto w-full'>
        <p className='text-gray-500 text-sm'>Main Menu</p>

        <div className='flex flex-col gap-y-4'>
          {sideBarLinksRender.map((link) => (
            <SideBarLink title={link.name} route={link.path} icon={link.icon} key={link.name}/>
          ))}
        </div>
      </div>

      <div className='flex flex-col gap-y-5 p-5 mx-auto w-full'>
        <p className='text-gray-500 text-sm'>Other</p>

        <div className='flex flex-col gap-y-4'>
          {otherLinks.map((link) => (
            <SideBarLink title={link.name} route={link.path} icon={link.icon} key={link.name}/>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
