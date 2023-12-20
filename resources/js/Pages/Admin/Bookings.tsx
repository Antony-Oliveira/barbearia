import Header from "@/Components/Header/Header";
import PageLoading from "@/Components/PageLoading/PageLoading";
import NavAdmin from "../../Components/NavAdmin/NavAdmin";

const Bookings = () => {
    return (
        <>
            <Header text="Bookings" />
            <NavAdmin activePage="Bookings" />
            <PageLoading />
        </>
    )
}

export default Bookings;
