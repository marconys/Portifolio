const sonic1 = document.querySelector('.sonic');
const vilao1 = document.querySelector('.vilao');

// Recarregar pagina "refresh" (reinícia o jogo)
let btn1 = document.querySelector(".iniciar");
btn1.addEventListener("touchstart", function() {
    
    location.reload();
});

//função jump
const jumptouch = () => {
    sonic1.classList.add('jump2');

    setTimeout(() => {

        sonic1.classList.remove('jump2');

    }, 500);

};

// capturar colisão entre os elementos

const loop1 = setInterval(function colisao(ctx) {

    const vilao1Position = vilao1.offsetLeft;
    const sonic1Position = +window.getComputedStyle(sonic1).bottom.replace('px', '');
    console.log(sonicPosition)

    if (vilao1Position <= 190 && vilao1Position > 0 && sonic1Position <160) {
        //para o jogo
        vilao1.style.animation = 'none';
        vilao1.style.left = `${vilao1Position}px`; 
       
            
    };

    if(vilao1Position <= 0){

        pontos++;
    };
    


}, 10);


// addEventListener para captura de eventos / passando como parametros o evento e a função
document.addEventListener('touchstart', jumptouch);