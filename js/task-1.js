function makeTransaction(quantity, pricePerDroid) {
    // Toplam fiyatı hesapla
const totalPrice = quantity * pricePerDroid;
    
    // İstenen mesaj formatı
    return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
}

// Fonksiyonun çıktısını test et
console.log(makeTransaction(5, 3000)); // "You ordered 5 droids worth 15000 credits!"
console.log(makeTransaction(3, 1000)); // "You ordered 3 droids worth 3000 credits!"
console.log(makeTransaction(10, 500)); // "You ordered 10 droids worth 5000 credits!"


//Test
console.log(getShippingMessage("Australia", 120, 50)); // "Shipping to Australia will cost 170 credits"
console.log(getShippingMessage("Germany", 80, 20)); // "Shipping to Germany will cost 100 credits"
console.log(getShippingMessage("Sweden", 100, 20)); // "Shipping to Sweden will cost 120 credits"
