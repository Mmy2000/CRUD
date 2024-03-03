var productName = document.getElementById('productName');
var productPrice = document.getElementById('productPrice');
var productCat = document.getElementById('productCat');
var productDesc = document.getElementById('productDesc');
var products ;

if (localStorage.getItem("userProducts")) {
    products = JSON.parse(localStorage.getItem("userProducts"))
    displayProduct()
}else{
    products = [];
}
// function updateProduct(index) {
//     // Populate form fields with selected product details
//     productName.value = products[index].id;
//     productPrice.value = products[index].price;
//     productCat.value = products[index].category;
//     productDesc.value = products[index].desc;

// }
// function performUpdate(index) {
//     // Update the product details in the products array
//     products[index] = {
//         id: productName.value,
//         price: productPrice.value,
//         category: productCat.value,
//         desc: productDesc.value
//     };

//     // Save the updated products array in local storage
//     localStorage.setItem("userProducts", JSON.stringify(products));

//     // Clear the form fields
//     clear();

//     // Display the updated products
//     displayProduct();
// }
function addProduct() {
    
    // if (productName.value.trim() === Number || productPrice.value === String || productCat.value === "" ) {
    //     alert("Please enter a valid info.");
    //     return;
    // }

    var product = {
        id:productName.value,
        price:productPrice.value,
        category:productCat.value,
        desc:productDesc.value
    }
    products.push(product);
    localStorage.setItem("userProducts",JSON.stringify(products))
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
                <div class="card-body">
                    <h5 class="card-title">${products[i].id}</h5>
                    <h5 class="card-title">${products[i].price}</h5>
                    <h5 class="card-title">${products[i].category}</h5>
                    <p class="card-text">${products[i].desc}</p>
                    <a href="#" onclick="updateProduct(${i})" class="btn btn btn-outline-warning">Update</a>
                    <a href="#" onclick="deleteProduct(${i})" class="btn btn btn-outline-danger">Delete</a>
                </div>
            </div>`
        
        
    }
    document.getElementById("rowData").innerHTML = box
}

function deleteProduct(id) {
    products.splice(id,1);
    localStorage.setItem("userProducts",JSON.stringify(products));
    displayProduct();
}