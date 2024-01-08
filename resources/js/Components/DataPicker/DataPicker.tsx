// DataPicker.tsx
import { useState } from 'react';
import { format } from 'date-fns';
import { useFormContext } from 'react-hook-form';
import { DayPicker, SelectSingleEventHandler } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { Box, Flex } from '@chakra-ui/react';
import { ptBR } from 'date-fns/locale';
import './style.css';
import { AxiosResponse } from 'axios';

interface DataPickerProps {
    // onDataSelect: (data: { date: string | undefined, time: string | null }) => void;
}

interface iResponse {
    unavaiableTimes: string[];
}

const DataPicker = ({ onDataSelect }) => {
    const { setValue, watch } = useFormContext();

    const [date, setDate] = useState();
    const [unavailableTimes, setUnavailableTimes] = useState<string[]>([]);
    const onSelect: SelectSingleEventHandler = async (day) => {
        if (day && day !== date) {
            try {
                onDataSelect(true);

                let formattedDay = format(day, 'Y-M-d');


                const response: AxiosResponse<iResponse> = await window.axios.post(route('booking.availability.check'), {
                    date: formattedDay,
                });
                setValue('unavailableTimes', response.data.unavaiableTimes);
                setDate(day)
                setValue('date', day);


                setUnavailableTimes(response.data.unavaiableTimes);

            } catch (e) {
                // ...
            } finally {
                onDataSelect(false);
            }
        } else {
            setValue('date', undefined);
        }
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

        </>
    );
}

export default DataPicker;
