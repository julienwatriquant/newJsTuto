// déclaration de variable et affectation des valeurs  

let nombre = 12;
let nombre1 = 1;
nombre += nombre1;
// console.log(nombre);

// déclaration d'une constante avec comme valeur un tableau array 
const tab = ["avoine","blé"];
console.log(tab);

// if(nombre < 18){
//     confirm("veuillez sortir du site vous n'etes pas majeur");
// }else{
//     alert("bienvenue");
// }

let prenom = "";

prenom = prompt("veuillez saisir votre prenom");// prompt envoie une boite de dialogue avec comme message de saisir mon prenom
console.log(prenom);

let nombre2 = 89;
let texte = nombre2.toString();// toString() permet de convertir un entier en chaine de caracteres(string)
console.log(nombre2);

console.log(texte);

let nombre3 = "45 voitures"; // parseInt permet de recuperer le chiffre (integer)
let texte2 = parseInt(nombre3);
console.log(texte2);

let nombre4 = "45.66 grammes";
let texte3 = parseFloat(nombre4);// float permet de recuperer un chiffre à virgule
console.log(texte3);

let  texte4 = "bonjour tout lemonde !!";// permet de compter la chaine de caracteres
console.log(texte4.length);

//-----------------------------------------------------------------------------------------------  Creation de fonction
let doc1 = document.querySelector(".container-fluid");
    
function direBonjour(){
    let message = "bonjour les copains";
    console.log(message);
  }
direBonjour();  

function multiplication(number1,number2){
  let resultat = number1 * number2;
  console.log(resultat);
  
}
multiplication(5,15);

let fruit = "courgette";
switch(fruit){
    case "orange" : 
    console.log("je mange une orange");
    break;

    case "kiwi" :
        console.log("je mange un kiwi");
        break;

    case "raisin" : 
        console.log("je mange du raisin");
        break;
        
    default : 
    console.log("je ne mange pas de fruit");
}        
    //----------------Les boucles-------------------
    let i = 1;
    while(i <= 5){
        console.log("ligne : " + i);
        i++;
    }

    do {
        console.log("j'execute au moins une fois");
        

    }while(false);

    for(i = 0; i <= 10;i++){
        console.log("page : " + i);
    }    
    //-----------------Les tableaux---------------------------
    let monTableau = [1,5,10];
    let monTableau1 = ["un","deux","trois"];
    console.log(monTableau1[1]);// resultat affiche deux
    let acteur = [["alain","denis","robert"],
    ["delon","boon","depardieu"],
    ];
    console.log(acteur[0][2]); // affiche robert 0 pour le premier tableau et 2 pour arriver a robert
    
    acteur.push("gigi");
    console.log(acteur[2]);

    let panier = ["pomme","banane","kiwi","poire"];
    for(let fruit of panier){
        console.log(panier);
        
    }
    // gerer les erreurs
    try{
        console.log(hello);
    }catch(error){
        console.log("La variable n'est pas déclaré");
    }    
    
    try{
        let panier2  = prompt("choisissez un fruit : banane , framboise ou pomme");
        let calories;
        switch(panier2){
            case "banane" :
                calories = 89;
            break;
            case "framboise" :
                calories = 54;
            break;
            case "pomme" :
                calories = 52;
            break;
            default : 
            throw new Error("ce fruit ne semble pas dans la liste..");
        }
        alert("vous avez choisi : " + panier2 + ' '+ calories + " calories");
    }catch(error){
        alert(error);
    }
    
    //----------------Le DOM document Object Model-------------------------------
    let titre = document.querySelector(".titre");
    console.log(titre);
    titre.style.backgroundColor = "yellow"; // ajout direct de style sur le titre

    titre.append('pour débutant  '); // la fonction append() permet de rajouter du texte apres au titre

    titre.prepend('  1'); // la fonction prepend() permet de rajouter du texte avant le titre

    

    let p = document.querySelectorAll("p");// nous pointons sur les balises <p>
    console.log(p);// les balises <p> ont un index
    
    p[0].innerHTML = `nouveau paragraphe<strong> en html</strong>`;// nous pointons sur le premier paragraphe avec l'index [0] puis avec la propriété innerHtml nous injectons du texte et du html

    p[1].innerHTML = `nouveau deuxieme paraphe<em> html</em>`;
    p[1].style.color = 'blue'; // injection direct de css
    p[1].remove();// permet de supprimer un élément
    let div = document.createElement("div");
    div.textContent = "création de div";
    document.body.append(div);

