// 1. Target the pricing grid and header row
const pricingGrid = document.querySelector('.pricing-grid');
const headerRow = pricingGrid.querySelectorAll('.header-cell');
const headerSeparator = pricingGrid.querySelector('.separator-container');
const topIntersectionTracker = document.querySelector(':nth-child(1 of .intersection-tracker)');
const whiteSpace = document.querySelector('.white-space');
const bottomIntersectionTracker = document.querySelector(':nth-child(2 of .intersection-tracker)')

// 2. Create an Intersection Observer
const stickyObserver = new IntersectionObserver( 
    entries => {
        entries.forEach(entry => {
            whiteSpace.classList.toggle("sticky",!entry.isIntersecting);
            headerRow.forEach(cell => cell.classList.toggle("sticky",!entry.isIntersecting));
            headerSeparator.classList.toggle("sticky",!entry.isIntersecting);
        });
    }, 
    {
        rootMargin: calculateRootMargin(),
    } // Tweak offset if needed
);

// const freeObserver = new IntersectionObserver( 
//     entries => {
//         entries.forEach(entry => {
//             // whiteSpace.classList.toggle("sticky",entry.isIntersecting);
//             whiteSpace.classList.toggle("free",entry.isIntersecting);
//             // headerRow.forEach(cell => cell.classList.toggle("sticky",entry.isIntersecting));
//             headerRow.forEach(cell => cell.classList.toggle("free",entry.isIntersecting));
//             // headerSeparator.classList.toggle("sticky",entry.isIntersecting);
//             headerSeparator.classList.toggle("free",entry.isIntersecting);
//         });
//     }
// );

function calculateRootMargin(){
    const viewportHeight = window.innerHeight;
    const desiredOffset = viewportHeight * 0.19 - 1;
    return `-${desiredOffset}px`;
}
// 3. Start observing the pricing grid
stickyObserver.observe(topIntersectionTracker);
// freeObserver.observe(bottomIntersectionTracker);