// Math_Operators  (+, -, *, **, /)
// let product;
const product = Number(prompt("Enter Product Price"));
const discount = Number(prompt("Enter Discount Value"));
const gst = Number(prompt("Enter GST Value"));

// document.getElementById("productAmount").innerHTML = product = Number(prompt("Enter Product Price"));

document.getElementById("productAmount").innerHTML = product ;
document.getElementById("Discount_Amount").innerHTML = discount ;
document.getElementById("GST_Amount").innerHTML = gst ;
// document.getElementById("SubTotal").innerHTML = (product*(1-discount/100))*(1+gst/100);

document.getElementById("SubTotal").innerHTML = product-(product*discount/100)+(product-(product*discount/100))*gst/100;


