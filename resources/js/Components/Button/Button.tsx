import { Flex, Button as ButtonUI, Stack, Text } from "@chakra-ui/react";
interface ButtonProps{
    text:String
}
const Button = ({text}:ButtonProps) => {
    return (
      <>
        <ButtonUI bg={'#5CC6BA'} color='#fff'>
            {text}
        </ButtonUI>
      </>
    )
}

export default Button;
