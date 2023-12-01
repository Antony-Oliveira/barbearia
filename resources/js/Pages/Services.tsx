import Button from "@/Components/Button/Button";
import PageLoading from "@/Components/PageLoading/PageLoading";
import Service from "@/Components/Services/Service";
import { Flex, Link, Stack, Text } from "@chakra-ui/react";

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
      <Link href="/Calendar">
        <Button text={'Agendar'}></Button>
      </Link>
    </Stack>

  </>
  );
}

export default Services;
