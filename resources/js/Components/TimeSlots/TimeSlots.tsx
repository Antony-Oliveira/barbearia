    import React from 'react';
    import { Box, Flex, Text } from '@chakra-ui/react';
    import { times } from './app';
    import './TimeSlots.css'
import Button from '../Button/Button';

    interface TimeSlotsProps {
        onSelectTime: (selectedTime: string | null) => void;
        unavailableTimes?: string[];
    }

    // ... restante do código

    const TimeSlots = ({ onSelectTime, unavailableTimes = [] }: TimeSlotsProps) => {
        const [selectedTime, setSelectedTime] = React.useState<string | null>(null);

        const handleTimeClick = (time: string) => {
            setSelectedTime(time === selectedTime ? null : time);
            onSelectTime(time === selectedTime ? null : time);
        };

        return (
            <Box className="TimeSlots">
                {times.map((period, periodIndex) => (
                    <React.Fragment key={periodIndex}>
                        <Text className="TimeSlots-period-label">
                            {period.label}
                        </Text>
                        <Flex
                            justify="center"
                            gap={3}
                            flexWrap="wrap"
                        >
                            {period.hours.map((time, index) => {
                                const isUnavailable = unavailableTimes.includes(time);
                                return (
                                    <Box
                                        className={`TimeSlots-hour-box ${selectedTime === time ? 'TimeSlots-selected' : ''}`}
                                        aria-disabled={isUnavailable}
                                        key={index}
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
                                );
                            })}
                        </Flex>
                    </React.Fragment>
                ))}
                <Text mt={2} textAlign="center">
                    Hora selecionada: {selectedTime || 'Nenhum'}
                </Text>
                <Button text={'Reservar'}></Button>

            </Box>
        );
    };

    export default TimeSlots;

