import React, { useState } from 'react';
import { Box, Flex } from "@chakra-ui/react";
import Header from '@/Components/Header/Header';
import NavAdmin from '@/Components/NavAdmin/NavAdmin';
import PageLoading from '@/Components/PageLoading/PageLoading';

const ButtonAdmin = ({ children, onClick, isActive }: any) => {
  return (
    <Box
      as="button"
      borderWidth={1}
      borderRadius={10}
      fontWeight={'bold'}
      fontSize={16}
      width={150}
      textAlign={'center'}
      backgroundColor={isActive ? '#5CC6BA' : 'transparent'}
      color={isActive ? '#ECECEC' : '#A0A0A0'}
      outline="none"
      onClick={onClick}
    >
      {children}
    </Box>
  );
};

const Dashboard = () => {
  const [activeButton, setActiveButton] = useState<string | null>(null);

  const handleButtonClick = (buttonName: string) => {
    setActiveButton(buttonName === activeButton ? null : buttonName);
  };

  return (
    <>
      <Header text="Admin" />
      <Flex flexWrap={'wrap'} gap={5} justifyContent={'center'} margin={'200px auto'}>
        <ButtonAdmin onClick={() => handleButtonClick('Agendar')} isActive={activeButton === 'Agendar'}>Agendar</ButtonAdmin>
        <ButtonAdmin onClick={() => handleButtonClick('Definir Horário')} isActive={activeButton === 'Definir Horário'}>Definir Horário</ButtonAdmin>
        <ButtonAdmin onClick={() => handleButtonClick('Faturamento')} isActive={activeButton === 'Faturamento'}>Faturamento</ButtonAdmin>
      </Flex>
      <NavAdmin activePage="Dashboard" />
      <PageLoading />
    </>
  );
};

export default Dashboard;
