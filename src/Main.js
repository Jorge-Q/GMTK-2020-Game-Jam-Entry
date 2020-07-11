let frame = document.getElementById("frame");
let graphics = frame.getContext("2d");
graphics.imageSmoothingEnabled = false;

let background = new Image();
background.src = "./sprites/background.png";

let player = new Player(200, 200, 28, 30);
let health = new Health(20, 20, 30, 24);

let gun = new Gun(player.x, player.y, 22, 10);
let mouse = {
    x: 0,
    y: 0
};

let enemies = [];
let dogs = [];
let dogSpawner = new DogSpawner();
let spawners = [];

let score = 0;

window.onload = ()=>{
    spawners.push(new EnemySpawner(40, 60, 60, 40));
    spawners.push(new EnemySpawner(frame.width - 70, 60, 60, 40));
    spawners.push(new EnemySpawner(frame.width - 70, frame.height - 70, 60, 40));
    setInterval(()=>{
        update();
        render();
    }, 1000 / 60);
}

function update(){
    spawners.forEach(spawn => spawn.update());
    dogSpawner.update();
    player.update();
    gun.update();

    enemies.forEach(enemy => enemy.update());
    dogs.forEach(dog => dog.update());
}

function render(){
    graphics.clearRect(0, 0, frame.width, frame.height);
    graphics.drawImage(background, 0, 0, frame.width, frame.height);
    player.render();
    gun.render();
    enemies.forEach(enemy => enemy.render());
    dogs.forEach(dog => dog.render());
    spawners.forEach(spawn => spawn.render());
    health.render();
    drawScore();
}

function drawScore(){
	graphics.font = "32px pixel";
	graphics.fillStyle = "white";
	graphics.fillText(score.toString(), frame.width - 80, 40);
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