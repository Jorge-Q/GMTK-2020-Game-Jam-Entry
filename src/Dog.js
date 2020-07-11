class Dog extends Entity{

    constructor(x, y, width, height, xVelocity, yVelocity){
        super(x, y, width, height);
        this.sprite = new Image();
        this.sprite.src = "./sprites/dog1.png";
        this.xVelocity = xVelocity;
        this.yVelocity = yVelocity;
    }

    update(){
        this.checkBulletCollision();
        super.update();
    }

    checkBulletCollision(){
        for(let i = 0; i < player.bullets.length; i++){
            if(this.x < player.bullets[i].x + player.bullets[i].width &&
                this.x + this.width > player.bullets[i].x &&
                this.y < player.bullets[i].y + player.bullets[i].height &&
                this.y + this.height > player.bullets[i].y){
                dogs.splice(this, 1);
                player.bullets.splice(i, 1);
            }
        }
    }
}
