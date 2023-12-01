import { Flex, IconButton } from "@chakra-ui/react";
import { Link } from "@inertiajs/react";
import { FaHome, FaCalendar, FaUser } from "react-icons/fa";

export default function NavBar() {
  return (
    <Flex
      position="fixed" // Set position to fixed
      bottom={0}
      width="100%"
      p={3}
      justify="space-around"
      borderTop={'#ECECEC 1px solid'}
      zIndex={1}
    >
      <Link href="/">
        <IconButton
          as='p'
          bg="transparent"
          icon={<FaHome color='#5CC6BA' />}
          aria-label="Home"
          fontSize="45px"
          transition=".2s ease-in-out"
          _hover={{
            transform: "translateY(-20%)",
          }}
        />
      </Link>
      <Link href="/Calendar">
        <IconButton
          bg="transparent"
          icon={<FaCalendar color='#5CC6BA' />}
          aria-label="Calendar"
          color="white"
          opacity={0.5}
          fontSize="45px"
          transition=".2s ease-in-out"
          _hover={{
            transform: "translateY(-20%)",
          }}
        />
      </Link>
      <Link href="/Account">
        <IconButton
          bg="transparent"
          icon={<FaUser color='#5CC6BA' />}
          aria-label="Profile"
          color="white"
          opacity={0.5}
          fontSize="45px"
          transition=".2s ease-in-out"
          _hover={{
            transform: "translateY(-20%)",
          }}
        />
      </Link>
    </Flex>
  );
}
