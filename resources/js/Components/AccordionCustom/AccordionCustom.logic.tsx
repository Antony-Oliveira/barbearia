import { FaHome, FaCalendar, FaUser, FaClock, FaWhatsapp } from "react-icons/fa";
import { MdAttachMoney } from "react-icons/md";


export interface AccordionCustomProps {
    activePage: string;
}

interface AccordionItem {
    icon: JSX.Element;
    label: string;
}
export const AccordionItems: AccordionItem[] = [
    {icon: <FaCalendar color="#5CC6BA" className='w-8 mb-1' />, label: '00/00/0000' },
    {icon: <FaClock color="#5CC6BA" className='w-8 mb-1' />, label: '09:30' },
    {icon: <FaWhatsapp color="#5CC6BA" className='w-8 mb-1' />, label: '(85) 9 9981-6697' },
    {icon: <MdAttachMoney color="#5CC6BA" className='w-8 mb-1' />, label: '15,00' },
  ];

