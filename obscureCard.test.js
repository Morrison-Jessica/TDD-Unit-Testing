// positive/negative test that returns obscured credit card number 12 digits with the last 4 digits visible
// input: "123456789012"
// output: "********9012"
// or
// message: "Invalid credit card number" 

// function to obscure a card number, showing only the last 4 digits
const obscureCard = require('./obscureCard');

describe('Credit Card Obscuring Tests', ()=> {
    test('returns obscured 12-digit credit card number', () => {
        expect(obscureCard("123456789012")).toEqual("********9012");
    })
})

// 16 digit test (positive)
test('returns obscured 16-digit credit card number', () => {
    expect(obscureCard("1234567890123456"))
        .toEqual("************3456");
});

// < 12 digit test (negative)
test('returns invalid for less than 12 digits', () => {
    expect(obscureCard("1234567890"))
        .toEqual("Invalid Credit Card");
});

// > 16 digit test (negative)
// test('returns invalid for more than 16 digits', () => {
//     expect(obscureCard("12345678901234567"))
//         .toEqual("Invalid Credit Card");
// });