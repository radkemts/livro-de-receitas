function paginar(elemento, pagina){
    const receitaAtiva = document.querySelector('.item.active');
    const botaoAtivo = document.querySelector('.page-item.active');
    const receitaSelecionada = document.querySelector(`#${pagina}`);
    const botaoSelecionado = elemento.parentElement;

    receitaAtiva.classList.remove('active');
    botaoAtivo.classList.remove('active');

    receitaSelecionada.classList.add('active');
    botaoSelecionado.classList.add('active');
}