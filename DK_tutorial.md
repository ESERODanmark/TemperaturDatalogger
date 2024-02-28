## Temperaturmåler @unplugged
**OBS!** Du skal bruge en @boardname@ i mindst version 2 (V2)
<div style="display: flex; justify-content: space-around;">
  <img src="https://github.com/ESERODanmark/TemperaturDatalogger/blob/master/ikon_tempAlert.png?raw=true" alt="DampVibrations" width="300"/>
  <img src="https://github.com/ESERODanmark/multicounter/blob/master/clickTip.gif?raw=true" alt="ClickTip" width="300"/>
</div>



## Variabel 
Opret en variabel og kald den `||variables:datalogningStatus||`   

```blocks
input.onButtonPressed(Button.A, function () {
})
```


## Knap A: Sæt variablen til tændt datalogning
Træk blokken `||variables:sæt datalogningStatus til||` ind i `||input.når der trykkes på knap A||`

```blocks
input.onButtonPressed(Button.A, function () {
    datalogningStatus = 0
})
```

## Knap A: Sæt variablen til tændt datalogning
Ændr 0 i blokken `||variables:sæt datalogningStatus til||` til 1

```blocks
input.onButtonPressed(Button.A, function () {
    datalogningStatus = 1
})
```

## Knap A: Skærmbillede for tændt datalogning
Træk en `||basic.vis LED'er||` blok ind i `||input.når der trykkes på knap A||`

```blocks
input.onButtonPressed(Button.A, function () {
    datalogningStatus = 1
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
```

## Knap A: Skærmbillede for tændt datalogning
Tegn et symbol i blokken `||basic.vis LED'er||` der viser at datalogning er startet

```blocks
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
```

## Knap B: Sluk datalogning
Træk `||input: når der trykkes på knap B||` ind på skrivebordet


```blocks
input.onButtonPressed(Button.B, function () {
})
```


## Knap B: Sluk datalogning
Træk blokken `||logic:hvis sand så||` ind i blokken `||input.når der trykkes på knap B||`


```blocks
input.onButtonPressed(Button.B, function () {
    if (true) {
        
    }
})
```


## Knap B: Sluk datalogning
Træk blokken `||logic: 0 = 0 ||` ind i blokken `||logic:hvis sand så||` hvor der står "sand"


```blocks
input.onButtonPressed(Button.B, function () {
    if (0 == 0) {
        
    }
})
```


## Knap B: Sluk datalogning
Træk blokken `||variables:datalogningStatus||` ind i `||logic: 0 = 0 ||`


```blocks
input.onButtonPressed(Button.B, function () {
    if (datalogningStatus==0) {
    }
})
```

## Knap B: Sluk datalogning
Skift værdien 0 til 1

```blocks
input.onButtonPressed(Button.B, function () {
    if (datalogningStatus == 1) {
    }
})
```



## Knap B: Sluk datalogning
Træk blokken `||variables:sæt datalogningStatus til||` ind i blokken `||logic:hvis sand så||`


```blocks
input.onButtonPressed(Button.B, function () {
    if (datalogningStatus == 1) {
        datalogningStatus = 0
    }
})
```



## Knap B: Skærmbillede for sluk datalogning
Træk en `||basic.vis LED'er||` blok ind under `||variables:sæt datalogningStatus til||` 


```blocks
input.onButtonPressed(Button.B, function () {
    if (datalogningStatus == 1) {
        datalogningStatus = 0
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        
    }
})
```


## Knap B: Skærmbillede for sluk datalogning
Tegn et symbol for at datalogningen er slukket 

```blocks
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
        }
})
```

## Knap B: Skærmbillede for sluk datalogning
Træk blokken `||basic.ryd skærmen||`. Skærmen viser nu dit symbol, pauser og slukker skærmen

```blocks
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
```

## Knap A+B Slet en måling
Du skal kunne slette målingerne. Træk blokken `||input:når der trykkes på knap A+B||` ind på skrivebordet
```blocks
input.onButtonPressed(Button.AB, function () {
 })
```
## Knap A+B Slet en måling
Træk blokken `||datalogger:delete log||` ind i `||input:når der trykkes på knap A+B||` (sletter målingen) 


```blocks
input.onButtonPressed(Button.AB, function () {
    datalogger.deleteLog()


})
```




## Knap A+B Slet en måling
Træk en `||basic.vis LED'er||` blok ind under `||datalogger:delete log||` 


```blocks
input.onButtonPressed(Button.AB, function () {
    datalogger.deleteLog()
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
```


## Knap A+B Slet en måling
Tegn et symbol for at data er blevet slettet 
```blocks
input.onButtonPressed(Button.AB, function () {
    datalogger.deleteLog()
    basic.showLeds(`
        . . . . .
        . # . # .
        . . # . .
        . # . # .
        . . . . .
        `)
})
```


## Knap A+B Slet en måling
Træk blokken `||basic.ryd skærmen||` ind i bunden
```blocks
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
```

## Datalogning
Opret variablen  `||variables:temperatur||`

## Datalogning hvert sekund 
Træk blokken `||loops:every||` ind på skrivebordet

```blocks
loops.everyInterval(500, function () {
})
```

## Datalogning hvert sekund 
Ændr værdien af `||loops:every||` fra 500 til 1 sekund (1000 ms)  

```blocks
loops.everyInterval(1000, function () {
})
```

## Datalogning hvert sekund 
Træk blokken `||variables:sæt temperatur til||` ind i blokken  `||loops:every||`
```blocks
loops.everyInterval(1000, function () {
    temperatur = 0
})
```

## Datalogning hvert sekund 
Sæt `||input:temperatur||` ind i blokken  `||variables:sæt temperatur til||` hvor der står 0
```blocks
loops.everyInterval(1000, function () {
    temperatur = input.temperature()
})
```



## Datalogning hvert sekund 
Træk blokken `||logic:hvis sand så||` ind i blokken under `||variables:sæt temperatur til||`
```blocks
loops.everyInterval(1000, function () {
    temperatur = input.temperature()
    if (true) {

    }
})
```


## Datalogning hvert sekund 
Træk en `||logic: 0 < 0 ||` ind i blokken `||logic:hvis sand så||` hvor der står "sand"
```blocks
loops.everyInterval(1000, function () {
    temperatur = input.temperature()
    if (0 < 0) {

    }
})
```

## Datalogning hvert sekund 
Ændr `||logic: 0 < 0 ||` til `||logic: 0 ≥ 0 ||` ved at trykke på  < tegnet i `||logic: 0 < 0 ||` blokken
```blocks
loops.everyInterval(1000, function () {
    temperatur = input.temperature()
    if (0 >= 0) {

    }
})
```




## Datalogning hvert sekund 
Træk  blokken `||variables:temperatur||` ind i blokken `||logic: 0 ≥ 0 ||` på det første 0's plads
```blocks
loops.everyInterval(1000, function () {
    temperatur = input.temperature()
    // Vurder temperaturområde
    if (temperatur >= 0) {

    }
})
```



## Datalogning hvert sekund 
Ret det andet 0 til 19 
```blocks
loops.everyInterval(1000, function () {
    temperatur = input.temperature()
    // Vurder temperaturområde
    if (temperatur >= 19) {

    }
})
```


## Datalogning hvert sekund 
Træk endnu en `||logic:hvis sand så||` blok ind i den ind i `||logic:hvis sand så||` blokken du lige har lavet.
```blocks
loops.everyInterval(1000, function () {
    temperatur = input.temperature()
    // Vurder temperaturområde
    if (temperatur >= 19) {
        if (True) {
            
        }
    }
})
```


## Datalogning hvert sekund 
Træk en `||logic: 0 < 0 ||` ind i `||logic:hvis sand så||` blokken hvor der står "sand"
```blocks
loops.everyInterval(1000, function () {
    temperatur = input.temperature()
    // Vurder temperaturområde
    if (temperatur >= 19) {
        if (0 < 0) {
            
        }
    }
})
```

## Datalogning hvert sekund 
Ændr `||logic: 0 < 0 ||` til `||logic: 0 ≤ 0 ||` ved at trykke på  < tegnet i `||logic: 0 < 0 ||` blokken

```blocks
loops.everyInterval(1000, function () {
    temperatur = input.temperature()
    // Vurder temperaturområde
    if (temperatur >= 19) {
        if (0 <= 0) {
            
        }
    }
})
```



## Datalogning hvert sekund 
Træk  blokken `||variables:temperatur||` ind i blokken `||logic: 0 ≤ 0 ||` på det første 0's plads
```blocks
loops.everyInterval(1000, function () {
    temperatur = input.temperature()
    // Vurder temperaturområde
    if (temperatur >= 19) {
        if (temperatur <= 0) {
            
        }
    }
})
```

## Datalogning hvert sekund 
Ret det andet 0 til 24 
```blocks
loops.everyInterval(1000, function () {
    temperatur = input.temperature()
    // Vurder temperaturområde
    if (temperatur >= 19) {
        if (temperatur <= 24) {
            
        }
    }
})
```
## Variabel 
Opret en variabel og kald den `||variables:temperaturStatus||`   

## Datalogning hvert sekund 
Træk blokken `||variables:sæt temperaturStatus til||` ind i blokken `||logic:hvis sand så||` du lige har lavet
```blocks
loops.everyInterval(1000, function () {
    temperatur = input.temperature()
    // Vurder temperaturområde
    if (temperatur >= 19) {
        if (temperatur <= 24) {
            temperaturStatus = 0
        }
    }
})
```
## Datalogning hvert sekund 
Træk en `||text: " "||` blok ind på 0's plads
```blocks
loops.everyInterval(1000, function () {
    temperatur = input.temperature()
    // Vurder temperaturområde
    if (temperatur >= 19) {
        if (temperatur <= 24) {
            temperaturStatus = " "
        }
    }
})
```



## Datalogning hvert sekund 
Ret "0" til "Normal" i `||variables:sæt temperaturStatus til||` 
```blocks
loops.everyInterval(1000, function () {
    temperatur = input.temperature()
    // Vurder temperaturområde
    if (temperatur >= 19) {
        if (temperatur <= 24) {
            temperaturStatus = "Normal"
        }
    }
})
```




## Datalogning hvert sekund 
Træk blokken `||logic:hvis sand så||` ind under den sidste `||logic:hvis sand så||` du lige har lavet
```blocks
loops.everyInterval(1000, function () {
    temperatur = input.temperature()
    // Vurder temperaturområde
    if (temperatur >= 19) {
        if (temperatur <= 24) {
            temperaturStatus = "Normal"
        }
    }
    if (true) {
    }

})
```


## Datalogning hvert sekund 
Træk en `||logic: 0 < 0 ||` ind i blokken `||logic:hvis sand så||` hvor der står "sand"
```blocks
loops.everyInterval(1000, function () {
    temperatur = input.temperature()
    // Vurder temperaturområde
    if (temperatur >= 19) {
        if (temperatur <= 24) {
            temperaturStatus = "Normal"
        }
    }
    if (0  < 0) {
    }

})
```

## Datalogning hvert sekund 
Ændr `||logic: 0 < 0 ||` til `||logic: 0 > 0 ||` ved at trykke på  < tegnet i `||logic: 0 < 0 ||` blokken

```blocks
loops.everyInterval(1000, function () {
    temperatur = input.temperature()
    // Vurder temperaturområde
    if (temperatur >= 19) {
        if (temperatur <= 24) {
            temperaturStatus = "Normal"
        }
    }
    if (0  > 0) {
    }

})
```

## Datalogning hvert sekund 
Træk  blokken `||variables:temperatur||` ind i blokken `||logic: 0 > 0 ||` på det første 0's plads
```blocks
loops.everyInterval(1000, function () {
    temperatur = input.temperature()
    // Vurder temperaturområde
    if (temperatur >= 19) {
        if (temperatur <= 24) {
            temperaturStatus = "Normal"
        }
    }
    if (temperatur > 0) {
    }

})
```


## Datalogning hvert sekund 
Ret det andet 0 til 24

```blocks
loops.everyInterval(1000, function () {
    temperatur = input.temperature()
    // Vurder temperaturområde
    if (temperatur >= 19) {
        if (temperatur <= 24) {
            temperaturStatus = "Normal"
        }
    }
    if (temperatur > 24) {
    }

})
```


## Datalogning hvert sekund 
Træk blokken `||variables:sæt temperaturStatus til||` ind i blokken `||logic:hvis sand så||` du lige har lavet

```blocks
loops.everyInterval(1000, function () {
    temperatur = input.temperature()
    // Vurder temperaturområde
    if (temperatur >= 19) {
        if (temperatur <= 24) {
            temperaturStatus = "Normal"
        }
    }
    if (temperatur > 24) {
        temperaturStatus = 0
    }
    if (true) {
        
    }
})
```

## Datalogning hvert sekund 
Træk en `||text: " "||` blok ind på 0's plads

```blocks
loops.everyInterval(1000, function () {
    temperatur = input.temperature()
    // Vurder temperaturområde
    if (temperatur >= 19) {
        if (temperatur <= 24) {
            temperaturStatus = "Normal"
        }
    }
    if (temperatur > 24) {
        temperaturStatus = " "
    }
    if (true) {
        
    }
})
```

## Datalogning hvert sekund 
Ret "0" til "Varm" i `||variables:sæt temperaturStatus til||` 

```blocks
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
    if (true) {
        
    }
})
```


## Datalogning hvert sekund 
Træk blokken `||logic:hvis sand så||` ind i bunden af `||loops:every||` blokken. Se evt. **TIP** pæren.

```blocks
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
    if (true) {
        
    }
})
```

## Datalogning hvert sekund 
Træk en `||logic: 0 < 0 ||` ind i blokken `||logic:hvis sand så||` hvor der står "sand"
```blocks
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
    if (0 < 0) {
        
    }
})
```

## Datalogning hvert sekund 
Træk  blokken `||variables:temperatur||` ind i blokken `||logic: 0 < 0 ||` på det første 0's plads

```blocks
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
    if (temperatur < 0) {
        
    }
})
```


## Datalogning hvert sekund 
Ret det andet 0 til 19

```blocks
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
        
    }
})
```


## Datalogning hvert sekund 
Træk blokken `||variables:sæt temperaturStatus til||` ind i blokken `||logic:hvis sand så||` du lige har lavet

```blocks
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
        temperaturStatus = 0
    }
})
```

## Datalogning hvert sekund 
Træk en `||text: " "||` blok ind på 0's plads
```blocks
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
        temperaturStatus = " "
    }
})
```



## Datalogning hvert sekund 
Ret "0" til "Kold" i `||variables:sæt temperaturStatus til||` 

```blocks
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
})
```

## Datalogning hvert sekund 
Træk blokken `||logic:hvis sand så||` ind under den sidste `||logic:hvis sand så||` du lige har lavet

```blocks
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
    if (true) {

        )
    }
})
```


## Datalogning hvert sekund 
Træk en `||logic: 0 = 0 ||` ind i blokken `||logic:hvis sand så||` hvor der står "sand"


```blocks
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
    if (0 == 0) {

        )
    }
})
```

## Datalogning hvert sekund 
Træk  blokken `||variables:datalogningStatus||` ind i blokken `||logic: 0 = 0 ||` på det første 0's plads

```blocks
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
    if (datalogningStatus == 0) {

        )
    }
})
```

## Datalogning hvert sekund 
Skriv 1 på det andet 0's plads

```blocks
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

        )
    }
})
```

## Datalogning hvert sekund 
Træk `||datalogger:log data||` ind i `||logic:hvis sand så||`

```blocks
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
        datalogger.createCV("", ""),
        )
    }
})
```


## Datalogning hver 100 ms
Udfyld kolonnetitel med navnet "Temperatur" 

```blocks
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
        datalogger.createCV("Temperatur", ""),
        )
    }
})
```

## Datalogning hver 100 ms
Udfyld "value" med blokken `||variables:temperatur||`

```blocks
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
        )
    }
})
```

## Datalogning hver 100 ms
Tryk på det lille plus helt til højre i `||datalogger:log data||` blokken du lige har udfyldt

```blocks
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
        datalogger.createCV("", "")
        )
    }
})
```


## Datalogning hver 100 ms
Nu dukker en ny kolonne op. Udfyld kolonnetitel med navnet "Status" 

```blocks
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
        datalogger.createCV("Status", "")
        )
    }
})
```



## Datalogning hver 100 ms
Udfyld "value" med blokken `||variables:temperaturStatus||`

```blocks
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
        datalogger.createCV("Status", temperaturStatus)
        )
    }
})
```


```template
input.onButtonPressed(Button.A, function () {
}
```