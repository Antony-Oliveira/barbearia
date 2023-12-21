import Header from "@/Components/Header/Header";
import PageLoading from "@/Components/PageLoading/PageLoading";
import NavAdmin from "../../Components/NavAdmin/NavAdmin";
import AccordionCustom from "@/Components/AccordionBooking/AccordionBooking";
import { Booking } from "@/types";
interface BookingsProps {
    bookings: Booking[];
}

const Bookings = ({ bookings }: BookingsProps) => {
    return (
        <>
            <Header text="Bookings" />
            {
                bookings.map((booking, index) => (
                    <AccordionCustom booking={booking} key={index} />
                ))
            }
            <NavAdmin activePage="Bookings" />
            <PageLoading />
        </>
    )
}

export default Bookings;
