class Pistol extends Gun{
    
    constructor(x, y, width, height){
        super(x, y, width, height)
        this.sprite = new Image();
        this.sprite.src = "./sprites/Pistol.png";
        this.totalBullets = 3;
        this.currentBullets = this.totalBullets;
        this.reloadTimer = 0;
        this.bulletDelay = 0;
        this.bullets= [];
    }

    //Function to update gun's bullets being shot p/s.
    update(){
        super.update();
        //Trigger of bullets per seconds
        if(this.currentBullets > 0){
            if(this.bulletDelay >= 5){
                this.shoot();
                this.currentBullets --;
                this.bulletDelay = 0;
            }
            else{
                this.bulletDelay ++;
            }
        }
        else{
            if(this.reloadTimer >= 60){
                this.reloadTimer = 0;
                this.currentBullets = this.totalBullets;
            }
            this.reloadTimer ++;
        }
    }

    //Function that adds a bullet to the bullet list & adds player knockback
    shoot(){
        new Audio("./sounds/pistolSound.wav").play();
        player.xVelocity = -Math.cos(player.angle) * 3;
        player.yVelocity = -Math.sin(player.angle) * 3;
        this.bullets.push(new Bullet(
            this.x + this.width / 2, 
            (this.y + this.height / 2) + 20, 
            8, 8,
            Math.cos(player.angle) * 10,
            Math.sin(player.angle) * 10,
        ));
    }

}