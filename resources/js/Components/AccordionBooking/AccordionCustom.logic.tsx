import { FaCalendar, FaClock, FaWhatsapp } from "react-icons/fa";
import { MdAttachMoney } from "react-icons/md";
import { Booking } from "@/types";
import { useState } from "react";

export interface BookingAccordionProps {
    booking: Booking;
}

interface AccordionItem {
    icon: JSX.Element;
    label: string;
}
export const AccordionItems: AccordionItem[] = [
    { icon: <FaCalendar color="#5CC6BA" className='w-8 mb-1' />, label: '00/00/0000' },
    { icon: <FaClock color="#5CC6BA" className='w-8 mb-1' />, label: '09:30' },
    { icon: <FaWhatsapp color="#5CC6BA" className='w-8 mb-1' />, label: '(85) 9 9981-6697' },
    { icon: <MdAttachMoney color="#5CC6BA" className='w-8 mb-1' />, label: '15,00' },
];

export const useAccordion = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isDeleted, setIsDeleted] = useState<boolean>(false);
    const [actionType, setActionType] = useState<"delete" | "update" | undefined>();

    const deleteBooking = async (bookingId: number) => {
        try {
            setIsLoading(true);
            setActionType("delete");
            const response = await window.axios.delete(route('booking.destroy', { id: bookingId }));
            console.log('resultado', response.data);
            setIsDeleted(true);
        } catch (error: any) {
            console.error('erro:', error.message);
        } finally {
            setActionType(undefined);
            setIsLoading(false);
        }
    };
    const updateBooking = async (bookingId: number, setIsBookingConfirmed: (isConfirmed: boolean) => void) => {
        try {
            setIsLoading(true);
            setActionType('update');
            const { data } = await window.axios.put(route('booking.update', { id: bookingId }));
            setIsBookingConfirmed(true)
            console.log(data);
        } catch (error: any) {
            console.error('error', error.message);
        } finally {
            setActionType(undefined);

            setIsLoading(false);
        }
    }


    return { deleteBooking, isLoading, isDeleted, updateBooking, actionType }

};

