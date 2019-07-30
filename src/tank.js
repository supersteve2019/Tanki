function buildTank(){
    return {
        model : "Random Tank",
        health : 100,
        position : {
            x : 0,
            y : 0,
        }
    }
}
const playerTank = buildTank()
console.log (`The tank has ${playerTank.health} health.`)