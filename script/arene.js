function pagina(i){
    let bg = document.getElementById("bg" + i);
    let titolo = document.getElementById("t" + i);
    let pagina = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="icon" href="./img/icon.png">
        <script src="script/combattimento.js"></script>
        <script src="script/arene.js" defer></script>
        <link rel="stylesheet" href="./style/combattimento.css">
        <title>${titolo.innerText}</title>
    </head>
    <body style="background-image: url(${bg.src});" onload="init()">
        <div id="menu">
            <div id="icona">
                <img src="./img/prs1icon.png">
            </div>
            <div id="icona2">
                <img src="./img/prs2icon.png">
            </div>
            <div class="barra">
                <img src="./img/bar1.png">
                <div class="line">
                    <div id="vita">
                        <div id="coloreV1" style="width: 100%"></div>
                    </div>
                    <div id="super">
                        <div id="coloreS1" style="width: 0%"></div>
                    </div>
                    <div id="attacco">
                        <div id="coloreA1" style="width: 400px"></div>
                    </div>
                </div>
                <div class="bar2"></div>
            </div>
            <div class="barra2">
                <div class="bar2"></div>
                <div class="line">
                    <div id="vita2">
                        <div id="coloreV2" style="width: 100%"></div>
                    </div>
                    <div id="super2">
                        <div id="coloreS2" style="width: 0%"></div>
                    </div>
                    <div id="attacco2">
                        <div id="coloreA2" style="width: 400px"></div>
                    </div>
                </div>
                <img src="./img/bar3.png">
            </div>
            <button onclick="menu()" id="btnmenu"></button>
            <div id="menuz">
                <button onclick="riprendi()" class="btnmenuz">Riprendi</button>
                <button onclick="esci()" class="btnmenuz">Esci</button>
            </div>
            <div id="scelta">
                <h2>SEI SICURO DI VOLER USCIRE?</h2>
                <button onclick="si()" class="btnmenuz">SI</button>
                <button onclick="no()" class="btnmenuz">NO</button>
            </div>
        </div>
        <div id="prs">
        <img id="img1" src="./img/1.png">
            <div id="box1">
            </div>
        </div>
        <div id="prs1">
        <img id="img2" src="./img/2.png">
            <div id="box2">
            </div>       
        </div>
    </body>
    </html>`;

    var Newpag = window.open("", "_self");

    Newpag.document.write(pagina);
}
