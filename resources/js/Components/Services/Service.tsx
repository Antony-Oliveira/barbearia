import { Box, Stack, Text } from "@chakra-ui/react";
import './service.css'
interface ServiceProps {
    nameService: string;
}

const Service = ({ nameService }: ServiceProps) => {
    return (
        <>
            <Stack
                className="main"
                display={"flex"}
                alignItems={"center"}
                flexDirection={"column"}
                w={100}
                cursor="pointer"
                minH="150px"
            >
                <Box
                    className="box"
                    w="60px"
                    h={"60px"}
                    bg="#F1F5F4"
                    borderRadius={"15px"}
                ></Box>
                <Text className="text" textAlign={"center"} fontSize={14}>
                    {nameService}
                </Text>
            </Stack>
        </>
    );
};

export default Service;
