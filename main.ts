input.onButtonPressed(Button.A, function () {
    degrees += 10
    servos.turnServo(servos.ServoPin.P1, degrees)
})
input.onButtonPressed(Button.B, function () {
    degrees += -10
    servos.turnServo(servos.ServoPin.P1, degrees)
})
let degrees = 0
degrees = 0
servos.motorPinPower(servos.MotorPin.Left, servos.Power.On)
servos.turnServo(servos.ServoPin.P1, degrees)
loops.everyInterval(1000, function () {
    basic.showNumber(degrees)
})
basic.forever(function () {
	
})
