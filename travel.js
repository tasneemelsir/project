const h1=document.getElementById('h1');
const leaf=document.getElementById('leaf');
const hill1=document.getElementById('hill1');
const hill4=document.getElementById('hill4');
const hill5=document.getElementById('hill5');
const plane=document.getElementById('plane');
window.addEventListener('scroll',() =>{
const value= window.scrollY;


h1.style.marginTop = `${value * 3}px`;
leaf.style.top = `${value * -1.5}px`;
leaf.style.left = `${value * 1.5}px`;
hill5.style.left = `${value * 1.5}px`;
hill4.style.left = `${value * -1.5}px`;
hill1.style.top = `${value * 1}px`;
plane.style.marginLeft=`${value * 1.5}px`;
});
