import { useState } from "react";

function useErros(validations) {
  const estadoInicial = criarEstadoInicial(validations)
  const [erros, setErros] = useState(estadoInicial);

  function validarCampos(event) {
    const { name, value } = event.target;
    const newState = { ...erros };
    newState[name] = validations[name](value);
    setErros(newState);
  }

  function formReady() {
    for (let campo in erros) {
        if (!erros[campo].valido) {
            return false
        }
    }
    return true
  }

  return [erros, validarCampos, formReady];
}

function criarEstadoInicial(validations) {
  const estadoInicial = {}
  for (let campo in validations) {
    estadoInicial[campo] = {
      valido: true,
      texto: "",
    }
  }
  return estadoInicial
}

export default useErros
