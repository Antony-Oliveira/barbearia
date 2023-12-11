import { Flex, Button as ButtonUI, As } from "@chakra-ui/react";
interface ButtonProps {
    text: String,
    isLoading?: boolean
    as?: As
}
const Button = ({ text, isLoading = false, as = undefined }: ButtonProps) => {
    return (
        <>
            <Flex justifyContent={'center'} >
                <ButtonUI bg={'#5CC6BA'} color='#fff' width={200} isLoading={isLoading} as={as} mt={5} mb={5}>
                    {text}
                </ButtonUI>
            </Flex>
        </>
    )
}

export default Button;
