const menuKeys = {
    "index": 0,
    "servicios": 1,
    "nutricion-clinica": 1,
    "control-de-peso": 1,
    "nutricion-deportiva": 1,
    "planes-entrenamiento": 1,
    "diabetes": 1,
    "cineantropometria": 1,
    "precios": 2,
    "dr-libreros":3,
    "contacto": 4, 
}
const menuItems = document.querySelectorAll(".menu-item");

menuItems.forEach(item => item.addEventListener('click',pageRedirect));

function pageRedirect(event){
    
    const pageName = event.target.textContent.toLowerCase();
    const baseUrl = getBaseUrl();

    let relativeUrl;
    if (pageName === "inicio") {
        relativeUrl = baseUrl + 'index.html';  // Directly to index
    }else if(pageName.includes('servicios')){ //Servicios tab contains an arrow
        relativeUrl = baseUrl + 'pages/servicios.html';
    } else {
        relativeUrl = baseUrl + 'pages/' + pageName + '.html'; 
    }

    window.location.href = relativeUrl; //Redirect
}

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

    let pageName = currentUrl.substring(currentUrl.lastIndexOf('/')+1, currentUrl.length - 5); //Remove .html extension
    const activeMenuItem = menuItems[menuKeys[pageName]];
    activeMenuItem.classList.add("active");

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