/*this is the js for the hambuger drop down*/
const menu = document.querySelector('#menu');
const Hamburger = document.querySelector('#hamburger');
const Cart = document.querySelector('#cart');
const ShopBags = document.querySelector('#shopBag');
const Close_cart = document.querySelector('#close_cart');
const SectionOne = document.querySelector('.sectionOne');
const SectionTwo = document.querySelector('.sectionOne');
const SectionThree = document.querySelector('.sectionThree');
const SectionFour = document.querySelector('.sectionFour');

Cart.addEventListener('click', () =>{
    if(ShopBags.style.display === "none"){
        ShopBags.style.display = "block";
    } else{
        ShopBags.style.display = "none";
    }
})

Close_cart.addEventListener('click', () =>{
    if(ShopBags.style.display === "block"){
        ShopBags.style.display = "none";
    } else {
        ShopBags.style.display = "block";
    }
})


menu.addEventListener('click' , () =>{
    if(Hamburger.style.display === "none"){
        Hamburger.style.display = "block";
        SectionOne.classList.add('hide');
        
    } else{
        Hamburger.style.display = "none";
        SectionOne.classList.remove('hide')
    }
})





// menu.addEventListener('click' , () => {
//     hiddenMenu.classList.toggle("show");
// })


// /*this is the js for the sectionOne display none */
// const Menu =  document.querySelector('#menu')
// const SectionOne = document.querySelector('.sectionOne');
// const SectionTwo = document.querySelector('.sectionTwo');
// const SectionFour = document.querySelector('.sectionFour');
// const Cart  =  document.querySelector('.shopBag')


// Menu.addEventListener('click' , () => {
//     SectionOne.classList.toggle("sectionOneShow");
//     SectionTwo.classList.toggle("sectionOneShow");
//     SectionFour.classList.toggle("sectionOneShow");
//     Cart.classList.toggle("sectionOneShow")
// })




