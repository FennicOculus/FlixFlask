let lastScrollTop = 0; // Keep track of the last scroll position

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
}, false);

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
    });
});

