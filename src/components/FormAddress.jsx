import * as C from "@chakra-ui/react"

export default function FormAddress () {
    return (
        <C.VStack spacing={5}>
            <C.Input placeholder="Cidade, UF"  borderColor="blue.700"/>
            <C.Input placeholder="Rua"  borderColor="blue.700"/>
            <C.Input placeholder="Cep"  borderColor="blue.700"/>
        </C.VStack>
    )
}