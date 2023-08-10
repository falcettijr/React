// Template expressions

const TemplateExpressions = () => {
    const pessoa = {
        nome: "Sergio",
        idade: "39 anos",
        cargo: "Dev"
    }

    const {nome, idade, cargo} = pessoa //DESESTRUCTURING

    return (
        <div>
            <h2>Essa soma de 2 + 2 é feita com JSX: {2 + 2} </h2>
            <h3>Esse nome: {nome} também está sendo inserido via Javascript.</h3>
            <p>Bem vindo {nome}, seu cargo é {cargo} e sua idade é {idade}.</p>
        </div>
    )
}

export default TemplateExpressions