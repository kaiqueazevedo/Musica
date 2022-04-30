//sessão musica

//let musica = [
  //  {titulo:'Termina Comigo Antes', artista:'Gusttavo Lima', src:'musica/gusttavolima1.mp3', img:'imagens/gusttavolima6.webp'},
  //  {titulo:'Na Hora de Amar ', artista:'Gusttavo Lima', src:'musica/gusttavolima3.mp3', img:'imagens/gusttavolima6.webp'} , 
  //  {titulo:'Te amo Cada Vez Mais', artista:'Gusttavo Lima',src:'musica/gusttavolima2.mp3', img:'imagens/gusttavolima6.webp'}
//];

//function renderizarMusica(index){
  //  source.setAttribute('src',source[index].src);
   // source.addEventListener('loadeddata',() =>{
    //    nomeMusica.textContent = source[index]. tutilo;
     //   nomeArtista.textContent = source[index].artista;
      //  imagem.src = source[index].img;
      //  duracaoSource.textContent = segundosParaMinutos(Math.floor(source.duration));


document.getElementById("anterior").addEventListener('click',() =>{
    indexSource--;
    renderizarMusica(indexSource)
});
document.getElementById("proxima").addEventListener('click',() =>{
    indexSource++;
    renderizarMusica(indexSource);
});

// alterar imagem de playPause

let image = document.getElementById("play");

image.addEventListener("click", function(){
image.setAttribute("src","./imagens/reproduzir_icon.png")

})

let imagem = document.getElementById("pause");

imagem.addEventListener("click", function(){
imagem.setAttribute("src","./imagens/pausa_icon.png")

})

//duracaoSourcetextContent = segundosParaMinutos(Math.floor(source.duration));

// funções de controle  da musica
let source = document.getElementById("music")
let music = audio.controls

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