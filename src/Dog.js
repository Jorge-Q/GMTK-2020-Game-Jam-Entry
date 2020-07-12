class Dog extends Entity{

    constructor(id, x, y, width, height, xVelocity, yVelocity){
        super(x, y, width, height);
        this.id = id;
        this.sprite = new Image();
        this.sprite.src = "./sprites/dog1.png";
        this.xVelocity = xVelocity;
        this.yVelocity = yVelocity;
    }

    update(){
        super.update();
        if(this.x > frame.width + 50 || this.x < -50 || this.y > frame.height + 50 || this.y < -50){
            dogs.splice(this, 1);
        }
        //this.checkBulletCollision();
    }

    checkBulletCollision(){
        for(let i = 0; i < player.bullets.length; i++){
            if(this.x < player.bullets[i].x + player.bullets[i].width &&
                this.x + this.width > player.bullets[i].x &&
                this.y < player.bullets[i].y + player.bullets[i].height &&
                this.y + this.height > player.bullets[i].y){
                health.currentHealth -= 1;
                let index = dogs.findIndex(element => element.id == this.id);
                dogs.splice(index, 1);
                player.bullets.splice(i, 1);
                score -= 5;
            }
        }
    }
}
