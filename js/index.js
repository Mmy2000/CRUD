var productName = document.getElementById('productName');
var productPrice = document.getElementById('productPrice');
var productCat = document.getElementById('productCat');
var productDesc = document.getElementById('productDesc');
var products;
var addbtn = document.getElementById('addbtn')
var updatebtn = document.getElementById('updatebtn')
var pIndex = 0;

if (localStorage.getItem("userProducts")) {
    products = JSON.parse(localStorage.getItem("userProducts"))
    displayProduct(products)
} else {
    products = [];
}

function addProduct() {
    var product_name = productName.value.trim()
    var product_price = productPrice.value.trim()
    var product_cat = productCat.value.trim()

    if (product_name === "" || product_price === "" || product_cat === "") {
        alert("Please enter a valid info.");
        return;
    }

    var product = {
        id: productName.value,
        price: productPrice.value,
        category: productCat.value,
        desc: productDesc.value
    }
    products.push(product);
    localStorage.setItem("userProducts", JSON.stringify(products))
    console.log(products);
    clear();
    displayProduct(products);
}

function clear() {
    productName.value = ""
    productPrice.value = ""
    productCat.value = ""
    productDesc.value = ""

}

function displayProduct(arr) {
    var box = ''
    for (let i = 0; i < arr.length; i++) {
        box += `<div class="col-md-3">
                <div class="inner p-2">
                    <img src="img/post-3.jpg" class="w-100" alt="">
                    <div class="content p-2">
                        <h2>${arr[i].id}</h2>
                        <span>${arr[i].price}$</span>
                        <span class="badge bg-secondary ms-4">${arr[i].category}</span>
                        <p class="mt-2">${arr[i].desc}</p>
                        <a href="#" onclick="updateProduct(${i})" class="btn btn btn-outline-warning">Update</a>
                        <a href="#" onclick="deleteProduct(${i})" class="btn btn btn-outline-danger">Delete</a>
                    </div>
                </div>
            </div>`
    }
    document.getElementById("rowData").innerHTML = box
}

function deleteProduct(id) {
    products.splice(id, 1);
    localStorage.setItem("userProducts", JSON.stringify(products));
    displayProduct(products);
}

function searchProduct(searchKey) {
    var searchArr = []
    for (var i = 0; i < products.length; i++) {
        if (products[i].id.toLowerCase().includes(searchKey.toLowerCase())) {
            searchArr.push(products[i])
        }

    }
    displayProduct(searchArr);
}

function updateProduct(index) {
    // Populate form fields with selected product details
    pIndex = index;
    productName.value = products[index].id;
    productPrice.value = products[index].price;
    productCat.value = products[index].category;
    productDesc.value = products[index].desc;
    // addbtn.classList().replace('d-block','d-none')
    // updatebtn.classList().replace('d-block','d-none')
    addbtn.classList.replace('d-block', 'd-none')
    updatebtn.classList.replace('d-none', 'd-block')
}

function update() {
    var product = {
        id: productName.value,
        price: productPrice.value,
        category: productCat.value,
        desc: productDesc.value
    }
    products.splice(pIndex, 1, product)
    localStorage.setItem("userProducts", JSON.stringify(products));
    displayProduct(products);
    clear()
    addbtn.classList.replace('d-none', 'd-block')
    updatebtn.classList.replace('d-block', 'd-none')
}

function regex() {
    var regexName = /^[A-Z]{1}[a-z]$/
    var regexPrice = /^(1[0-9]|[2-7][0-9]|80)$/
    return regex.test(productPrice.value)
}