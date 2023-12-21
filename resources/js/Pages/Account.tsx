import { Box, Divider, Text, VStack } from '@chakra-ui/react';
import Home from '@/Components/Header/Header';
import NavBar from '@/Components/NavBar/NavBar';
import PageLoading from '@/Components/PageLoading/PageLoading';
import { Booking, Service, User } from '@/types';
import { useEffect } from 'react';

interface AccountProps {
    user: User;
    bookings: Booking[];
}

interface BookingDetailsProps {
    booking: Booking;
}

function BookingDetails({ booking }: BookingDetailsProps) {

    return (
        <VStack align="start" mt={2} ml={1} mb={3}>
            <Text fontSize={18} fontWeight="bold">Reserva para o dia {booking.date}</Text>
            {booking.services.map((service: Service, index) => (
                <Box key={index}>
                    <Text color={'#A0A0A0'} fontFamily={'Roboto'} fontWeight={'regular'} fontSize={20}>
                        {service.name}
                    </Text>
                    <Text color={'#5CC6BA'} fontSize={18}>R$ {service.price}</Text>
                </Box>
            ))}
            <Box>
                <Text fontSize={18} color={'#A0A0A0'}>Total</Text>
                <Text color={'#5CC6BA'} fontSize={18}>R${booking.total_price}</Text>
            </Box>
        </VStack>
    );
}

function Account({ user, bookings }: AccountProps) {
    useEffect(() => {
        console.log(bookings);
    }, []);

    return (
        <>
            <Home text="Meu perfil" />

            <VStack spacing={4} align="stretch" p={4} fontFamily={'Roboto'}>
                <Box>
                    <Text fontSize={18} fontWeight="bold" color="#717F7F">
                        Nome
                    </Text>
                    <Text color="#A0A0A0" fontSize={18}>{user.name}</Text>
                </Box>
                <Divider />

                <Box>
                    <Text fontSize="lg" fontWeight="bold" color="#717F7F">
                        Contato
                    </Text>
                    <Text color="#A0A0A0" fontSize={18}>{user.contact}</Text>
                </Box>
                <Divider />

                <Box>
                    <Text fontSize={20} fontWeight="">
                        Reservas
                    </Text>
                    {bookings.length > 0 ? bookings.map((booking, index) => (
                        <BookingDetails key={index} booking={booking} />
                    )) : <Text fontSize={18}>Você ainda não efetuou nenhuma reserva.</Text>}
                    <Divider />
                </Box>
            </VStack>

            <PageLoading />
            <NavBar activePage="Account" />

        </>
    );
}

export default Account;
