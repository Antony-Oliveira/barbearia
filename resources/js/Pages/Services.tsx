import { HStack, Stack, Text, Input } from "@chakra-ui/react";
import Service from "@/Components/Services/Service";

function Services() {
    return (
        <>
            <Stack align="center" mt={5}>
                <Text fontSize={18} fontWeight={700}>
                    Agende seu Serviço
                </Text>
            </Stack>

            <HStack p={10} spacing={3} justifyContent="center" flexWrap="wrap">
                <Service nameService="Cortes Sociais" />
                <Service nameService="Corte Personalizado" />
                <Service nameService="Barba" />
                <Service nameService="Sobrancelhas" />
                <Service nameService="Pigmentação" />
                <Service nameService="Tintura Cabelo&Barba" />
            </HStack>
        </>
    );
}

export default Services;
