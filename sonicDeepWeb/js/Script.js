const sonic = document.querySelector('.sonic');
const vilao = document.querySelector('.vilao');

// verifica o tamanho da tela antes da captura do evento e Recarrega a pagina "refresh" (reinícia o jogo) 

let btn = document.querySelector(".iniciar");
if (window.matchMedia("(min-width:745px)").matches) {
    /* a viewport tem pelo menos 745 pixels de largura */
    document.addEventListener("click", function() {

        location.reload();
    });
} else {
    /* a viewport menos que 800 pixels de largura */
    document.addEventListener("touchstart", function() {

        location.reload();
    });
}

//função jump
const jump = () => {
    sonic.classList.add('jump');

    setTimeout(() => {

        sonic.classList.remove('jump');

    }, 500);

};

// capturar colisão entre os elementos

const loop = setInterval(function colisao(ctx) {

    const vilaoPosition = vilao.offsetLeft;
    const sonicPosition = +window.getComputedStyle(sonic).bottom.replace('px', '');
    console.log(sonicPosition)

    if (vilaoPosition <= 190 && vilaoPosition > 0 && sonicPosition <160) {
        //para o jogo
        vilao.style.animation = 'none';
        vilao.style.left = `${vilaoPosition}px`;        
       
        clearInterval(loop);     
    };

    if(vilaoPosition <= 0){

        pontos++;
    };
    


}, 10);



// addEventListener para captura de eventos / passando como parametros o evento e a função
tela();


