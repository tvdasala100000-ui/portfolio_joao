import Hero from "./components/Hero/Hero.jsx"
import { perfil } from "./data/perfil.js"

function App() {

  return (
    <>
      
      <main>
        <Hero
          nome={perfil.nome}
          cargo={perfil.cargo}
          resumo={perfil.resumo}
          cidade={perfil.cidade}
        />
      </main>
    </>
  )
}

export default App
