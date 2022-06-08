const sonic = document.querySelector('.sonic');
const vilao = document.querySelector('.vilao');

// verifica o tamanho da tela antes da captura do evento e Recarrega a pagina "refresh" (reinícia o jogo) 

let btn = document.querySelector(".iniciar");
if (window.matchMedia("(min-width:745px)").matches) {
    /* a viewport tem pelo menos 745 pixels de largura */
    btn.addEventListener("click", function () {

        location.reload();
    });
} else {
    /* a viewport menos que 800 pixels de largura */
    btn.addEventListener("touchstart", function () {

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

// Verifica o tamanho da tela e aplica as posições dos personagens conforme o dispositivo
if (window.matchMedia("(min-width:745px)").matches) {
    

    // capturar colisão entre os elementos dispositivo desktop

    const loop = setInterval(function colisao(ctx) {

        const vilaoPosition = vilao.offsetLeft;
        const sonicPosition = +window.getComputedStyle(sonic).bottom.replace('px', '');


        if (vilaoPosition <= 190 && vilaoPosition > 0 && sonicPosition < 160) {
            //para o jogo
            vilao.style.animation = 'none';            

            vilao.style.left = `${vilaoPosition}px`;
            sonic.style.left = `${1}px`;                   
            
            // Altera o boneco do sonic
            sonic.src = "./medea/sonicshutdown.gif";
            sonic.style.width = "60px";
            sonic.style.bottom = "-2px"  
            // substitui animação do sonic 
            sonic.classList.remove('jump'); 
            sonic.classList.add('sonicdead');        
            sonic.style.animation = 'animation: sonic-dead 20s';

            clearInterval(loop);
        };

        // alternando as velocidade do vilao / nível de dificuldade

        if (vilaoPosition <= 0) {
            pontos++;
        };

        if (pontos == 20) {
            vilao.style.animation = 'vilao-animation 3s infinite linear';
        }
        else if (pontos == 50) {
            vilao.style.animation = 'vilao-animation 2s infinite linear';
        }
        else if (pontos == 100) {
            vilao.style.animation = 'vilao-animation 1.5s infinite linear';
        }
        else if (pontos == 150) {
            vilao.classList.add('vilaovelox2');
            vilao.style.animation = 'vilao-animation2 1s infinite linear';     
                       
        } 
        else if(pontos == 200){
            vilao.classList.add('vilaovelox2');
            vilao.style.animation = 'vilao-animation2 0.8s infinite linear'; 
        }
        else if(pontos == 250){
            vilao.classList.add('vilaovelox2');
            vilao.style.animation = 'vilao-animation2 0.65s infinite linear'; 
        }



    }, 10);

}
else {    

    // capturar colisão entre os elementos dispositivo desktop mobile

    const loop = setInterval(function colisao(ctx) {

        const vilaoPosition = vilao.offsetLeft;
        const sonicPosition = +window.getComputedStyle(sonic).bottom.replace('px', '');


        if (vilaoPosition <= 50 && vilaoPosition > 0 && sonicPosition < 160) {
            //para o jogo
            vilao.style.animation = 'none';
            

            vilao.style.left = `${vilaoPosition}px`;
            sonic.style.left = `${1}px`;

            // Altera o boneco do sonic
            sonic.src = "./medea/sonicshutdown.gif";
            sonic.style.width = "60px";
            sonic.style.bottom = "-2px"
            // substitui animação do sonic
            sonic.classList.remove('jump'); 
            sonic.classList.add('sonicdead');        
            sonic.style.animation = 'animation: sonic-dead 20s';

            clearInterval(loop);
        };

        // alternando as velocidade do vilao / nível de dificuldade

        if (vilaoPosition <= 0) {
            pontos++;
        };

        if (pontos == 20) {
            vilao.style.animation = 'vilao-animation 3s infinite linear';
        }
        else if (pontos == 50) {
            vilao.style.animation = 'vilao-animation 2s infinite linear';
        }
        else if (pontos == 100) {
            vilao.classList.add('vilaovelox2');
            vilao.style.animation = 'vilao-animation2 0.5s infinite linear'
        };



    }, 10);
}

// Função para captura de eventos / passando como parametros o evento e a função
tela();


