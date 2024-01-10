// slider 

const slider = document.querySelector('#shoe-sales .slider');
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
const search = document.querySelector('.search-icon');
const searchBar = document.querySelector('.search-bar');


// previous and next navigation

next.addEventListener('click', function () {
    slider.scrollLeft += slider.clientWidth;
});

prev.addEventListener('click', function() {
    slider.scrollLeft -= slider.clientWidth;
});

// menu 

const navList = document.querySelector('.nav-list');
const menuIcon = document.querySelector('.menu-icon');

menuIcon.addEventListener('click', function () {
    navList.classList.toggle('show');
});

search.addEventListener('click', function () {
    searchBar.classList.toggle('display');
});