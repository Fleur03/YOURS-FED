/*Hamburgermenu var aanmaken*/
var Hamburger = document.querySelector("button")
var Navigatie = document.querySelector("nav")
var Menuimg = document.querySelector("header button img")



/*Hamburgermenu uitklappen*/
Hamburger.onclick =function () {
Navigatie.classList.toggle("menuopen");



/*Hamburger symbol veranderden naar kruis symbol*/
if 
(Navigatie.classList.contains ("menuopen")) {
 Menuimg.src="images/delete.png"}
    
else{
Menuimg.src = "images/hamburgermenu.svg"}
}



/*console log*/  
console.log("pressed")