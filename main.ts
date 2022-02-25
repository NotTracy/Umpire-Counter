input.onButtonPressed(Button.A, function () {
    strike += 1
    basic.pause(500)
    basic.showString("S")
    basic.showNumber(strike)
    if (strike == 3) {
        basic.clearScreen()
        basic.showString("OUT")
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
    basic.showNumber(ball)
    basic.showNumber(strike)
    strike = 0
    ball = 0
})
input.onButtonPressed(Button.B, function () {
    ball += 1
    basic.pause(500)
    basic.showString("B")
    basic.showNumber(ball)
    if (ball == 4) {
        basic.clearScreen()
        basic.showString("WALK")
    }
})
let ball = 0
let strike = 0
basic.showIcon(IconNames.Duck)
basic.clearScreen()
basic.forever(function () {
	
})
