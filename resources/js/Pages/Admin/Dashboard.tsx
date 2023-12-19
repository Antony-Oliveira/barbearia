import AccordionCustom from "@/Components/AccordionBooking/AccordionBooking";
import Header from "@/Components/Header/Header";
import NavBar from "@/Components/NavBar/NavBar";
import PageLoading from "@/Components/PageLoading/PageLoading";
import { Booking } from "@/types";

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
            <NavBar activePage="Dashboard" />
            <PageLoading />
        </>
    )
}

export default Dashboard;
