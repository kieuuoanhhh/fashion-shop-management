let productContainer = document.querySelector('.product-container')

let products = JSON.parse(localStorage.getItem('data'))

let loadData = () => {
	productContainer.innerHTML = ``
	for(let i = 0; i < products.length; i++) {
		let product = document.createElement('div')
		product.className = 'row mt-4'
		product.innerHTML = `
			<div class="col-sm-3">
				<img src="${products[i].imageSrc}" class="w-75 h-100">
			</div>
			<div class="col-sm-2  d-flex align-items-center">
				<h5 class="">${products[i].name}</h5>
			</div>
			<div class="col-sm-2 d-flex align-items-center">
				<i class="fa-solid fa-circle-minus"></i>
					<span class="p-3">1</span>
					<i class="fa-solid fa-circle-plus"></i>
			</div>
			<div class="col-sm-2 d-flex align-items-center ">
				<p>${products[i].price}$</p>
			</div>
			<div class="col-sm-2 d-flex align-items-center">
				<p class="total-price">${products[i].price}$</p>
			</div>
			<div class="col-sm-1 d-flex align-items-center">
				<i class="fa-solid fa-trash"></i>
			</div>
		`
	
		let count = product.querySelector('span')
		let counter = 1;
		let increase = product.querySelector('.fa-circle-plus')
		let minus = product.querySelector('.fa-circle-minus')
		let totalPrice = product.querySelector('.total-price')
		let deleteButton = product.querySelector('.fa-trash')
	
		increase.onclick = () => {
			counter++;
			count.innerText = `${counter}`
			totalPrice.innerText = `${(counter * parseFloat(products[i].price)).toFixed(2)}$`
		}
		
		minus.onclick = () => {
			if(counter > 0) {
				counter--;
				count.innerText = `${counter}`
				totalPrice.innerText = `${(counter * parseFloat(products[i].price)).toFixed(2)}$`
			}
		}
	
		let name = product.querySelector('h5').innerText
		deleteButton.onclick = () => {
			for(let i = 0; i < products.length; i++) {
				if(products[i].name == name) {
					products.splice(i,1)
				}
			}
			loadData()
		}
	
		productContainer.appendChild(product)
	}
}

loadData()