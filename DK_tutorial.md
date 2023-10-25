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
Træk blokken `||basic.pause||` ind under symbolet du har tegnet
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
    basic.pause(1000)
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
    basic.pause(1000)
    basic.clearScreen()
})
```
