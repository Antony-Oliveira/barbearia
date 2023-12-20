import AccordionCustom from "@/Components/AccordionBooking/AccordionBooking";
import Header from "@/Components/Header/Header";
import PageLoading from "@/Components/PageLoading/PageLoading";
import { Booking } from "@/types";
import NavAdmin from "../../Components/NavAdmin/NavAdmin";

interface DashboardProps {
    bookings: Booking[];
}
const Dashboard = ({ bookings }: DashboardProps) => {

    return (
        <>
            <Header text="Admin" />
            {
                bookings.map((booking) => (
                    <AccordionCustom booking={booking} />
                ))
            }
            <NavAdmin activePage="Dashboard" />
            <PageLoading />
        </>
    )
}

export default Dashboard;
