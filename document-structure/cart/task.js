const products = Array.from(document.querySelector(".products"));
const cartProducts = document.querySelector(".cart__products");
const product = document.getElementsByClassName("product");
const productValue = document.getElementsByClassName("product__quantity-value");
const cartProductCount = document.getElementsByClassName("cart__product-count");
const productAdd = Array.from(document.querySelectorAll(".product__add"));
const productImage = Array.from(document.querySelectorAll(".product__image"));
const productDec = Array.from(document.querySelectorAll(".product__quantity-control_dec"));
const productInc = Array.from(document.querySelectorAll(".product__quantity-control_inc"));


productDec.forEach((dec, index) => {
    dec.addEventListener('click', () => {
        if (productValue[index].textContent <= 1) {
            return;
        } else {
            productValue[index].textContent--;
        };
      });
});

productInc.forEach((inc, index) => {
    inc.addEventListener('click', () => {
        productValue[index].textContent++;
    });
});

productAdd.forEach((el, index) => {
    el.addEventListener('click', () => {
        const search = [...cartProducts.children].findIndex(child => child.dataset.id === el.closest(".product").dataset.id);
        if (search != -1) {
            cartProductCount[search].textContent = +cartProductCount[search].textContent + +productValue[index].textContent;
        } else {
            const divCartProduct = document.createElement('div');
            cartProducts.appendChild(divCartProduct);
            divCartProduct.classList.add('cart__product');
            divCartProduct.dataset.id = product[index].dataset.id;

            const cartProductImage = document.createElement('img');
            divCartProduct.appendChild(cartProductImage);
            cartProductImage.classList.add('cart__product-image');
            cartProductImage.src = productImage[index].src;

            const cartProductCount = document.createElement('div');
            divCartProduct.appendChild(cartProductCount);
            cartProductCount.classList.add('cart__product-count');
            cartProductCount.textContent =  productValue[index].innerText;
        }
    });
});