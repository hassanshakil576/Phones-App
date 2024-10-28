let convert = JSON.parse(localStorage.getItem("cart"));
console.log(convert);

let div = document.querySelector(".output");


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
            </div>
            `
})

function increment(index){
    let h1 = document.querySelector(`#num-quantity-${index}`)
    h1.innerHTML++;
}

function decrement(index){
    let h1 = document.querySelector(`#num-quantity-${index}`)
    if(h1.innerHTML > "1"){
        h1.innerHTML--;
    }
}


function deleteData(index){
    div.innerHTML = ""
    convert.splice(index, 1)
    const newcartstring = JSON.stringify(convert)
    localStorage.setItem("cart",newcartstring)
    convert.map(function(item , index){
        div.innerHTML += `<div class = "card">
        <h1>Brand: ${item.brand}</h1>
                <h1>Model:  ${item.model}</h1>
                <h1>Ram: ${item.ram}</h1>
                <h1>Rom: ${item.rom}</h1>
                <h1>Camera: ${item.camera}</h1>
                <h1>Price: $${item.price}</h1>
                <div class  = "btn-container">
                <button onclick = "increment()">plus</button>
                <h1 id = "num-quantity">0</h1>
                <button onclick = "decrement()">minus</button>
                </div>
                <button onclick = "deleteData(${index})">Delete</button>
                </div>`
    })
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