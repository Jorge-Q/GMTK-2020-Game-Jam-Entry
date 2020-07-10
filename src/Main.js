let frame = document.getElementById("frame");
let graphic = frame.getContext("2d");

let sprite = new Image();
sprite.src = "./sprites/mario.png";

let x = 0;
let x_speed = 10;
let y = 0;
let y_speed = 10;

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
}

function render(){
    graphic.clearRect(0, 0, frame.width, frame.height);
    graphic.drawImage(sprite, x, 100, 20, 20);
}
