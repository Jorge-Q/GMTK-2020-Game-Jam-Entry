let frame = document.getElementById("frame");
let graphic = frame.getContext("2d");

let sprite = new Image();
sprite.src = "./sprites/mario.png";

let x = 0;
let x_speed = 10;

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
    if(x > frame.width){
        x_speed = -x_speed;
    }
}

function render(){
    graphic.clearRect(0, 0, frame.width, frame.height);
    graphic.drawImage(sprite, x, 100, 20, 20);
}
