import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Flex,
  Button as ChakraButton
} from '@chakra-ui/react';
import { AccordionItems, BookingAccordionProps } from "./AccordionCustom.logic";
import Button from "../Button/Button";
import { router } from '@inertiajs/react';


const AccordionBooking = ({booking} : BookingAccordionProps) => {

  return (
    <>
      <Accordion allowMultiple>
        <AccordionItem py={'20px'} textAlign={'center'}>
          <>
            <AccordionButton  _expanded={{
                bg: '#DDDDDD'
               }}>
              <Box as="span" flex='1' textAlign='left' fontWeight={'bold'}>
                {booking.user.name} - <Box as="span" color="#5CC6BA">{booking.date} às {booking.time}</Box>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </>
          <AccordionPanel pb={4} background={'#DDDDDD'}>
              <Flex flexDirection={'row'} alignItems={'center'} mb={2}>
                  <ChakraButton
                        as="a"
                        href={`tel:${booking.user.contact}`}
                        bg="transparent"
                        leftIcon={AccordionItems[2].icon}
                        aria-label={'Contact'}
                        fontSize="18px"
                      >
                      {booking.user.contact}
                  </ChakraButton>
              </Flex>
              <Flex flexDirection={'row'} alignItems={'center'} mb={2}>
                  <ChakraButton
                        as="a"
                        bg="transparent"
                        leftIcon={AccordionItems[3].icon}
                        aria-label={'Booking price'}
                        fontSize="18px"
                      >
                      {booking.total_price}
                  </ChakraButton>
              </Flex>
              <Flex gap={4}>
                <Button width={100}>Confirmar</Button>
                <Button bg="#C6B55C" width={100}>Reagendar</Button>
                <Button bg="#DF5951" width={100}>Excluir</Button>
              </Flex>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </>
  );
}

export default AccordionBooking;