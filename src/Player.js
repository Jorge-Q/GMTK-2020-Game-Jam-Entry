class Player extends Entity{

    constructor(x, y, width, height){
        super(x, y, width, height);
        this.sprite = new Image();
        this.sprite.src = "./sprites/bald_orange.png";
    }

    update(){
        super.update();
    }

    shoot(){
        let angle = Math.atan2(mouse.y - (this.y - this.height / 2), mouse.x - (this.x - this.width / 2));
        this.xVelocity = -Math.cos(angle) * 20;
        this.yVelocity = -Math.sin(angle) * 20;
    }
}