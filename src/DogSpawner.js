class DogSpawner{

    constructor(){
        this.cooldown = 120;
        this.dogSpeed = 1;
    }

    update(){
        if(this.cooldown <= 0){
            this.cooldown = 120;
            this.spawnDog()
        }
        this.cooldown --;
    }

    getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    spawnDog(){
        let yPossibility = [-20, frame.height];
        let ySelected = yPossibility[this.getRandomInt(2)];
        let xSelected = this.getRandomInt(frame.width);
        
        let xVelocity = [-this.dogSpeed, this.dogSpeed];
        let yVelocity = -this.dogSpeed;

        if(ySelected == -20){
            yVelocity = this.dogSpeed;
        }

        dogs.push(new Dog(getId(), xSelected, ySelected, 24, 20, xVelocity[this.getRandomInt(2)], yVelocity));
    }
}