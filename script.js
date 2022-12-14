const menutoggler=document.querySelector('.menu-toggler')
const navbar=document.querySelector('.navbar')
const menu=document.querySelector('.menu')

menutoggler.addEventListener('click',()=>{
    navbar.classList.toggle('show-menu')
    if(navbar.classList.contains('show-menu')){
        menu.style.maxHeight=menu.scrollHeight+'px'
    }
    else{
        menu.style.maxHeight='0px'
        menu.style.overflow='hidden'

    }
})
function loader(){
    document.querySelector('.loader-container').classList.add('fade-out')
  }
  function fadeOut(){
    setInterval(loader, 5000)
  }
  window.onload=fadeOut