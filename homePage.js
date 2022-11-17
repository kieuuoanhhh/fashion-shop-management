// Trang chinhtrinh
let addToCartButtons = document.querySelectorAll('a.dress')
let images = document.querySelectorAll('.product img')
let names = document.querySelectorAll('.product a.information')
let designers = document.querySelectorAll('.product p')
let prices = document.querySelectorAll('.product h3')
let cartButton = document.querySelector('.cart')

// lay cookie nam amout: save so luong mat hang trng cart
let amounttContainer = document.querySelector('.amountt')
console.log(amounttContainer)

let cookies = document.cookie.replace(' ','').split(";") // lay cook
// chay phong for xem co cookie name: amount
for (let i = 0; i < cookies.length; i++) {
    let cookie = cookies[i].split("=")
    let name = cookie[0]
    let value = cookie[1]

    console.log(name)
    if (name == "amount") {
        amounttContainer.innerText = value; // co xet sluong mathang co trong cart = value 
    } else {
        
    }
}



let cart = [] // luu sp , sp dc dua vao cart
for (let i = 0; i < addToCartButtons.length; i++) {
    addToCartButtons[i].onclick = function () {
        let amount = amounttContainer.innerText * 1; //lay amount
        amount++;
        amounttContainer.innerText = amount

        document.cookie = `amount=${amount}`

        alert('Sản phẩm đã được thêm vào rỏ hàng ')
        cart.push({
            image: images[i].src, // lay xuoc(src)
            name: names[i].innerText,
            designer: designers[i].innerText,
            price: prices[i].innerText, // luu gia tien 1 sp
            amount: 1 //so lg đc luu cookie
        })

        console.log(cart)
        amounttContainer[i]++
    }
}
//let save=[]
//for(let i= 0;i<)
//let saveamount = JSON.parse(document.cookie)






//let json = JSON.stringify(cart)
//console.log(json)

//console.log(cart)
//console.log(addToCartBtn)


cartButton.onclick = function () {



    // localStorage.setItem('data',json)
    //  sessionStorage.setItem('data',json)
let oldCart
    let cookies = document.cookie.replace(' ','').split(";") // lay cook
    // chay phong for xem co cookie name: amount
    for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i].split("=")
        let name = cookie[0]
        let value = cookie[1]
        if (name == "data") {
            oldCart = JSON.parse(value); // co xet sluong mathang co trong cart = value 
        }
    }
   // let oldCart = document.cookie.split('=')[1] // lấy ra các mặt hàng đã chọn được lưu trong cookie 
    console.log(oldCart)
    if (oldCart == undefined) // nếu ko có mặt hàng nào khởi tạo biến oldcart là 1 mảng
    {
        oldCart = []
    } 
    oldCart = oldCart.concat(cart) /// noi 2 mang

    let json = JSON.stringify(oldCart) // cookie luu chuoi de cho len cookie, neen doi thanh chuoi
    document.cookie = `data=${json}` // save gio hang trg cookie


}