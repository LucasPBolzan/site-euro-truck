
function testarCaminhao() {
    const caminhaoGif = document.getElementById("caminhao-gif");
    const btnLigar = document.getElementById("ligar");
    const btnFarol = document.getElementById("farol");
    const btnPisca = document.getElementById("pisca");
    const btnBuzina = document.getElementById("buzina");

    const somLigar = new Audio("sons-caminhoes/diesel-truck-idling-frontwav-14418.mp3");
    const somFarol = new Audio("sons-caminhoes/flashlight-102291.mp3");
    const somPisca = new Audio("sons-caminhoes/bmw-indicator-63705.mp3");
    const somBuzina = new Audio("sons-caminhoes/automobile-horn-153260.mp3");

    const imgParado = "fotos-caminnhoes/desligado.jpg";
    const gifLigando = "gifs-caminhoes/ligando.gif";
    const gifFarol = "gifs-caminhoes/farol.gif";
    const gifPisca = "gifs-caminhoes/pisca.gif";

    let ligarAtivo = false;
    let farolAtivo = false;
    let piscaAtivo = false;
    let buzinaAtivo = false;

    if (btnLigar) {
        btnLigar.addEventListener("click", function() {
            if (!ligarAtivo) {
                caminhaoGif.src = gifLigando;
                somLigar.play();
                ligarAtivo = true;
            } else {
                caminhaoGif.src = imgParado;
                somLigar.pause();
                somLigar.currentTime = 0; 
                ligarAtivo = false;
            }
        });
    }

    if (btnFarol) {
        btnFarol.addEventListener("click", function() {
            if (!farolAtivo) {
                caminhaoGif.src = gifFarol;
                somFarol.play();
                farolAtivo = true;
            } else {
                caminhaoGif.src = imgParado;
                somFarol.pause();
                somFarol.currentTime = 0;
                farolAtivo = false;
            }
        });
    }

    if (btnPisca) {
        btnPisca.addEventListener("click", function() {
            if (!piscaAtivo) {
                caminhaoGif.src = gifPisca;
                somPisca.play();
                piscaAtivo = true;
            } else {
                caminhaoGif.src = imgParado;
                somPisca.pause();
                somPisca.currentTime = 0;
                piscaAtivo = false;
            }
        });
    }

    if (btnBuzina) {
        btnBuzina.addEventListener("click", function() {
            if (!buzinaAtivo) {
                caminhaoGif.src = imgParado; 
                somBuzina.play();
                buzinaAtivo = true;
            } else {
                caminhaoGif.src = imgParado;
                somBuzina.pause();
                somBuzina.currentTime = 0;
                buzinaAtivo = false;
            }
        });
    }
}

document.addEventListener("DOMContentLoaded", function() {
    testarCaminhao();
});