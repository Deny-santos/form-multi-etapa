import * as C from "@chakra-ui/react"

export default function FormAccount () {
    return (
        <C.VStack spacing={5}>
            <C.Input type="email" placeholder="E-mail"  borderColor="blue.700" required/>
            <C.Input type="email" placeholder="Confirme Seu E-mail"  borderColor="blue.700" required/>
            <C.Input type="password" placeholder="Senha"  borderColor="blue.700" required/>
        </C.VStack>
    )
}