import React, { useEffect } from "react";
import { Text, VStack, Box, Checkbox, CheckboxGroup, useCheckboxGroup } from "@chakra-ui/react";
import { BsScissors, ServicePickerProps } from "./ServicePicker.logic";
import { useFormContext } from "react-hook-form";

const ServicePicker: React.FC<ServicePickerProps> = ({ services }) => {
    const { value, getCheckboxProps } = useCheckboxGroup();
    const { setValue, watch } = useFormContext();


    return (
        <VStack align="start" spacing={4} p={4}>
            <Text fontSize="lg" fontWeight="bold">
                Escolha os serviços desejados
            </Text>
            <CheckboxGroup value={value} onChange={(newValue) => {setValue('services', newValue) }}>
                {services.map((service) => (
                    <Box key={service.id} display="flex" justifyContent="space-between" alignItems="baseline" width="100%" px={3} my={3}>
                        <Text as={'label'} htmlFor={`chk-${service.id}`}>{service.name} - R${service.price}</Text>
                        <Checkbox icon={<BsScissors />} {...getCheckboxProps({ value: service.id.toString() })} colorScheme="teal" size={'lg'} transition="background-color 0.3s ease" id={`chk-${service.id}`} />
                    </Box>
                ))}
            </CheckboxGroup>
        </VStack>
    );
};

export default ServicePicker;
