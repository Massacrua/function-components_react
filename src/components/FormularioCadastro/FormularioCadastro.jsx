import { useEffect, useState } from "react"
import DadosEntrega from "./DadosEntrega"
import DadosPessoais from "./DadosPessoais"
import DadosUsuario from "./DadosUsuario"
import { Step, StepLabel, Stepper, Typography } from "@mui/material"

function FormularioCadastro({ onSubmit, validations }) {
    
    const [etapaAtual, setEtapaAtual] = useState(0)
    const [dadosColetados, setDados] = useState({})

    useEffect(() => {
        if (etapaAtual === formularios.length - 1)
        onSubmit(dadosColetados)
    })

    const formularios = [
        <DadosUsuario onSubmit={coletarDados} validations={validations}/>,
        <DadosPessoais onSubmit={coletarDados} validations={validations}/>,
        <DadosEntrega onSubmit={coletarDados} validations={validations}/>,
        <Typography variant="h5">Cadastro Finalizado!</Typography>
    ]

    function coletarDados(data) {
        setDados({...dadosColetados, ...data})
        handleForm()
    }

    function handleForm() {
        setEtapaAtual(etapaAtual + 1)
    }

    return (
        <>
            <Stepper activeStep={etapaAtual}>
                <Step><StepLabel>Login</StepLabel></Step>
                <Step><StepLabel>Pessoal</StepLabel></Step>
                <Step><StepLabel>Entrega</StepLabel></Step>
                <Step><StepLabel>Fim</StepLabel></Step>
            </Stepper>
            {formularios[etapaAtual]}
        </>
    )
}

export default FormularioCadastro