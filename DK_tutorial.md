## Svingningsmåleren! 
Nu skal du bygge en temperatur alarm!   
* **OBS!** Du skal bruge en @boardname@ i mindst version 2 (V2)

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
Træk blokken `||logic:hvis ... så||` ind i blokken `||input.når der trykkes på knap B||`


```blocks
input.onButtonPressed(Button.B, function () {
    if (true) {
        
    }
})
```


## Knap B: Sluk datalogning
Træk blokken `||logic: 0 = 0 ||` ind i blokken `||logic:hvis ... så||` hvor der står "sand"


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
Træk blokken `||variables:sæt datalogningStatus til||` ind i blokken `||logic:hvis ... så||`


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
Træk blokken `||basic.ryd skærmen||` ind under `||basic.pause||`
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
Træk en `||logic:hvis ... så||` ind i blokken `||loops:every||`
```blocks
loops.everyInterval(1000, function () {
    if (true) {
    }
})
```


## Datalogning hvert sekund 
Træk `||logic: 0 = 0 ||` ind i blokken `||logic:hvis ... så||` 
```blocks
loops.everyInterval(1000, function () {
    if (0 == 0) {
    }
})
```


## Datalogning hvert sekund 
Træk derefter variablen `||variables:datalogningStatus||` ind i `||logic: 0 = 0 ||` blokkens første 0

```blocks
loops.everyInterval(1000, function () {
    if (datalogningStatus == 0) {
    }
})
```

## Datalogning hvert sekund 
Skift værdien i `||logic: datalogningStatus = 0 ||` til 1. Nu spørger programmet om `||variables:datalogningStatus||` = 1

```blocks
loops.everyInterval(1000, function () {
    if (datalogningStatus == 1) {
    }
})
```

## Datalogning hvert sekund 
Træk endnu en `||logic:hvis ... så||` ind i blokken `||logic:hvis ... så||`. Denne bliver kun aktiveret hvis datalogning er tændt. 

```blocks
loops.everyInterval(1000, function () {
    if (datalogningStatus == 1) {
        temperatur = input.temperature()
        if (true) {
        }
        
    }
})
```

## Datalogning hvert sekund 
Træk blokken `||variables:sæt temperatur til||` ind i blokken `||logic:hvis ... så||`


```blocks
loops.everyInterval(1000, function () {
    if (datalogningStatus == 1) {
        temperatur = input.temperature()
        if (true) {
        }
        
    }
})
```

## Datalogning
Træk `||logic: og ||` ind under `||variables:sæt temperatur til||`

```blocks
loops.everyInterval(1000, function () {
    if (datalogningStatus == 1) {
        temperatur = input.temperature()
        // Vurder temperaturområde
        if (true && true) {
        }
        )
    }
})
```
