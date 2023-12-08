import Button from "@/Components/Button/Button";
import Home from "@/Components/Header/Header";
import NavBar from "@/Components/NavBar/NavBar";
import PageLoading from "@/Components/PageLoading/PageLoading";
import { Link } from "@inertiajs/react";
import Services from "./ServicesPage";

function Welcome() {
    return (
        <>
            <Home></Home>
            <Services></Services>
            <Link href={route('booking')} className="schedule">
                <Button text={'Agendar'} as={'p'}></Button>
            </Link>
            <NavBar activePage="Home"></NavBar>
            <PageLoading />

        </>
    )
}

export default Welcome;
