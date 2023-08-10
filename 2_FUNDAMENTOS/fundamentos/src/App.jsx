import './App.css'

//Importando componente
import FirstComponent from './components/FirstComponent'
//Template Expressions
import TemplateExpressions from './components/TemplateExpressions'
//Hierarquia de componentes
import MyComponent from './components/MyComponent'

import Events from './components/Events'

function App() {
  
  return (
    <>
      <div className="app">
      {/*Comentários no JSX*/}
      <h1>Fundamentos do React</h1>
      <FirstComponent/>
      <TemplateExpressions/>
      <MyComponent/>
      <Events/>
      <button onClick={() => alert("Testando um evento!")}>Clique aqui</button> {/*USAR ESSA FORMA INLINE APENAS PARA FUNÇÕES SIMPLES*/}
      </div>
    </>
  )
}

export default App
