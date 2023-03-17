burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navlist = document.querySelector('.nav-list')
rightNav = document.querySelector('.rightNav')


burger.addeventlistener('click', ()=>{
    rightNav.classList.toggle('v-class-rvsp');
    navList.classList.toggle('v-class-rvsp');
    navbar.classList.toggle('h-class-rvsp');


}

)