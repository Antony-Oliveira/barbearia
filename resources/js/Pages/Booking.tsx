import Header from "@/Components/Header/Header";
import NavBar from "@/Components/NavBar/NavBar";
import PageLoading from "@/Components/PageLoading/PageLoading";
import DataPicker from "@/Components/DataPicker/DataPicker";
import { Divider } from "@chakra-ui/react";
import { useState } from "react";
import Button from "@/Components/Button/Button";
import BookingForm from "@/Components/BookingForm/BookingForm";

const Booking = ({services} : any) => {
    const [selectedDate, setSelectedDate] = useState<string | undefined>(undefined);
    const [selectedServices, setSelectedServices] = useState<(string | number)[]>();

    const handleDataSelect = async (date: string | undefined) => {
        setSelectedDate(date);
    }
    const handleServicesSelect = (values : (string | number)[]) => {
        setSelectedServices(values);
    }

    return (
        <>
            <Header text="Fazer uma reserva" />
            <BookingForm  services={services} />
            <NavBar activePage="Booking" />
            <PageLoading />
        </>
    )
}

export default Booking;
