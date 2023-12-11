// DataPicker.tsx
import  { useState } from 'react';
import { format } from 'date-fns';
import { DayPicker, SelectSingleEventHandler } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { Box, Flex } from '@chakra-ui/react';
import { ptBR } from 'date-fns/locale';
import './style.css';

interface DataPickerProps {
  onDataSelect: (date: string | undefined) => void;
}

export default function DataPicker({ onDataSelect }: DataPickerProps) {
  const [selected, setSelected] = useState<Date | undefined>();

  const onSelect: SelectSingleEventHandler = (day) => {
    setSelected(day);
    onDataSelect(day ? format(day, 'dd/MM/yyyy', { locale: ptBR }) : undefined);
  };

  return (
    <Flex justifyContent="center" alignItems="center">
      <Box textAlign="center" width="auto">
        <DayPicker
          showOutsideDays
          className='my-custom-daypicker'
          locale={ptBR}
          mode="single"
          selected={selected}
          onSelect={onSelect}
          fromMonth={new Date()}
        />
      </Box>
    </Flex>
  );
}
