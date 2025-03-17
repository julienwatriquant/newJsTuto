// ------------- Ajout de style au DOM ------------------------------
let titre = document.querySelector("h1");
console.log(titre);

titre.style.backgroundColor = "aqua";

let p  = document.querySelector("p").className = "paragraphe";

// ------------------ Les evenements ---------------------------

let a = document.querySelector("a");
console.log(a);

a.addEventListener("click" , () =>{
    let b = confirm("Souhaitez vous réellement supprimer votre dossier");
    
});

a.addEventListener("mouseover", () =>{
  //  console.log('click !!!');
  document.body.style.backgroundColor = "orange";
    
})

a.addEventListener("mouseout", () =>{
    //  console.log('click !!!');
    document.body.style.backgroundColor = "green";
      
  })