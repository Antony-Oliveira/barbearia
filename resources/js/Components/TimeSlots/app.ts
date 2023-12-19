import { useState } from 'react';

const times = [
    {
        label: 'Manhã',
        hours: ['07:00', '07:30', '08:00', '08:30', '09:00', '09:30', '10:00', '10:30', '11:30', '12:00'],
    },
    {
        label: 'Tarde',
        hours: ['14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00', '17:30'],
    },
    {
        label: 'Noite',
        hours: ['18:00', '18:30', '19:00']
    }
];

export { times };


export const useTimeSelection = (onSelectTime: (time: string | null) => void) => {
    const [selectedTime, setSelectedTime] = useState<string | null>(null);

    const handleTimeClick = (time: string) => {
        setSelectedTime((prevTime) => (prevTime === time ? null : time));
        onSelectTime(time);
    };

    const resetSelectedTime = () => {
        setSelectedTime(null);
    };

    return {
        selectedTime,
        setSelectedTime,
        handleTimeClick,
        resetSelectedTime,
    };
};
