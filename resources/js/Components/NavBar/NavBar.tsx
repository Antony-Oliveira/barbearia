// NavBar.tsx
import { Flex, IconButton } from "@chakra-ui/react";
import { Link } from "@inertiajs/react";
import { FaHome, FaCalendar, FaUser } from "react-icons/fa";

interface NavBarProps {
  activePage: string;
}

interface NavItem {
  page: string;
  icon: JSX.Element;
  label: string;
}

const navItems: NavItem[] = [
  { page: "/", icon: <FaHome color="#5CC6BA" />, label: "Home" },
  { page: "/booking", icon: <FaCalendar color="#5CC6BA" />, label: "Booking" },
  { page: "/account", icon: <FaUser color="#5CC6BA" />, label: "Account" },
];

export default function NavBar({ activePage }: NavBarProps) {
  return (
    <>

      <Flex direction="column" minHeight="100vh"></Flex>
      <Flex
        position="fixed"
        bottom={0}
        width="100%"
        p={5}
        justify="space-around"
        borderTop="#ECECEC 1px solid"
        zIndex={1}
        bg="white"
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
