class Enemy extends Entity{

    constructor(id, x, y, width, height){
        super(x, y, width, height);
        this.id = id;
        this.sprite = new Image();
        this.sprite.src = "./sprites/alien1.png";
    }

    update(){
        super.update();
        let angle = -Math.atan2(player.y - this.y, player.x - this.x);
        this.xVelocity = Math.cos(angle) * .75;
        this.yVelocity = -Math.sin(angle) * .75;
        this.checkBulletCollision();
        this.checkPlayercollision();
    }

    checkBulletCollision(){
        for(let i = 0; i < player.bullets.length; i++){
            if(this.x < player.bullets[i].x + player.bullets[i].width &&
                this.x + this.width > player.bullets[i].x &&
                this.y < player.bullets[i].y + player.bullets[i].height &&
                this.y + this.height > player.bullets[i].y){
                let index = enemies.findIndex(element => element.id == this.id);
                enemies.splice(index, 1);
                player.bullets.splice(i, 1);
                score += 10;
            }
        }
    }

    checkPlayercollision(){
        if(this.x < player.x + player.width &&
            this.x + this.width > player.x &&
            this.y < player.y + player.height &&
            this.y + this.height > player.y){
            health.currentHealth -= 1;
            let index = enemies.findIndex(element => element.id == this.id);
            enemies.splice(index, 1);
        }
    }
}