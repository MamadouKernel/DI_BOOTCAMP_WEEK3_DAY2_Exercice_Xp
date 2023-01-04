/**
 * @author: Konate Mamadou
 * @Exercice1: Change The Article
 * 5 questions
 * 2 bonus
 */

//1.Pour récupérer le h1 et console.log :

let h1 = document.querySelector("h1");
console.log(h1);

//2.Pour supprimer le dernier paragraphe de la balise article :

let article = document.querySelector("article");
let lastP = article.lastElementChild;
article.removeChild(lastP);

//3.Pour ajouter un écouteur d'événement qui change la couleur d'arrière-plan du h2 en rouge lorsqu'il est cliqué :

let h2 = document.querySelector("h2");
h2.addEventListener("click", function() {
    h2.style.backgroundColor = "red";
});

//4.Pour ajouter un écouteur d'événement qui masque le h3 lorsqu'il est cliqué :

let h3 = document.querySelector("h3");
h3.addEventListener("click", function() {
    h3.style.display = "none";
});

//5.Pour ajouter un bouton qui met le texte de tous les paragraphes en gras :

let button = document.createElement("button");
button.innerHTML = "Mettre en gras";
document.body.appendChild(button);

button.addEventListener("click", function() {
    let ps = document.querySelectorAll("p");
    for (let p of ps) {
        p.style.fontWeight = "bold";
    }
});

//BONUS 1 : Pour définir la taille de la police sur une taille de pixel aléatoire comprise entre 0 et 100 lorsque vous survolez le h1 :

h1.addEventListener("mouseover", function() {
    let size = Math.floor(Math.random() * 101);
    h1.style.fontSize = size + "px";
});

//BONUS : Pour faire disparaître le 2e paragraphe lorsque vous survolez :

let p2 = document.querySelector("article > p:nth-child(2)");
p2.style.transition = "opacity 1s";

p2.addEventListener("mouseover", function() {
    p2.style.opacity = "0";
});

p2.addEventListener("mouseout", function() {
    p2.style.opacity = "1";
});


