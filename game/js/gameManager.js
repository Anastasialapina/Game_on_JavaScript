var gameManager = {
    game: async function(){
        recordTableManager.DrawRecordTable();
        isEnd = false;
        eventsManager.action();
        gameManager.level();
    },

    level: async function(){
        isEnd = false;
        if(player.level === 1)
            player.setMoney(0)
        player.setLevel(player.getLevel());
        player.setLife(3);
        player.setPlayerX(0);
        player.setPlayerY(0);
        let name = "map" + player.getLevel();
        console.log(name);
        levelsArray[player.level - 1] = await mapManager.loadLevel(name);
        startLevelMoney = player.getMoney();
        saveUserName.init();

        levelWidth = levelsArray[player.level - 1].getWidth();
        levelHeight = levelsArray[player.level - 1].getHeight();
        enemy1 = new Enemy(levelWidth - 1, 3);

        if(player.getLevel() === 1) {
            enemy2 = new Enemy(levelWidth - 1, 8);
        }
        else{
            enemy2 = new Enemy(levelWidth - 1, 12);
        }

        mapManager.drawAll();
    },

    info: function(){
    alert("Добро пожаловать!\n" +
        "Старайтесь собрать как можно больше сундучков, 1 сундучок = 1 монетке. \n" +
        "Избегайте огня и врагов, при попадении на них количество жизней уменьшается на 1.\n" +
        "На каждый уровень дается 3 жизни, в отличии от монет, которые хранятся всю игру!\n" +
        "Желаем удачи!");
    }
}
