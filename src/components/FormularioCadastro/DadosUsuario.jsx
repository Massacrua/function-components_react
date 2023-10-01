import { Button, TextField } from "@mui/material"
import { useContext, useState } from "react"
import ValidacoesCadastro from "../../contexts/ValidacoesCadastro"
import useErros from "../../hooks/useErros"

function DadosUsuario({ onSubmit }) {

    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")

    const validations = useContext(ValidacoesCadastro)
    const [erros, validarCampos, formReady] = useErros(validations)

    return (
        <form
            onSubmit={event => {
                event.preventDefault()
                if (formReady())
                    onSubmit({ email, senha })
            }}>
            <TextField
                value={email}
                name="email"
                onChange={event => setEmail(event.target.value)}
                id="email"
                label="Email"
                type="email"
                required
                margin='normal'
                fullWidth
            />
            <TextField
                value={senha}
                name="senha"
                onChange={event => event.target.value.length <= 72 && setSenha(event.target.value)}
                onBlur={validarCampos}
                error={!erros.senha.valido}
                helperText={erros.senha.texto}
                id="senha"
                label="Senha"
                type="password"
                required
                margin='normal'
                fullWidth
            />
            <Button
                type="submit"
                variant="contained"
                color='primary'
                fullWidth
            >
                Próximo
            </Button>
        </form>
    )
}

export default DadosUsuario