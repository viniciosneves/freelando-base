import Card from "./components/Card"
import TextInput from "./components/TextInput"
import Typography from "./components/Typography"
import GlobalStyles from "./theme/GlobalStyles"
import DSThemeProvider from "./theme/Provider"
import styled from '@emotion/styled'

const StyledTextContainer= styled.div`
  text-align: center;
`

function App() {
  return (
    <DSThemeProvider>
      <GlobalStyles />
      <Card>
        <StyledTextContainer>
          <Typography variant='h1'>Crie seu cadastro</Typography>
          <Typography variant='body1'>
            Crie seu perfil gratuitamente para começar a trabalhar com os melhores freelancers. 
            Em seguida, você poderá dar mais detalhes sobre suas demandas e sobre sua forma de trabalho.
          </Typography>
          <TextInput label="Nome Completo" type="text"/>
        </StyledTextContainer>
      </Card>
    </DSThemeProvider>
  )
}

export default App
