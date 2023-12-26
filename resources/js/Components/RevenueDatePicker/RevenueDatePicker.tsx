import { Flex, Box, HStack, Text, Icon } from '@chakra-ui/react';
import { ptBR } from 'date-fns/locale';
import { DayPicker } from 'react-day-picker';
import { useRevenue, RevenueDataPickerProps } from './RevenueDataPicker.logic';
import { FaMoneyBill } from 'react-icons/fa';
import 'react-day-picker/dist/style.css';

export default function RevenueDatePicker({}: RevenueDataPickerProps) {
  const { date, onDateChange, onMonthChange, dailyFinancialSummary, monthlyFinancialSummary } = useRevenue();

  return (
    <>
      <Flex justifyContent="center" alignItems="center">
        <Box textAlign="center" width="auto">
          <DayPicker
            showOutsideDays
            className="my-custom-daypicker"
            locale={ptBR}
            onMonthChange={onMonthChange}
            mode="single"
            selected={date}
            onSelect={onDateChange}
            fromMonth={new Date()}
          />
        </Box>
      </Flex>

      <Flex justifyContent="center" alignItems="center" textColor={'#fff'} flexDirection="column">
        <Text fontSize="xl" color={'black'} mb={2}>
          Diário
        </Text>
        <HStack spacing={20}>
          <Box bg="teal.300" p={3} borderRadius="md" >
            <Text fontSize="md" mb={1}>
              Faturamento
            </Text>
            <Flex align={'center'} gap={2}>
              <FaMoneyBill />
              <Text fontSize="lg">R$ {dailyFinancialSummary?.revenue}</Text>
            </Flex>
          </Box>

          <Box bg="teal.300" p={3} borderRadius="md" >
            <Text fontSize="md" mb={1}>
              Clientes
            </Text>
            <Text fontSize="lg">{dailyFinancialSummary?.clientCount}</Text>
          </Box>
        </HStack>
      </Flex>

      <Flex justifyContent="center" alignItems="center" textColor={'#fff'} flexDirection="column" mt={4}>
        <Text fontSize="xl" color={'black'} mb={2}>
          Mensal
        </Text>
        <HStack spacing={20}>
          <Box bg="teal.300" p={3} borderRadius="md">
            <Text fontSize="md" mb={1}>
              Faturamento
            </Text>
            <Flex align={'center'} gap={2}>
              <FaMoneyBill />
              <Text fontSize="lg">R$ {monthlyFinancialSummary?.revenue.toFixed(2)}</Text>
            </Flex>
          </Box>

          <Box bg="teal.300" p={3} borderRadius="md" >
            <Text fontSize="md" mb={1}>
              Clientes
            </Text>
            <Text fontSize="lg">{monthlyFinancialSummary?.clientCount}</Text>
          </Box>
        </HStack>
      </Flex>
    </>
  );
}
