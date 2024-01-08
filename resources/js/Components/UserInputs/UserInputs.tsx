import { FormControl, FormLabel, Input, FormErrorMessage, Checkbox, Box, FormHelperText } from "@chakra-ui/react";
import { useFormContext } from "react-hook-form";
import { IBookingFormData } from "@/types";
import { useEffect } from "react";
interface UserInputsProps {
    id: number;
}
const UserInputs = ({id} : UserInputsProps) => {
    const { watch, formState: { errors }, register, setValue} = useFormContext<IBookingFormData>();

    useEffect(() => {
        setValue('userExists', id ? true : false);
    }, [])

    return (


        <Box as="form" mb={5}>
            {watch('userExists') ? (
                <FormControl isInvalid={errors?.user?.id ? true : false}>
                    <FormLabel htmlFor='userId'>ID do cliente</FormLabel>
                    <Input
                        id='id'
                        placeholder='54'
                        {...register('user.id', {
                            required: 'O ID do usuário é obrigatório quando o cliente já possui cadastro',
                            value: id
                        })}
                    />
                    <FormHelperText>
                        Consulte o id na aba Clientes
                    </FormHelperText>
                    <FormErrorMessage>
                        {errors?.user?.id && errors.user.id.message}
                    </FormErrorMessage>
                </FormControl>
            ) : (
                <>
                    <FormControl isInvalid={errors?.user?.name ? true : false}>
                        <FormLabel htmlFor='name'>First name</FormLabel>
                        <Input
                            id='name'
                            placeholder='name'
                            {...register('user.name', {
                                required: 'O nome é obrigatório',
                            })}
                        />
                        <FormErrorMessage>
                            {errors?.user?.name && errors.user.name.message}
                        </FormErrorMessage>
                    </FormControl>

                    <FormControl isInvalid={errors?.user?.contact ? true : false}>
                        <FormLabel htmlFor='contact'>Contact</FormLabel>
                        <Input
                            id='contact'
                            placeholder='contact'
                            {...register('user.contact', {
                                required: 'O contato é obrigatório',
                            })}
                        />
                        <FormErrorMessage>
                            {errors?.user?.contact && errors.user.contact.message}
                        </FormErrorMessage>
                    </FormControl></>
            )}

            <Checkbox {...register('userExists')} isChecked={watch('userExists')}>
                O cliente já possui cadastro?
            </Checkbox>


        </Box>
    );
};

export default UserInputs;
