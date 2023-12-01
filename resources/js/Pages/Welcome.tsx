import Button from "@/Components/Button/Button";
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
            <Home></Home>
            <Services></Services>
            <NavBar></NavBar>
            <PageLoading />

        </>
    )
}

export default Welcome;
