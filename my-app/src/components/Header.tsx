import { Box, Breadcrumb, Center, Stack } from "@chakra-ui/react"
import { Menu } from "./Menu"
import { Logo } from "../images/Logo"
import { MenuSusp } from "./MenuSusp"


export const Header = () => {
    return (
        
         <Box backgroundColor='#006' >
          
            <MenuSusp/>
             
             
             <Center>            
                <Stack>
                    <Logo image='https://mcusercontent.com/4c9edea1c99d15af9a6c90a1f/images/c5b2c6c6-d483-58b5-cefe-2479bfeeda91.png' />
                </Stack>
            </Center>
        </Box>
    )
}