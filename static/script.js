let lastScrollTop = 0; // Keep track of the last scroll position
let slideIndex = 1;
showSlide(slideIndex);

window.addEventListener("scroll", function() {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    
    // Check if the current scroll position is higher than the last scroll position
    if (currentScroll > lastScrollTop) {
        // Scrolling down, hide the title
        document.querySelector("header h1").classList.add("hidden-title");
    } else {
        // Scrolling up, show the title
        document.querySelector("header h1").classList.remove("hidden-title");
    }
    // Update the last scroll position to the current position
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
});

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('pfp-button').addEventListener('click', function(event) {
        console.log('PFP button clicked'); // Debugging line
        event.preventDefault(); // Prevent the default anchor behavior
        var menu = document.getElementById('sliding-menu');
        console.log('Menu:', menu); // Debugging line
        if (menu.classList.contains('menu-hidden')) {
            menu.classList.remove('menu-hidden');
            menu.classList.add('menu-visible');
        } else {
            menu.classList.remove('menu-visible');
            menu.classList.add('menu-hidden');
        }
        showSlide(slideIndex);
    });
    
    const themeToggle = document.getElementById('night-theme-toggle');
    const moonIcon = document.getElementById('moon-icon');
    const sunIcon = document.getElementById('sun-icon');
    const isNightTheme = localStorage.getItem('nightTheme') === 'true';

    // Set the initial theme and icon
    document.body.classList.toggle('night-theme', isNightTheme);
    moonIcon.style.display = isNightTheme ? 'inline-block' : 'none';
    sunIcon.style.display = isNightTheme ? 'none' : 'inline-block';

    themeToggle.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default anchor behavior
        const isNightMode = document.body.classList.contains('night-theme');
        document.body.classList.toggle('night-theme', !isNightMode);
        moonIcon.style.display = isNightMode ? 'none' : 'inline-block';
        sunIcon.style.display = isNightMode ? 'inline-block' : 'none';
        localStorage.setItem('nightTheme', !isNightMode);
    });
});

function moveSlide(n) {
    showSlide(slideIndex += n);
}

function showSlide(n) {
    let i;
    let slides = document.getElementsByClassName("anime-slide");
    if (!slides.length) {
        console.error("No slides found.");
        return; // Exit the function if no slides are present
    }
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "flex";
}
