// TimeSlots.jsx
import React from "react";
import { Flex, TabList, Tabs, Text } from "@chakra-ui/react";
import TimeSlot from "@/Components/TimeSlot/TimeSlot";
interface TextProps {
  text:String;
}
const TimeSlots = ({text}:TextProps) => {
  return (
    <Flex justifyContent={'center'}>
      <Tabs variant='unstyled'>
        <Text fontWeight={'bold'} p={3}>
            {text}
        </Text>
        <TabList display={'flex'} flexWrap={'wrap'} gap={1}>
          <TimeSlot time="9:30" isSelected={false} />
          <TimeSlot time="10:00" isSelected={false} />
          <TimeSlot time="10:00" isSelected={false} />
          <TimeSlot time="10:00" isSelected={false} />
          <TimeSlot time="10:00" isSelected={false} />
          <TimeSlot time="10:30" isSelected={false} />
        </TabList>
      </Tabs>
    </Flex>
  );
};

export default TimeSlots;
