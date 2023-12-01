import { useState } from 'react';
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { Box, Flex } from '@chakra-ui/react';
import { ptBR } from 'date-fns/locale';
import './style.css';

export default function Calendar() {
  const [selected, setSelected] = useState<Date>();
  let footer = <p>Please pick a day.</p>;
  if (selected) {
    footer = <p>A data {format(selected, 'dd/MM/yyyy', {locale: ptBR})} foi escolhida.</p>;
  }
  return (
    <Flex justifyContent="center" alignItems="center" height="70vh" maxH='75vh'>
      <Box textAlign="center">
        <DayPicker  showOutsideDays className='my-custom-daypicker' locale={ptBR} mode="single" selected={selected} onSelect={setSelected} footer={footer} />
      </Box>
    </Flex>
  );
}
