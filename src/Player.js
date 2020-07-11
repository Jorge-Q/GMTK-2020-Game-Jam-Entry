class Player extends Entity{

    constructor(x, y, width, height){
        super(x, y, width, height);
        this.sprite = new Image();
        this.sprite.src = "./sprites/player.png";
        this.bullets = [];

        this.totalBullets = 5;
        this.currentBullets = this.totalBullets;

        this.reloadTimer = 0;

        this.bulletDelay = 60;
    }

    update(){
        super.update();
        this.angle = Math.atan2(mouse.y - (this.y + this.height / 2), mouse.x - (this.x + this.width / 2));
        this.xVelocity *= 0.80;
        this.yVelocity *= 0.80;

        for(let i = 0; i < this.bullets.length; i++){
            this.bullets[i].update()
        }

        if(this.x > frame.width){
            this.xVelocity = -this.xVelocity;
            this.x = frame.width;
        }
        if(this.x < 0){
            this.xVelocity = -this.xVelocity;
            this.x = 0;
        }
        if(this.y > frame.height){
            this.yVelocity = -this.yVelocity;
            this.y = frame.height;
        }
        if(this.y < 0){
            this.yVelocity = -this.yVelocity;
            this.y = 0;
        }

        if(this.currentBullets >= 0){
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

    shoot(){
        this.xVelocity = -Math.cos(this.angle) * 5;
        this.yVelocity = -Math.sin(this.angle) * 5;
        this.bullets.push(new Bullet(this.x + this.width / 2, (this.y + this.height / 2) + 20, 10, 10));
    }

    render(){
        for(let i = 0; i < this.bullets.length; i++){
            this.bullets[i].render()
        }
        super.render();
    }
}