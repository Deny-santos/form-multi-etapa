import * as C from "@chakra-ui/react"

export default function FormPersonalDetails () {
    return (
        <C.VStack spacing={5}>
            <C.Input placeholder="Nome Completo"  borderColor="blue.700"/>
            <C.Input placeholder="CPF"  borderColor="blue.700"/>
            <C.Input placeholder="Celular"  borderColor="blue.700"/>
        </C.VStack>
    )
}