// positive/negative test that returns obscured credit card number 12 digits with the last 4 digits visible
// input: "123456789012"
// output: "********9012"
// or
// message: "Invalid credit card number" 

const obscureCard = require('./obscureCard');

describe('Credit Card Obscuring Tests', ()=> {
    test('returns obscured 12-digit credit card number', () => {
        expect(obscureCard("123456789012")).toEqual("********9012");
    })
})