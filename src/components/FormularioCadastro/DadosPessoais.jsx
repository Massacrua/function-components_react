import { Button, FormControlLabel, Switch, TextField } from '@mui/material';
import React, { useState } from 'react';

function DadosPessoais({ onSubmit, validations }) {

    const [nome, setNome] = useState("")
    const [sobrenome, setSobrenome] = useState("")
    const [cpf, setCpf] = useState("")
    const [promocoes, setPromocoes] = useState(true)
    const [novidades, setNovidades] = useState(true)

    const [erros, setErros] = useState({
        cpf: {
            valido: true,
            texto: ""
        }
    })

    function validarCampos(event) {
        const {name, value} = event.target
        const newState = {...erros}
        newState[name] = validations[name](value)
        setErros(newState)
    }

    return (
        <form 
            onSubmit={event => {
                event.preventDefault()
                onSubmit({nome, sobrenome, cpf, promocoes, novidades})
            }}
        >
            <TextField
                value={nome}
                onChange={event => setNome(event.target.value)}
                id='nome'
                label="Nome"
                required
                margin='normal'
                fullWidth
            />
            <TextField
                value={sobrenome}
                onChange={event => setSobrenome(event.target.value)}
                id='sobrenome'
                label="Sobrenome"
                required
                margin='normal'
                fullWidth
            />
            <TextField 
                value={cpf}
                name="cpf"
                onBlur={validarCampos}
                onChange={event => setCpf(event.target.value)}
                error={!erros.cpf.valido}
                helperText={erros.cpf.texto}
                required
                id='cpf' 
                label="CPF" 
                margin='normal' 
                fullWidth 
            />
            <FormControlLabel 
                label="Promoções" 
                control={
                    <Switch 
                        name='promocoes' 
                        checked={promocoes} 
                        onChange={event => setPromocoes(event.target.checked)}
                    />
                } 
            />
            <FormControlLabel    
                label="Novidades" 
                control={
                    <Switch
                        name='novidades'     
                        checked={novidades}
                        onChange={event => setNovidades(event.target.checked)}
                    />} 
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

export default DadosPessoais