var player = {
    PlayerX: 0,
    PlayerY: 0,
    level : 1,
    money : 0,
    live : 3,
    draw: function (){
        spritesManager.drawSprite(player.PlayerX, player.PlayerY, 5060);
    },

    setPlayerX(x){
        this.PlayerX = x;
    },

    setPlayerY(y){
        this.PlayerY = y;
    },

    PlayerXInc(){
        this.PlayerX = this.PlayerX + 1;
    },

    PlayerXDec(){
        this.PlayerX = this.PlayerX - 1;
    },

    PlayerYInc(){
        this.PlayerY = this.PlayerY + 1;
    },

    PlayerYDec(){
        this.PlayerY = this.PlayerY - 1;
    },

    setMoney(money){
        this.money = money;
    },

    addMoney(){
        this.money = this.money + 1;
    },

    decLife(){
        this.life = this.life - 1;
    },

    setLife(life){
        this.life = life;
    },

    setLevel(level){
        this.level = level;
    },

    getMoney(){
        return this.money;
    },

    getLife(){
        return this.life;
    },

    getLevel(){
        return this.level;
    }
};

class Enemy{
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    draw(){
        spritesManager.drawSprite(this.x, this.y, 5063);
    }

    goEnemy(){
        if (this.x != 0) {
            this.x = this.x - 1;
        }
        else{
            this.x = levelWidth - 1;
        }
    }
};


var elemId = {

    idMoney : 7,
    idLife : 4412,
    idTeleport : 4409,
    idTeleportTo : 4410,
    idExit : 715
}

var enemy1, enemy2;
var startLevelMoney = 0;
var levelWidth;
var levelHeight;
var mapElem;
var isEnd = false;

