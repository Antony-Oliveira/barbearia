// DataPicker.tsx
import { useEffect, useState } from 'react';
import { format, getMonth } from 'date-fns';
import { DayPicker, SelectSingleEventHandler } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { Box, Center, Flex, Spinner, Text } from '@chakra-ui/react';
import { ptBR } from 'date-fns/locale';
import './style.css';
import TimeSlots from '../TimeSlots/TimeSlots';
import { AxiosResponse } from 'axios';

interface DataPickerProps {
    onDataSelect: (date: string | undefined) => void;
}

interface iResponse {
    unavaiableTimes: string[];
}


const DataPicker = ({ onDataSelect }: DataPickerProps) => {
    const [date, setDate] = useState<Date | undefined>();
    const [time, setTime] = useState<string | null>(null);
    const [isLoading, setLoading] = useState<boolean>(false);
    const [unavaiableTimes, setUnavaiableTimes] = useState<string[]>([])


    const onSelect: SelectSingleEventHandler = async (day) => {
        if (day && day != date) {
            try {
                let formatedDay = format(day, 'Y-M-d');
                console.log(formatedDay);

                setDate(day);
                onDataSelect(day ? formatedDay : undefined);

                setLoading(true);

                const response: AxiosResponse<iResponse> = await window.axios.post(route('booking.availability.check'), {
                    date: format(day, 'Y-M-d'),
                });
                console.log(response);
                setUnavaiableTimes(response.data.unavaiableTimes);

            } catch (e) {

            } finally {
                setLoading(false);
            }
        }else{
            setDate(undefined);
        }
    };


    const handleTimeSelection = (time: string | null) => {
        setTime(time);
    };


    return (
        <>
            <Flex justifyContent="center" alignItems="center">
                <Box textAlign="center" width="auto">
                    <DayPicker
                        showOutsideDays
                        className='my-custom-daypicker'
                        locale={ptBR}
                        mode="single"
                        selected={date}
                        onSelect={onSelect}
                        fromMonth={new Date()}
                    />
                </Box>
            </Flex>
            {date ? (
                isLoading ? (
                    <Center my={10}><Spinner /></Center>
                ) : (
                    <TimeSlots onSelectTime={handleTimeSelection} unavailableTimes={unavaiableTimes} />
                )
            ) : (
                <Center my={4}><Text>Por favor, escolha uma data para iniciar o agendamento</Text></Center>
            )}
        </>
    );
}

export default DataPicker;
