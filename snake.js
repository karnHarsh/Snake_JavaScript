const cvs = document.getElementById("snake"); //retrieving canvas from index.html recognised by id "snake"
const ctx = cvs.getContext("2d"); //ctx is context

//create the  unit
//unit means one square unit of canvas

const box = 32; 


//load images

const ground = new Image(); //ground is an object of Image() class
ground.src = "img/ground.png";

const foodImage = new Image(); //foodImage is an object of Image() class
foodImage.src = "img/food.png";