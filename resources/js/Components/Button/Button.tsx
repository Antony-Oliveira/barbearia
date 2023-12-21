import { Flex, Button as ButtonUI, As } from "@chakra-ui/react";
import './Button.css'
interface ButtonProps {
    children: string
    bg?: string,
    width?: string|number,
    isLoading?: boolean
    as?: As
    onClick?: ({param} : any) => void | Promise<void>;
}
const Button = ({ bg="#5CC6BA", width=200 , children, isLoading = false, as = undefined, onClick}: ButtonProps) => {
    return (
        <>
            <Flex justifyContent={'center'}>
                <ButtonUI variant={'custom'} _hover={{opacity:.6}} className="default-button" bg={bg} color='#fff' width={width} isLoading={isLoading} as={as} onClick={onClick}>
                    {children}
                </ButtonUI>
            </Flex>
        </>
    )
}

export default Button;
