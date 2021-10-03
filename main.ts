input.onButtonPressed(Button.A, function () {
    x += 1
    basic.pause(50)
    basic.showNumber(x)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    y += 1
    basic.pause(50)
    basic.showNumber(y)
    basic.clearScreen()
})
let y = 0
let x = 0
basic.pause(1000)
for (let index = 0; index < 2; index++) {
    basic.pause(50)
    basic.showArrow(ArrowNames.West)
    basic.clearScreen()
}
basic.pause(50)
basic.showString("x")
basic.pause(200)
for (let index = 0; index < 2; index++) {
    basic.pause(50)
    basic.showArrow(ArrowNames.East)
    basic.clearScreen()
}
basic.pause(50)
basic.showString("y")
basic.pause(200)
for (let index = 0; index < 2; index++) {
    basic.pause(50)
    basic.showArrow(ArrowNames.North)
    basic.clearScreen()
}
basic.pause(50)
basic.showString("=")
basic.pause(200)
basic.clearScreen()
basic.showString("A+B=C")
basic.forever(function () {
    if (input.logoIsPressed()) {
        basic.showNumber(x * y)
        basic.pause(500)
        basic.clearScreen()
    }
})
