let productContainer = document.querySelector('.product-container')


/*let request = new XMLHttpRequest()
request.open('get', 'data.json', false)
request.send()
console.log((request.responseText))

*/

//let products = JSON.parse(localStorage.getItem('data'))
let products = null

//let products = JSON.parse(request.responseText)

let cookies = document.cookie.replace(' ', '').split(";") // lay cook

// chay phong for xem co cookie name: amount
for (let i = 0; i < cookies.length; i++) {
	let cookie = cookies[i].split("=")
	let name = cookie[0]
	let value = cookie[1]
	console.log(name)
	if (name == "data") {
		products = JSON.parse(value); // co xet sluong mathang co trong cart = value 
	}
}


let loadData = () => {
	productContainer.innerHTML = ``
	for (let i = 0; i < products.length; i++) {
		let product = document.createElement('div')
		product.className = 'row mt-4'
		product.innerHTML = `
			<div class="col-sm-3">
				<img src="${products[i].image}" class="w-75 h-100">
			</div>
			<div class="col-sm-2  d-flex align-items-center">
				<h5 class="">${products[i].name}</h5>
			</div>
			<div class="col-sm-2 d-flex align-items-center">
				<i class="fa-solid fa-circle-minus"></i>
					<span class="p-3">${products[i].amount}</span>
					<i class="fa-solid fa-circle-plus"></i>
			</div>
			<div class="col-sm-2 d-flex align-items-center ">
				$<p class ="d-inline">${products[i].price}</p>
			</div>
			<div class="col-sm-2 d-flex align-items-center">
				$<p class="total-price d-inline">${products[i].price}</p>
			</div>
			<div class="col-sm-1 d-flex align-items-center">
				<i class="fa-solid fa-trash"></i>
			</div>
		`

		let count = product.querySelector('span')
		//let counter = 1;
		let increase = product.querySelector('.fa-circle-plus')
		let minus = product.querySelector('.fa-circle-minus')
		let totalPrice = product.querySelector('.total-price')
		let deleteButton = product.querySelector('.fa-trash')
		//tai ve tu cookie ko can luu tong tien( co du lieu tinh tong tien), 
		totalPrice.innerText = `${(	products[i].amount * parseFloat(products[i].price)).toFixed(2)}$`


		increase.onclick = () => {
			products[i].amount++;
			count.innerText = `${products[i].amount}`
			totalPrice.innerText = `${(	products[i].amount * parseFloat(products[i].price)).toFixed(2)}$`
			tinhtong()
			uploadToCookie()
		}

		/*minus.onclick = () => {
			if(counter > 0) {
					products[i].amount--;
				count.innerText = `${products[i].amount}`
				totalPrice.innerText = `${(products[i].amount * parseFloat(products[i].price)).toFixed(2)}$`
				tinhtong()
				uploadToCookie()
			}

		}*/

		minus.onclick = () => {
			{
				products[i].amount--;
				count.innerText = `${products[i].amount}`
				totalPrice.innerText = `${(products[i].amount * parseFloat(products[i].price)).toFixed(2)}$`
				tinhtong()
				uploadToCookie()
			}

		}

		let name = product.querySelector('h5').innerText
		deleteButton.onclick = () => {
			let cookies = document.cookie.replace(' ', '').split(";") // lay cook
			// chay phong for xem co cookie name: amount
			for (let i = 0; i < cookies.length; i++) {
				let cookie = cookies[i].split("=")
				let name = cookie[0];
				let value = cookie[1]*1;

				console.log(name)
				if (name == "amount") {
					 value--; // co xet sluong mathang co trong cart = value 
					document.cookie = `amount=${value}`
				} 
			}
			for (let i = 0; i < products.length; i++) {
				if (products[i].name == name) {
					products.splice(i, 1)
				}
			}
			loadData() // lay infor
			uploadToCookie()
			tinhtong()

		}
		// gan them nut con moi vao cuoi danh sach nut con cua 1 nut	
		productContainer.appendChild(product)
	}
}
//A r  O w

loadData()

function tinhtong() {
	let totalPrices = document.querySelector('.total-prices')
	let sum = document.querySelectorAll('.total-price')
	console.log(totalPrices)
	console.log(sum)
	let tong = 0
	for (let i = 0; i < sum.length; i++) {
		tong += parseFloat(sum[i].innerText)
	}
	console.log(tong)
	totalPrices.innerText = `${tong.toFixed(2)}`
}
tinhtong()

document.getElementById("myBtn").addEventListener("click", myFunction);


let uploadToCookie = () => {
	let json = JSON.stringify(products)
	document.cookie = `data=${json}`
}



function myFunction() {
	alert("Bạn đã đặt hàng thành công ");
}

// dong bo: chuong trinh chay tuan tu, request nhan dl ms chay tiep 
// 116 nhan dl van dc thuc thi  ham send se chay va chay tiep 117, 117 chayham 116 chua nhan 