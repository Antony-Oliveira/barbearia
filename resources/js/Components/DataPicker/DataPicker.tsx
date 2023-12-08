// DataPicker.tsx
import React, { useState } from 'react';
import { format } from 'date-fns';
import { DayPicker, SelectSingleEventHandler } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { Box, Flex } from '@chakra-ui/react';
import { ptBR } from 'date-fns/locale';
import './style.css';

interface DataPickerProps {
  onDataSelect: (date: string) => void;
}

export default function DataPicker({ onDataSelect }: DataPickerProps) {
  const [selected, setSelected] = useState<Date | undefined>();

  const handleDataSelect = (date: Date) => {
    setSelected(date);
    if (onDataSelect) {
      onDataSelect(format(date, 'dd/MM/yyyy', { locale: ptBR }));
    }
  };

  let footer = <p>Escolha um dia.</p>;
  if (selected) {
    footer = <p>A data {format(selected, 'dd/MM/yyyy', { locale: ptBR })} foi escolhida.</p>;
  }

  const onSelect: SelectSingleEventHandler = (day) => {
    setSelected(day);
    if (day instanceof Date) {
      handleDataSelect(day);
    }
  };

  return (
    <Flex justifyContent="center" alignItems="center" minH={['30vh', '60vh']}>
      <Box textAlign="center" width="auto">
        <DayPicker
          showOutsideDays
          className='my-custom-daypicker'
          locale={ptBR}
          mode="single"
          selected={selected}
          onSelect={onSelect}
          footer={footer}
          fromMonth={new Date()}
        />
      </Box>
    </Flex>
  );
}
