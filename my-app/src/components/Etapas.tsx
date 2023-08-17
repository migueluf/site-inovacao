import { Box, Step, StepDescription, StepIcon, StepIndicator, StepStatus, StepTitle, Stepper, useSteps, StepNumber, StepSeparator, Center } from "@chakra-ui/react"



const steps = [
  { title: '26/06', description: 'Inscrições' },
  { title: '31/07', description: 'Termino das inscrições' },
  { title: '29/08', description: 'Pitch day' },
  { title: '30/08', description: 'Welcome day' },
  { title: '31/08', description: 'Inicio da aceleração' },
  { title: '05/12', description: 'Demo Day' },
]

export const Example = () => {
  const { activeStep } = useSteps({
    index: 5,
    count: steps.length,
  })

  return (
    <Center paddingTop='20px' paddingBottom='20px' >
      <Stepper size='md' orientation='vertical' index={activeStep}>
        {steps.map((step, index) => (
          <Step key={index}>
            <StepIndicator>
              <StepStatus
                complete={<StepIcon />}
                incomplete={<StepNumber />}
                active={<StepNumber />}
              />
            </StepIndicator>

            <Box flexShrink='1'>
              <StepTitle>{step.title}</StepTitle>
              <StepDescription>{step.description}</StepDescription>
            </Box>

            <StepSeparator />
          </Step>
        ))}
      </Stepper>
    </Center>
  )
}
