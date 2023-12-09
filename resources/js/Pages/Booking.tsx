import Header from "@/Components/Header/Header";
import NavBar from "@/Components/NavBar/NavBar";
import PageLoading from "@/Components/PageLoading/PageLoading";
import DataPicker from "@/Components/DataPicker/DataPicker";
import { Divider } from "@chakra-ui/react";
import { useState } from "react";
import TimeSlots from "@/Components/TimeSlots/TimeSlots";
const Booking = () => {
    const [selectedDate, setSelectedDate] = useState<string | undefined>(undefined);
    const handleDataSelect = (date: string) => {
        console.log(date);
        setSelectedDate(date);
    }
    return (
        <>
            <Header text="Fazer uma reserva"></Header>
            <DataPicker onDataSelect={handleDataSelect}></DataPicker>
            <Divider />
            <TimeSlots text={'Manhã'}></TimeSlots>
            <TimeSlots text={'Tarde'}></TimeSlots>
            <TimeSlots text={'Noite'}></TimeSlots>
            <NavBar activePage="Booking"></NavBar>
            <PageLoading />
        </>
    )
}

export default Booking;
