/*this is the js for the cart drop down*/

const shoppingCart = document.querySelector('#cart');
const ShopBags = document.querySelector('.shopBag');

shoppingCart.addEventListener('click' , () => {
    ShopBags.classList.toggle("shop")

})


/* z-index */
// const SectionOneCart = document.querySelector('.sectionOne')

// shoppingCart.addEventListener('click' , () => {
//     SectionOneCart.classList.toggle("sectionOneIndex");
//      })