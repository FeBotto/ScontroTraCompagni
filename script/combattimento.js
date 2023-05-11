//PAGINA 1
function menu() {
    document.getElementById("menuz").style.display = "flex";
}

function riprendi() {
    document.getElementById("menuz").style.display = "none";
}

var scelta = 0;

function si() {
    scelta = 1;
    esci();
}

function no() {
    scelta = -1;
    esci();
}

function esci() {
    document.getElementById("scelta").style.display = "flex";
    document.getElementById("menuz").style.display = "none";

    if (scelta == 1) {
        window.open("index.html", "_self");
        scelta = 0;
    }
    else if (scelta == -1) {
        document.getElementById("scelta").style.display = "none";
        scelta = 0;
        document.getElementById("menuz").style.display = "flex";
    }
}

var img1;
var img2
var istanza1 = setInterval(ricaricaSup1, 1000);
var istanza2 = setInterval(ricaricaSup2, 1000);

//creazione variabili per la gestione della classifica
var contaattacco1 = 0;
var contaattacco2 = 0;
var contadanniinflitti1 = 0;
var contadanniinflitti2 = 0;
var contsuperutilizzate1 = 0;
var contsuperutilizzate2 = 0;
var contadannisubiti1 = 0;
var contadannisubiti2 = 0;

let data = new Date();

data = data.getDate() + "/" + (data.getMonth() + 1) + "/" + data.getFullYear();

window.addEventListener('keypress', (event) => {
    let div;
    let a1 = document.getElementById("coloreA1");
    let s1 = document.getElementById("coloreS1");
    let v1 = document.getElementById("coloreV1");

    let positionBodyT = (document.querySelector("body").getBoundingClientRect()).top;
    let positionBodyB = (document.querySelector("body").getBoundingClientRect()).bottom;
    let positionBodyL = (document.querySelector("body").getBoundingClientRect()).left;
    let positionBodyR = (document.querySelector("body").getBoundingClientRect()).right;

    let positionPrs1R = (document.getElementById("prs").getBoundingClientRect()).right;
    let positionPrs1L = (document.getElementById("prs").getBoundingClientRect()).left;
    let positionPrs1T = (document.getElementById("prs").getBoundingClientRect()).top;
    let positionPrs1B = (document.getElementById("prs").getBoundingClientRect()).bottom;

    switch (event.key.toLocaleLowerCase()) {
        // basso prs1
        case 's':
            if (positionPrs1B < positionBodyB) {
                div = document.getElementById("prs").style.transform += "translate(0px, 25px)";
            }
            break;

        // alto prs1
        case 'w':
            if (positionPrs1T > positionBodyT) {
                div = document.getElementById("prs").style.transform += "translate(0px, -25px)";
            }
            break;

        // sinistra prs1   
        case 'a':
            if (positionPrs1L > positionBodyL) {
                div = document.getElementById("prs").style.transform += "translate(-25px, 0px)";
            }
            break;

        // basso prs1
        case 'd':
            if (positionPrs1R < positionBodyR) {
                div = document.getElementById("prs").style.transform += "translate(25px, 0px)";
            }
            break;

        // attacco prs1    
        case 'q':
            img1 = document.getElementById("img1").classList.add("animaz1");
            setTimeout(togli, 500);
            hitBox1();
            break;

        // ricarica prs1
        case 'r':
            if (a1.style.width != "400px") {
                ricaricaAtt(a1);
            }
            break;

        // super prs1    
        case 'x':
            if (parseInt(s1.style.width) == 100) {
                Sup1();
                istanza1 = setInterval(ricaricaSup1, 1000);
            }
            break;
    }

    if (parseInt(v1.style.width) <= 3) {

        contadanniinflitti1 = contaattacco1 * 25 + contsuperutilizzate1 * 100;
        contadanniinflitti2 = contaattacco2 * 25 + contsuperutilizzate2 * 100;

        contadannisubiti1 = contadanniinflitti2;
        contadannisubiti2 = contadanniinflitti1;

        let immagine = `<img id="img2" src="./img/2.png"></img>`;

        let riepilogo = `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="icon" href="./img/icon.png">
            <script src="./script/combattimento.js"></script>
            <script src="script/arene.js" defer></script>
            <link rel="stylesheet" href="./style/classifica.css">
            <title>classifica</title>
        </head>
        <body style="overflow-y: scroll;">
                <nav id="bar"> 
                <div class="matricola">
                <p class="testomatricola">CODICE PARTITA:</p>
                <span> ${generaMatricola()}</span>
                </div>              
                        <img id="logo" src="./img/Brawlhalla logo.png">
                        <button onclick="home()" id="butt">HOME</button>
                </nav>
        
            <main>
                <div class="classifica">
                    <div class="intestazione">
                        <p class="titolo">STATISTICHE GIOCATORE 1:</p>
                    </div>
                    <div class="contenuto">
                        <div class="riga">
                            <span class="item1">attacchi effettuati:</span><span class="item2">${contaattacco1}</span>
                        </div>
                        <div class="riga">
                            <span class="item1">ultimate utilizzate:</span><span class="item2">${contsuperutilizzate1}</span>
                        </div>                   
                        <div class="riga">
                            <span class="item1">danni inflitti:</span><span class="item2">${contadanniinflitti1}</span>
                        </div> 
                        <div class="riga">
                            <span class="item1">danni ricevuti:</span><span class="item2">${contadannisubiti1}</span>
                        </div>
                    </div>
                </div>
                <div id="vincitore">
                        <p class="testo">IL VINCITORE E:</p>
                        ${immagine}
                        <p id="data">DATA PARTITA:</p>
                        <span>${data}</span>
                </div>
                <div class="classifica">
                    <div class="intestazione">
                        <p class="titolo">STATISTICHE GIOCATORE 2:</p>
                    </div>
                    <div class="contenuto">
                        <div class="riga">
                            <span class="item1">attacchi effettuati:</span><span class="item2">${contaattacco2}</span>
                        </div>
                        <div class="riga">
                            <span class="item1">ultimate utilizzate:</span><span class="item2">${contsuperutilizzate2}</span>
                        </div>                   
                        <div class="riga">
                            <span class="item1">danni inflitti:</span><span class="item2">${contadanniinflitti2}</span>
                        </div> 
                        <div class="riga">
                            <span class="item1">danni ricevuti:</span><span class="item2">${contadannisubiti2}</span>
                        </div>
                    </div>
                </div>
            </main>
        </body>
        </html>`;
        var nuovapagina = window.open("", "_blank");

        nuovapagina.document.write(riepilogo);
    }

})

window.addEventListener('keypress', (event) => {
    let div;
    let a2 = document.getElementById("coloreA2");
    let s2 = document.getElementById("coloreS2");
    let v2 = document.getElementById("coloreV2");

    let positionBodyT = (document.querySelector("body").getBoundingClientRect()).top;
    let positionBodyB = (document.querySelector("body").getBoundingClientRect()).bottom;
    let positionBodyL = (document.querySelector("body").getBoundingClientRect()).left;
    let positionBodyR = (document.querySelector("body").getBoundingClientRect()).right;

    let positionPrs2L = (document.getElementById("prs1").getBoundingClientRect()).left;
    let positionPrs2T = (document.getElementById("prs1").getBoundingClientRect()).top;
    let positionPrs2B = (document.getElementById("prs1").getBoundingClientRect()).bottom;
    let positionPrs2R = (document.getElementById("prs1").getBoundingClientRect()).right;

    switch (event.key.toLocaleLowerCase()) {

        // super prs2    
        case 'b':
            if (parseInt(s2.style.width) == 100) {
                Sup2();
                istanza2 = setInterval(ricaricaSup2, 1000);
            }
            break;

        // ricarica prs2
        case 'i':
            if (a2.style.width != "400px") {
                ricaricaAtt(a2);
            }
            break;

        // attacco prs2   
        case 'y':
            img2 = document.getElementById("img2").classList.add("animaz2");
            setTimeout(togli2, 500);
            hitBox2();
            break;

        // basso prs2
        case 'j':
            if (positionPrs2B < positionBodyB) {
                div = document.getElementById("prs1").style.transform += "translate(0px, 25px)";
            }
            break;

        // alto prs2
        case 'u':
            if (positionPrs2T > positionBodyT) {
                div = document.getElementById("prs1").style.transform += "translate(0px, -25px)";
            }
            break;

        // sinistra prs2 
        case 'h':
            if (positionPrs2L > positionBodyL) {
                div = document.getElementById("prs1").style.transform += "translate(-25px, 0px)";
            }
            break;

        // destra prs2    
        case 'k':
            if (positionPrs2R < positionBodyR) {
                div = document.getElementById("prs1").style.transform += "translate(25px, 0px)";
            }
            break;
    }

    if (parseInt(v2.style.width) <= 3) {

        contadanniinflitti1 = contaattacco1 * 25 + contsuperutilizzate1 * 100;
        contadanniinflitti2 = contaattacco2 * 25 + contsuperutilizzate2 * 100;

        contadannisubiti1 = contadanniinflitti2;
        contadannisubiti2 = contadanniinflitti1;

        let immagine = `<img id="img1" src="./img/1.png"></img>`;

        let riepilogo = `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="icon" href="./img/icon.png">
            <script src="./script/combattimento.js"></script>
            <script src="script/arene.js" defer></script>
            <link rel="stylesheet" href="./style/classifica.css">
            <title>classifica</title>
        </head>
        <body style="overflow-y: scroll;">
                <nav id="bar">
                <div class="matricola">
                <p class="testomatricola">CODICE PARTITA:</p>
                <span> ${generaMatricola()}</span>
                </div>    
                
                        <img id="logo" src="./img/Brawlhalla logo.png">
        
                <button onclick="home()" id="butt">HOME</button>
                </nav>
        
                <main>
                <div class="classifica">
                    <div class="intestazione">
                        <p class="titolo">STATISTICHE GIOCATORE 1:</p>
                    </div>
                    <div class="contenuto">
                        <div class="riga">
                            <span class="item1">attacchi effettuati:</span><span class="item2">${contaattacco1}</span>
                        </div>
                        <div class="riga">
                            <span class="item1">ultimate utilizzate:</span><span class="item2">${contsuperutilizzate1}</span>
                        </div>                   
                        <div class="riga">
                            <span class="item1">danni inflitti:</span><span class="item2">${contadanniinflitti1}</span>
                        </div> 
                        <div class="riga">
                            <span class="item1">danni ricevuti:</span><span class="item2">${contadannisubiti1}</span>
                        </div>
                    </div>
                </div>
                <div id="vincitore">
                        <p class="testo">IL VINCITORE E:</p>
                        ${immagine}
                        <p id="data">DATA PARTITA:</p>
                        <span>${data}</span>
                </div>
                <div class="classifica">
                    <div class="intestazione">
                        <p class="titolo">STATISTICHE GIOCATORE 2:</p>
                    </div>
                    <div class="contenuto">
                        <div class="riga">
                            <span class="item1">attacchi effettuati:</span><span class="item2">${contaattacco2}</span>
                        </div>
                        <div class="riga">
                            <span class="item1">ultimate utilizzate:</span><span class="item2">${contsuperutilizzate2}</span>
                        </div>                   
                        <div class="riga">
                            <span class="item1">danni inflitti:</span><span class="item2">${contadanniinflitti2}</span>
                        </div> 
                        <div class="riga">
                            <span class="item1">danni ricevuti:</span><span class="item2">${contadannisubiti2}</span>
                        </div>
                    </div>
                </div>
            </main>
        </body>
        </html>`;
        var nuovapagina = window.open("", "_blank");

        nuovapagina.document.write(riepilogo);
    }
})

window.addEventListener('keyup', (event) => {
    if (event.key == "Escape") {
        document.getElementById("btnmenu").click();
    }
})


function generaMatricola() {

    let matricola = "";

    for (let i = 0; i < 6; i++) {

        matricola += Math.floor(Math.random() * 10);
    }

    return matricola;
}

function hitBox1() {
    let v2 = document.getElementById("coloreV2");
    let a1 = document.getElementById("coloreA1");

    let positionBoxR = (document.getElementById("box1").getBoundingClientRect()).right;
    let positionBoxL = (document.getElementById("box1").getBoundingClientRect()).left;
    let positionBoxB = (document.getElementById("box1").getBoundingClientRect()).bottom;
    let positionBoxT = (document.getElementById("box1").getBoundingClientRect()).top;

    let positionPrs2L = (document.getElementById("img2").getBoundingClientRect()).left;
    let positionPrs2T = (document.getElementById("img2").getBoundingClientRect()).top;
    let positionPrs2B = (document.getElementById("img2").getBoundingClientRect()).bottom;
    let positionPrs2R = (document.getElementById("img2").getBoundingClientRect()).right;

    if (positionBoxR >= positionPrs2L && positionBoxL <= positionPrs2R && positionBoxB >= positionPrs2T && positionBoxT <= positionPrs2B && a1.style.width != "0px" && parseInt(v2.style.width) >= 25) {
        v2.style.width = (v2.offsetWidth - 25) + "px";
        a1.style.width = (a1.offsetWidth - 50) + "px";
        ricaricaSup1();
        contaattacco1++;
    }
    else if (parseInt(v2.style.width) < 25) {
        v2.style.width = parseInt(v2.style.width) - parseInt(v2.style.width) + "px";
        contaattacco1++;
    }
}

function hitBox2() {
    let v1 = document.getElementById("coloreV1");
    let a2 = document.getElementById("coloreA2");


    let positionBox2L = (document.getElementById("box2").getBoundingClientRect()).left;
    let positionBox2R = (document.getElementById("box2").getBoundingClientRect()).right;
    let positionBox2T = (document.getElementById("box2").getBoundingClientRect()).top;
    let positionBox2B = (document.getElementById("box2").getBoundingClientRect()).bottom;

    let positionPrs1R = (document.getElementById("img1").getBoundingClientRect()).right;
    let positionPrs1L = (document.getElementById("img1").getBoundingClientRect()).left;
    let positionPrs1T = (document.getElementById("img1").getBoundingClientRect()).top;
    let positionPrs1B = (document.getElementById("img1").getBoundingClientRect()).bottom;

    if (positionBox2L <= positionPrs1R && positionBox2R >= positionPrs1L && positionBox2B >= positionPrs1T && positionBox2T <= positionPrs1B && a2.style.width != "0px" && parseInt(v1.style.width) >= 25) {
        v1.style.width = (v1.offsetWidth - 25) + "px";
        a2.style.width = (a2.offsetWidth - 50) + "px";
        contaattacco2++;
        ricaricaSup2();
    }
    else if (parseInt(v1.style.width) < 25) {
        v1.style.width = parseInt(v1.style.width) - parseInt(v1.style.width) + "px";
        contaattacco2++;
    }
}

function Sup1() {
    let v2 = document.getElementById("coloreV2");
    let s1 = document.getElementById("coloreS1");

    let positionBoxR = (document.getElementById("box1").getBoundingClientRect()).right;
    let positionBoxL = (document.getElementById("box1").getBoundingClientRect()).left;
    let positionBoxB = (document.getElementById("box1").getBoundingClientRect()).bottom;
    let positionBoxT = (document.getElementById("box1").getBoundingClientRect()).top;

    let positionPrs2L = (document.getElementById("img2").getBoundingClientRect()).left;
    let positionPrs2T = (document.getElementById("img2").getBoundingClientRect()).top;
    let positionPrs2B = (document.getElementById("img2").getBoundingClientRect()).bottom;
    let positionPrs2R = (document.getElementById("img2").getBoundingClientRect()).right;

    if (positionBoxR >= positionPrs2L && positionBoxL <= positionPrs2R && positionBoxB >= positionPrs2T && positionBoxT <= positionPrs2B && parseInt(v2.style.width) >= 100) {
        v2.style.width = (v2.offsetWidth - 100) + "px";
        s1.style.width = 0 + "%";
        contsuperutilizzate1++;
    }
    else if (parseInt(v2.style.width) < 100) {
        v2.style.width = parseInt(v2.style.width) - parseInt(v2.style.width) + "px";
        s1.style.width = 0 + "%";
        contsuperutilizzate1++;
    }

}

function Sup2() {
    let v1 = document.getElementById("coloreV1");
    let s2 = document.getElementById("coloreS2");

    let positionBox2L = (document.getElementById("box2").getBoundingClientRect()).left;
    let positionBox2R = (document.getElementById("box2").getBoundingClientRect()).right;
    let positionBox2T = (document.getElementById("box2").getBoundingClientRect()).top;
    let positionBox2B = (document.getElementById("box2").getBoundingClientRect()).bottom;

    let positionPrs1R = (document.getElementById("img1").getBoundingClientRect()).right;
    let positionPrs1L = (document.getElementById("img1").getBoundingClientRect()).left;
    let positionPrs1T = (document.getElementById("img1").getBoundingClientRect()).top;
    let positionPrs1B = (document.getElementById("img1").getBoundingClientRect()).bottom;

    if (positionBox2L <= positionPrs1R && positionBox2R >= positionPrs1L && positionBox2B >= positionPrs1T && positionBox2T <= positionPrs1B && parseInt(v1.style.width) >= 100) {
        v1.style.width = (v1.offsetWidth - 100) + "px";
        s2.style.width = 0 + "%";
        contsuperutilizzate2++;
    }
    else if (parseInt(v1.style.width) < 100) {
        v1.style.width = parseInt(v1.style.width) - parseInt(v1.style.width) + "px";
        s2.style.width = 0 + "%";
        contsuperutilizzate2++;
    }
}

function ricaricaAtt(colore) {
    colore.style.width = (colore.offsetWidth + 50) + "px";
}

function ricaricaSup1() {
    let s1 = document.getElementById("coloreS1");
    if (parseInt(s1.style.width) == 100) {
        clearInterval(istanza1);
    } else {
        let s1 = document.getElementById("coloreS1");
        s1.style.width = parseInt(s1.style.width) + 5 + "%";
    }
}

function ricaricaSup2() {
    let s2 = document.getElementById("coloreS2");
    if (parseInt(s2.style.width) == 100) {
        clearInterval(istanza2);
    } else {
        let s2 = document.getElementById("coloreS2");
        s2.style.width = parseInt(s2.style.width) + 5 + "%";
    }
}

function togli() {
    img1 = document.getElementById("img1").classList.remove("animaz1");
}

function togli2() {
    img2 = document.getElementById("img2").classList.remove("animaz2");
}

function home() {
    window.open("index.html", "_self");
}