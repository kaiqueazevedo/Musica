// alterar imagem de playPause

let image = document.getElementById("play");

image.addEventListener("click", function(){
image.setAttribute("src","./imagens/reproduzir_icon.png")

})

let imagem = document.getElementById("pause");

imagem.addEventListener("click", function(){
imagem.setAttribute("src","./imagens/pausa_icon.png")

})

// funções de controle  da musica
let source = document.getElementById("music")
//let music = audio.controls

function retroceder() {
    source.currentTime -= 15;
}

function avancar() {
    source.currentTime += 15;
}

// sessao play pause

function play() {
    source.play();
    document.getElementById("play").style.display = "none"
    document.getElementById("pause").style.display = "inline"

}

function pause() {
    source.pause();
    document.getElementById("pause").style.display = "none";
    document.getElementById("play").style.display = "inline";
}

// sessao musica

let musica =[
 i

]