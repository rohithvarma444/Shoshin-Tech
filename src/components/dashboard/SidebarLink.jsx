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
        'flex items-center px-4 py-3 text-base font-medium rounded-lg transition-colors duration-200',
        'hover:bg-gray-200',
        isActive
          ? 'text-blue-700 bg-blue-100 hover:bg-blue-200'
          : 'text-gray-700 hover:text-gray-900'
      )}
    >
      <Icon
        className={classNames(
          'flex-shrink-0 transition-all duration-200',
          collapsed ? 'w-6 h-6' : 'w-5 h-5',
          isActive ? 'text-blue-700' : 'text-gray-600'
        )}
      />
      {!collapsed && (
        <span className="ml-4 transition-all duration-200 font-semibold">{title}</span>
      )}
    </Link>
  );
};

export default SidebarLink;
