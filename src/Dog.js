class Dog extends Entity{

    constructor(id, x, y, width, height, xVelocity, yVelocity){
        super(x, y, width, height);
        this.id = id;
        this.xVelocity = xVelocity;
        this.yVelocity = yVelocity;

        this.framesR = [];
        this.framesR.push(new Image());
        this.framesR[0].src = "./sprites/dog1.png";
        this.framesR.push(new Image());
        this.framesR[1].src = "./sprites/dog2.png";

        this.framesL = [];
        this.framesL.push(new Image());
        this.framesL[0].src = "./sprites/dog1_L.png";
        this.framesL.push(new Image());
        this.framesL[1].src = "./sprites/dog2_L.png";

        this.direction = "RIGHT";
        this.animationTimer = 0;
        this.animationIndex = 0;
    }

    update(){
        super.update();
        if(this.x > frame.width + 50 || this.x < -50 || this.y > frame.height + 50 || this.y < -50){
            let index = dogs.findIndex(element => element.id == this.id);
            dogs.splice(index, 1);
        }
        this.checkBulletCollision();
        this.updateDirection();
        if(this.animationTimer >= 10){
            this.animationIndex = (this.animationIndex + 1) % 2;
            this.animationTimer = 0;
        }
        this.animationTimer ++;
    }

    checkBulletCollision(){
        for(let i = 0; i < player.currentGun.bullets.length; i++){
            if(this.x < player.currentGun.bullets[i].x + player.currentGun.bullets[i].width &&
                this.x + this.width > player.currentGun.bullets[i].x &&
                this.y < player.currentGun.bullets[i].y + player.currentGun.bullets[i].height &&
                this.y + this.height > player.currentGun.bullets[i].y){
                health.currentHealth -= 1;
                let index = dogs.findIndex(element => element.id == this.id);
                dogs.splice(index, 1);
                player.currentGun.bullets.splice(i, 1);
                score -= 5;
            }
        }
    }

    render(){
        if(this.direction == "RIGHT"){
            graphics.drawImage(this.framesR[this.animationIndex], this.x, this.y, this.width, this.height);
        }
        else{
            graphics.drawImage(this.framesL[this.animationIndex], this.x, this.y, this.width, this.height);
        }
    }

    updateDirection(){
        this.direction = "RIGHT";
        if(this.xVelocity < 0){
            this.direction = "LEFT";
        }
    }
}
