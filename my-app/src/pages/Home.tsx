import { Box, Center, Divider, Heading, Highlight, Tab, TabList, TabPanels, Tabs } from "@chakra-ui/react"
import { Header } from "../components/Header"
import { Mantenedor, Title } from "../components/Mantenedor"
import { Example } from "../components/Etapas"
import { Equipe } from "../components/Equipe"





export const Home = () => {
    return (

        <>

            <Header />
            <Center>

                <Heading lineHeight='tall' paddingTop='10px' fontSize={{ base: '24px', md: '40px' }}>
                    <Highlight query='Next' styles={{ px: '2', py: '1', rounded: 'full', bg: '#0bf960' }}>
                        Passos da aceleração Next
                    </Highlight>
                </Heading>
            </Center>
            <Example />

            <Center paddingTop="8px">
                <Heading lineHeight='tall' fontSize={{ base: '20px', md: '40px' }}>
                    <Highlight query='Mantenedores' styles={{ px: '2', py: '1', rounded: 'full', bg: '#0bf960' }}>

                        Nossos Mantenedores do batch #3
                    </Highlight>
                </Heading>
            </Center>

            <Center height='20px'>
                <Divider orientation="vertical" />
            </Center>
            <Box>
                <Tabs>
                    <TabPanels>
                        <Mantenedor
                            logo='https://mcusercontent.com/70051c3561b4a99add8405ec2/images/ef544fe0-e640-70f9-b9fb-dd871fdd7f1f.png'
                            texto='O MB é a maior plataforma de negociação de criptomoedas e ativos alternativos da América Latina, além de ser o primeiro unicórnio cripto no Brasil. A empresa é associada da Associação Brasileira de Criptoeconomia (ABCripto) e adepta ao Código de Conduta e Autorregulação na Prevenção à Lavagem de Dinheiro desenvolvido pela associação e que garante que as empresas signatárias cumpram as melhores práticas de compliance. Com 3,8 milhões de clientes, o Mercado Bitcoin está transformando a relação das pessoas com seu próprio dinheiro e democratizando o acesso a ativos alternativos com liquidez e segurança.  ' />
                        <Mantenedor logo='https://mcusercontent.com/70051c3561b4a99add8405ec2/images/c084d3d8-ba96-9cb1-e97c-09fc6889c84c.png' texto='Somos o Sicredi, e escolhemos trilhar um caminho coletivo para oferecer soluções inteligentes para o seu desenvolvimento financeiro. A gente entende que as melhores escolhas são aquelas que trazem resultados para todos. Oferecemos mais de 300 produtos e serviços financeiros de um jeito simples e próximo para você, para a sua empresa e para o seu agronegócio. Mas o que nos faz diferentes é que ao se associar, você adquire uma pequena cota da sua cooperativa, passando a ser dono do Sicredi, tendo voz sobre as decisões do negócio e participando dos resultados. É por isso que o Sicredi é seu, meu e nosso. Aqui todos têm a oportunidade de decidir e participar, assim criamos laços de confiança que nos permitem crescer. Juntos.' />
                    </TabPanels>
                    <Center>
                        <TabList>
                            <Title title='MB' />
                            <Title title='Sicredi' />
                        </TabList>
                    </Center>
                </Tabs>

            </Box>

        </>

    )
}