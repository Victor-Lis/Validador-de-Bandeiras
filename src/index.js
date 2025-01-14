import { luhnAlgorithm, getCardBrand } from "../validators/cardValidator.js"

const cardNumbers = [
  '4111111111111111', // Visa
  '5500000000000004', // MasterCard
  '340000000000009',  // American Express
  '30000000000004',   // Diners Club
  '6011000000000004', // Discover
  '201400000000009',  // enRoute
  '3088000000000009', // JCB
  '6362970000457013', // Elo
  '6062825624254001'  // Hipercard
];

cardNumbers.map(cardNumber => {
  if (luhnAlgorithm(cardNumber)) {
    const brand = getCardBrand(cardNumber);
    console.log(`A bandeira do cartão é: ${brand}`);
  } else {
    console.log(`O número do cartão ${cardNumber} é inválido.`);
  }
});