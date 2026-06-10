// Question #5
const products = [
  {
    name: "เสื้อยืด",
    price: 10,
    quantity: 2,
  },
  {
    name: "กางเกงยีนส์",
    price: 5,
    quantity: 3,
  },
  {
    name: "เสื้อเชิ้ต",
    price: 10,
    quantity: 5,
  },
];

const promotionCode = "";
// เริ่มเขียนโค้ดตรงนี้

// logic in code: function, if-else
let calculateTotalPrice = function(products, promotionCode) {
  let point = 0;

  if (promotionCode === "") {
    console.log("good")
    return point = (products[0].price * products[0].quantity) 
  }
  else if (promotionCode === "SALE20") {

  }
  else if (promotionCode === "SALE50") {

  }
};

console.log(calculateTotalPrice("เสื่อเชื้อ", ""))

