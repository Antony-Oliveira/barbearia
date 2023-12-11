import React from 'react';
import { Flex, IconButton } from "@chakra-ui/react";
import { Link } from "@inertiajs/react";
import { navItems, NavBarProps } from "./NavBar.logic";

const NavBar = ({ activePage }: NavBarProps) => {
  return (
  <>
    <Flex></Flex>
    <Flex
      p={5}
      justify="space-around"
      borderTop="#ECECEC 1px solid"
      zIndex={1}
      bg="white"
      position="fixed"
      bottom={0}
      width="100%"
    >
      {navItems.map((item) => (
        <Link key={item.page} href={item.page}>
          <IconButton
            as="p"
            bg="transparent"
            icon={item.icon}
            aria-label={item.label}
            fontSize="40px"
            color={activePage === item.label ? "#5CC6BA" : "white"}
            opacity={activePage === item.label ? 1 : 0.5}
            transition=".2s ease-in-out"
            _hover={{
              transform: "translateY(-20%)",
            }}
            transform={activePage === item.label ? "translateY(-20%)" : ''}
          />
        </Link>
      ))}
    </Flex>
  </>
  );
}

export default NavBar;
