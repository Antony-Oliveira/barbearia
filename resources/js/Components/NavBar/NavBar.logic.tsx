import { FaHome, FaCalendar, FaUser } from "react-icons/fa";

export interface NavBarProps {
    activePage: string;
}

interface NavItem {
    page: string;
    icon: JSX.Element;
    label: string;
}

export const navItems: NavItem[] = [
    { page: "/", icon: <FaHome color="#5CC6BA" className='w-8 mb-1' />, label: "Home" },
    { page: "/booking", icon: <FaCalendar color="#5CC6BA" className='w-8 mb-1' />, label: "Booking" },
    { page: "/account", icon: <FaUser color="#5CC6BA" className='w-8 mb-1' />, label: "Account" },
  ];

