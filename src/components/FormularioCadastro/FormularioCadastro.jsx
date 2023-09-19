import { Button, FormControlLabel, Switch, TextField } from '@mui/material';
import React from 'react';

function FormularioCadastro() {
    let nome = ""

    return (
        <form 
            onSubmit={event => {
                event.preventDefault(); 
                console.log(nome)
            }}
        >
            <TextField
                onChange={event => nome = event.target.value}
                id='nome'
                label="Nome"
                margin='normal'
                fullWidth
            />

            <TextField
                id='sobrenome'
                label="Sobrenome"
                margin='normal'
                fullWidth
            />

            <TextField 
                id='cpf' 
                label="CPF" 
                margin='normal' 
                fullWidth 
            />

            <FormControlLabel 
                label="Promoções" 
                control={<Switch name='promocoes' defaultChecked />} 
            />

            <FormControlLabel 
                label="Novidades" 
                control={<Switch name='novidades' defaultChecked />} 
            />

            <Button 
                type='submit' 
                variant="contained" 
                color='primary' 
                fullWidth
            > Cadastrar
            </Button>
        </form>
    )
}

export default FormularioCadastro