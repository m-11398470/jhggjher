basic.forever(function () {
    if (input.lightLevel() < 80) {
        pins.servoWritePin(AnalogPin.P0, 180)
    } else {
        pins.servoWritePin(AnalogPin.P0, 0)
    }
})
