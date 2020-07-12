class EnemySpawner extends Entity{

    constructor(x, y, width, height){
        super(x, y, width, height);
        this.sprite = new Image();
        this.sprite.src = "./sprites/spaceship.png";
        this.cooldown = 120;
    }

    getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    update(){
        if(this.cooldown <= 0){
            this.cooldown = 85 + this.getRandomInt(120);
            this.spawnEnemy();
        }
        this.cooldown --;
    }

    spawnEnemy(){
        enemies.push(new Enemy(getId(), this.x, this.y, 24, 24));
    }
}