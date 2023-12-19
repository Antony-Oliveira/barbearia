import React from 'react';
import { Box, Flex, Text, Tab, TabList, TabPanel, TabPanels, Tabs, TabIndicator } from '@chakra-ui/react';
import { times } from './app';
import './TimeSlots.css';
import { useTimeSelection } from './app';

interface TimeSlotsProps {
    onSelectTime: (selectedTime: string | null) => void;
    unavailableTimes?: string[];
}

const TimeSlots = ({ onSelectTime, unavailableTimes = [] }: TimeSlotsProps) => {

    const {selectedTime, handleTimeClick, setSelectedTime} = useTimeSelection(onSelectTime);

    return (
        <Box className="TimeSlots">
            <Tabs isLazy variant={'soft-rounded'} align='center' onChange={() => setSelectedTime(null)}>
                <TabList mb={1}>
                    {times.map((period) => (
                        <Tab key={period.label} _selected={{ bg: '#5CC6BA', color: '#fff' }}>{period.label}</Tab>
                    ))}
                </TabList>
                <TabPanels>
                    {times.map((period, periodIndex) => (
                        <TabPanel key={periodIndex}>
                            <Flex justify="center" flexWrap="wrap" gap={3}>
                                {period.hours.map((time, index) => {
                                    const isUnavailable = unavailableTimes.includes(time);
                                    return (
                                        <Box
                                            aria-disabled={isUnavailable}
                                            key={index}
                                            textAlign="center"
                                            borderWidth="1px"
                                            borderRadius="md"
                                            w={'25%'}
                                            m={1.5}
                                            color={selectedTime === time ? '#FFFFFF' : '#A0A0A0'}
                                            backgroundColor={selectedTime === time ? '#5CC6BA' : 'transparent'}
                                            _hover={{ cursor: 'pointer' }}
                                            onClick={!isUnavailable ? () => handleTimeClick(time) : undefined}
                                            transition="background-color 0.2s ease-in"
                                            _disabled={{
                                                color: '#CCCCCC',
                                                cursor: 'not-allowed',
                                                backgroundColor: '#F0F0F0',
                                            }}
                                        >
                                            {time}
                                        </Box>
                                    );
                                })}
                            </Flex>
                        </TabPanel>
                    ))}
                </TabPanels>
            </Tabs>
        </Box>
    );
};

export default TimeSlots;
