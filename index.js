const textarea = document.getElementById('campo-texto');
const botao = document.querySelector('.gerar');
const listaDeBotoes = document.querySelectorAll('.botoes-personalizar');
const botaoCopiar = document.querySelector('.copiar');
const lista = document.querySelector('.lista-texto-formatado');
//EVENTO PARA COPIAR O TEXTO DENTRO DO TEXTAREA
botaoCopiar.addEventListener('click', ()=>{
    textarea.select();
    try{
        navigator.clipboard.writeText(textarea.value)
    }catch(erro){
        alert(`Texto não copiado. ${erro}`);
    }
})


listaDeBotoes.forEach( (botao)=> {    
    botao.onclick = () =>{
        try{
            criarItem(botao.classList[1]);
            textarea.value = '';

        }catch(error){
            alert(error);
        }
    }
})



function criarItem(classe){
    const textoSelecionado = textarea.value;

    if(textoSelecionado == ''){
        throw new Error("Campo de texto vazio!");
    }
    const li = document.createElement('li');
    li.classList.add(`${classe}`);
    li.innerText = `${textoSelecionado}`;
    lista.appendChild(li);
}
