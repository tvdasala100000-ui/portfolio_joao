import Icone from '../Icone/Icone.jsx'

function Hero({ nome, cargo, resumo, cidade }) {
  return (
    <section className="hero" id="topo">
      <div className="container hero__linha">
        <div className="hero__texto">
          <p className="hero__status">em busca do primeiro estágio</p>
          <h1>
            {nome}
            <span>.</span>
          </h1>
          <p className="hero__cargo">{cargo}</p>
          <p className="hero__resumo">{resumo}</p>
          <div className="hero__acoes">
            <a className="botao botao--primario" href="#projetos">
              ver projetos <Icone nome="seta" tamanho={18} />
            </a>
            <a className="botao botao--contorno" href="#contato">
              falar comigo
            </a>
          </div>
        </div>

        <div
          className="janela"
          role="img"
          aria-label={`Trecho de código com os dados de ${nome}`}
        >
          <div className="janela__topo">
            <span className="janela__ponto"></span>
            <span className="janela__ponto"></span>
            <span className="janela__ponto"></span>
            <span className="janela__nome">perfil.js</span>
          </div>

          <pre className="janela__codigo">
            <code>
              <span className="cod-palavra">export const</span> perfil = {'{'}
              {'\n  '}nome: <span className="cod-texto">'{nome}'</span>,
              {'\n  '}cidade: <span className="cod-texto">'{cidade}'</span>,
              {'\n  '}foco: <span className="cod-texto">'React'</span>,
              {'\n'}
              {'}'}
            </code>
          </pre>
        </div>
      </div>
    </section>
  )
}

export default Hero

