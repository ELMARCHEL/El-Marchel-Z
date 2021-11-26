// MENU SHOW Y HIDDEN 
const navMenu = document.getElementById('nav-menu'),    
        navToggle = document.getElementById('nav-toggle'),
        navClose = document.getElementById('nav-close'),
        navLink = document.querySelectorAll('.nav__link');

// SHOW MENU/ VALIDATE IF CONSTANTS EXISTS
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add("show-menu");
})
};

// MENU HIDDEN
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove("show-menu");        
    })
};

// REMOVE MENU MOBILE  
function linkAction() {
    let navMenu = document.getElementById("nav-menu");
    navMenu.classList.remove("show-menu");       
};
navLink.forEach(n => n.addEventListener('click', linkAction));



// ACCORDING SKILLS 

const skillscontent = document.getElementsByClassName('skills__content'),
        skillsheader = document.querySelectorAll('.skills__header');
function toggleLink(){
    let item = this.parentNode.className;
    for (i=0; i < skillscontent.length; i++){
        skillscontent[i].className = 'skills__content skills__close';
    };
    switch (item){
        case 'skills__content skills__close': 
            this.parentNode.className = 'skills__content skills__open';
            break;
        case 'skills__content skills__open': 
            this.parentNode.className = 'skills__content skills__close';
            break;
    };
};
skillsheader.forEach((ele) => {
    ele.addEventListener('click', toggleLink);
});

