import Header from "@/Components/Header/Header";
import NavBar from "@/Components/NavBar/NavBar";
import PageLoading from "@/Components/PageLoading/PageLoading";
import DataPicker from "@/Components/DataPicker/DataPicker";
import { Divider } from "@chakra-ui/react";
import { useState } from "react";
import Button from "@/Components/Button/Button";

const Booking = () => {
    const [selectedDate, setSelectedDate] = useState<string | undefined>(undefined);
    const [selectedTime, setSelectedTime] = useState<string | null>(null);
    const [unavailableTimes, setUnavailableTimes] = useState<string[]>([]);
    const [loading, setIsLoading] = useState<boolean>(false);

    const handleDataSelect = async (date: string | undefined) => {
        setSelectedDate(date);
    }

    const handleTimeSelection = (time: string | null) => {
        setSelectedTime(time);
    }; //temp

    return (
        <>
            <Header text="Fazer uma reserva" />
            <DataPicker onDataSelect={handleDataSelect} />
            <Divider />
            <Button>Reservar</Button>
            <NavBar activePage="Booking" />
            <PageLoading />
        </>
    )
}

export default Booking;
