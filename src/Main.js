let frame = document.getElementById("frame");
let graphic = frame.getContext("2d");


window.onload = ()=>{
    requestAnimationFrame(gameLoop)
}

function gameLoop(){

    update()
    render()
    requestAnimationFrame(gameLoop)
}

function update(){
    console.log("update")
}

function render(){
    console.log("render")
}
