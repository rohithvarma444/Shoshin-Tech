import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import classNames from "classnames";

const SidebarLink = ({ title, route, icon: Icon, collapsed }) => {
  const location = useLocation();
  const isActive = location.pathname === route;

  return (
    <Link
      to={route}
      className={classNames(
        'flex items-center px-2 py-2 text-base font-medium rounded-lg transition-colors duration-200',
        'hover:bg-gray-100',
        isActive
          ? 'text-blue-600 bg-blue-50 hover:bg-blue-100'
          : 'text-gray-600 hover:text-gray-900'
      )}
    >
      <Icon
        className={classNames(
          'flex-shrink-0 transition-all duration-200',
          collapsed ? 'w-6 h-6' : 'w-5 h-5',
          isActive ? 'text-blue-600' : 'text-gray-500'
        )}
      />
      {!collapsed && (
        <span className="ml-3 transition-all duration-200">{title}</span>
      )}
    </Link>
  );
};

export default SidebarLink;