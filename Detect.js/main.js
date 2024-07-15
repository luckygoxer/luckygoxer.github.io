document.addEventListener("DOMContentLoaded", function() {
    // Function to check if the device is a mobile device
    function isMobile() {
        return /Mobi|Android/i.test(navigator.userAgent);
    }

     // Function to check if the device is a laptop or PC
     function isLaptopOrPC() {
        return !isMobile();
    }

    // If the device is mobile
    if (isMobile()) {
        // Get all elements with the class 'invisibleformobile'
        var elements = document.querySelectorAll('.invisibleformobile');
        
        // Loop through each element and add the class 'invisible'
        elements.forEach(function(element) {
            element.classList.add('invisible');
        });
    }

    // If the device is a laptop or PC
    if (isLaptopOrPC()) {
        // Get all elements with the class 'invisibleforpc'
        var elements = document.querySelectorAll('.invisibleforpc');
        
        // Loop through each element and add the class 'invisible'
        elements.forEach(function(element) {
            element.classList.add('invisible');
        });
    }
});
