const canva = document.getElementById('campo-texto');

canva.addEventListener( 'select', ()=>{
    const selectedText = canva.value.substring(canva.selectionStart, canva.selectionEnd);
    
})