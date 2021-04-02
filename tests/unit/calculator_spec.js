var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.strictEqual(true, true)
  })

// calculator.add() - add 1 to 4 and get 5
  it("can add 1 to 4 and get 5", function(){
    calculator.previousTotal = 1;
    calculator.add(4);
    assert.strictEqual(5, calculator.runningTotal)
  });

  
  // calculator.subtract() subtract 4 from 7 and get 3
  it("can subtract 4 from 7 and get 3", function(){
    calculator.previousTotal = 7;
    calculator.subtract(4);
    assert.strictEqual(3, calculator.runningTotal)
  });

// calculator.multiply() - multiply 3 by 5 and get 15
  it("can multiply 3 by 5 and get 15", function(){
    calculator.previousTotal = 3;
    calculator.multiply(5);
    assert.strictEqual(15, calculator.runningTotal)
  });


// calculator.divide() - divide 21 by 7 and get 3
  it("can divide 21 by 7 and get 3", function(){
    calculator.previousTotal = 21;
    calculator.divide(7);
    assert.strictEqual(3, calculator.runningTotal);
});
  
// calculator.numberClick() - concatenate multiple number button clicks
  it("can concatenate multiple number button clicks", function(){
    calculator.numberClick(1);
    calculator.numberClick(2);
    calculator.numberClick(3);
    assert.strictEqual(123, calculator.runningTotal);
  });

// calculator.operatorClick() - chain multiple operations together
  it("can chain multiple operations together", function(){
    calculator.numberClick(2);
    calculator.operatorClick('*');
    calculator.numberClick(5);
    calculator.operatorClick('+');
    calculator.numberClick(4);
    calculator.operatorClick('=');
    assert.strictEqual(14, calculator.runningTotal);
  });

// calculator.clearClick() - clear the running total without affecting the calculation
  it("can clear the running total without affecting the calculation", function(){
    calculator.numberClick(1);
    calculator.operatorClick('+');
    calculator.numberClick(1);
    calculator.operatorClick('=');
    calculator.operatorClick('+');
    calculator.clearClick();
    calculator.numberClick(8);
    calculator.operatorClick('=');
    assert.strictEqual(10, calculator.runningTotal);
  });

});



