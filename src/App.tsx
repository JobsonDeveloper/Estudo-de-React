import { Layout } from "./components/Layout";
import { Box, Button, Center, ChakraProvider, Input } from "@chakra-ui/react";
import { login } from "./services/login";

function App() {
  return (
    <ChakraProvider>
      <Box
        minHeight='100vh'
        backgroundColor='#000'
        padding='15px'
      >
        <Box
          backgroundColor='#fff'
          borderRadius='15px'
          padding='15px'
          display='grid'
          gap='5px'>
          <Center>
            <h1>Faça o login</h1>
          </Center>

          <Input placeholder='Email'/>
          <Input placeholder='Senha' />

          <Center>
            <Button
              colorScheme='teal'
              size='sm'
              width='100%'
              marginTop='20px'
              onClick={login}>Entrar</Button>
              
          </Center>
        </Box>
      </Box>
    </ChakraProvider>
  );
}

export default App;
