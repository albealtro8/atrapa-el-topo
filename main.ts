controller.player2.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    simplified.moveToRandomHoleOnGrid(myMole)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    simplified.moveToRandomHoleOnGrid(myMole)
    music.jumpUp.play()
    animation.runImageAnimation(
    myHammer,
    assets.animation`hammerAnimation`,
    50,
    false
    )
})
let myHammer: Sprite = null
let myMole: Sprite = null
game.showLongText("Player 1: Usa el boton para mover el martillo l. Player 2: Presiona A para mover el topo.", DialogLayout.Center)
scene.setBackgroundImage(assets.image`grid`)
myMole = sprites.create(assets.image`mole`, SpriteKind.Enemy)
myHammer = sprites.create(assets.image`hammer`, SpriteKind.Player)
simplified.moveOnlyOnscreenWithArrows(myHammer, simplified.Speeds.Fast)
carnival.startCountdownGame(30, carnival.WinTypes.Multi)
carnival.addLabelTo("Atrapa el Topo", carnival.Areas.Bottom)
game.onUpdateInterval(1000, function () {
    animation.runImageAnimation(
    myMole,
    assets.animation`moleAnimation`,
    200,
    false
    )
    simplified.checkMoleEscape(mp.playerSelector(mp.PlayerNumber.Two), 1)
})
