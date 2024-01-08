
import DataPicker from "@/Components/DataPicker/DataPicker";
import ServicePicker from "@/Components/ServicePicker/ServicePicker";
import { Box, Divider, Spinner, Center } from "@chakra-ui/react";
import Button from "@/Components/Button/Button";
import { useBookingForm, BookingFormProps } from './BookingForm.logic'
import { FormProvider } from "react-hook-form";
import TimeSlots from '@/Components/TimeSlots/TimeSlots'
import UserInputs from '@/Components/UserInputs/UserInputs'
const BookingForm = ({ services, formNeed = false, id }: BookingFormProps) => {
    const { handleBookingRequest, isLoading, methods, register, errors, date, dateSelect } = useBookingForm(formNeed)

    return (
        <>
            <FormProvider {...methods}>
                <DataPicker onDataSelect={dateSelect} />
                {
                    date ? (
                        isLoading ? <Center><Spinner /></Center> : <TimeSlots />
                    ) : 'ox'
                }

                <ServicePicker services={services} />
                {formNeed && (
                    <UserInputs id={id}/>
                )}
                <Divider />
                <Button isLoading={isLoading} onClick={() => console.log(methods.getValues())}>Reservar</Button>
            </FormProvider>
        </>
    );
};

export default BookingForm;
