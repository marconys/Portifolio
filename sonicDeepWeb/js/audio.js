let btn2 = document.querySelector(".musica");

let cont = 0;

function musica(){
    let song = document.querySelector("audio");
    if(cont == 0){
        cont = 1;
        song.play();        
        //btn2.style.background = "url('../medea/audioOn.png')";
        
    }
    else{
        cont = 0;
        song.pause();
        song.currentTime = 0
        //btn2.style.background = "url('../medea/audioOff.png')";
    }
}