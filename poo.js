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