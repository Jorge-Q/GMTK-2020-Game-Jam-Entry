class Health{

    constructor(x, y, hearthWidth, hearthHeight){
        this.x = x;
        this.y = y;
        this.hearthWidth = hearthWidth;
        this.hearthHeight = hearthHeight;
        this.heaths = [];
        this.spriteHeathsFull = new Image();
        this.spriteHeathsFull.src = "./sprites/fullHearth.png";
        this.spriteHeathsEmpty = new Image();
        this.spriteHeathsEmpty.src = "./sprites/emptyHearth.png";
        this.hitPoints = 3;
        this.currentHealth = 3;
    }

    update(){
        if(this.currentHealth <= 0){
            playing = false;
        }
    }

    damage(){
        this.currentHealth -= 1;
        new Audio("./sounds/hurtSound.wav").play();
    }

    render(){
        for(let i = 0; i < this.hitPoints; i++){
            if(i < this.currentHealth){
                graphics.drawImage(this.spriteHeathsFull, this.x + (i * 20), this.y, this.hearthWidth, this.hearthHeight);
            }
            else{
                graphics.drawImage(this.spriteHeathsEmpty, this.x + (i * 20), this.y, this.hearthWidth, this.hearthHeight);
            }
        }
    }
}