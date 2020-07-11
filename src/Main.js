let frame = document.getElementById("frame");
let graphics = frame.getContext("2d");
graphics.imageSmoothingEnabled = false;

let sprite = new Image();
sprite.src = "./sprites/mario.png";

let x = 0;
let x_speed = 5;
let y = 0;
let y_speed = 10;

let player = new Player(100, 100, 50, 50);

let mouse = {
    x: 0,
    y: 0,
    pressed: false
}

window.onload = ()=>{
    requestAnimationFrame(gameLoop)
}

function gameLoop(){
    update()
    render()
    requestAnimationFrame(gameLoop)
}

function update(){
    x += x_speed;
    y += y_speed;
    if(x > frame.width){
        x_speed = -x_speed;
    }
    if(x < 0){
        x_speed = -x_speed;
    }
    if(y > frame.width){
        y_speed = -y_speed;
    }
    if(y < 0){
        y_speed = -y_speed;
    }
    player.update();
    // console.log(mouse)
}

// Handle Mouse Input
frame.addEventListener("mousemove", (event)=>{
    let canvasBoundingBox = frame.getBoundingClientRect();
    mouse.x = event.clientX - canvasBoundingBox.left;
    mouse.y = event.clientY - canvasBoundingBox.top;
});

frame.addEventListener("mousedown", (event)=>{
    mouse.pressed = true;
    player.shoot();
});

frame.addEventListener("mouseup", (event)=>{
    mouse.pressed = false;
});

function render(){
    graphics.clearRect(0, 0, frame.width, frame.height);
    graphics.drawImage(sprite, x, y, 20, 20);
    player.render()
}