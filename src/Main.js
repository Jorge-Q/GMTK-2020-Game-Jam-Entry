let frame = document.getElementById("frame");
let graphics = frame.getContext("2d");
graphics.imageSmoothingEnabled = false;

let background = new Image();
background.src = "./sprites/background.png";

let player = new Player(50, 50, 28, 30);
let gun = new Gun(player.x, player.y, 22, 10);
let mouse = {
    x: 0,
    y: 0,
    pressed: false
};

let enemies = [];
let dogs = [];
let dogSpawner = new DogSpawner();
let spawner = new EnemySpawner(300, 300, 50, 25);

window.onload = ()=>{
    requestAnimationFrame(gameLoop)
}

function gameLoop(){
    update()
    render()
    requestAnimationFrame(gameLoop)
}

function update(){
    spawner.update();
    dogSpawner.update();
    player.update();
    gun.update();
    for(let i = 0; i < enemies.length; i++){
        enemies[i].update()
    }
    for(let i = 0; i < dogs.length; i++){
        dogs[i].update()
    }
}

function render(){
    spawner.render();
    graphics.clearRect(0, 0, frame.width, frame.height);
    graphics.drawImage(background, 0, 0, frame.width, frame.height);
    player.render();
    gun.render();
    for(let i = 0; i < enemies.length; i++){
        enemies[i].render()
    }
    for(let i = 0; i < dogs.length; i++){
        dogs[i].render()
    }
}

// Handle Mouse Input
window.addEventListener("mousemove", (event)=>{
    let canvasBoundingBox = frame.getBoundingClientRect();
    mouse.x = event.clientX - canvasBoundingBox.left;
    mouse.y = event.clientY - canvasBoundingBox.top;
});

window.addEventListener("mousedown", (event)=>{
    mouse.pressed = true;
    player.shoot();
});

window.addEventListener("mouseup", (event)=>{
    mouse.pressed = false;
});