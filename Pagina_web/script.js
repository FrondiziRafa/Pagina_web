var element = document.querySelector(".menu-mobile-icon");

element.addEventListener('click',()=>{
   var menuItems = document.querySelector('.menu-items');
   if(menuItems.classList.contains('show'))
   {menuItems.classList.add('hide');
   menuItems.classList.remove('show')
}else{
    menuItems.classList.add('show')
    menuItems.classList.remove('hide')
}
   
});
