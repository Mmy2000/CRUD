var productName = document.getElementById('productName');
var productPrice = document.getElementById('productPrice');
var productCat = document.getElementById('productCat');
var productDesc = document.getElementById('productDesc');
var products = [];
function addProduct() {
    
    var product = {
        id:productName.value,
        price:productPrice.value,
        category:productCat.value,
        desc:productDesc.value
    }
    products.push(product);
    console.log(products);
    clear();
    displayProduct();
}
function clear() {
    productName.value = "" 
    productPrice.value = "" 
    productCat.value = "" 
    productDesc.value = "" 

}
function displayProduct() {
    var box = ''
    for (let i = 0; i < products.length; i++) {
        box += `<div class="card"  style="width: 18rem;">
                <img src="..." class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${products[i].id}</h5>
                    <h5 class="card-title">${products[i].price}</h5>
                    <h5 class="card-title">${products[i].category}</h5>
                    <p class="card-text">${products[i].desc}</p>
                    <a href="#" class="btn btn btn-outline-warning">Update</a>
                    <a href="#" class="btn btn btn-outline-danger">Delete</a>
                </div>
            </div>`
        
        
    }
    document.getElementById("rowData").innerHTML = box
}