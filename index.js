/*this is the js for the hambuger drop down*/
const menu = document.querySelector('#menu');
const hiddenMenu = document.querySelector('.hiddenSection');

menu.addEventListener('click' , () => {
    hiddenMenu.classList.toggle("show");
})


/*this is the js for the sectionOne display none */
const Menu =  document.querySelector('#menu')
const SectionOne = document.querySelector('.sectionOne');
const SectionTwo = document.querySelector('.sectionTwo');
const SectionFour = document.querySelector('.sectionFour');
const Cart  =  document.querySelector('.shopBag')


Menu.addEventListener('click' , () => {
    SectionOne.classList.toggle("sectionOneShow");
    SectionTwo.classList.toggle("sectionOneShow");
    SectionFour.classList.toggle("sectionOneShow");
    Cart.classList.toggle("sectionOneShow")
   
})




