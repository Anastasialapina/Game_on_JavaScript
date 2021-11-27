var eventsManager = {
    action: function (){
        document.addEventListener( 'keydown', (event) => {
            const keyName = event.key;
            if(isEnd){
                return;
            }
            mapElem = levelsArray[player.level - 1]. getLayersArray()[1];
            if(keyName === "ArrowRight" && player.PlayerX < levelWidth - 1) {
                console.log('ArrowRight') ;
                player.PlayerXInc();
            }

            if(keyName === "ArrowLeft" && player.PlayerX > 0){
                console.log('ArrowLeft') ;
                player.PlayerXDec();
            }

            if(keyName === "ArrowUp" && player.PlayerY > 0){
                console.log('ArrowUp') ;
                player.PlayerYDec();
            }

            if(keyName === "ArrowDown" && player.PlayerY < levelHeight - 1){
                console.log('ArrowDown') ;
                player.PlayerYInc();
            }

            enemy1.goEnemy();
            enemy2.goEnemy();

            mapManager.drawAll();

            let nowElem = mapElem[player.PlayerX+player.PlayerY*levelWidth];

            physicManager.checkEndLevel(nowElem);

            physicManager.checkIsMoney(nowElem, mapElem);
            physicManager.checkIsLife(nowElem);
            physicManager.checkIsTeleport(nowElem);
        }) ;
    }
}
