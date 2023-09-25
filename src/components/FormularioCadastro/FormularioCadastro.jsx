import DadosPessoais from "./DadosPessoais"
import DadosUsuario from "./DadosUsuario"

function FormularioCadastro({ onSubmit, validarCpf}) {

    return (
        <>
            <DadosPessoais onSubmit={onSubmit} validarCpf={validarCpf}/>
            <DadosUsuario/>
        </>
    )
}

export default FormularioCadastro