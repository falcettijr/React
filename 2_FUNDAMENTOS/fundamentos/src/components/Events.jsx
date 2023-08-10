const Events = () => {
    const handleClick = () => {
        alert("Ativou função no click!")
    }

    //FUNÇÕES DE RENDERIZAÇÃO

    const renderSomething = (x) => {
        if(x) {
            return <h1>Renderizando isso</h1>
        } else {
            return <h1>Renderizando outra coisa</h1>              
        }
    }

    return(
        <div>
            <div>
                <button onClick={() => alert("Testando com função")}>
                    Clique aqui
                </button>
            </div>
            {/*EVENTO COM FUNÇÃO*/}
            <div>
                <button onClick={handleClick}>Click com função</button>
            </div>
            {/*FUNÇÃO COM RENDER*/}
            {renderSomething(true)}
            {renderSomething(false)}
        </div>
    )
}

export default Events;
