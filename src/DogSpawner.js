class DogSpawner{

    constructor(){
        this.cooldown = 60;
    }

    update(){
        if(this.cooldown <= 0){
            this.cooldown = 60;
            this.spawnDog()
        }
        this.cooldown --;
    }

    getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    spawnDog(){
        yPossibility = [0, frame.height]
        ySelected = yPossibility[this.getRandomInt(2)]
        xSelected = this.getRandomInt(frame.width)
        xVelocity = 1 
        frame.width xVelocity = -1
        O yVelocity = +1
        frame.height yVelocity = -1
        enemies.push(new Enemy(this.x, this.y, 26, 24));
    }
}