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
}
function clear() {
    productName.value = "" 
    productPrice.value = "" 
    productCat.value = "" 
    productDesc.value = "" 

}