class Enemy extends Entity{

    constructor(x, y, width, height){
        super(x, y, width, height);
        this.sprite = new Image();
        this.sprite.src = "./sprites/mario.png";
    }

    update(){
        super.update();
        let angle = -Math.atan2(player.y - player.height - this.y, player.x - player.width - this.x);
        this.xVelocity = Math.cos(angle) * 1;
        this.yVelocity = -Math.sin(angle) * 1;
    }
}