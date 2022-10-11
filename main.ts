input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . # # # .
        # . # . #
        # # # # #
        . # # # .
        . # # # .
        `)
    basic.showString("LOSER!")
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . . . . .
        # . # . #
        # # # # #
        # # # # #
        . . . . .
        `)
    basic.showString("WINNER!")
})
basic.forever(function () {
    basic.showLeds(`
        . . . . .
        . # # . .
        # # # . .
        . # # # #
        . # # # .
        `)
    basic.showLeds(`
        . # # . .
        # # # . .
        . # # # #
        . # # # .
        . . . . .
        `)
    for (let index = 0; index < 4; index++) {
        for (let index = 0; index < 2; index++) {
            music.playTone(415, music.beat(BeatFraction.Double))
        }
        music.playTone(554, music.beat(BeatFraction.Double))
        music.playTone(622, music.beat(BeatFraction.Whole))
        music.playTone(698, music.beat(BeatFraction.Whole))
        music.playTone(622, music.beat(BeatFraction.Whole))
        music.playTone(523, music.beat(BeatFraction.Whole))
        music.playTone(415, music.beat(BeatFraction.Double))
        music.playTone(831, music.beat(BeatFraction.Whole))
        music.playTone(932, music.beat(BeatFraction.Whole))
        music.playTone(831, music.beat(BeatFraction.Whole))
        music.playTone(698, music.beat(BeatFraction.Whole))
        music.playTone(554, music.beat(BeatFraction.Whole))
        music.playTone(622, music.beat(BeatFraction.Whole))
        music.playTone(554, music.beat(BeatFraction.Whole))
        music.playTone(415, music.beat(BeatFraction.Whole))
        music.playTone(466, music.beat(BeatFraction.Double))
        music.playTone(622, music.beat(BeatFraction.Double))
        music.playTone(932, music.beat(BeatFraction.Double))
        for (let index = 0; index < 2; index++) {
            music.playTone(932, music.beat(BeatFraction.Whole))
        }
    }
})
