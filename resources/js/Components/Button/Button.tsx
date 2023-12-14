import { Flex, Button as ButtonUI, As } from "@chakra-ui/react";
import './Button.css'
interface ButtonProps {
    children: string
    isLoading?: boolean
    as?: As
}
const Button = ({ children, isLoading = false, as = undefined }: ButtonProps) => {
    return (
        <>
            <Flex justifyContent={'center'} >
                <ButtonUI className="default-button" bg={'#5CC6BA'} color='#fff' width={200} isLoading={isLoading} as={as}>
                    {children}
                </ButtonUI>
            </Flex>
        </>
    )
}

export default Button;
