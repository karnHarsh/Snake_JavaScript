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
    x : Math.floor(Math.random()*17+1)*box,        //Math.random() function is used to create random positions of food
    y : Math.floor(Math.random()*15+3)*box
}

// create score vairable

let score = 0;

// function to draw everything to the canvas

function draw(){
    ctx.drawImage(ground,0,0);

    //loop to draw the complete snake
    for(let i = 0; i < snake.length; i++){
        ctx.fillStyle = (i==0) ? "green" : "white";
        ctx.fillRect(snake[i].x,snake[i].y,box,box);

        ctx.strokeStyle = "red";
        ctx.strokeRect(snake[i].x,snake[i].y,box,box);
    }

    ctx.drawImage(foodImage, food.x, food.y);   //food variable declared already in line 29
}

//call the draw function every 100ms

let game = setInterval(draw,100);

