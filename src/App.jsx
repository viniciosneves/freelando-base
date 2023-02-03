import Card from "./components/Card"
import GlobalStyles from "./theme/GlobalStyles"
import DSThemeProvider from "./theme/Provider"

function App() {
  return (
    <DSThemeProvider>
      <GlobalStyles />
      <Card>
        <h1>Crie seu cadastro</h1>
      </Card>
    </DSThemeProvider>
  )
}

export default App
