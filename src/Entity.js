class Entity{

    constructor(x, y, width, height){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.sprite = null;
        this.xVelocity = 0;
        this.yVelocity = 0;
    }

    update(){
        this.x += this.xVelocity;
        this.y += this.yVelocity;
        this.xVelocity *= 0.80;
        this.yVelocity *= 0.80;
    }

    render(){
        if(this.sprite != null){
            graphic.drawImage(this.sprite, this.x, this.y, this.width, this.height)   
        }
    }
}