var saveUserName = {
    store: function (){
        localStorage["tetris.username"] = document.getElementById("input-field").value;
    },

    read: function (){
        let username = localStorage["tetris.username"];
        if (username === undefined) {
            return "";
        }
        return username;
    },

    setUsername: function () {
        let inputField = document.getElementById("input-field");
        console.log(saveUserName.read());
        inputField.value = saveUserName.read();
    },

    init: function () {
        const playerName = document.getElementById("player-name");
        playerName.innerText = saveUserName.read();
        let levelPlayer = document.getElementById("id_level");
        let moneyPlayer = document.getElementById("id_money");
        let lifePlayer = document.getElementById("id_life");
        levelPlayer.innerText = player.getLevel();
        moneyPlayer.innerText = player.getMoney();
        lifePlayer.innerText = player.getLife();
    }
}
