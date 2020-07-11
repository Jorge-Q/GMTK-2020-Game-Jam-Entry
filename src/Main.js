let frame = document.getElementById("frame");
let graphics = frame.getContext("2d");
graphics.imageSmoothingEnabled = false;

let player = new Player(0, 0, 50, 50);

let mouse = {
    x: 0,
    y: 0,
    pressed: false
};

window.onload = ()=>{
    requestAnimationFrame(gameLoop)
}

function gameLoop(){
    update()
    render()
    requestAnimationFrame(gameLoop)
}

function update(){
    player.update();
}

function render(){
    graphics.clearRect(0, 0, frame.width, frame.height);
    player.render()
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