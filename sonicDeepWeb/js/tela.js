// Função para detectar largura da tela e retornar evento conforme responsividade;

function tela() {
    if (window.matchMedia("(min-width:745px)").matches) {
         // a viewport tem pelo menos 745 pixels de largura 
        document.addEventListener("keydown", jump);
    } else {
        // a viewport menos que 745 pixels de largura 
        document.addEventListener("touchstart", jump);
    }
}

