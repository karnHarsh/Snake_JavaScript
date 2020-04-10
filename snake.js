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

//create the snake
//snake is an array

let snake =[];
snake[0] = {
    x : 9*box,
    y : 10*box
}

//create the food
//food is an object with x and y positions

let food = {
    x = Math.floor(Math.random()*17+1)*box,        //Math.random() function is used to create random positions of food
    y = Math.floor(Math.random()*15+3)*box
}

