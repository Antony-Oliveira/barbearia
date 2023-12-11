import { Flex, Button as ButtonUI, As } from "@chakra-ui/react";
import './Button.css'
interface ButtonProps {
    text: String,
    isLoading?: boolean
    as?: As
}67
const Button = ({ text, isLoading = false, as = undefined }: ButtonProps) => {
    return (
        <>
            <Flex justifyContent={'center'} >
                <ButtonUI className="default-button" bg={'#5CC6BA'} color='#fff' width={200} isLoading={isLoading} as={as}>
                    {text}
                </ButtonUI>
            </Flex>
        </>
    )
}

export default Button;
