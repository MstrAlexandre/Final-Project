/**
 *
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
*/
let sections = document.querySelectorAll('section');
let navbarList = document.querySelector('#navbar__list');


/**
 * End Global Variables
 * Start Helper Functions
*/

// Check if element is in viewport
function elementInViewport(el) {
    let rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}


/**
 * End Helper Functions
 * Begin Main Functions
*/

// build the nav
function buildNavbar() {
    for (let i=0; i<sections.length; i++) {
        let listItem = document.createElement('li');
        listItem.innerHTML = `<a href="#${sections[i].id}" class="menu__link">${sections[i].dataset.nav}</a>`;
        navbarList.appendChild(listItem);
    }
}

// Add class 'active' to section when near top of viewport
function setActiveClass() {
    for (let i=0; i<sections.length; i++) {
        if (elementInViewport(sections[i])) {
            sections[i].classList.add('your-active-class');
        } else {
            sections[i].classList.remove('your-active-class');
        }
    }
}

// Scroll to anchor ID using scrollTO event// Scroll to anchor ID using scrollTO event
function scrollToSection(event) {
    event.preventDefault();
    if(event.target.nodeName === 'A'){
        const section = document.querySelector(event.target.getAttribute('href'));
        window.scrollTo({
            top: section.offsetTop,
            behavior: "smooth"
        });
    }
}


/**
 * End Main Functions
 * Begin Events
*/

// Build menu
buildNavbar();

// Scroll to section on link click
navbarList.addEventListener('click', function(event) {
    scrollToSection(event);
});

// Set sections as active
window.addEventListener('scroll', function() {
    setActiveClass();
});
