import Button from "@/Components/Button/Button";
import Service from "@/Components/Services/Service";
import { Flex, Stack, Text } from "@chakra-ui/react";

function Services() {
  return (
  <>
    <Stack align="center">
      <Text fontSize={18} fontWeight={700}>
        Agende seu Serviço
      </Text>
      <Flex flexWrap="wrap" justify="center">
        <Service nameService="Cortes Sociais" />
        <Service nameService="Corte Personalizado" />
        <Service nameService="Barba" />
        <Service nameService="Sobrancelhas" />
        <Service nameService="Pigmentação" />
        <Service nameService="Tintura Cabelo&Barba" />
      </Flex>
    </Stack>

  </>
  );
}

export default Services;
