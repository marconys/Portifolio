let cont = 0;

function musica() {

    let song = document.querySelector("audio");
    let btn2 = document.querySelector(".musica");


    if (cont == 0) { // Toca a musica
        cont = 1;
        song.play();
        btn2.classList.remove('stop');
        btn2.classList.add('musica');

    }
    else { // Dar stop na musica
        cont = 0;
        song.pause();
        song.currentTime = 0
        btn2.classList.add('stop');
    }
}

function reinicia(){

    let btn = document.querySelector(".iniciar");
    btn.addEventListener("click", function () {

        location.reload();
    });
}