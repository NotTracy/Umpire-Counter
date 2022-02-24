let strike = 0
let ball = 0
input.onButtonPressed(Button.A, function () {
    strike += 1
    basic.showNumber(strike)
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(ball)
    basic.showNumber(strike)
    strike = 0
    ball = 0
})
input.onButtonPressed(Button.B, function () {
    ball += 1
    basic.showNumber(ball)
})
basic.forever(function () {
	
})
