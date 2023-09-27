import { Component } from 'react';
import './App.css';
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro';
import { Container, Typography } from '@mui/material';
import 'fontsource-roboto'

class App extends Component {

  render(){
    return (
      <Container component="article" maxWidth="sm">
        <Typography variant='h3' component="h1" align='center'>Formulário de cadastro</Typography>
        <FormularioCadastro onSubmit={formOnSubmit} validarCpf={validarCpf}/>
      </Container>
    );
  }
}

function formOnSubmit(data) {
  console.log(data)
}

function validarCpf(cpf) {
  if (cpf.length !== 11 && cpf.length !== 0) {
    return {valido: false, texto: "CPF deve ter 11 dígitos"}
  }
  return {valido: true, texto: ""}
}

export default App;
