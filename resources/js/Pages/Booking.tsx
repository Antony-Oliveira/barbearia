import Header from "@/Components/Header/Header";
import NavBar from "@/Components/NavBar/NavBar";
import PageLoading from "@/Components/PageLoading/PageLoading";
import DataPicker from "@/Components/DataPicker/DataPicker";
import { Center, Divider, Spinner, Text } from "@chakra-ui/react";
import { useState } from "react";
import TimeSlots from "@/Components/TimeSlots/TimeSlots";

const Booking = () => {
    const [selectedDate, setSelectedDate] = useState<string | undefined>(undefined);
    const [selectedTime, setSelectedTime] = useState<string | null>(null);
    const [unavailableTimes, setUnavailableTimes] = useState<string[]>([]);
    const [loading, setIsLoading] = useState<boolean>(false);

    const handleDataSelect = async (date: string) => {
        setSelectedDate(date);
        setIsLoading(true);
        try {
            const response = await window.axios.post(route('booking.availability.check'), {
                date: date
            });

            console.log(response);
            setUnavailableTimes(response.data.unavaiableTimes);
        } catch (e) {

        } finally {
            setIsLoading(false);
        }
    }

    const handleTimeSelection = (time: string | null) => {
        setSelectedTime(time);
    };


    return (
        <>
            <Header text="Fazer uma reserva" />
            <DataPicker onDataSelect={handleDataSelect} />
            <Divider />
            {selectedDate ? (
                loading ? (
                    <Center mt={10}>
                        <Spinner />
                    </Center>
                ) : (
                    <TimeSlots unavailableTimes={unavailableTimes} onSelectTime={handleTimeSelection} />
                )
            ) : (
                <Center mt={10}>
                    <Text>Selecione uma data para iniciar seu agendamento</Text>
                </Center>
            )}
            <NavBar activePage="Booking" />
            <PageLoading />
        </>
    )
}

export default Booking;
