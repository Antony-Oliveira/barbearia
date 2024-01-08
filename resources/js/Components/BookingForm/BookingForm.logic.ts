import { useState } from "react";
import { Service } from "@/types";
import { AxiosResponse } from "axios";
import { useForm } from "react-hook-form";
import { IBookingFormData } from "@/types";

export interface BookingFormProps {
    services: Service[];
    formNeed?: boolean;
    id: number;
}

const useBookingForm = (formNeed: boolean) => {
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const methods = useForm<IBookingFormData>({
        mode:'onChange'
    });
    const register = methods.register;
    const errors = methods.formState.errors;
    const date = methods.watch('date');
    const handleServicesSelect = (values: (string | number)[]) => {
        methods.setValue('services', values);
        console.log(methods.getValues());

    };
    const handleBookingRequest = async () => {
        let bookingData: IBookingFormData = methods.getValues();
        try {
            let endpoint = formNeed ? route('booking.submit.user') : route('booking.submit');
            setIsLoading(true);
            const { data }: AxiosResponse<any, IBookingFormData> = await window.axios.post(endpoint, bookingData);
            console.log(data);
            alert('ok');

        } catch (error) {

        } finally {
            setIsLoading(false);
        }
    };

    const dateSelect = (loading : boolean) => {
        setIsLoading(loading)
    }

    return {
        handleServicesSelect,
        handleBookingRequest,
        isLoading,
        methods,
        register,
        errors,
        date, dateSelect
    };
};

export { useBookingForm };
