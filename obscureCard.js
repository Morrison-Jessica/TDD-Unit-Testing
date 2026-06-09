const obscureCard = (cardNumber) => {
    const lastFour = cardNumber.slice(-4);
    const hidden = "*".repeat(cardNumber.length - 4);

    return hidden + lastFour;
};

module.exports = obscureCard;