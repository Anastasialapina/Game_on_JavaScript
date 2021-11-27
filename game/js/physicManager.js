var physicManager = {
    updateMoney: function(){
        player.addMoney();
    },

    updateLife: function (){
        player.decLife();
    },

    checkEndLevel : function (nowElem){
    if (nowElem === elemId.idExit) {
        console.log("exit");
        mapManager.drawAll();
        console.log(player.PlayerX);
        console.log(player.PlayerY);
        setTimeout(() => {
        }, 100);
        audioManager.playEvent(audioManager.audioWin);
        if (player.level === 1) {
            setTimeout(() => {
                alert("Уровень 1 пройден!")
            }, 100);
            document.getElementById("btn").disabled = false;
            player.setLevel(player.level + 1);
            gameManager.level();
        } else {
            setTimeout(() => {
                alert("Поздравляю Вы прошли игру!")
            }, 100);
            recordTableManager.saveRecord(player.money);
            recordTableManager.DrawRecordTable();
            isEnd = true;
        }
    }
},
    checkIsMoney : function (nowElem, mapElem) {
    if (nowElem === elemId.idMoney) {
        audioManager.playEvent(audioManager.audioMoney);
        physicManager.updateMoney();
        mapElem[player.PlayerX + player.PlayerY * levelWidth] = 0;
        saveUserName.init();
    }
    ;
},

    checkIsLife : function (nowElem) {
    if ((nowElem === elemId.idLife) || ((player.PlayerX === enemy1.x && player.PlayerY === enemy1.y) ||
        (player.PlayerX === enemy2.x && player.PlayerY === enemy2.y))) {
        audioManager.playEvent(audioManager.audioFire);
        physicManager.updateLife();
        if (player.getLife() < 0) {
            audioManager.playEvent(audioManager.audioLose);
            alert("У Вас закончились жизни!");
            player.setMoney(startLevelMoney);
            gameManager.level();
        }
        saveUserName.init();
    }
},

    checkIsTeleport : function (nowElem) {
    if (nowElem === elemId.idTeleport) {
        audioManager.playEvent(audioManager.audioTeleport);
        for (let i = 0; i < levelHeight * levelWidth; i++) {
            if (mapElem[i] === elemId.idTeleportTo) {
                player.setPlayerX(i % levelWidth);
                player.setPlayerY(Math.floor(i / levelWidth));
            }
        }

        mapManager.drawAll();
    }
}
}
