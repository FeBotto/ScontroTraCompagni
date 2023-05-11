//ARMADIETTO
function init(){
    caricaImg();
    caricaWeap()
    caricaBar();
}

function cerca(event){
    let card = document.querySelectorAll(".card");
    let immagine = ``;

    for(let i = 0; i<personaggi.length; i++){
        if(personaggi[i].toLocaleLowerCase().includes(event.srcElement.value.toLowerCase())){
            immagine += `<img class="card" src="./img/c${i+1}.png" title="${personaggi[i]}">`
        }
    }
    document.getElementById("characters").innerHTML = immagine;
}

function caricaImg(){
    let div = ``;
    
    for(let i = 0; i < personaggi.length; i++){
        div += `<img class="card" src="./img/c${i+1}.png" title="${personaggi[i]}">`
    }
    document.getElementById("characters").innerHTML = div;
}

function caricaWeap(){
    let div = ``;
    
    for(let i = 0; i < weapons.length; i++){
        div += `<img src="./img/weap${i+1}.png" title="${weapons[i]}">`
    }
    document.getElementById("weapons").innerHTML = div;
}

//INDEX
function show(){
    document.getElementById("nav1").style.display = "flex";
    document.getElementById("nav2").style.display = "flex";
}

function gioca(){
    window.open("arene.html", "_self"); 
}

function armadietto(){
    window.open("armadietto.html", "_self");
}

function informazioni(){
    window.open("regole.html", "_self");
}