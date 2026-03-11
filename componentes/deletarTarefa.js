const BotaoDeletar = () =>{
    const botaoDeleta = document.createElement('button')

    botaoDeleta.classList.add('delete-button')
    botaoDeleta.innerText = 'Deletar'

    botaoDeleta.addEventListener('click', DeletarTarefa)

    return botaoDeleta
}

const DeletarTarefa = (e) =>{
    const botaoDeletar= e.target
    
    const removerTarefa = botaoDeletar.parentElement
    removerTarefa.remove()

    return botaoDeletar
}

export default BotaoDeletar