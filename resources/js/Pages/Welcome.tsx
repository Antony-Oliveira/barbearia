<<<<<<< HEAD
import Calendar from "@/Components/Calendar/Calendar";
=======
import Button from "@/Components/Button/Button";
>>>>>>> main
import Home from "@/Components/Home/Home";
import NavBar from "@/Components/NavBar/NavBar";
import PageLoading from "@/Components/PageLoading/PageLoading";
import Service from "@/Components/Services/Service";
import { Center, Flex, Stack, Text } from "@chakra-ui/react";
import { Link } from "@inertiajs/react";
import Services from "./Services";

function Welcome() {
    return (
        <>
<<<<<<< HEAD
        <PageLoading />
        <Home></Home>
        <NavBar></NavBar>
        <Calendar></Calendar>
=======
            <Home></Home>
            <Services></Services>
            <Link href="/Calendar" className="schedule">
                <Button text={'Agendar'}></Button>
            </Link>
            <NavBar></NavBar>
            <PageLoading />

>>>>>>> main
        </>
    )
}

export default Welcome;
