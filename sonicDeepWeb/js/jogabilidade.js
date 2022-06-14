const sonic = document.querySelector('.sonic');
const vilao = document.querySelector('.vilao');

//função que faz o sonic pular / passada como parametro no addEventListener dentro da função tela.
function jump() {
    sonic.classList.add('jump');

    setTimeout(() => { // remove a função jump.

        sonic.classList.remove('jump');

    }, 500);

};

// Verifica o tamanho da tela e define as posições dos personagens e de colisão conforme o dispositivo
if (window.matchMedia("(min-width:745px)").matches) {

    // capturar colisão entre os elementos dispositivo desktop
    const loop = setInterval(function colisao(ctx) {

        const vilaoPosition = vilao.offsetLeft;
        const sonicPosition = +window.getComputedStyle(sonic).bottom.replace('px', '');

        //para o jogo
        if (vilaoPosition <= 190 && vilaoPosition > 0 && sonicPosition < 160) {

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
            clearInterval(tmp);
        };

        // alternando as velocidade do vilao / nível de dificuldade
       

        if (pontos == 20) {
            vilao.style.animation = 'vilao-animation 2.5s infinite linear';
        }
        else if (pontos == 50) {
            vilao.style.animation = 'vilao-animation 2s infinite linear';
        }
        else if (pontos == 100) {
            vilao.style.animation = 'vilao-animation 1.8s infinite linear';
        }
        else if (pontos == 150) {            
            vilao.style.animation = 'vilao-animation2 1.2s infinite linear';

        }
        else if (pontos == 200) {            
            vilao.style.animation = 'vilao-animation2 1s infinite linear';
        }
        else if (pontos == 250) {            
            vilao.style.animation = 'vilao-animation2 0.8s infinite linear';
        }

    }, 10);

}
else {

    // capturar colisão entre os elementos dispositivo mobile
    const loop = setInterval(function colisao(ctx) {

        const vilaoPosition = vilao.offsetLeft;
        const sonicPosition = +window.getComputedStyle(sonic).bottom.replace('px', '');

        //para o jogo
        if (vilaoPosition <= 50 && vilaoPosition > 0 && sonicPosition < 160) {

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
            clearInterval(tmp);
        };

        // alternando as velocidade do vilao / nível de dificuldade        

        if (pontos == 20) {
            vilao.style.animation = 'vilao-animation 2.5s infinite linear';
        }
        else if (pontos == 50) {
            vilao.style.animation = 'vilao-animation 2s infinite linear';
        }
        else if (pontos == 100) {
            vilao.style.animation = 'vilao-animation 1.8s infinite linear';
        }
        else if (pontos == 150) {            
            vilao.style.animation = 'vilao-animation2 1.2s infinite linear';

        }
        else if (pontos == 200) {            
            vilao.style.animation = 'vilao-animation2 1s infinite linear';
        }
        else if (pontos == 250) {            
            vilao.style.animation = 'vilao-animation2 0.8s infinite linear';
        }

    }, 10);

}
// Função para captura de eventos / retorna o evento conforme o tamanho da tela
tela();


