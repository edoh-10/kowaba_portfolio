// code pour le menu

const Menu = document.getElementById("menu");
const Nave = document.getElementById("nave");
const Close = document.getElementById("close");
Menu.addEventListener('click', naveAnime);
Menu.addEventListener('click', closeButon);
Menu.addEventListener('click', () => {
    Menu.style.display = "none";
});
Close.addEventListener('click', openButon);
Close.addEventListener('click', naveAnime);
Close.addEventListener('click', ()=>{
    Close.style.display = "none";
});



function naveAnime(){
    if(Nave.style.display === "block"){
        Nave.style.display = "none";
    }else{
        Nave.style.display = "block";
    }
}

function closeButon(){
    if(Close.style.display === "block"){
        Close.style.display = "none";
    }else{
        Close.style.display = "block";
    }
}

function openButon(){
    if(Menu.style.display === "block"){
        Menu.style.display = "none";
    }else{
        Menu.style.display = "block";
    }
}

// code pour le menu2 images

const Arts = document.getElementById("ul2_a1");
const Graphique = document.getElementById("ul2_a2");
const Sérigraphie = document.getElementById("ul2_a3");
const Photographie = document.getElementById("ul2_a4");
Arts.addEventListener('click', afficheDivArts);
Graphique.addEventListener('click', afficheDivGraphique);
Sérigraphie.addEventListener('click', afficheDivSérigraphie);
Photographie.addEventListener('click', afficheDivPhotographie);

// ----------------------------------

const divArts = document.getElementById("arts");
const divGraphique = document.getElementById("graphique");
const divSérigraphie = document.getElementById("sérigraphie");
const divPhotographie = document.getElementById("photographie");




function afficheDivArts(){
    divArts.style.display = "block";
    divGraphique.style.display = "none"
    divSérigraphie.style.display = "none";
    divPhotographie.style.display = "none";
    Arts.style.color = "#FFF";
    Graphique.style.color = "#868282c2";
    Sérigraphie.style.color = "#868282c2";
    Photographie.style.color = "#868282c2";
}

function afficheDivGraphique(){
    divGraphique.style.display = "block"
    divArts.style.display = "none";
    divSérigraphie.style.display = "none";
    divPhotographie.style.display = "none";
    Graphique.style.color = "#FFF";
    Arts.style.color = "#868282c2";
    Sérigraphie.style.color = "#868282c2";
    Photographie.style.color = "#868282c2";
}

function afficheDivSérigraphie(){
    divSérigraphie.style.display = "block"
    divArts.style.display = "none";
    divGraphique.style.display = "none";
    divPhotographie.style.display = "none";
    Sérigraphie.style.color = "#FFF";
    Arts.style.color = "#868282c2";
    Graphique.style.color = "#868282c2";
    Photographie.style.color = "#868282c2";
}

function afficheDivPhotographie(){
    divPhotographie.style.display = "block"
    divArts.style.display = "none";
    divSérigraphie.style.display = "none";
    divGraphique.style.display = "none";
    Photographie.style.color = "#FFF";
    Arts.style.color = "#868282c2";
    Sérigraphie.style.color = "#868282c2";
    Graphique.style.color = "#868282c2";
}
