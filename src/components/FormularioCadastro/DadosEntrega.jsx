import { Button, TextField } from "@mui/material"

function DadosEntrega({}) {
    return (
        <form>
            <TextField 
                id="cep" 
                label="CEP" 
                type="number"
                required
                margin='normal'
            />
            <TextField 
                id="endereco" 
                label="Endereço" 
                type="text"
                required
                margin='normal'
                fullWidth
            />
            <TextField 
                id="numero" 
                label="Número" 
                type="number"
                required
                margin='normal'
            />
            <TextField 
                id="estado" 
                label="Estado" 
                type="text"
                required
                margin='normal'
            />
            <TextField 
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
            > 
                Finalizar Cadastro
            </Button>
        </form>
    )
}

export default DadosEntrega