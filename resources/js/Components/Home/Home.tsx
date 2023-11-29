import { Flex, Text } from "@chakra-ui/react";

const Home = () => {
    return (
        <Flex
            position="fixed"
            top="0"
            width="100%"
            p={1}
            justify="space-around"
            borderBottom={'#ECECEC 1px solid'}
            flexDirection="column" // Adicionado para empilhar os itens verticalmente
            align="center" // Adicionado para centralizar os itens horizontalmente
        >
            <Text fontFamily="Roboto" fontSize="20px" fontWeight="bold" color="#5CC6BA">
                Johnny
            </Text>
            <Text fontFamily="Roboto" fontSize="18px" fontWeight="light" color="#A0A0A0">
                Barbeiro
            </Text>
        </Flex>
    )
}

export default Home;
