import { Button, Collapse } from "@chakra-ui/react"
import React from "react"

export const Hide = ({text}: any) => {

    const [show, setShow] = React.useState(false)

    const handleToggle = () => setShow(!show)



    return (
        <>
            <Collapse startingHeight={120} in={show}>
                {text}
            </Collapse>
            <Button size='sm' onClick={handleToggle} mt='1rem'>
                 {show ? 'Mostrar menos...' : 'Mostrar mais...'}
            </Button>
        </>
    )
}