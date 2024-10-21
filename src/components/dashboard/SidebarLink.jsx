import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";

function SidebarLink({title, route, icon: IconComponent}) {
    const location = useLocation();
    const isActive = location.pathname === route;

    return (
        <NavLink to={route} className="text-lg font-medium">
            <div  className={`flex items-center ${isActive ? 'text-red-500' : 'text-gray-500'}`}>
                {IconComponent && <IconComponent style={{ marginRight: '8px' }} />}
                <span>{title}</span>
            </div>
        </NavLink>
    );
}

export default SidebarLink;
