import Header from "@/Components/Header/Header";
import PageLoading from "@/Components/PageLoading/PageLoading";
import NavAdmin from "@/Components/NavAdmin/NavAdmin";
import AccordionCustom from "@/Components/AccordionBooking/AccordionBooking";
import { Booking } from "@/types";
import Search from "@/Components/Search/Search";
import {  useState } from "react";
interface BookingsProps {
    bookings: Booking[];
}

const Bookings = ({ bookings }: any) => {
    const [filteredBookings, setFilteredBookings] = useState<Booking[]>(bookings);

    const handleOnSearch = (filteredBookings: Booking[]) => {
        setFilteredBookings(filteredBookings);
    }

    return (
        <>
            <Header text="Bookings" />
            <Search bookings={bookings} onSearch={handleOnSearch}/>
            {
                filteredBookings.map((booking, index) => (
                    <AccordionCustom booking={booking} key={index} />
                ))
            }
            <NavAdmin activePage="Bookings" />
            <PageLoading />
        </>
    )
}

export default Bookings;
