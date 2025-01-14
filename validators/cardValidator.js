export function luhnAlgorithm(cardNumber) {
    cardNumber = cardNumber.replace(/\s+/g, '');
    cardNumber = cardNumber.split('').reverse().join('');
    let sum = 0;
    for (let i = 0; i < cardNumber.length; i++) {
        let digit = Number.parseInt(cardNumber[i], 10);
        if (i % 2 !== 0) {
            digit *= 2;
            if (digit > 9) {
                digit -= 9;
            }
        }
        sum += digit;
    }
    return sum % 10 === 0;
}

export function getCardBrand(cardNumber) {
    const cardPatterns = {
        visa: /^4[0-9]{12}(?:[0-9]{3})?$/,
        mastercard: /^5[1-5][0-9]{14}$/,
        americanExpress: /^3[47][0-9]{13}$/,
        amex: /^3[47][0-9]{13}$/,
        elo: /^4011|4312|4389|4576|5041|5067|5090|6277|6362|6363|6364|6365|6366|6367|6368|6369|6500|6516|6550[0-9]{12,15}$/,
        hipercard: /^(6062|3841|6370|6371|6372|6373|6374|6375|6376|6377|6378|6379)[0-9]{10,13}$/,
        discover: /^6(?:011|5[0-9]{2})[0-9]{12}$/
    };

    for (const [brand, pattern] of Object.entries(cardPatterns)) {
        if (pattern.test(cardNumber)) {
            return brand;
        }
    }

    return 'Bandeira de cartão não reconhecida';
}