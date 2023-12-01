import { Flex, Button as ButtonUI, Stack, Text, Box } from "@chakra-ui/react";
interface ButtonProps{
    text:String
}
const Button = ({text}:ButtonProps) => {
    return (
      <>
        <Flex justifyContent={'center'} marginTop={10}>
          <ButtonUI bg={'#5CC6BA'} color='#fff' width={300}>
              {text}
          </ButtonUI>
        </Flex>
      </>
    )
}

export default Button;
