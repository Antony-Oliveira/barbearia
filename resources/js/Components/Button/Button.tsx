import { Flex, Button as ButtonUI, As } from "@chakra-ui/react";
import './Button.css'
interface ButtonProps {
    children: string
    bg?: string,
    width?: string|number,
    isLoading?: boolean
    as?: As
}
const Button = ({ bg="#5CC6BA", width=200, children, isLoading = false, as = undefined }: ButtonProps) => {
    return (
        <>
            <Flex justifyContent={'center'}>
                <ButtonUI variant={'custom'} _hover={{opacity:.6}} className="default-button" bg={bg} color='#fff' width={width} isLoading={isLoading} as={as}>
                    {children}
                </ButtonUI>
            </Flex>
        </>
    )
}

export default Button;
