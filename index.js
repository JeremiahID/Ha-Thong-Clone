const menu = document.querySelector('#menu');
const hiddenMenu = document.querySelector('.hiddenSection')

menu.addEventListener('click' , () => {
    hiddenMenu.classList.toggle("show");
    })

const SectionOne = document.querySelector('.sectionOne')
    
menu.addEventListener('click' , () => {
    SectionOne.classList.toggle("sectionOneShow");
     })
    


// var menu = document.getElementById("menu");
// menu.classList.toggle("show");
// 