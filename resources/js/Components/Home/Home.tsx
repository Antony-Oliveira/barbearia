import {Flex, Stack, Text } from "@chakra-ui/react";
import Button from "@/Components/Button/Button"
import Service from "../Services/Service";
const Home = () => {
    return (
        <>
            <Flex
                width="100%"
                p={1}
                justify="space-around"
                borderBottom={'#ECECEC 1px solid'}
                marginBottom={'10px'}
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
        </>
    )
}

export default Home;
