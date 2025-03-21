let url = "https://geo.api.gouv.fr/communes?codePostal=";
let codePostal = prompt("veuillez saisir un code posatal");

url += codePostal;

let requete = new XMLHttpRequest();

requete.open("GET",url);
requete.responseType  = "json";
requete.send();
console.log(requete);

requete.onload = function(){
    if(requete.readyState === XMLHttpRequest.DONE){
        if(requete.status === 200){
            let reponse = requete.response;
            console.log(reponse);
            
           for(let data of reponse){
            console.log(data.nom);
            
           // console.log(data.nom + " est une ville de "+data.population+ " d'habitants.");
            
           }
            
        }else{
            alert("un probleme est survenu, merci de revenir plus tard");
        }
    }
}

let url2 = "https://geo.api.gouv.fr/departements/";
let codePostal2 = prompt("choisissez un département");
url2 += codePostal2;

let requete2 = new XMLHttpRequest;
requete2.open("GET",url2);
requete2.responseType = "json";
requete2.send();
console.log(requete2);

requete2.onload = function (){
    if(requete2.readyState === XMLHttpRequest.DONE){
        if(requete2.status === 200){
            let reponse2 = requete2.response;
            console.log(reponse2);
           for(data1 of reponse2){
            console.log(data1);
            
           }
            
        }
    }else{
        alert("un probleme est survenu");
    }
}

let url3 = "https://geo.api.gouv.fr/communes?codePostal=";
let codePostal3 = prompt("saisissez un code postal svp");
url3 += codePostal3;

fetch(url3)
    .then(response => response.json())
    .then(data => { 
        console.log(data);
        for( ville of data){
           
            
           console.log(ville.nom + " est une ville de "+ville.population+" habitants");
            
        }
    })
        .catch((err => alert("erreur 404")));