import { ChakraProvider} from "@chakra-ui/react";
import config from '@/configs/ChakraTheme'

export function ThemeProvider({children} : any) {
    return <ChakraProvider theme={config}>{children}</ChakraProvider>
}
