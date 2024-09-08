// const btns=document.querySelectorAll('.btn')
const btns=document.getElementsByClassName('panelbutton')
for(let i=0; i<btns.length; i++)
{
  btns[i].onclick=function()
  {
    let x=this.parentElement.parentElement;
    x.classList.toggle('panelshow');
  }
}

const navEl = document.querySelector('.nav');
const hamburgerEl = document.querySelector('.hamburger');

hamburgerEl.addEventListener('click', () => {
  navEl.classList.toggle('nav__open');    
});