let frame = document.getElementById("frame");
let graphics = frame.getContext("2d");
graphics.imageSmoothingEnabled = false;

let background = new Image();
background.src = "./sprites/background.png";

let gameOver = new Image();
gameOver.src = "./sprites/GameOver.png";

let darkScreen = new Image();
darkScreen.src = "./sprites/dark_screen.png";

var snd = new Audio("./sounds/main_theme.wav");

let player;
let health;
let pedestal;
let gun;
let mouse = {
    x: 0,
    y: 0
};

let enemies;
let dogs;
let hearts;
let heartSpawner;
let dogSpawner;
let spawners;

let score;
let playing;

window.onload = ()=>{
    onCreate();
    setInterval(()=>{
        update();
        render();
    }, 1000 / 60);
}

function onCreate(){
    snd.loop = true;
    snd.volume = 0.2;
    snd.play();
    player = new Player(200, 200, 28, 30);
    health = new Health(20, 20, 30, 24);
    pedestal = new Pedestal(frame.width / 2 - 13, frame.height / 2 - 8, 26, 16);
    dogSpawner = new DogSpawner();
    hearts = [];
    healthSpawner = new HealthSpawner();
    score = 0;
    enemies = [];
    dogs = [];
    spawners = [];
    spawners.push(new EnemySpawner(40, 60, 60, 40));
    spawners.push(new EnemySpawner(frame.width - 70, 60, 60, 40));
    spawners.push(new EnemySpawner(frame.width - 70, frame.height - 70, 60, 40));
    playing = true;
}

function update(){
    if(playing){
        spawners.forEach(spawn => spawn.update());
        dogSpawner.update();
        player.update();
        health.update();
        healthSpawner.update();
        pedestal.update();
        enemies.forEach(enemy => enemy.update());
        hearts.forEach(heart => heart.update());
        dogs.forEach(dog => dog.update());
    }
}

function render(){
    graphics.clearRect(0, 0, frame.width, frame.height);
    graphics.drawImage(background, 0, 0, frame.width, frame.height);
    pedestal.render();
    player.render();
    enemies.forEach(enemy => enemy.render());
    hearts.forEach(heart => heart.render());
    dogs.forEach(dog => dog.render());
    spawners.forEach(spawn => spawn.render());
    health.render();
    drawText(score.toString(), frame.width - 80, 40, 32);
    if(!playing){
        graphics.drawImage(darkScreen, 0, 0, frame.width, frame.height);
        graphics.drawImage(gameOver, 0, 0, frame.width, frame.height);
        drawText("CLICK TO PLAY AGAIN", frame.width / 2 - 100, frame.height / 2);
        drawText("SCORE: " + score.toString(), frame.width / 2 - 40, frame.height / 2 + 50);
    }
}

function drawText(text, x, y, size){
	graphics.font = size + "px pixel";
	graphics.fillStyle = "white";
	graphics.fillText(text, x, y);
}

 function getId(){
    let uniqueId = (new Date()).getTime();
    return ('id') + (uniqueId++) + (Math.random() * 1000);
}

// Handle Mouse Input
window.addEventListener("mousemove", (event)=>{
    let canvasBoundingBox = frame.getBoundingClientRect();
    mouse.x = event.clientX - canvasBoundingBox.left;
    mouse.y = event.clientY - canvasBoundingBox.top;
});

window.addEventListener("click", (event)=>{
    if(!playing){
        onCreate();
    }
});