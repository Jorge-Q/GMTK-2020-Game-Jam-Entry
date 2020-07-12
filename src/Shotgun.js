class Shotgun extends Gun{

    constructor(x, y, width, height){
        super(x, y, width, height)
        this.sprite = new Image();
        this.sprite.src = "./sprites/Shotgun.png";
        this.currentBullets = this.totalBullets;
        this.totalBullets = 3;
        this.reloadTimer = 0;
        this.fireRate = 60;
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
        console.log('wadapbitches');
        player.xVelocity = -Math.cos(this.angle) * 5;
        player.yVelocity = -Math.sin(this.angle) * 5;
        this.bullets.push(new Bullet(this.x + this.width / 2, (this.y + this.height / 2) + 10, 8, 8));
    }

}