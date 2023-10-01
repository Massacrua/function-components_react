import { Button, FormControlLabel, Switch, TextField } from '@mui/material';
import React, { useContext, useState } from 'react';
import ValidacoesCadastro from '../../contexts/ValidacoesCadastro';
import useErros from '../../hooks/useErros';

function DadosPessoais({ onSubmit }) {

    const [nome, setNome] = useState("")
    const [sobrenome, setSobrenome] = useState("")
    const [cpf, setCpf] = useState("")
    const [promocoes, setPromocoes] = useState(true)
    const [novidades, setNovidades] = useState(true)

    const validations = useContext(ValidacoesCadastro)
    const [erros, validarCampos, formReady] = useErros(validations)

    return (
        <form
            onSubmit={event => {
                event.preventDefault()
                if (formReady())
                    onSubmit({ nome, sobrenome, cpf, promocoes, novidades })
            }}
        >
            <TextField
                value={nome}
                name='nome'
                onBlur={validarCampos}
                error={!erros.nome.valido}
                helperText={erros.nome.texto}
                onChange={event => setNome(event.target.value)}
                id='nome'
                label="Nome"
                required
                margin='normal'
                fullWidth
            />
            <TextField
                value={sobrenome}
                name='sobrenome'
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
                onChange={event => event.target.value.length <= 11 && setCpf(event.target.value)}
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
            > Próximo
            </Button>
        </form>
    )
}

export default DadosPessoais