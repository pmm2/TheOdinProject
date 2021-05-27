document.addEventListener('keydown',function (e) {
    const tecla = e.key;
    document.getElementById(tecla).play();
    const butao = tecla + tecla;
    document.getElementById(tecla).currentTime = 0;
    document.getElementById(butao).style.color="blue";
    document.getElementById(butao).style.backgroundColor="yellow";
});

document.addEventListener('keyup',function (e) {
    const tecla = e.key;
    const butao = tecla + tecla;
    document.getElementById(butao).style.color="black";
    document.getElementById(butao).style.backgroundColor="white";
});