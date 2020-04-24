function add() {
    sum = 0
    for (i = 0; i < arguments.length; i++) {
        sum = sum + arguments[i]
    }
    return sum
}

function multiply() {
    sum = 1
    for (i = 0; i < arguments.length; i++) {
        sum = sum * arguments[i]
    }
    return sum
}

module.exports = { add, multiply }