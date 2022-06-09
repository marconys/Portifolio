let music = document.querySelector(".musica");

let cont = 0;



if (window.matchMedia("(min-width:745px)").matches) {

    music = document.addEventListener("click",musica );
}
else {
    music = document.addEventListener("touchstart",musica);
}

function musica(){
    
    let audio = document.querySelector('audio');
    if(cont == 0){
        cont = 1;
        audio.play();
    }
    else{
        cont = 0;
        audio.pause();
    }
}