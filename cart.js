/* Thisis for the cart section upon window.Load*/

window.onload = function() {
  const CartSum  =  document.querySelector('.cartSummary');
  CartSum.style.display = "none";
}


/*this is the js for the cart drop down*/
const shoppingCart = document.querySelector('#cart');
const ShopBags = document.querySelector('#shopBag');
const MainHead = document.querySelector('.mainHead');
const CartHead  =  document.querySelector('.cartSummary');

shoppingCart.addEventListener('click' , () => {
    ShopBags.classList.toggle("shop");
    MainHead.classList.toggle("mainHeader");
    CartHead.classList.toggle("cartHead");
    if (CartHead.style.display === "block") {
        CartHead.style.display = "none";
    }else {
        CartHead.style.display = "block";
        
      }
  
})





// const ShopHeader = document.querySelector('.shopHeader')
// shoppingCart.addEventListener('click' , () => {
//     ShopBags.classList.toggle("sectionOneShow");
//     ShopHeader.style.display = 'none';
    

// })

// This is how to make a clas with a disply of none to become a display of block
// const element = document.getElementById('myElement');
// element.style.display = 'block';

// function toggleElement() {
//     var element = document.getElementById("myElement");
//     if (element.style.display === "none") {
//       element.style.display = "block";
//     } else {
//       element.style.display = "none";
//     }
//   }
  
