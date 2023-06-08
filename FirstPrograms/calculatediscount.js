var sellingPrice = 199;
var listingPrice = 799;

var discountPercent = ((listingPrice - sellingPrice) / listingPrice) * 100;

console.log("Discount Percentage is:" + discountPercent);

displayDiscountPercentage = Math.round(discountPercent);//Math.round is a method it rounds a value and give the exact value

console.log(displayDiscountPercentage + "% off");