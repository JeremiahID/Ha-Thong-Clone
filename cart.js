
/*this is the js for the cart drop down*/
const shoppingCart = document.querySelector('#cart');
const ShopBags = document.querySelector('#shopBag');
const MainHead = document.querySelector('.mainHead')

shoppingCart.addEventListener('click' , () => {
    ShopBags.classList.toggle("shop");
    MainHead.classList.toggle("mainHeader")
    

    

})


// const ShopHeader = document.querySelector('.shopHeader')
// shoppingCart.addEventListener('click' , () => {
//     ShopBags.classList.toggle("sectionOneShow");
//     ShopHeader.style.display = 'none';
    

// })

// This is how to make a clas with a disply of none to become a display of block
// const element = document.getElementById('myElement');
// element.style.display = 'block';


