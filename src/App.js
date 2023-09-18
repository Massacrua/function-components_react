import { Component } from 'react';
import './App.css';
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro';

class App extends Component {

  render(){
    return (
      <>
        <h1>Formulário de cadastro</h1>
        <FormularioCadastro/>
      </>
    );
  }
}

export default App;
