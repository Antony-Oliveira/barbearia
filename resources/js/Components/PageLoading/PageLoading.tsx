import { useEffect, useState } from 'react';
import { usePage } from '@inertiajs/react';
import spinner from '@/assets/loading.svg'
import { Box, Flex, Text, Image } from '@chakra-ui/react';

const PageLoading = () => {
    const { url } = usePage();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const startHandler = () => {
            setLoading(true);
        };

        const finishHandler = () => {
            setLoading(true);
            setTimeout(() => {
                setLoading(false);
            }, 5000);
        };

        document.addEventListener('inertia:start', startHandler);
        document.addEventListener('inertia:finish', finishHandler);

        return () => {
            document.removeEventListener('inertia:start', startHandler);
            document.removeEventListener('inertia:finish', finishHandler);
        };
    }, [url]);

    return loading ? (
        <Flex
            align="center"
            justify="center"
            h="100vh"
            bg="#5CC6BA"
            position="fixed"
            top="0"
            left="0"
            right="0"
            bottom="0"
            zIndex="50"
        >
            <Box textAlign="center" mb={'100'}>
                <Image w={'135px'} src={spinner} alt="Spinner" />

                <Text fontSize={'24px'} color="white" fontWeight="bold" mt={2}>
                    Johnny
                </Text>
                <Text fontSize={'18px'} color="white" fontWeight="light">
                    Barbeiro
                </Text>
            </Box>
        </Flex>
    ) : null;
};

export default PageLoading;
