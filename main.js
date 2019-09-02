const headerContainer = document.querySelector(".header-container");
const header = document.querySelector("header");

const menuIcon = document.querySelector(".menu-icon");
const mobileMenuItems = document.querySelector(".mobile-menu-items");

const mobileSearchIcon = document.querySelector(".mobile-header .search-icon");
const searchBoxMobile = document.querySelector(".searchbox-mobile");

const timesIcon = document.querySelector(".search-icon .fa-times");
const searchIcon = document.querySelector(".search-icon .fa-search");

const searchIconDesktop = document.querySelector(".search .search-icon-desktop");
const searchBoxDesktop = document.querySelector(".searchbox-desktop");


// Desktop Search

searchIconDesktop.addEventListener("click", function(){
  searchBoxDesktop.classList.toggle("active");
})

// Mobile Menu

menuIcon.addEventListener("click", function() {
  mobileMenuItems.classList.toggle("active");
})

// Mobile Search

mobileSearchIcon.addEventListener("click", function() {
  searchBoxMobile.classList.toggle("active");

  if(searchBoxMobile.classList.contains("active")) {
    searchIcon.style.display = "none";
    timesIcon.style.display = "block";
  } else {
    searchIcon.style.display = "block";
    timesIcon.style.display = "none";
  }
  
})


