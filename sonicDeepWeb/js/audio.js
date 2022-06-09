let music = document.querySelector('.musica');


if (window.matchMedia("(min-width:745px)").matches) {

    music = document.addEventListener('click', function () {
        let audio = document.querySelector('audio');
        audio.play();


    })
}
else {
    music = document.addEventListener('touchstart', function () {
        let audio = document.querySelector('audio');
        audio.play();

    })
}