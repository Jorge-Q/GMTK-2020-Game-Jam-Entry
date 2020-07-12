class Gun extends Entity{

    constructor(x, y, width, height){
        super(x, y, width, height);
        this.bullets = [];
    }

    update(){
        //Update the position of the gun (same rate as player)
        this.x = (this.width / 2) + (player.x + player.width / 2);
        this.y = (this.height / 2) + (player.y + player.height / 2) + 10;
        //Update bullets to move its trajectory
        for(let i = 0; i < this.bullets.length; i++){
            this.bullets[i].update()
        }
    }

    render(){
        graphics.save();
        graphics.translate(this.x - this.width / 2, this.y - this.height / 2);
        graphics.rotate(player.angle);
        graphics.translate(-this.x - this.width / 2, -this.y - this.height / 2);
        super.render();
        graphics.restore();
        //Render the bullet trajectory
        for(let i = 0; i < this.bullets.length; i++){
            this.bullets[i].render()
        }
    }
}