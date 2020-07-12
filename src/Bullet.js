class Bullet extends Entity{

    constructor(x, y, width, height){
        super(x, y, width, height);
        this.sprite = new Image();
        this.sprite.src = "./sprites/bullet.png";
        this.xVelocity = Math.cos(player.angle) * 10;
        this.yVelocity = Math.sin(player.angle) * 10;
    }

    update(){
        super.update();
        if(this.x > frame.width || this.x < 0 || this.y > frame.height || this.y < 0){
            player.currentGun.bullets.splice(this, 1);
        }
    }
}