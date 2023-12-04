import {Flex, Text } from "@chakra-ui/react";

interface HeaderProps {
    text?: string;
}

const Header = ({ text }: HeaderProps) => {

    return (
        <Flex
            width="100%"
            p={1}
            justify="space-around"
            borderBottom={'#ECECEC 1px solid'}
            marginBottom={'10px'}
            flexDirection={'column'}
            align="center"
        >
            {text ? (
                <>
                    <Text fontFamily="Roboto" fontSize="23px" fontWeight="bold" color="#5CC6BA" mb={2} mt={2}>
                        {text}
                    </Text>
                </>
            ) : (
                <>
                    <Text fontFamily="Roboto" fontSize="20px" fontWeight="bold" color="#5CC6BA">
                        Jhonny
                    </Text>
                    <Text fontFamily="Roboto" fontSize="18px" fontWeight="light" color="#A0A0A0">
                        Barbeiro
                    </Text>
                </>
            )}
        </Flex>
    );
};

export default Header;
