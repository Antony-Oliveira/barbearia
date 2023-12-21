import Header from "@/Components/Header/Header";
import PageLoading from "@/Components/PageLoading/PageLoading";
import NavAdmin from "../../Components/NavAdmin/NavAdmin";
import { Booking, Service, User } from "@/types";
import { Box, VStack, Text, Divider } from "@chakra-ui/react";

const Profile = () => {
    return (
        <>
            <Header text="Profile" />
            <VStack spacing={4} align="stretch" p={4} fontFamily={'Roboto'}>
                <Box>
                    <Text fontSize={18} fontWeight="bold" color="#717F7F">
                        Nome
                    </Text>
                    <Text color="#A0A0A0" fontSize={18}>Jhonny Barbeiro</Text>
                </Box>

                <Box>
                    <Text fontSize="lg" fontWeight="bold" color="#717F7F">
                        Contato
                    </Text>
                    <Text color="#A0A0A0" fontSize={18}>(00) 90000 - 0000</Text>
                </Box>
                <Divider />

                <Box>
                    <Text fontSize={20} fontWeight="">
                        Faturamento
                    </Text>
                    <Text color="#A0A0A0" fontSize={18}>R$100,00 Diário</Text>
                    <Text color="#A0A0A0" fontSize={18}>R$1500,00 Mensal</Text>
                    <Divider />
                </Box>
                <Box>
                    <Text fontSize={20} fontWeight="">
                        Cliente Atendidos
                    </Text>
                    <Text color="#A0A0A0" fontSize={18}>10 Clientes</Text>
                    <Divider />
                </Box>
            </VStack>
            <NavAdmin activePage="Profile" />
            <PageLoading />
        </>
    )
}

export default Profile;
