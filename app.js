const phones = [
    {
      brand: "Samsung",
      model: "Galaxy S21",
      ram: 8,
      rom: 128,
      camera: "64 megapixel",
      price: 799,
      image: "./images/s21.png",
    },
    {
      brand: "Apple",
      model: "iPhone 13",
      ram: 4,
      rom: 128,
      camera: "12 megapixel",
      price: 799,
      image: "./images/Iphone 13.png",
    },
    {
      brand: "OnePlus",
      model: "9",
      ram: 12,
      rom: 256,
      camera: "48 megapixel",
      price: 729,
      image: "./images/oneplus-9.png",
    },
    {
      brand: "Google",
      model: "Pixel 6",
      ram: 8,
      rom: 128,
      camera: "50 megapixel",
      price: 599,
      image: "./images/google-pixel-6.png",
    },
    {
      brand: "Xiaomi",
      model: "Mi 11",
      ram: 8,
      rom: 256,
      camera: "108 megapixel",
      price: 749,
      image: "./images/xiaomi mi 11.png",
    },
    {
      brand: "Sony",
      model: "Xperia 1 III",
      ram: 12,
      rom: 256,
      camera: "12 megapixel",
      price: 1299,
      image: "./images/sony-xperia.png",
    },
    {
      brand: "Oppo",
      model: "Find X3 Pro",
      ram: 12,
      rom: 256,
      camera: "50 megapixel",
      price: 1149,
      image: "./images/oppo.png",
    },
    {
      brand: "Vivo",
      model: "X60 Pro",
      ram: 12,
      rom: 256,
      camera: "48 megapixel",
      price: 999,
      image: "./images/vivo x60 pro.png",
    },
    {
      brand: "Nokia",
      model: "G50",
      ram: 4,
      rom: 128,
      camera: "48 megapixel",
      price: 299,
      image: "./images/nokia g50.webp",
    },
    {
      brand: "Motorola",
      model: "Edge 20",
      ram: 8,
      rom: 256,
      camera: "108 megapixel",
      price: 599,
      image: "./images/moto.png",
    },
    {
      brand: "Realme",
      model: "GT",
      ram: 12,
      rom: 256,
      camera: "64 megapixel",
      price: 499,
      image: "./images/realme.png",
    },
    {
      brand: "Asus",
      model: "ROG Phone 5",
      ram: 16,
      rom: 512,
      camera: "64 megapixel",
      price: 999,
      image: "./images/rog.png",
    },
    {
      brand: "HTC",
      model: "Desire 21 Pro",
      ram: 8,
      rom: 128,
      camera: "48 megapixel",
      price: 399,
      image: "./images/htc.png",
    },
    {
      brand: "Huawei",
      model: "P40 Pro",
      ram: 8,
      rom: 256,
      camera: "50 megapixel",
      price: 899,
      image: "./images/huawei.png",
    },
    {
      brand: "LG",
      model: "Wing",
      ram: 8,
      rom: 256,
      camera: "64 megapixel",
      price: 999,
      image: "./images/lg.png",
    },
    {
      brand: "ZTE",
      model: "Axon 20",
      ram: 8,
      rom: 128,
      camera: "64 megapixel",
      price: 399,
      image: "./images/ason.png",
    },
    {
      brand: "BlackBerry",
      model: "KEY2",
      ram: 6,
      rom: 64,
      camera: "12 megapixel",
      price: 649,
      image: "./images/blackberry.png",
    },
    {
      brand: "Lenovo",
      model: "Legion Phone Duel",
      ram: 16,
      rom: 512,
      camera: "64 megapixel",
      price: 999,
      image: "./images/lenovo.png",
    },
    {
      brand: "Alcatel",
      model: "3L",
      ram: 4,
      rom: 64,
      camera: "48 megapixel",
      price: 199,
      image: "./images/alcatel.png",
    },
    {
      brand: "TCL",
      model: "10 Pro",
      ram: 6,
      rom: 128,
      camera: "64 megapixel",
      price: 449,
      image: "./images/tcl.png",
    },
  ];

const div = document.querySelector(".container");
// const cartItems = [];

let cartItems = [];
const checkDataFromLocalStorage = JSON.parse(localStorage.getItem("cart"));
if (checkDataFromLocalStorage === null) {
  cartItems = [];
} else {
  cartItems = [...checkDataFromLocalStorage];
}
// console.log(checkDataFromLocalStorage);


// console.log(cartItems);

phones.map(function(item , index){
    // console.log(item);
    div.innerHTML +=  ` <div class="card">
            <div class = "img-div">
            <img class = "img" src="${item.image}" />
            </div>
            <div class = "content">
            <h2>Brand: ${item.brand}</h2>
            <h2>Model:  ${item.model}</h2>
            <h2>Price: $${item.price}</h2>
            </div>
            <button class = "btn-addtocart" onclick = "addToCart(${index})">Add to cart</button>
        </div>`
})

function addToCart(index) {
  const checkIndex = cartItems.indexOf(phones[index]);
  if (checkIndex === -1) {
    cartItems.push(phones[index]);
    phones[index].quantity = 1;
  } else {
    cartItems[checkIndex].quantity += 1;
  }
  console.log(cartItems);
  Swal.fire({
    title: "Good job!",
    text: "Item added to cart successfully!",
    icon: "success",
  });
}



function checkOut(){
  // console.log("checjkout");
  let convertArrIntoString = JSON.stringify(cartItems)
  localStorage.setItem("cart" , convertArrIntoString);
  window.location = "cart.html";
}

// let user = localStorage.getItem('cart')
// if(user){ //agar local storage main pehle se kuch hai tou item ko parse main convert karo means array main 
//   user = JSON.parse(user)
// }
// else{ // or agar local storage main kuch mojood nahi hai tou aik empty array bhejdo
//   user =[]
// }
// user.push(phones[index])
// localStorage.setItem(JSON.stringify('cart',user));





