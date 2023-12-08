// TimeSlot.tsx
import React from "react";
import { Tab } from "@chakra-ui/react";

interface TimeSlotProps {
  time: string;
  isSelected: boolean;
}

const TimeSlot: React.FC<TimeSlotProps> = ({ time, isSelected }) => {
  return (
    <Tab
      _selected={{ color: '#FFF', bg: '#5CC6BA' }}
      _focus={{ outline: 'none' }}
      color={isSelected ? '#FFF' : '#A0A0A0'}
      bg={isSelected ? '#5CC6BA' : 'white'}
      border={isSelected ? 'none' : '1px solid #ECECEC'}
      borderRadius={10}
      width={'80px'}
      height={'30px'}
    >
      {time}
    </Tab>
  );
};

export default TimeSlot;
