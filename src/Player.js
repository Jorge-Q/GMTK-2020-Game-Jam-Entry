class Player extends Entity{

    constructor(x, y, width, height){
        super(x, y, width, height);
        this.sprite = new Image();
        this.sprite.src = "./sprites/bald_orange.png";
        this.bullets = [];
    }

    update(){
        super.update();
        this.angle = Math.atan2(mouse.y - (this.y - this.height / 2), mouse.x - (this.x - this.width / 2));
        this.xVelocity *= 0.80;
        this.yVelocity *= 0.80;

        for(let i = 0; i < this.bullets.length; i++){
            this.bullets[i].update()
        }
    }

    shoot(){
        this.xVelocity = -Math.cos(this.angle) * 20;
        this.yVelocity = -Math.sin(this.angle) * 20;
        this.bullets.push(new Bullet(this.x - this.width / 2, this.y - this.height / 2, 10, 10));
    }

    render(){
        // Rotate player to follow mouse
        graphics.save();
        graphics.translate(this.x - this.width / 2, this.y - this.height / 2);
        graphics.rotate(this.angle);
        graphics.translate(-this.x - this.width / 2, -this.y - this.height / 2);
        super.render();
        graphics.restore();

        for(let i = 0; i < this.bullets.length; i++){
            this.bullets[i].render()
        }
    }
}