import { Component } from 'react';
import './App.css';
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro';
import { Container, Typography } from '@mui/material';
import 'fontsource-roboto'
import { validarCpf, validarSenha } from './models/cadastro';

class App extends Component {

  render(){
    return (
      <Container component="article" maxWidth="sm">
        <Typography variant='h3' component="h1" align='center'>Formulário de cadastro</Typography>
        <FormularioCadastro onSubmit={formOnSubmit} validations={{cpf: validarCpf, senha: validarSenha}}/>
      </Container>
    );
  }
}

function formOnSubmit(data) {
  console.log(data)
}

export default App;
