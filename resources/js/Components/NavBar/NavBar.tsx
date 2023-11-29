import { Divider, Flex, IconButton } from "@chakra-ui/react";
import { Link } from "@inertiajs/react";
import { FaHome, FaCalendar, FaUser } from "react-icons/fa";

export default function NavBar() {
    return (
        <>

            <Flex
                position="fixed"
                bottom="0"
                width="100%"
                p={3}
                justify="space-around"
                borderTop={'#ECECEC 1px solid'}
            >
                <Link href="/">
                <IconButton
                as='p'
                    bg={''}
                    _hover={{
                        backgroundColor: '#A0A0A0',
                        color: "#fff"
                    }}
                    icon={<FaHome color='#5CC6BA' />}
                    aria-label="Home"
                    fontSize="xx-large"
                />
                </Link>
                <IconButton
                    bg={''}
                    _hover={{
                        backgroundColor: '#A0A0A0',
                        color: "#fff"
                    }}
                    icon={<FaCalendar color='#5CC6BA' />}
                    aria-label="Calendar"
                    color="white"
                    opacity={0.5}
                    fontSize="xx-large"
                />
                <IconButton
                    bg={''}
                    _hover={{
                        backgroundColor: '#A0A0A0',
                        color: "#fff"
                    }}
                    icon={<FaUser color='#5CC6BA' />}
                    aria-label="Profile"
                    color="white"
                    opacity={0.5}
                    fontSize="xx-large"
                />
            </Flex>

        </>
    );
}
