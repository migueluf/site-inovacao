import { Box, Breadcrumb, Center, Stack } from "@chakra-ui/react"
import { Menu } from "./Menu"
import { Logo } from "../images/Logo"


export const Header = () => {
    return (
        <Box backgroundColor='#006' >
            <Breadcrumb>
                <Menu nome='Home' link='#' />
                <Menu nome='Mentores' link='/' />
                <Menu nome='Desafios' link='/' />
                <Menu nome='Como participar' link='/' />
            </Breadcrumb>
            <Center>
                <Stack>
                    <Logo image='../img/NextLogo-branco.png'/>
                </Stack>


            </Center>
        </Box>
    )
}