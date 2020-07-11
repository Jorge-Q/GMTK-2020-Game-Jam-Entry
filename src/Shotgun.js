class Shotgun extends Entity{

    constructor(x, y, width, height){
        super(x, y, width, height);
        this.sprite = new Image();
        this.sprite.src = "./sprites/gun.png";
    }

    update(){
        this.x = (this.width / 2) + (player.x + player.width / 2);
        this.y = (this.height / 2) + (player.y + player.height / 2) + 10;
    }

    render(){
        graphics.save();
        graphics.translate(this.x - this.width / 2, this.y - this.height / 2);
        graphics.rotate(player.angle);
        graphics.translate(-this.x - this.width / 2, -this.y - this.height / 2);
        super.render();
        graphics.restore();
    }
}