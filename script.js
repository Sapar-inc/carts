let cart = document.querySelector("#cart")
let cartBtn = document.querySelector("#cart_btn")
let cartList = document.querySelector("#cart_list")

const drawCarts = async () =>{
    let response = await fetch("https://dummyjson.com/carts?limit=100")
    let data = await response.json()
    console.log(data)
    for(let i = 1; i < data.carts.length; i++){
        cart.innerHTML += `<option>Корзина ${i}</option>`
    }
    cartBtn.addEventListener("click", () =>{
        cartList.innerHTML = ""
        let cartValue = +(cart.value.replace(/[^\d]/g, ''))- 1
        for(let i = 0; i < data.carts.length; i++){
            if(cartValue == i){
               console.log(data.carts[i])
               for(item of data.carts[i].products){
                cartList.innerHTML += `
                <li style="border: 1px solid red; margin: 5px;">
                <h4>Title: ${item.title}</h4>
                <p>Discount Percentage: ${item.discountPercentage}%</p>
                <p>Discounted Price: ${item.discountedPrice}$</p>
                <p>Price: ${item.price}$</p>
                <p>Quantity: ${item.quantity} things</p>
                </li>`
               } 

            }
        }
    })
    console.log(data)
}
drawCarts()