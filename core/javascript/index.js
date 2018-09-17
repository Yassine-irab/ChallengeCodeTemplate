document.querySelector('.humburger').onclick = function() {
  this.classList.toggle('activate');
};


function displayFunction() {
    var expandNav = document.getElementById("burgerMenu");
    var colorMenu = document.getElementById("changeBack");
    
    expandNav.classList.toggle("toggleStyle");
    colorMenu.classList.toggle("changeBack");
}

$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 20,
    autoplay: false,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    lazyLoad: true,
    responsiveClass: true,
    navText: [
        "<i class='fa fa-arrow-left'></i>",
        "<i class='fa fa-arrow-right'></i>"
    ],
    responsive: {
        0: {
            items: 1,
            nav: false
        },
        600: {
            items: 2,
            nav: false
        },
        1000: {
            items: 3,
            nav: false,
            loop: true
        }
    }
});