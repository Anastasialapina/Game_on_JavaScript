class Atlas {
    constructor(columns, tileWidth, tileHeight, atlasImg) {
        this.tileWidth = tileWidth; //ширина 1 тайла
        this.tileHeight = tileHeight;
        this.columns = columns; //количество колон
        this.atlasImg = atlasImg; //объект картинки
    }

    getTileWidth() {
        return this.tileWidth;
    }

    getTileHeight() {
        return this.tileHeight;
    }

    getAtlasImg() {
        return this.atlasImg;
    }

    setAtlasImg(image) {
        this.atlasImg = image;
    }

    tileIdToCoordinates(tileId) { //возвращает координаты
        return [tileId % this.columns, Math.floor(tileId / this.columns)];
    }

}

class Level {
    constructor(width, height, layersArray) {
        this.height = height;
        this.width = width;
        this.layersArray = layersArray; //хранит матрицы
    }

    getHeight() {
        return this.height;
    }

    getWidth() {
        return this.width;
    }

    getLayersArray() {
        return this.layersArray;
    }
}

let levelsArray = [];
let atlas;
let ctx;

var mapManager = {

    initCanvas: function (levelIndex) {
        const canvas = document.getElementById("canvas");
        canvas.width = levelsArray[levelIndex].getWidth() * atlas.getTileWidth();
        canvas.height = levelsArray[levelIndex].getHeight() * atlas.getTileHeight();
        ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    },

    drawLevel: function (level) {
        for (const layer of level.getLayersArray()) {
            for (let x = 0; x < level.getWidth(); x++) {
                for (let y = 0; y < level.getHeight(); y++) {
                    const spriteId = layer[x + y * level.getWidth()] - 1 < 0 ? 0 : layer[x + y * level.getWidth()] - 1;
                    spritesManager.drawSprite(x, y, spriteId);
                }
            }
        }
    },
    redraw: function (levelIndex) {
        mapManager.initCanvas(levelIndex);
        const level = levelsArray[levelIndex];
        mapManager.drawLevel(level);
    },

    parseAtlasJson: function (atlasJson) {
        return new Atlas(atlasJson.columns, atlasJson.tileheight, atlasJson.tilewidth, null);
    },

    parseLevelJson: function (levelJson) {
        const height = levelJson.height;
        const width = levelJson.width;
        let layersArray = [];
        for (const layer of levelJson.layers) {
            layersArray.push(layer.data);
        }
        return new Level(width, height, layersArray);
    },

    drawAll: function () {
        mapManager.redraw(player.level - 1);
        player.draw();
        enemy1.draw();
        enemy2.draw();
    },

    onLoad: async function(){
        atlas = await mapManager.loadAtlas("./assets/atlas.png", "./assets/Atlas.json");
        gameManager.game();
    },

    loadAtlasImg: async function(atlasImgPath) {
        return new Promise((resolve, reject) => {
            let atlasImg = new Image();
            atlasImg.src = atlasImgPath;
            atlasImg.onload = () => {
                resolve(atlasImg)
            };
            atlasImg.onerror = reject;
        });
    },

    loadAtlas: async function(atlasImgPath, atlasJsonPath) {
        const atlasJsonResponse = await fetch(atlasJsonPath);
        let atlas = mapManager.parseAtlasJson(await atlasJsonResponse.json());
        atlas.setAtlasImg(await mapManager.loadAtlasImg(atlasImgPath));
        return atlas;
    },

    loadLevel: async function(name) {
        const levelPath = "./assets/levels/" + name + ".json";
        const levelJsonResponse = await fetch(levelPath);
        return mapManager.parseLevelJson(await levelJsonResponse.json());
    }

}
