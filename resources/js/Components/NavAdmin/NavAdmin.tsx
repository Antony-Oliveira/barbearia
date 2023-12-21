import { Box, Flex, IconButton } from "@chakra-ui/react";
import { Link } from "@inertiajs/react";
import { navItems, NavAdminProps } from "./NavAdmin.logic";

const NavAdmin = ({ activePage }: NavAdminProps) => {
    return (
        <>
            <Box mt={100}></Box>
            <Flex
                p={5}
                justify="space-around"
                borderTop="#ECECEC 1px solid"
                zIndex={1}
                bg="white"
                h={61}
                position="fixed"
                bottom={0}
                width="100%"
            >
                {navItems.map((item) => (
                    <Link key={item.page} href={item.page}>
                        <IconButton
                        position={'sticky'}
                            as="p"
                            bg="transparent"
                            icon={item.icon}
                            h='0'
                            aria-label={item.label}
                            fontSize="40px"
                            color={activePage === item.label ? "#5CC6BA" : "white"}
                            opacity={activePage === item.label ? 1 : 0.5}
                            transition=".2s ease-in-out"
                            _hover={{
                                transform: "translateY(-50%)",
                            }}
                            transform={activePage === item.label ? "translateY(-20%)" : ''}
                        />
                    </Link>
                ))}
            </Flex>
        </>
    );
}

export default NavAdmin;
