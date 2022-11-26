const mod = document.getElementById('#dark')
function modoDark() {

    if (document.body.style.backgroundColor === 'white'){
        document.body.style.backgroundColor = 'black'
    }else {
        document.body.style.backgroundColor = 'white'     
    }
}


const btnMobile = document.getElementById('btnmobile')
 function toggleMenu () {
     const nav = document.getElementById('nav')
     nav.classList.toggle('active')
 }
 btnMobile.addEventListener('click', toggleMenu)
