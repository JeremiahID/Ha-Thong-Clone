/*this is the js for the hambuger drop down*/
const menu = document.querySelector('#menu');
const hiddenMenu = document.querySelector('.hiddenSection');

menu.addEventListener('click' , () => {
    hiddenMenu.classList.toggle("show");
    })


    /*this is the js for the sectionOne display none */
const SectionOne = document.querySelector('.sectionOne')

menu.addEventListener('click' , () => {
    SectionOne.classList.toggle("sectionOneShow");
     })

/*this is the js for the cart drop down*/

const shoppingCart = document.querySelector('#cart');
const ShopBags = document.document.querySelector('.shopBag');

shoppingCart.addEventListener('click' , () => {
    ShopBags.classList.toggle('shop')
})

const SectionOneCart = document.querySelector('.sectionOne')

shoppingCart.addEventListener('click' , () => {
    SectionOneCart.classList.toggle("sectionOneShow");
     })


