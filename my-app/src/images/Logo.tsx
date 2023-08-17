import { Stack, Image, Box } from "@chakra-ui/react"
import { AnyMxRecord } from "dns"

export const Logo = ({image}: any) =>{
    return(
        <Box>
            <Image 
            boxSize='200px'
            objectFit='contain'
            src= {`${image}`} />            
        </Box>
    )
}