// Função para detectar largura da tela e retornar evento conforme responsividade;

function tela() {
    if (window.matchMedia("(min-width:800px)").matches) {
         // a viewport tem pelo menos 800 pixels de largura 
        document.addEventListener("keydown", jump);
    } else {
        // a viewport menos que 800 pixels de largura 
        document.addEventListener("touchstart", jump);
    }
}


