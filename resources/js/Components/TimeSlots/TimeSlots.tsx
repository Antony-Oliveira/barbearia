import React from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import { times } from './app';
interface TimeSlotsProps {
    onSelectTime: (selectedTime: string | null) => void;
    unavailableTimes?: string[]

}

const TimeSlots = ({ onSelectTime, unavailableTimes = [] } : TimeSlotsProps) => {

    const [selectedTime, setSelectedTime] = React.useState<string | null>(null);

    const handleTimeClick = (time: string) => {
        setSelectedTime(time === selectedTime ? null : time);
        onSelectTime(time === selectedTime ? null : time);
    };

    return (
        <Box>
            {times.map((period, periodIndex) => (
                <React.Fragment key={periodIndex}>
                    <Text fontFamily="roboto" color="#717F7F" fontSize="sm" fontWeight="bold" mb={2} ml={10} mt={3}>
                        {period.label}
                    </Text>
                    <Flex justify="space-evenly">
                        {period.hours.map((time, index) => {
                            const isUnavailable = unavailableTimes.includes(time);
                            return (
                                <Box
                                    aria-disabled={isUnavailable}
                                    key={index}
                                    mt={2}
                                    w={20}
                                    textAlign="center"
                                    borderWidth="1px"
                                    borderRadius="md"
                                    p={1}
                                    color={selectedTime === time ? '#FFFFFF' : '#A0A0A0'}
                                    backgroundColor={selectedTime === time ? '#5CC6BA' : 'transparent'}
                                    _hover={{ cursor: 'pointer' }}
                                    onClick={!isUnavailable ? () => handleTimeClick(time) : undefined}
                                    transition="background-color 0.2s ease-in"
                                    _disabled={{
                                        color: '#CCCCCC',
                                        cursor: 'not-allowed',
                                        backgroundColor: '#F0F0F0'
                                    }}
                                >
                                    {time}
                                </Box>
                            )
                        })}
                    </Flex>
                </React.Fragment>
            ))}
            <Text mt={5} textAlign="center">
                Hora selecionada: {selectedTime || 'Nenhum'}
            </Text>
        </Box>
    );
};

export default TimeSlots;
