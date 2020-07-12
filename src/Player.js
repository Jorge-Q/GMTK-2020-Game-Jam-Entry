class Player extends Entity{

    constructor(x, y, width, height){
        super(x, y, width, height);
        this.sprite = new Image();
        this.sprite.src = "./sprites/player.png";
        this.currentGun = new Pistol(this.x, this.y, 22, 10);
    }

    update(){
        super.update();
        this.angle = Math.atan2(mouse.y - (this.y + this.height / 2), mouse.x - (this.x + this.width / 2));
        this.xVelocity *= .97;
        this.yVelocity *= .97;

        //Border for frame
        if(this.x > frame.width - this.width){
            this.xVelocity = -this.xVelocity;
            this.x = frame.width - this.width;
        }
        if(this.x < 0){
            this.xVelocity = -this.xVelocity;
            this.x = 0;
        }
        if(this.y > frame.height - this.height){
            this.yVelocity = -this.yVelocity;
            this.y = frame.height - this.height;
        }
        if(this.y < 0){
            this.yVelocity = -this.yVelocity;
            this.y = 0;
        }
        this.currentGun.update();
    }

    render(){
        super.render()
        this.currentGun.render()
    }

}