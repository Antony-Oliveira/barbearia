import Calendar from "@/Components/Calendar/Calendar";
import Home from "@/Components/Home/Home";
import NavBar from "@/Components/NavBar/NavBar";
import PageLoading from "@/Components/PageLoading/PageLoading";
import { Link } from "@inertiajs/react";

function Welcome() {
    return (
        <>
        <PageLoading />
        <Home></Home>
        <NavBar></NavBar>
        <Calendar></Calendar>
        </>
    )
}

export default Welcome;
