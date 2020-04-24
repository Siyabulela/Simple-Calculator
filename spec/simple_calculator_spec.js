const { add, multiply } = require("../src/simple_calculator")

describe("adds", function() {
    it("should add numbers", function() {
        expect(add(1, 2)).toEqual(3)
    })
    it("should add negative numbers", function() {
        expect(add(-1, -1)).toEqual(-2)
    })
    it("should add more numbers", function() {
        expect(add(1, 2, 3, 4, 5)).toEqual(15)
    })
})

describe("multiplies", function() {
    it("should multiply numbers", function() {
        expect(multiply(1, 3)).toEqual(3)
    })
    it("should multiply with a negative number", function() {
        expect(multiply(1, -3)).toEqual(-3)
    })
    it("should multiply more numbers", function() {
        expect(multiply(1, 2, 3, 4, 5)).toEqual(120)
    })
})