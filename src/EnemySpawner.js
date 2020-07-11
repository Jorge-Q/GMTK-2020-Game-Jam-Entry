class EnemySpawner extends Entity{

    constructor(x, y, width, height){
        super(x, y, width, height);

        this.cooldown = 60;
    }

    update(){
        if(this.cooldown <= 0){
            this.cooldown = 60;
            this.spawnEnemy()
        }
        this.cooldown --;
    }

    spawnEnemy(){
        enemies.push(new Enemy(this.x, this.y, 26, 24));
    }
}