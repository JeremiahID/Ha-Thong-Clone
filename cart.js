
/*this is the js for the cart drop down*/
const ShopHeader = document.querySelector('.shopHeader')
const shoppingCart = document.querySelector('#cart');
const ShopBags = document.querySelector('.shopBag');


shoppingCart.addEventListener('click' , () => {
    ShopBags.classList.toggle("shop");
    ShopHeader.style.display = 'block';
    

})




// This is how to make a clas with a disply of none to become a display of block
// const element = document.getElementById('myElement');
// element.style.display = 'block';


