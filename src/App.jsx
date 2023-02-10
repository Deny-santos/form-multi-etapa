import { useState } from 'react'
import FormAccount from "../src/components/FormAccount"
import FormAddress from './components/FormAddress'
import FormPersonalDetails from './components/FormPersonalDetails'
import * as C from "@chakra-ui/react"
import Step from './components/step'
import { enviar } from "./functions/functions"


function App() {

  function send (){
    enviar()
  }

  const [step, setStep] = useState(1)

  function getCompStep () {
    switch (step) {
      case 1:
        return <FormAccount />
      case 2:
        return <FormPersonalDetails />
      case 3:
        return <FormAddress />
      default:
        <FormAccount />
    }
  }

  const Steps = [1,2,3]

  return(
    <C.Flex h="100vh" align="center" justify="center">
      <C.Center maxW={500} w="100%" py={10} px={2} flexDir="column">

        <C.HStack spacing={4}>



          {Steps.map(item => (
            <Step key={item} index={item} active={step === item}/>
          ))}



          
        </C.HStack>

        <C.Divider my={4} borderColor="blackAlpha.700"/>

        <C.Box w="80%">{getCompStep()}</C.Box>

        <C.HStack spacing={10} mt={4}>
          <C.Button bg="gray.300" onClick={() => setStep(step - 1)} disabled={step === 1}>
            Voltar
          </C.Button>
          <C.Button colorScheme="blue" onClick={() => step !== 3 ? setStep(step + 1) : send()}>
            {step === 3 ? "Enviar" : "Proximo"}
          </C.Button>
        </C.HStack>
      </C.Center>
    </C.Flex>
  )
}

export default App