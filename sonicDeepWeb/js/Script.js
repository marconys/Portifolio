const sonic = document.querySelector('.sonic');
const vilao = document.querySelector('.vilao');

// Recarregar pagina "refresh" (reinícia o jogo)
let btn = document.querySelector(".iniciar");
btn.addEventListener("click", function() {
    
    location.reload();
});

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
       
            
    };

    if(vilaoPosition <= 0){

        pontos++;
    };
    


}, 10);


// addEventListener para captura de eventos / passando como parametros o evento e a função
document.addEventListener('keydown', jump);


