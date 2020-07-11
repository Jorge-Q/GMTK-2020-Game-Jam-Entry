class Bullet extends Entity{

    constructor(x, y, width, height){
        super(x, y, width, height);
        this.sprite = new Image();
        this.sprite.src = "./sprites/mario.png";
        this.xVelocity = Math.cos(player.angle) * 20;
        this.yVelocity = Math.sin(player.angle) * 20;
    }
}