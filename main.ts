let datalogningStatus = 0
let temperatur = 0
let temperaturStatus = ""
input.onButtonPressed(Button.A, function () {
    datalogningStatus = 1
    basic.showLeds(`
        . . . . .
        . . # . .
        . . # . .
        . . # . .
        . . . . .
        `)
})
input.onButtonPressed(Button.AB, function () {
    datalogger.deleteLog()
    basic.showLeds(`
        . . . . .
        . # . # .
        . . # . .
        . # . # .
        . . . . .
        `)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    if (datalogningStatus == 1) {
        datalogningStatus = 0
        basic.showLeds(`
            . . . . .
            . # # # .
            . # . # .
            . # # # .
            . . . . .
            `)
        basic.clearScreen()
    }
})
loops.everyInterval(1000, function () {
    temperatur = input.temperature()
    // Vurder temperaturområde
    if (temperatur >= 19) {
        if (temperatur <= 24) {
            temperaturStatus = "Normal"
        }
    }
    if (temperatur > 24) {
        temperaturStatus = "Varm"
    }
    if (temperatur < 19) {
        temperaturStatus = "Kold"
    }
    if (datalogningStatus == 1) {
        datalogger.log(
        datalogger.createCV("Temperatur", temperatur),
        datalogger.createCV("Temperatur Status", temperaturStatus)
        )
    }
})
