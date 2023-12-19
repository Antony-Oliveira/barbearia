import Header from "@/Components/Header/Header";
import PageLoading from "@/Components/PageLoading/PageLoading";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  IconButton,
  Flex,
  Button as ChakraButton
} from '@chakra-ui/react';
import { AddIcon, MinusIcon } from '@chakra-ui/icons'; 
import { AccordionItems, AccordionCustomProps } from "./AccordionCustom.logic";
import Button from "../Button/Button";



const AccordionBooking = () => {
  return (
    <>
      <Accordion allowMultiple>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex='1' textAlign='left' fontWeight={'bold'}>
                Antony Caíque - <Box as="span" color="#5CC6BA">{AccordionItems[0].label} às {AccordionItems[1].label}</Box>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} background={'#DDDDDD'}>
              <Flex flexDirection={'row'} alignItems={'center'} mb={2}>
                  <ChakraButton
                        as="a"
                        href={`tel:${AccordionItems[2].label}`}
                        bg="transparent"
                        leftIcon={AccordionItems[2].icon}
                        aria-label={AccordionItems[2].label}
                        fontSize="20px" 
                      >
                      {AccordionItems[2].label} 
                  </ChakraButton>        
              </Flex>
              <Flex flexDirection={'row'} alignItems={'center'} mb={2}>
                  <ChakraButton
                        as="a"
                        href={`tel:${AccordionItems[3].label}`}
                        bg="transparent"
                        leftIcon={AccordionItems[3].icon}
                        aria-label={AccordionItems[3].label}
                        fontSize="20px" 
                      >
                      {AccordionItems[3].label} 
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
