import Card from "./components/Card"
import TextInput from "./components/TextInput"
import Typography from "./components/Typography"
import GlobalStyles from "./theme/GlobalStyles"
import DSThemeProvider from "./theme/Provider"
import styled from '@emotion/styled'
import { Container, Row, Col } from 'react-grid-system';
import { Button } from "./components/Button/Button"
import Header from "./components/Header"
import Link from "./components/Link"
import { FreelandoLogo } from "./assets/FreelandoLogo"
import Footer from "./components/Footer"
import { IconWhatsApp } from "./components/Icons/IconWhatsApp"
import { IconTwitch } from "./components/Icons/IconTwitch"
import { IconInstagram } from "./components/Icons/IconInstagram"
import { IconTwitter } from "./components/Icons/IconTwitter"
import { InlineList } from "./components/List/InlineList"
import { InlineListItem } from "./components/List/InlineListItem"
import Dropdown from "./components/Dropdown"

const StyledTextContainer = styled.div`
  text-align: center;
`

const options = [
  { "text": "Acre", "value": "AC" },
  { "text": "Alagoas", "value": "AL" },
  { "text": "Amapá", "value": "AP" },
  { "text": "Amazonas", "value": "AM" },
  { "text": "Bahia", "value": "BA" },
  { "text": "Ceará", "value": "CE" },
  { "text": "Distrito Federal", "value": "DF" },
  { "text": "Espírito Santo", "value": "ES" },
  { "text": "Goiás", "value": "GO" },
  { "text": "Maranhão", "value": "MA" },
  { "text": "Mato Grosso", "value": "MT" },
  { "text": "Mato Grosso do Sul", "value": "MS" },
  { "text": "Minas Gerais", "value": "MG" },
  { "text": "Pará", "value": "PA" },
  { "text": "Paraíba", "value": "PB" },
  { "text": "Paraná", "value": "PR" },
  { "text": "Pernambuco", "value": "PE" },
  { "text": "Piauí", "value": "PI" },
  { "text": "Rio de Janeiro", "value": "RJ" },
  { "text": "Rio Grande do Norte", "value": "RN" },
  { "text": "Rio Grande do Sul", "value": "RS" },
  { "text": "Rondônia", "value": "RO" },
  { "text": "Roraima", "value": "RR" },
  { "text": "Santa Catarina", "value": "SC" },
  { "text": "São Paulo", "value": "SP" },
  { "text": "Sergipe", "value": "SE" },
  { "text": "Tocantins", "value": "TO" }
]

function App() {
  return (
    <DSThemeProvider>
      <GlobalStyles />
      <Header>
        <Container>
          <Row align="center">
            <Col>
              <FreelandoLogo />
            </Col>
            <Col style={{ textAlign: 'right' }}>
              <Link>Login</Link>
            </Col>
          </Row>
        </Container>
      </Header>
      <Container style={{ marginTop: '80px', marginBottom: '80px' }}>
        <Row justify="center">
          <Col lg={8} md={10} sm={12}>
            <Card>
              <form>
                <StyledTextContainer>
                  <Typography variant='h1'>Crie seu cadastro</Typography>
                  <Typography variant='body1'>
                    Crie seu perfil gratuitamente para começar a trabalhar com os melhores freelancers.
                    Em seguida, você poderá dar mais detalhes sobre suas demandas e sobre sua forma de trabalho.
                  </Typography>
                  <TextInput label="Nome Completo" type="text" />
                </StyledTextContainer>
                <Row>
                  <Col lg={4} md={12} sm={12}>
                    <Dropdown placeholder="Selecione..." label="Estado" options={options} />
                  </Col>
                  <Col lg={8} md={12} sm={12}>
                    <TextInput label="Cidade" type="text" />
                  </Col>
                </Row>
                <TextInput label="E-mail" type="email" />
                <Row>
                  <Col lg={6} md={12} sm={12}>
                    <TextInput label="Senha" type="text" />
                  </Col>
                  <Col lg={6} md={12} sm={12}>
                    <TextInput label="Repita a senha" type="text" />
                  </Col>
                </Row>
                <Row>
                  <Col sm={6}>
                    <Button variant="secondary">
                      Anterior
                    </Button>
                  </Col>
                  <Col sm={6} style={{ textAlign: 'right' }}>
                    <Button>
                      Próximo
                    </Button>
                  </Col>
                </Row>
              </form>
            </Card>
          </Col>
        </Row>
      </Container>
      <Footer>
        <Container>
          <Row align="center">
            <Col>
              <FreelandoLogo height={40} width={176} />
              <Typography variant="body2">Desenvolvido por Alura. Projeto fictício sem fins comerciais.</Typography>
            </Col>
            <Col style={{ textAlign: 'right' }}>
              <Typography variant="body2">Acesse nossas redes:</Typography>
              <InlineList>
                <InlineListItem>
                  <a href="" aria-label="Link para o WhatsApp">
                    <IconWhatsApp />
                  </a>
                </InlineListItem>
                <InlineListItem>
                  <a href="" aria-label="Link para a Twitch">
                    <IconTwitch />
                  </a>
                </InlineListItem>
                <InlineListItem>
                  <a href="" aria-label="Link para a Instagram">
                    <IconInstagram />
                  </a>
                </InlineListItem>
                <InlineListItem>
                  <a href="" aria-label="Link para a Twitter">
                    <IconTwitter />
                  </a>
                </InlineListItem>
              </InlineList>
            </Col>
          </Row>
        </Container>
      </Footer>
    </DSThemeProvider>
  )
}

export default App
