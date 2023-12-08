import { HStack, Stack, Text, Input } from "@chakra-ui/react";
import Service from "@/Components/Services/Services";

function Services() {
    return (
        <>
            <Stack align="center" mt={5}>
                <Text fontSize={18} fontWeight={700}>
                    Agende seu Serviço
                </Text>
                <Input
                    type="text"
                    placeholder="Qual serviço você deseja?"
                    borderRadius={'10px'}
                    bg={'#F1F5F4'}
                    _placeholder={{
                        fontFamily: 'Roboto',
                        color: '#A0A0A0'
                    }}
                    mt={3}
                    mb={10}
                    w={310}
                />
            </Stack>

            <HStack spacing={4} justifyContent="center" flexWrap="wrap">
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
