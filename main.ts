controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 8 5 8 . . . . . . 
        . . . . . . 8 5 1 5 8 . . . . . 
        . . . . . . 4 5 1 5 4 . . . . . 
        . . . . . 2 4 9 1 9 4 2 . . . . 
        . . . . 2 5 4 9 9 9 4 5 2 . . . 
        . . . . . 5 . . . . . 5 . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite2, 0, -50)
    pause(1000)
})
sprites.onOverlap(SpriteKind.Food, SpriteKind.Projectile, function (sprite, otherSprite) {
    otherSprite.destroy()
    music.baDing.play()
    info.changeScoreBy(1)
})
let projectile: Sprite = null
let mySprite2: Sprite = null
let mySprite = sprites.create(img`
    ........................
    ........................
    ........................
    ........................
    ..........ffff..........
    ........ff1111ff........
    .......fb111111bf.......
    .......f11111111f.......
    ......fd11111111df......
    ......fd11111111df......
    ......fddd1111dddf......
    ......fbdbfddfbdbf......
    ......fcdcf11fcdcf......
    .......fb111111bf.......
    ......fffcdb1bdffff.....
    ....fc111cbfbfc111cf....
    ....f1b1b1ffff1b1b1f....
    ....fbfbffffffbfbfbf....
    .........ffffff.........
    ...........fff..........
    ........................
    ........................
    ........................
    ........................
    `, SpriteKind.Food)
scene.setBackgroundImage(img`
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfffff6ffffff5ffffffffffffffbfffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfffff6ffffff5ffffffffffffffbfffffffffffff
    ffffffffffffffffffffffffffffffffff6fffffffffffbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbffffff6fffff5ffffffffffffffbfffffffffffff
    ffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffffffffffffffffffffbfffffffffffffffffffffffffffbffffff6fffff5ffffffffffffffbfffffffffffff
    ffffffffffffffffffffffffffffffffff6ffffffffffbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbffffffffffff5ffffffffffffffbfffffffffffff
    ffffffffffffffffffffffffffffffffff6fffffffffbffffffffffffffffffffffffffffffffffffffffffffffbffffffffffffffffffffffffffbfffffff6ffff5ffffffffffffffbfffffffffffff
    ffffffffffffffffffffffffffffffffff6ffffffffbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfffffff6ffff5ffffffffffffffbfffffffffffff
    fffffffffffffffffffffffffffffffff6ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfffffffffffffffffffffffffbfffffff6ffff5ffffffffffffffbfffffffffffff
    fffffffffffffffffffffffffffffffff6ffffffffbffffffffffffffffffffffffffffffffffffffffffffffffffbffffffffffffffffffffffffbffffffff6fff5ffffffffffffffbfffffffffffff
    fffffffffffffffffffffffffffffffff6fffffffbfffffffffffffffffffffffffffffffffffffffffffffffffffbffffffffffffffffffffffffbffffffff6fff5ffffffffffffffbfffffffffffff
    ffffffffffffffffffffffffffffffff6fffffffbfffffffffffffffffffffffffffffffffffffffffffffffffffffbfffffffffffffffffffffffbffffffff6fff5ffffffffffffffbfffffffffffff
    ffffffffffffffffffffffffffffffff6fffffbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffbffffffffffffffffffffffbfffffffff6ff5ffffffffffffff5fffffffffffff
    ffffffffffffffffffffffffffffffff6ffffbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffbffffffffffffffffffffffbfffffffff6ff5ffffffffffffffbfffffffffffff
    ffffffffffffffffffffffffffffffff6fffbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfffffffffffffffffffffbfffffffff6ff5ffffffffffffffbfffffffffffff
    ffffffffffffffffffffffffffffffff6ffbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbffffffffffffffffffffbfffffffff66f5ffffffffffffffbfffffffffffff
    fffffffffffffffffffffffffffffff6ffbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbfffffffffffffffffffbffffffffff6f5ffffffffffffff5fffffffffffff
    fffffffffffffffffffffffffffffff6bbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfffffffffffffffffffbffffffffff6fbffffffffffffffbfffffffffffff
    fffffffffffffffffffffffffffffff6bffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6fffbffffffffffffffffffbffffffffff55b55ffffffffffffbfffffffffffff
    ffffffffffffffffffffffffffffff6bfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6ffffbfffffffffffffffffbffffffff555b5b555ffffffffff5fffffffffffff
    ffffffffffffffffffffffffffffbb6ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbffffffffffffffff5ffffbffbbbb555bbbbbfbffffffbfffffffffffff
    fffffffffffffffffffffffffffbb85bffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6fffffbfffffffffffffffbffff5555bbb5555bbb555ffffff5fffffffffffff
    ffffffffffffffffffffffffffb88655ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6ffffffbbfffffffffffffbffffb555555555555555bffffff5fffffffffffff
    ffffffffffffffffffffffffbb555555bfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbffffffffffffbfffffbbb8b86688b88bbfffffff5fffffffffffff
    fffffffffffffffffffffffbbfb55555555bfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6fffffffbbfffffffffff5fffffb5855586855585bfffffff5fffffffffffff
    fffffffffffffffffffffbbffff5555555bffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6fffffffffbffffffffffbffffff58b5b868b5b85ffffffff5fffffffffffff
    ffffffffffffffffffffbffffffb55555bffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6fffffffffbbffffffffbffffff5885886885885ffffffff5fffffffffffff
    ffffffffffffffffffbbfffffffb55555bffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6ffffffffffbbfffffff5ffffff5885886685885ffffffff5fffffffffffff
    ffffffffffffffffbbfffffffff555b555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6ffffffffffffbbfffffbffffff5885888685885ffffffff5fffffffffffff
    fffffffffffffffbbffffffffff55fff55fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6fffffffffffffbbfff5ffffff5885888685885ffffffff5fffffffffffff
    fffffffffffffbbfffffffffff66fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6fffffffffffffffbbf5ffffff5885888665885ffffffff5fffffffffffff
    ffffffffffbbbfffffffffffff6fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6ffffffffffffffffb5bfffff5885888665885ffffffff5fffffffffffff
    fffffffffbffffffffffffffff6fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff66ffffffffffffffff5bbbfff5885888865885ffffffff5fffffffffffff
    ffffffffbbfffffffffffffff6fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6ffffffffffffffff5ffbbbb5885888865885ffffffff5fffffffffffff
    ffffffbbfffffffffffffffff6fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff66fffffffffffffff5fffffb5bb5888865885ffffffff5fffffffffffff
    ffffbbffffffffffffffffff6fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6fffffffffffffff5ffffff58b5bbb865885ffffffff5fffffffffffff
    bbbbffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff66ffffffffffffff5ffffff588588bbb5b85ffffffff5fffffffffffff
    fffffffffffffffffffffff66ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff66fffffffffffff5ffffff5b858888856b5bbbfffff5fffffffffffff
    fffffffffffffffffffffff6ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff66ffffffffffff5ffffff55b5888885b55ffbbbbbf5fffffffffffff
    fffffffffffffffffffffff6ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff66ffffffffffff5ffffffb55555555555bffffffff5bbbbbbbffffff
    fffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff66fffffffffff5fffffff55555555555fffffffffbfffffbbbbbbbb
    ffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff66ffffffffff5ffffffffb55bbb55b6fffffff55b55fffffffffff
    fffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff66fffffffff5fffffffffff555fff6fffff555b5b555fffffffff
    ffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff66ffffffff5fffffffffffb5bfff66bffbbbb555bbbbbfbfffff
    fffffffffffffffffff66ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff66fffffff5fffffffffffbbbfff665555bbb5555bbb555fffff
    fffffffffffffffffff6fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff666ffffff5fffffffffff555ffff6b555555555555555bfffff
    ffffffffffffffffff6fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff666fffff5fffffffffffb5bffff66bbb8b88888b88bbffffff
    fffffffffffffffff66ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff666ffff5ffffffffffff5ffffff6b5855588855585bffffff
    fffffffffffffffff6ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff666fffbffffffffffff5ffffff6658b5b888b5b85fffffff
    ffffffffffffffff6fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6655b55ffffffffff5ffffff665885888885885fffffff
    fffffffffffffff66fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555b5b555ffffffff5fffffff65885888885885fffffff
    ffffffffffffff66ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbffbbbb555bbbbbfbffff5fffffff65885888885885fffffff
    ffffffffffffff6fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5555bbb5555bbb555ffff5ffffffff5885888885885fffffff
    fffffffffffff6ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffb555555555555555bffff5ffffffff5685888885885fffffff
    ffffffffffff6ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbb8b88886b68bbfffffbffffffff5665888885885fffffff
    fffffffffff66ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffb5855588855565bfffffbffffffff5865888885885fffffff
    ffffffffff66ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff58b5b888b5b656fffffbffffffff5865888885885fffffff
    ffffffff66ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5885888885885666fffbffffffff5885888885885fffffff
    fffffff66fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5885888885885f6666ffffffffff5885688885885fffffff
    ffffff66ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5885888885885ffff6666fffffff5885668885885fffffff
    ffff66ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5885888885885ffffff6666fffff5b858688858b5fffffff
    ff66ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5885888885885ffffffff666666f55b5866885b55fffffff
    66ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5885888885885fffffffffff6666b55555555555bfffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5885888885885fffffffffffffff655555555555ffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5885888885885fffffffffffffffffb55bbb55bfffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5885888885885ffffffffffffffffffff555f6ffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5885888885885ffffffffffffffffffffb5bf66fffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5885888885885ffffffffffffffffffffbbbff66ffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5b858888858b5ffffffffffffffffffff555ffff6fffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55b5888885b55ffffffffffffffffffffb5bfffff66fffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffb55555555555bfffffffffffffffffffff5fffffff66ffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555555555ffffffffffffffffffffff5ffffffff66fff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffb55bbb55bfffffffffffffffffffffff5ffffffffff66f
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555ffffffffffffffffffffffffff5fffffffffff66
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffb5bffffffffffffffffffffffffff5fffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbffffffffffffffffffffffffff5fffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555ffffffffffffffffffffffffff5fffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffb5bffffffffffffffffffffffffffbfffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5fffffffffffffffffffffffffffbfffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5fffffffffffffffffffffffffffbfffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5fffffffffffffffffffffffffffbfffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5fffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5fffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5fffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5fffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6ffffffffff
    fffffff6fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff66fffffffff
    ffffff666fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff66666fffffff
    fffffff6fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff66666ffffffff
    ffffffffffffffffffff5fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6666ffffffff
    fffffffffffffffffff555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6666ffffffff
    ffffffffffffffffffff5fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6ff6ffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5fffffffff5ffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555ffffffff5ffffff
    fffff5fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5ffffffff555fffff
    ffff555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555fffff
    fffff5fffffffffffffffffffffffff5fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555555555ff
    ffffffffffffff6ffffffffffffffff55fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5555555fff
    ffffffffffffff5fffffffffffffff55555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555ffff
    ffffffffffff55555ffffffffffff55555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55f55ffff
    fffffffffffff555ffffffffffffff5555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5fff5ffff
    fffffffffffff5f5fffffffffffffff5f5ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5fffffffffffffffffffffffff
    fffffffffffffffffffffffffffffff5ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5fffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555ffffffffffffffffffffffff
    fffffffffffffffffffffff5fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555ffffffffffffffffffffffff
    fffffffffffffffffffffff5ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555555555ffffff5ffffffffffffff
    ffffffffffffffffffffff555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5555555fffffff5ffffffffffffff
    fffffffff6ffffffffffff555ffffffffffffffffffffffff5ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555fffffff555fffffffffffff
    fffffffff5fffffffff555555555fffffffffffffffffffff5ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55f55fffffff555fffffffffffff
    fffffff55555ffffffff5555555fffffffffffffffffffff555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5fff5ffffff55555ffffffffffff
    ffffffff555ffffffffff55555ffffffffffffffffffffff555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555555555fffffffff
    ffffffff5f5ffffffffff55f55fffffffffffffffffff555555555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5fffffffffffffffff555555555ffffffffff
    ffffffffffffff5ffffff5fff5ffffffffffffffffffff5555555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555ffffffffffffffffff55555ffffffffffff
    fffffffffffff555fffffffffffffffffffffffffffffff55555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5ffffffffffffffffff5558555fffffffffff
    fffffffffff5555555fffffffffffffffffffffffffffff55855ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5588855ffff5ffffff
    ffffffffffff55555fffffffffffff5ffffffffffffffff58885ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5888885fff555fffff
    `)
tiles.setCurrentTilemap(tilemap`層級1`)
mySprite2 = sprites.create(img`
    . . . . f f f f . . . . . 
    . . f f c c c c f f . . . 
    . f f c c c c c c f f . . 
    f f c c c c c c c c f f . 
    f f c c f c c c c c c f . 
    f f f f f c c c f c c f . 
    f f f f c c c f c c f f . 
    f f f f f f f f f f f f . 
    f f f f f f f f f f f f . 
    . f f f f f f f f f f . . 
    . f f f f f f f f f f . . 
    f e f f f f f f f f e f . 
    e 4 f 7 7 7 7 7 7 c 4 e . 
    e e f 6 6 6 6 6 6 f e e . 
    . . . f f f f f f . . . . 
    . . . f f . . f f . . . . 
    `, SpriteKind.Player)
mySprite2.bottom = 120
controller.moveSprite(mySprite2)
forever(function () {
    music.playMelody("D C D E C D F C ", 44)
})
game.onUpdateInterval(500, function () {
    tiles.placeOnRandomTile(mySprite, assets.tile`我的貼圖`)
})
