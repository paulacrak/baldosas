let mySprite2 = 0
info.onLifeZero(function () {
    game.over(true, effects.slash)
})
scene.onHitWall(mySprite2, function (sprite, location) {
    sprite.startEffect(effects.spray, 500)
})
let mySprite = sprites.create(img`
    . . . . f f f f . . . . 
    . . f f e e e e f f . . 
    . f f e e e e e e f f . 
    f f f f 4 e e e f f f f 
    f f f 4 4 4 e e f f f f 
    f f f 4 4 4 4 e e f f f 
    f 4 e 4 4 4 4 4 4 e 4 f 
    f 4 4 f f 4 4 f f 4 4 f 
    f e 4 d d d d d d 4 e f 
    3 f e d d b b d d e f 3 
    3 f f e 4 4 4 4 e f f 3 
    e 4 f b 1 1 1 1 b f 4 e 
    4 d f 1 1 1 1 1 1 f d 4 
    4 4 f 6 6 6 6 6 6 f 4 4 
    . . . f f f f f f . . . 
    . . . f f . . f f . . . 
    `, SpriteKind.Player)
let myEnemy = sprites.create(img`
    . . . . 6 . . . . . . 6 . . . . 
    . . . . 6 6 . . . . 6 6 . . . . 
    . . . . . 6 . . . . 6 . . . . . 
    . . . . . 7 7 7 7 7 7 . . . . . 
    . . . . . 7 1 7 1 7 7 . . . . . 
    . . . . . 7 7 4 7 7 7 . . . . . 
    . . . . . 7 7 7 7 7 7 . . . . . 
    . . . 6 6 7 7 7 7 7 7 6 6 . . . 
    . . 6 6 . 5 5 5 5 5 5 . 6 . . . 
    . . 6 . . . . . . . . 6 6 . . . 
    . . . . . . . . . . . 6 . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Enemy)
controller.moveSprite(mySprite)
game.splash("hola soy un medico y me teneis que ayudar a matar al coronavirus ", "")
