import { Component } from "react";
import "./App.css";
import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro";
import { Container, Typography } from "@mui/material";
import "fontsource-roboto";
import { validarCpf, validarSenha } from "./models/cadastro";
import ValidacoesCadastro from "./contexts/ValidacoesCadastro";

class App extends Component {
  render() {
    return (
      <Container component="article" maxWidth="sm">
        <Typography variant="h3" component="h1" align="center">
          Formulário de cadastro
        </Typography>
        <ValidacoesCadastro.Provider
          value={{ cpf: validarCpf, senha: validarSenha, nome: validarSenha }}
        >
          <FormularioCadastro onSubmit={formOnSubmit} />
        </ValidacoesCadastro.Provider>
      </Container>
    );
  }
}

function formOnSubmit(data) {
  console.log(data);
}

export default App;
