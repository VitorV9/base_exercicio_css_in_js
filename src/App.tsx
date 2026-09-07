import Header from './components/Header'
import Hero from './components/Hero'
import ListaVagas from './containers/ListaVagas'
import { EstiloGlobal, Container } from './styles'

function App() {
  return (
    <>
      <EstiloGlobal />
      <Header />
      <Hero />
      <Container>
        <ListaVagas />
      </Container>
    </>
  )
}

export default App
