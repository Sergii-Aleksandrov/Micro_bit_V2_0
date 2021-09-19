input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Yes)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.No)
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    basic.clearScreen()
})
input.onGesture(Gesture.Shake, function () {
    basic.showString("Hello Maksim! I am Micro:Bit")
    basic.showIcon(IconNames.Happy)
})
