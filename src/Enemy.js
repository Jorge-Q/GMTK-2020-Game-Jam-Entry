class Enemy extends Entity{

    constructor(x, y, width, height){
        super(x, y, width, height);
        this.sprite = new Image();
        this.sprite.src = "./sprites/mario.png";
    }

    update(){
        super.update();
        let angle = -Math.atan2(player.y - player.height - this.y, player.x - player.width - this.x);
        this.xVelocity = Math.cos(angle) * .75;
        this.yVelocity = -Math.sin(angle) * .75;
        this.checkBulletCollision();
    }

    checkBulletCollision(){
        for(let i = 0; i < player.bullets.length; i++){
            if(this.x < player.bullets[i].x + player.bullets[i].width &&
                this.x + this.width > player.bullets[i].x &&
                this.y < player.bullets[i].y + player.bullets[i].height &&
                this.y + this.height > player.bullets[i].y){
                enemies.splice(this, 1);
                player.bullets.splice(i, 1);
            }
        }
    }
}