class Pedestal extends Entity{

    constructor(x, y, width, height){
        super(x, y, width, height);
        this.sprite = new Image();
        this.sprite.src = "./sprites/Pedestal.png";
        this.gun = null;
        this.gunSpawnTimer = 0;
        this.gunOptions = ["SHOTGUN", "PISTOL", "RIFFLE"];

        this.riffleSprite = new Image();
        this.riffleSprite.src = "./sprites/Riffle.png";
        this.pistolSprite = new Image();
        this.pistolSprite.src = "./sprites/Pistol.png";
        this.shotgunSprite = new Image();
        this.shotgunSprite.src = "./sprites/Shotgun.png";
    }

    update(){
        this.checkPlayercollision();
        if(this.gunSpawnTimer >= 120){
            this.gun = this.gunOptions[this.getRandomInt(3)];
            this.gunSpawnTimer = 0;
        }
        this.gunSpawnTimer ++;
    }

    render(){
        super.render();
        if(this.gun == null){
            return;
        }
        if(this.gun == "SHOTGUN"){
            graphics.drawImage(this.shotgunSprite, this.x, this.y - 8, 22, 10);
        }
        else if(this.gun == "PISTOL"){
            graphics.drawImage(this.pistolSprite, this.x, this.y - 8, 22, 10);
        }
        else if(this.gun == "RIFFLE"){
            graphics.drawImage(this.riffleSprite, this.x, this.y - 8, 22, 10);
        }
    }

    checkPlayercollision(){
        if(this.x < player.x + player.width &&
            this.x + this.width > player.x &&
            this.y < player.y + player.height &&
            this.y + this.height > player.y){
            this.gunSpawnTimer = 0;
            new Audio("./sounds/pickupSound.wav").play();
            if(this.gun == "SHOTGUN"){
                player.currentGun = new Shotgun(this.x, this.y, 22, 10);
            }
            else if(this.gun == "PISTOL"){
                player.currentGun = new Pistol(this.x, this.y, 22, 10);
            }
            else if(this.gun == "RIFFLE"){
                player.currentGun = new Riffle(this.x, this.y, 22, 10);
            }
            this.gun = null;
        }
    }

    getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }
}