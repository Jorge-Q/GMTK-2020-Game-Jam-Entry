class Heart extends Entity{
    constructor(x, y, width, height){
        super(x, y, width, height);
        this.sprite = new Image();
        this.sprite.src = "./sprites/fullHeart.png";
        this.disappear = 300;
        this.currentTime = 0;
    }

    checkPlayercollision(){
        if(this.x < player.x + player.width &&
            this.x + this.width > player.x &&
            this.y < player.y + player.height &&
            this.y + this.height > player.y){
            if(health.currentHealth < 3 ){
                new Audio("./sounds/pickup2Sound.wav").play();
                health.currentHealth += 1;
            }
            let index = hearts.findIndex(element => element.id == this.id);
            hearts.splice(index, 1);
        }
    }

    disappearHeart(){
         //If the heart has been on screen for 5 seconds....disappear
        if(this.currentTime > this.disappear){
            //Disappear Hearth from screen
            this.currentTime = 0;
            let index = hearts.findIndex(element => element.id == this.id);
            hearts.splice(index, 1);
        }
        this.currentTime++;
    }

    update(){
        this.checkPlayercollision(); 
        this.disappearHeart();   
    }
}