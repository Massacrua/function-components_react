import { Button, TextField } from "@mui/material"
import { useState } from "react"

function DadosEntrega({ onSubmit }) {

    const [cep, setCep] = useState("")
    const [endereco, setEndereco] = useState("")
    const [numero, setNumero] = useState("")
    const [estado, setEstado] = useState("")
    const [cidade, setCidade] = useState("")

    return (
        <form
            onSubmit={event => {
                event.preventDefault()
                onSubmit({ cep, endereco, numero, estado, cidade })
            }}
        >
            <TextField
                value={cep}
                name="cep"
                onChange={event => setCep(event.target.value)}
                id="cep"
                label="CEP"
                type="number"
                required
                margin='normal'
            />
            <TextField
                value={endereco}
                name="endereco"
                onChange={event => setEndereco(event.target.value)}
                id="endereco"
                label="Endereço"
                type="text"
                required
                margin='normal'
                fullWidth
            />
            <TextField
                value={numero}
                name="numero"
                onChange={event => setNumero(event.target.value)}
                id="numero"
                label="Número"
                type="number"
                required
                margin='normal'
            />
            <TextField
                value={estado}
                name="estado"
                onChange={event => setEstado(event.target.value)}
                id="estado"
                label="Estado"
                type="text"
                required
                margin='normal'
            />
            <TextField
                value={cidade}
                name="cidade"
                onChange={event => setCidade(event.target.value)}
                id="cidade"
                label="Cidade"
                type="text"
                required
                margin='normal'
            />
            <Button
                type='submit'
                variant="contained"
                color='primary'
                fullWidth
            > Finalizar Cadastro
            </Button>
        </form>
    )
}

export default DadosEntrega