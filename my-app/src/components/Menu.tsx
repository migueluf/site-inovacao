import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react"


export const Menu = ({ nome, link }: any) => {
    return (
        
            
                <BreadcrumbItem spacing='8px'>
                    <BreadcrumbLink href={`${link}`} color='white'>
                        {nome}
                    </BreadcrumbLink>
                </BreadcrumbItem>
            
        
    )
}