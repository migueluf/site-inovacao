import { TabPanel, TabPanels, Tabs, Image, Text, Flex, Square, Box, Highlight, Divider, Center, TabList, Tab } from "@chakra-ui/react"
import { Hide } from "./Hide"

export const Mantenedor = ({ logo, texto }: any) => {
    return (
        <>

            <TabPanel paddingBottom='5px'>
                <Center>
                    <Flex>
                        <Box minWidth='100px' paddingRight='10px'>
                            <Square>
                                <Image
                                    boxSize='150px'
                                    fit='contain'
                                    src={`${logo}`}
                                />
                            </Square>
                        </Box>
                        <Box flex='1' height={{
                            base: '100%', // 0-48em
                            md: '50%', // 48em-80em,
                            xl: '25%', // 80em+
                        }}>
                            
                            <Text
                                fontSize='20px'
                                paddingLeft="20px"
                                paddingRight="12px"
                                textAlign='right'
                                bg="#006"
                                color='white'
                                borderLeftRadius={20}> 
                                <Hide text={`${texto}`}/>
                                
                            </Text>
                        </Box>
                    </Flex>
                </Center>
            </TabPanel>

        </>

    )
}

export const Title = ({ title }: any) => {

    return (

        <Tab>{`${title}`}</Tab>


    )
}