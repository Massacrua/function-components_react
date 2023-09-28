import { Button, TextField } from "@mui/material"
import { useState } from "react"

function DadosUsuario({ onSubmit, validations }) {

    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")

    return (
        <form 
            onSubmit={event => {
                event.preventDefault()
                onSubmit({email, senha})
        }}>
            <TextField
                value={email}
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
                onChange={event => setSenha(event.target.value)}
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