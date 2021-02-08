/**
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

/** Section Class */
class Section {

    /**Section Id (Also Section Index)*/
    lastSectionId = 0;



} //End Class

/** Navbar Class */
class Navbar {
    /** Menu Elemnt Selected By Id */
    menuElement = document.getElementById('navbar__list');

    /** Build Menu  */
    buildMenu() {
        //Clear Menu From "li" Elements
        this.menuElement.innerHTML = '';
        document.querySelectorAll('section').forEach(element => {
            this.menuElement.insertAdjacentHTML('beforeend', `<li><a class="menu__link" href="#${element.id}" data-section-id="${element.id}"  >${element.dataset.nav}</a></li>`);
        });
        this.goToSection();
    }

    /** Go To Section */
    goToSection() {
        this.menuElement.addEventListener('click', function(event) {
            event.preventDefault();
            document.getElementById(event.target.dataset.sectionId).scrollIntoView({ behavior: "smooth" });

        });
    }



} //End Class

/**
 * Define Global Variables
 * 
 */
const section = new Section();
const menu = new Navbar();
const goToTopElement = document.getElementById('scrollToTop');
let numberOflistItems = section.length;


/**
 * End Global Variables
 * Start Helper Functions
 * 
 */


/** Go To Top */
function goToTop() {
    goToTopElement.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
        })
    });
}



/** 
 * Function For Chek What Is Sextion On Screen Now
 */
function isSectionOnScreen(element, buffer) {
    buffer = typeof buffer === 'undefined' ? 0 : buffer;
    // Get element's position in the viewport
    const bounding = element.getBoundingClientRect();

    // Check if element is in the viewport 
    if (bounding.top >= buffer && bounding.left >= buffer && bounding.right <=
        // fallback for browser compatibility 
        ((window.innerWidth || document.documentElement.clientWidth) - buffer) &&
        bounding.bottom <=
        ((window.innerHeight || document.documentElement.clientHeight) - buffer)) {
        return true
    } else {
        return false;
    }
}




/** Add active Class */
function addActiveClass(id) {
    //Add Link Active

    document.querySelector(`[href="#${id}"]`).classList.add('link__active');

    //Add Section Active

    document.querySelector(`#${id}`).classList.add('your-active-class');

    //Update Locatoin Hash
    setTimeout(() => {
        window.location.hash = id
    }, 0);
}

/** On User Scroll */
window.addEventListener('scroll', () => {

    let scrollPrecent = ((window.innerHeight + window.scrollY) / document.body.offsetHeight) * 100;

    //Show or hide 'scroll top button'
    if (scrollPrecent > 40) {
        //Show
        goToTopElement.classList.remove('display__none');
    } else {
        //Hide
        goToTopElement.classList.add('display__none');
    }

});


//this function to hidden the NaveBar in the scroll  

let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "-100px";
    }
    prevScrollpos = currentScrollPos;
}


menu.buildMenu();
goToTop();



function sectionInViewPort (elem) {

  let section = elem.getBoundingClientRect();
  return (sectionPos.top >=0);
}





let mainNavLinks = document.querySelectorAll("nav ul li a");
let lastId;
let cur = [];
// this function to add or remove active links 
window.addEventListener("scroll", event => {
  let fromTop = window.scrollY;

  mainNavLinks.forEach(link => {
    let section = document.querySelector(link.hash);

    if (
      section.offsetTop <= fromTop &&
      section.offsetTop + section.offsetHeight > fromTop
    ) {
      link.classList.add("current");
    } else {
      link.classList.remove("current");
    }
  });
});

