let convert = JSON.parse(localStorage.getItem("cart"));
console.log(convert);

let div = document.querySelector(".container");


convert.map(function(item , index){
    div.innerHTML += `<div class = "card">
        <div class = "parent-div-img">
        <div class = "child-img-div">
            <img class = "img" src="${item.image}" />
        </div>
        <div class = "content">
            <h1>Brand: ${item.brand}</h1>
            <h1>Model:  ${item.model}</h1>
            <h1>Price: $${item.price}</h1>
        <div class  = "btn-container">
            <button class = "plus" onclick = "increment(${index} , ${item.price})">+</button>
            <h1 id = "num-quantity-${index}">${item.quantity}</h1>
            <button class = "minus" onclick = "decrement(${index} , ${item.price})">-</button>
        </div>
            <h2 id = "price-increase-${index}">price$ ${item.price * item.quantity}</h2>
            <button class = "buy-now-btn" onclick = "buyNow()">Buy now</button>
            <button class= "btn-delete" onclick = "deleteData(${index})">Delete</button>
        </div>
        </div>
        </div>`
})


function increment(index , price){
    let h1 = document.querySelector(`#num-quantity-${index}`)
    let h2 = document.querySelector(`#price-increase-${index}`)
    h1.innerHTML++;
    h2.innerHTML = `Price $${price * h1.innerHTML}`;

    convert[index].quantity = parseInt(h1.innerHTML);
    localStorage.setItem("cart", JSON.stringify(convert));
}

function decrement(index , price){
    let h1 = document.querySelector(`#num-quantity-${index}`)
    let h2 = document.querySelector(`#price-increase-${index}`)
    if(h1.innerHTML > "1"){
        h1.innerHTML--;
        h2.innerHTML = `Price $${price * h1.innerHTML}`;
    
        convert[index].quantity = parseInt(h1.innerHTML);
        localStorage.setItem("cart", JSON.stringify(convert));
    }
    
}


function deleteData(index){
    div.innerHTML = ""
    convert.splice(index, 1)
    const newcartstring = JSON.stringify(convert)
    localStorage.setItem("cart",newcartstring)
    convert.map(function(item , index){
        div.innerHTML += `<div class = "card">
            <div class = "parent-div-img">
            <div class = "child-img-div">
                <img class = "img" src="${item.image}" />
            </div>
            <div class = "content">
                <h1>Brand: ${item.brand}</h1>
                <h1>Model:  ${item.model}</h1>
                <h1>Price: $${item.price}</h1>
            <div class  = "btn-container">
                <button class = "plus" onclick = "increment(${index})">+</button>
                <h1 id = "num-quantity-${index}">1</h1>
                <button class = "minus" onclick = "decrement(${index})">-</button>
            </div>
                <button class= "btn-delete" onclick = "deleteData(${index})">Delete</button>
            </div>
            </div>
            </div>`
    })
}

function buyNow(){
    swal({
      title: "Are you sure?",
      text: "Once you add, your order will be submitted!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willSubmit) => {
      if (willSubmit) {
        swal("Your order has been submitted successfully!", {
          icon: "success",
        });
      } else {
        swal("Your order is still in the cart.");
      }
    });
  }






// function increment(index) {
//     let all = JSON.parse(localStorage.getItem('cart')) || [];
//     let get = all[index]; // Get the item at the specified index

//     // If the item exists, create the updated object
//     if (get) {
//         let obj = {
//             ...get,
//             quantity: get.quantity + 1
//         };

//         // Filter out the item that needs to be updated and add the updated object
//         all = all.map((data, i) => (i === index ? obj : data));

//         // Save the updated cart back to localStorage
//         localStorage.setItem('cart', JSON.stringify(all));
//         console.log(all); // Log the updated cart
//         window.location.reload()
//     } else {
//         console.log("Item not found in the cart.");
//     }
// }