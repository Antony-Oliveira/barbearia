// TimeSlots.jsx
import React from "react";
import { TabList, Tabs } from "@chakra-ui/react";
import TimeSlot from "@/Components/TimeSlot/TimeSlot";

const TimeSlots = () => {
  return (
    <Tabs variant='unstyled'>
      <TabList display={'flex'} gap={4}>
        <TimeSlot time="9:30" isSelected={false} />
        <TimeSlot time="10:00" isSelected={false} />
      </TabList>
    </Tabs>
  );
};

export default TimeSlots;
