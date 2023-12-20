import { FaHome, FaCalendar, FaUser } from "react-icons/fa";

export interface NavAdminProps {
    activePage: string;
}

interface NavItem {
    page: string;
    icon: JSX.Element;
    label: string;
}

export const navItems: NavItem[] = [
    { page: route('admin.dashboard'), icon: <FaHome color="#5CC6BA" className='w-8 mb-1' />, label: "Dashboard" },
    { page: route('admin.bookings'), icon: <FaCalendar color="#5CC6BA" className='w-8 mb-1' />, label: "Bookings" },
    { page: route('admin.profile'), icon: <FaUser color="#5CC6BA" className='w-8 mb-1' />, label: "Profile" },
  ];

