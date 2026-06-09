// function to obscure a card number, showing only the last 4 digits
const obscureCard = (cardNumber) => {
    // conditional checks card digit length, <12 || >16 returns "Invalid Credit Card"s
    if (cardNumber.length < 12 || cardNumber.length > 16) {
        return "Invalid Credit Card";
    }
    const lastFour = cardNumber.slice(-4);
    const hidden = "*".repeat(cardNumber.length - 4);

    return hidden + lastFour;
};

module.exports = obscureCard;