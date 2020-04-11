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

//load audio files

const dead = new Audio();
const eat = new Audio();
const up = new Audio();
const down = new Audio();
const left = new Audio();
const right = new Audio();

dead.src = "audio/dead.mp3";
eat.src = "audio/eat.mp3";
up.src = "audio/up.mp3";
down.src = "audio/down.mp3";
left.src = "audio/left.mp3";
right.src = "audio/right.mp3";

//control the snake

let d; 

document.addEventListener("keydown",direction);

function direction (event)
{
    if(event.keyCode==37 && d!= "RIGHT"){
        d = "LEFT";
        left.play();
    }else if(event.keyCode==38 && d!= "DOWN"){
        d = "UP";
        down.play();
    }else if(event.keyCode==39 && d!= "LEFT"){
        d = "RIGHT";
        right.play();
    }else if(event.keyCode==40 && d!= "UP"){
        d = "DOWN";
        down.play();
    }
}

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

    //old head position

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    

    //which direction

    if(d == "LEFT") snakeX -= box;
    if(d == "UP") snakeY -= box;
    if(d == "RIGHT") snakeX += box;
    if(d == "DOWN") snakeY += box;

    //if snake eats food
    if(snakeX==food.x && snakeY==food.y){
        score++;
        food = {
            x : Math.floor(Math.random()*17+1)*box,        //Math.random() function is used to create random positions of food
            y : Math.floor(Math.random()*15+3)*box
        }
        eat.play();
        //we don't remove the tail
    }else{
        //remove tail

        snake.pop();
    }

    //add new head
    let newHead = {
        x : snakeX,
        y : snakeY
    }

    //create a new function collision

    function collision(head,array){
        for(let i = 0; i < array.length ; i++){
            if(head.x == array[i].x && head.y == array[i].y){
                return true;
            }
        }
        return false;
    }

    //game over rules
    if(snakeX < box || snakeX > 17*box || snakeY < 3*box ||snakeY > 17*box||collision(newHead,snake)){
        clearInterval(game);
        dead.play();
    }

    snake.unshift(newHead);
    ctx.fillStyle = "white";
    ctx.font = "45 px Changa One";     //Changa One is font style //this line not working
    ctx.fillText(score,2*box,1.6*box);
}

//call the draw function every 150ms

let game = setInterval(draw,150);