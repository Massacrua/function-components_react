import { Button, TextField } from "@mui/material"

function DadosUsuario({ onSubmit }) {
    return (
        <form onSubmit={event => {
            event.preventDefault()
            onSubmit()
        }}>
            <TextField
                id="email"
                label="Email"
                type="email"
                required
                margin='normal'
                fullWidth
            />
            <TextField
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