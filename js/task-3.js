function getElementWidth(content, padding, border) {
    // Parametrelerdeki "px" birimlerini kaldırıp sayısal değerlere dönüştürme
    const contentWidth = parseFloat(content);
    const paddingWidth = parseFloat(padding) * 2; // Sol ve sağ padding toplamını alıyoruz
    const borderWidth = parseFloat(border) * 2; // Sol ve sağ border toplamını alıyoruz

    // Toplam genişliği hesaplama
    return contentWidth + paddingWidth + borderWidth;
}

// Testler
console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200

