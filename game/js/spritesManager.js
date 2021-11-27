var spritesManager = {
    drawSprite : function (spriteX, spriteY, spriteId) {
        const [imageX, imageY] = atlas.tileIdToCoordinates(spriteId);
        ctx.drawImage(
            atlas.getAtlasImg(),
            imageX * atlas.getTileWidth(),
            imageY * atlas.getTileHeight(),
            atlas.getTileWidth(),
            atlas.getTileHeight(),
            spriteX * atlas.getTileWidth(),
            spriteY * atlas.getTileHeight(),
            atlas.getTileWidth(),
            atlas.getTileHeight());
    },
}
