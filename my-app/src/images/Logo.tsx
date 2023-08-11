import { Stack, Image } from "@chakra-ui/react"
import { AnyMxRecord } from "dns"

export const Logo = ({ image }: any) =>{
    return(
        <Stack>
            <Image 
                boxSize='50px'
                objectFit='cover'
                src={`${image}`}
            />            
        </Stack>
    )
}