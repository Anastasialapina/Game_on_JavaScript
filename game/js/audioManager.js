var audioManager = {
    audioMoney : null,
    audioFire : null,
    audioTeleport : null,
    audioWin : null,
    audioLose : null,
    init: function () {
    // инициализация
        this.audioMoney = new Audio("audio/audioMoney.mp3");
        this.audioFire = new Audio("audio/audioFire.mp3");
        this.audioTeleport = new Audio("audio/audioTeleport.mp3");
        this.audioWin = new Audio("audio/audioWin.mp3");
        this.audioLose = new Audio("audio/audioLose.mp3");
    },
    playEvent: function(audio){
        audio.play();

    }
}
