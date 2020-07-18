input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.magneticForce(Dimension.X))
})
radio.setGroup(17)
basic.forever(function () {
    if (input.magneticForce(Dimension.X) < 100) {
        basic.showIcon(IconNames.SmallDiamond)
        radio.sendString("doorOpen")
    } else {
        basic.clearScreen()
        radio.sendString("doorClosed")
    }
    basic.pause(2000)
})
