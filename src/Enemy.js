class Enemy extends Entity{

    constructor(id, x, y, width, height){
        super(x, y, width, height);
        this.id = id;
        this.framesR = [];
        this.framesR.push(new Image());
        this.framesR[0].src = "./sprites/alien1.png";
        this.framesR.push(new Image());
        this.framesR[1].src = "./sprites/alien2.png";

        this.framesL = [];
        this.framesL.push(new Image());
        this.framesL[0].src = "./sprites/alien1_L.png";
        this.framesL.push(new Image());
        this.framesL[1].src = "./sprites/alien2_L.png";

        this.direction = "RIGHT";
        this.animationTimer = 0;
        this.animationIndex = 0;
    }

    update(){
        super.update();
        let angle = -Math.atan2(player.y - this.y, player.x - this.x);
        this.xVelocity = Math.cos(angle) * .75;
        this.yVelocity = -Math.sin(angle) * .75;
        this.checkBulletCollision();
        this.checkPlayercollision();
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
                    var snd = new Audio("./sounds/killSound.wav");
                    snd.volume = .3;
                    snd.play();
                let index = enemies.findIndex(element => element.id == this.id);
                enemies.splice(index, 1);
                player.currentGun.bullets.splice(i, 1);
                score += 10;
            }
        }
    }

    checkPlayercollision(){
        if(this.x < player.x + player.width &&
            this.x + this.width > player.x &&
            this.y < player.y + player.height &&
            this.y + this.height > player.y){
            health.damage();
            let index = enemies.findIndex(element => element.id == this.id);
            enemies.splice(index, 1);
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
        if(this.x > player.x){
            this.direction = "LEFT";
        }
    }
}