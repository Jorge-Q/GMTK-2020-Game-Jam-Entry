class Gun extends Entity{

    constructor(x, y, width, height){
        super(x, y, width, height);
        this.bullets = [];
    }

    update(){
        //Update the position of the gun (same rate as player)
        this.x = player.x;
        this.y = player.y;
        //Update bullets to move its trajectory
        for(let i = 0; i < this.bullets.length; i++){
            this.bullets[i].update()
        }
    }

    render(){
        graphics.save();
        graphics.translate(this.x + this.width / 2 + 5, this.y + this.height / 2 + 20);
        graphics.rotate(player.angle);
        graphics.drawImage(this.sprite, -this.width / 2, -this.height / 2, this.width, this.height);
        graphics.restore();
        //Render the bullet trajectory
        for(let i = 0; i < this.bullets.length; i++){
            this.bullets[i].render()
        }
    }
}