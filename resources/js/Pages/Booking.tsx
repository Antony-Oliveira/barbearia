import Header from "@/Components/Header/Header";
import NavBar from "@/Components/NavBar/NavBar";
import PageLoading from "@/Components/PageLoading/PageLoading";
import DataPicker from "@/Components/DataPicker/DataPicker";
import { Divider } from "@chakra-ui/react";
import { useState } from "react";
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
            <NavBar activePage="Booking"></NavBar>
            <PageLoading />
        </>
    )
}

export default Booking;
