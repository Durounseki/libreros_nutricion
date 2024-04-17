//Change the color of the place holder in the select element
const selectElement = document.querySelector("select");
selectElement.addEventListener('change', function() {
    if(this.value === "0"){
        this.classList.add('placeholder');
    }else{
        this.classList.remove('placeholder');
    }
});
//Trigger the change event for initial styling
const changeEvent = new Event('change');
selectElement.dispatchEvent(changeEvent);
