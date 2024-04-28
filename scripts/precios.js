// 1. Target the pricing grid and header row
const pricingGrid = document.querySelector('.pricing-grid'); 
const headerRow = pricingGrid.querySelectorAll('.header-cell'); 

// 2. Create an Intersection Observer
const observer = new IntersectionObserver( 
    (entries) => {
        entries.forEach(entry => {
            headerRow.forEach(cell => {
                cell.classList.toggle('sticky', entry.isIntersecting);
            });
        });
    }, 
    { rootMargin: '0px 0px -100% 0px' } // Tweak offset if needed
);

// 3. Start observing the pricing grid
observer.observe(pricingGrid);