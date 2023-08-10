import './App.css'
import day from './assets/day.jpg'

function App() {

  return (
    <>
      <div className='app'>
        <h1>Avançando em React</h1>
        {/* ADICIONANDO IMAGENS - Quando a imagem está em "public" pode ser acessada pelo src com "/***.jpg" */}
        <h2>Night</h2>
        <img src="/city.jpg" alt="Imagem da cidade a noite" />
        {/* IMPORTANDO IMAGENS - Para acessar o conteudo da pasta "assets" criar uma importação e usar {} com o nome da variavel*/}
        <h2>Day</h2>
        <img src={day} alt="Imagem de dia" />
      </div>
    </>
  )
}

export default App
