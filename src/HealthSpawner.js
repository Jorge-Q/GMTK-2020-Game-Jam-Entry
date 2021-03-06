class HealthSpawner{

    constructor(){
        this.cooldown = 60;
    }

    getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    update(){
        //If the heart is off cooldown, spawn one
        if(this.cooldown < 0){
            this.cooldown =  150;
            //Location to spawn heart on x and y axis
            let x = this.getRandomInt(frame.width);
            let y = this.getRandomInt(frame.height);
            this.spawnHeart(x, y);
        }
        this.cooldown--;
    }

    spawnHeart(x, y){
        hearts.push(new Heart(x, y, 16, 16));
    }
}