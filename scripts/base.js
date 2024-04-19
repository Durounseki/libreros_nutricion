const menuItems = document.querySelectorAll(".menu-item");

menuItems.forEach(item => item.addEventListener('click',pageRedirect));

function pageRedirect(event){
    
    const pageName = event.target.textContent.toLowerCase();
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
    

    let relativeUrl;
    if (pageName === "inicio") {
        relativeUrl = baseUrl + 'index.html';  // Directly to index
    } else {
        relativeUrl = baseUrl + 'pages/' + pageName + '.html'; 
    }

    window.location.href = relativeUrl; //Redirect
}