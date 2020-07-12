class EnemySpawner extends Entity{

    constructor(x, y, width, height){
        super(x, y, width, height);
        this.sprite = new Image();
        this.sprite.src = "./sprites/spaceship.png";
        this.cooldown = 60;
    }

    update(){
        if(this.cooldown <= 0){
            this.cooldown = 60;
            this.spawnEnemy();
        }
        this.cooldown --;
    }

    spawnEnemy(){
        enemies.push(new Enemy(getId(), this.x, this.y, 24, 24));
    }
}