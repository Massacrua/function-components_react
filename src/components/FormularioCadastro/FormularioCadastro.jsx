import { useState } from "react"
import DadosEntrega from "./DadosEntrega"
import DadosPessoais from "./DadosPessoais"
import DadosUsuario from "./DadosUsuario"

function FormularioCadastro({ onSubmit, validarCpf }) {
    
    const [etapaAtual, setEtapaAtual] = useState(0)

    const formularios = [
        <DadosUsuario onSubmit={handleForm}/>,
        <DadosPessoais onSubmit={handleForm} validarCpf={validarCpf}/>,
        <DadosEntrega onSubmit={onSubmit}/>
    ]

    function handleForm() {
        setEtapaAtual(etapaAtual + 1)
    }

    return (
        <>
            {formularios[etapaAtual]}
        </>
    )
}

export default FormularioCadastro