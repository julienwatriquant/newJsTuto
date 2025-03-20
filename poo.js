let titre = document.querySelector("h1");
console.log(titre);

let cssTitre = document.querySelector("h1").className = "cssTitre";
console.log(cssTitre);

let but = document.querySelector("button");
console.log(but);

but.addEventListener("click" , () =>{
   // console.log("click !!!");
    let p = document.body.style.backgroundColor = "aqua";
    let o = titre.style.color = "orange";
})

//--------------------- POO programmation orienté objet-----------------------------

// La methode constructor

function Acteur(prenom,nom,age){
    this.prenom = prenom;
    this.nom = nom;
    this.age = age;
    this.sePresenter = () =>{
        console.log("bonjour je m'appelle " + this.prenom + ' '+ this.nom);
        
    }
}
let alain = new Acteur("alain","gebert",56);
console.log(alain);

alain.sePresenter();

let ludo = new Acteur("lulu","catagnette",32);
ludo.sePresenter();

function voiture(marque,modele,annee){
    this.marque = marque;
    this.modele = modele;
    this.annee = annee;
    this.presentation = () =>{
        console.log("la marque est  " + this.marque + ", le modele est une  " + this.modele + " année  " + this.annee);
        
    }
}

let car = new voiture("renault","megane", 2003);
let car2 = new voiture("bmw","serie 3 m",2021);
car.presentation();
car2.presentation();

function pilote(nom,prenom,ecurie){
    this.nom = nom;
    this.prenom = prenom;
    this.ecurie = ecurie;
}

let driver = new pilote("senna","ayrton",car);
console.log(driver);


function fruit(nom,provenance,prix){
    this.nom = nom;
    this.provenance = provenance;
    this.prix = prix;
    this.voir = () =>{
        console.log(this.nom + " venant de "+ this.provenance+" et le prix est de "+this.prix);
        
    }

}
let fruit1 = new fruit("fraise","maroc",5 +" €uros");
fruit1.voir();

//------------------------------ Les classes-----------------------------------
// la convention veut que le mot clé commence toujours par une majuscule

class Personne{
    constructor(prenom,nom,age){
        this.prenom = prenom;
        this.nom = nom;
        this.age = age;
        }
    sePresenter(){
        console.log("bonjour je m'appelle " + this.prenom + ' '+ this.nom+" et mon age est "+this.age);
        
    }
}
let juju = new Personne("julien","wat",32 +" ans");
juju.sePresenter();

//------------------------------------Les héritages-----------------------------------------

class Animal{
    constructor(nbPattes,poids){
        this.nbPattes = nbPattes;
        this.poids  = poids;
        this.presentation = () =>{
            console.log("un animal a " +this.nbPattes+" pattes et qui pese "+ this.poids+" kgs");
            
        }
    }

}
let vache = new Animal(4,250);
vache.presentation();

class Oiseau extends Animal{
    constructor(nbPattes,poids,longeurAiles){
        super(nbPattes,poids);
        this.longeurAiles = longeurAiles;
    }
    voler(){
        console.log("avec une poids de "+ this.poids +" kg et une envergure d'ailes "+this.longeurAiles+" cet oiseau volle tres haut !");
        
    }
}
let aigleRoyal = new Oiseau(2,5,2);
aigleRoyal.voler();

class sanglier extends Oiseau{
    constructor(nbPattes,poids,region,nom){
        super(nbPattes,poids);
        this.region = region;
        this.nom = nom;
    }
    description(){
        console.log("avec "+ this.nbPattes +" pattes cet animal pese "+ this.poids +" kg et vient de la region de "+ this.region +" , c'est un "+ this.nom +" .");
        
    }
}

let chevreuil = new sanglier(4,80,"picardie","sanglier");
chevreuil.description();