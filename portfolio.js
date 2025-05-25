
const carousel2 = document.getElementById('carousel2');
const carouselInner2= carousel2.querySelector('.carousel-inner2');
const carousel = document.getElementById('carousel');
const carouselInner = carousel.querySelector('.carousel-inner');

// Define a multiplier for faster scrolling
const scrollSpeed = 2; // You can adjust this number to make the scroll faster or slower

carousel.addEventListener('wheel', (event) => {
event.preventDefault(); // Prevent default scrolling behavior

const isAtEnd = carousel.scrollLeft + carousel.offsetWidth >= carousel.scrollWidth;
const isAtStart = carousel.scrollLeft === 0; // Check if at the start of the carousel

if (isAtEnd && event.deltaY > 0) {
// If at the end of the carousel, allow vertical scrolling
window.scrollBy({
    top: event.deltaY * scrollSpeed, // Multiply by scrollSpeed for faster scrolling
    left: 0,
    behavior: 'smooth' // Enable smooth scrolling for vertical
});
} else if (isAtStart && event.deltaY < 0) {
// If at the start of the carousel and scrolling upward, allow vertical scrolling
window.scrollBy({
    top: event.deltaY * scrollSpeed, // Multiply by scrollSpeed for faster upward scroll
    left: 0,
    behavior: 'smooth' // Enable smooth scrolling for vertical
});
} else {
// Otherwise, scroll horizontally
carousel.scrollBy({
    left: event.deltaY * scrollSpeed, // Multiply by scrollSpeed for faster horizontal scrolling
    top: 0,
    behavior: 'smooth' // Enable smooth scrolling for horizontal
});
}
});
carousel2.addEventListener('wheel', (event) => {
event.preventDefault(); // Prevent default scrolling behavior

const isAtEnd = carousel2.scrollLeft + carousel2.offsetWidth >= carousel2.scrollWidth;
const isAtStart = carousel2.scrollLeft === 0; // Check if at the start of the carousel

if (isAtEnd && event.deltaY > 0) {
// If at the end of the carousel, allow vertical scrolling
window.scrollBy({
    top: event.deltaY * scrollSpeed, // Multiply by scrollSpeed for faster scrolling
    left: 0,
    behavior: 'smooth' // Enable smooth scrolling for vertical
});
} else if (isAtStart && event.deltaY < 0) {
// If at the start of the carousel and scrolling upward, allow vertical scrolling
window.scrollBy({
    top: event.deltaY * scrollSpeed, // Multiply by scrollSpeed for faster upward scroll
    left: 0,
    behavior: 'smooth' // Enable smooth scrolling for vertical
});
} else {
// Otherwise, scroll horizontally
carousel2.scrollBy({
    left: event.deltaY * scrollSpeed, // Multiply by scrollSpeed for faster horizontal scrolling
    top: 0,
    behavior: 'smooth' // Enable smooth scrolling for horizontal
});
}
});