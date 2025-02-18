function getShippingMessage(country, price, deliveryFee) {
    // Hesap //
    const totalCost = price + deliveryFee;
    // İstenen Mesaj //
    return `Shipping to ${country} will cost ${totalCost} credits`;
}

//Test 
console.log(getShippingMessage("Australia", 120, 50)); // "Shipping to Australia will cost 170 credits"
console.log(getShippingMessage("Germany", 80, 20)); // "Shipping to Germany will cost 100 credits"
console.log(getShippingMessage("Sweden", 100, 20)); // "Shipping to Sweden will cost 120 credits"
