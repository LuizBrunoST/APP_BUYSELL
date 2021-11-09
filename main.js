//#region Testar Verificar se vai comprar ou vender
function testar(){
    testarbuySell = document.getElementById("testarbuySell")
    buySell = ['<span class="w3-btn w3-xxxlarge w3-green" style="display: block;">Buy</span>', '<span class="w3-btn w3-xxxlarge w3-red" style="display: block;">Sell</span>']
    sorteio = Math.floor(Math.random() * buySell.length)
    testarbuySell.innerHTML = buySell[sorteio]
    //console.log(random, months[random]);    

    var duration = 60 * 1; // Converter para segundos
        display = document.querySelector('#tempo'); // selecionando o timer
    startTimer(duration, display); // iniciando o timer
}
//#endregion

//#region timer
function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        display.textContent = minutes + ":" + seconds;
        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}
//#endregion

window.onload = function () {
    //#region Usuario
    userNome = document.getElementById("userNome")
    modalNome = document.getElementById("modalNome")
    userNome.innerHTML = localStorage.getItem("Nome")
    if(localStorage.getItem("Nome")== null){
        modalNome.style.display='block'
    }else{
        modalNome.style.display='none'
    }
    //#endregion

    //#region Verificando a rede
    conecxao = window.navigator.onLine
    if (conecxao == false) {
        document.querySelector("body").style.display = 'none'
        document.querySelector("html").innerHTML = "Verifique sua conecxao com a internet."
    }
    //#endregion

}

