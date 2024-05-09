const menuKeys = {
    "index": 0,
    "servicios": 1,
    "nutricion-clinica": 1,
    "perdida-y-control-de-peso": 1,
    "nutricion-deportiva": 1,
    "planes-de-entrenamiento": 1,
    "diabetes": 1,
    "cineantropometria": 1,
    "precios": 2,
    "dr-libreros":3,
    "contacto": 4, 
}
const menuItems = document.querySelectorAll(".menu-item");

menuItems.forEach(item => item.addEventListener('click',pageRedirect));

const serviceTabs = document.querySelectorAll(".service-tab");

serviceTabs.forEach(tab => tab.addEventListener('click',pageRedirect));

function pageRedirect(event){
    const page = event.target;
    const pageName = page.dataset.page;
    const baseUrl = getBaseUrl();

    let relativeUrl;
    if(page.classList.contains("service-tab")){ //Check if the dropdown menu item was clicked
        relativeUrl = baseUrl + 'pages/servicios/' + pageName + '.html';
    }else if(pageName !== 'index'){
        relativeUrl = baseUrl + 'pages/' + pageName + '.html';
    }else{
        relativeUrl = baseUrl + pageName + '.html';
    }

    window.location.href = relativeUrl; //Redirect
}

// function pageRedirect(event){
    
//     const pageName = event.target.textContent.toLowerCase();
//     const baseUrl = getBaseUrl();

//     let relativeUrl;
//     if (pageName === "inicio") {
//         relativeUrl = baseUrl + 'index.html';  // Directly to index
//     }else if(pageName.includes('servicios')){ //Servicios tab contains an arrow
//         relativeUrl = baseUrl + 'pages/servicios.html';
//     } else {
//         relativeUrl = baseUrl + 'pages/' + pageName + '.html'; 
//     }

//     window.location.href = relativeUrl; //Redirect
// }

function getBaseUrl(){
    
    const currentUrl = window.location.href; //Fetch the current url
    
    // Find the index of the 'pages/' part:
    const pagesIndex = currentUrl.indexOf('pages/'); 

    // Construct the base URL by removing "pages/..." if it is found or by removing index
    let baseUrl;
    if(pagesIndex > -1){
        baseUrl = currentUrl.substring(0, pagesIndex);
    }else{
        baseUrl = currentUrl.substring(0, currentUrl.lastIndexOf('/') + 1);
    }
    return baseUrl;
}

//Highlight active page on menu bar

function getActivePage(){

    const currentUrl = window.location.href; //Fetch the current url
    const urlParts = currentUrl.split('/');

    //Check if the last part contains a hash, for the prices page footnotes
    let lastPart = urlParts[urlParts.length - 1];
    if(lastPart.includes('#')){
        lastPart = lastPart.split('#')[0]; //Remove everything after the hash
    }

    let pageName = lastPart.slice(0, - 5); //Remove .html extension
    const activeMenuItem = menuItems[menuKeys[pageName]];
    if(activeMenuItem){
        activeMenuItem.classList.add("active");
    }
}

getActivePage();


//Display drop-down menu

const dropdownMenu = document.querySelector('.dropdown-menu');
const dropdownContainer = document.querySelector('.dropdown-container');


menuItems[1].addEventListener('mouseover', () => {
    dropdownContainer.classList.add('show');
    dropdownMenu.classList.add('show');
});

//Since the dropdown menu is a separate element, we add the class show
//again, when the mouse enters the dropdown menu container
//Both elements slightly overlap making this transition possible
dropdownContainer.addEventListener('mouseover', () => {
    dropdownContainer.classList.add('show');
    dropdownMenu.classList.add('show');
});

// We remove the class show whenever the mouse leaves the menu item or the dropdown container
menuItems[1].addEventListener('mouseout', () => {
    dropdownContainer.classList.remove('show');
    dropdownMenu.classList.remove('show');
});

dropdownContainer.addEventListener('mouseout', (event) => {
    //use related target to select the p elements inside the dropdown menu div
    //if we hover over any of these p elements, prevent the mouse out event to remove the class 'show'
    if (!event.relatedTarget || !dropdownMenu.contains(event.relatedTarget)) {
        dropdownContainer.classList.remove('show');
        dropdownMenu.classList.remove('show');
    }
});

//Mobile menu
const mobileMenuIcon = document.querySelector(".fa-bars");
const mobileMenuCloseIcon = document.querySelector(".fa-xmark");
mobileMenuIcon.addEventListener('click',showMobileMenu);
mobileMenuCloseIcon.addEventListener('click',hideMobileMenu);
const dropdownMobile = document.querySelector(".dropdown-mobile");

function showMobileMenu(){
    transformIcon();
    dropdownMobile.classList.toggle("show");
}

function hideMobileMenu(){
    transformIcon();
    dropdownMobile.classList.toggle("show");
}

function transformIcon(){
    mobileMenuIcon.classList.toggle("active");
    mobileMenuCloseIcon.classList.toggle("active");
}

const mobileMenuTabs = document.querySelectorAll(".tab");
mobileMenuTabs[1].addEventListener('click',showServices);
const mobileServiceTabs = document.querySelector(".service-tabs")

function showServices(event){
    const container = event.target.closest("div");
    const caret = container.querySelector("i");
    if(caret.classList.contains("fa-square-caret-down")){
        caret.classList.remove("fa-square-caret-down");
        caret.classList.add("fa-square-caret-up");
    }else if(caret.classList.contains("fa-square-caret-up")){
        caret.classList.remove("fa-square-caret-up");
        caret.classList.add("fa-square-caret-down");
    }
    mobileServiceTabs.classList.toggle("show");
}

mobileMenuTabs.forEach(tab => {
    if(tab.dataset.page){
        tab.addEventListener('click',pageRedirect);
    }
});

