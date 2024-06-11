// toggle switchs
const  themeSwitch =document.getElementById('theme-switch');
const body= document.body;
themeSwitch.addEventListener('change',function(){
    body.classList.toggle('dark-mode');

});
// change item 
const footerImage =document.querySelectorAll('.footer .images img');
// select the image in the foodbar
const foodbarImage =document.querySelectorAll('.foodbar  img');
// add  a click event listener 
footerImage.forEach(image => {
    image.addEventListener('click',()=>{
        foodbarImage.src =image.src;
    });
});
// _____________________remove animation___________________
const itemImages= document.querySelectorAll('item-img');
itemImages.forEach(img => {
    // remove animation on image
    itemImages.forEach(img => img.classList.remove('animated'));
    // add the "animated" class to the clicked image
    img.classList.add('animated')
});


// ____________________add to card ___________
const addToCarButton =document.querySelectorAll('.images a');
const cartIcon =document.querySelectorAll('.top-navbar .icons a i ');
console.log(addToCarButton);
let cartCount=0;
addToCarButton.forEach(button =>{
    button.addEventListener('click',()=>{
        cartCount++;
        cartIcon.textContent =cartCount;
    });
});