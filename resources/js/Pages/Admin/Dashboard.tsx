import AccordionCustom from "@/Components/AccordionCustom/AccordionBooking";
import Header from "@/Components/Header/Header";
import NavBar from "@/Components/NavBar/NavBar";
import PageLoading from "@/Components/PageLoading/PageLoading";

const Dashboard = () => {
    return (
        <>
            <Header text="Admin" />
            <AccordionCustom></AccordionCustom>
            <NavBar activePage="Dashboard" />
            <PageLoading />
        </>
    )
}

export default Dashboard;
