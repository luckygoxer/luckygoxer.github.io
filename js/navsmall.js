document.addEventListener("DOMContentLoaded", function() {
    const greaseImage = document.querySelector("header a figure img");
    const navSmalls = document.querySelectorAll(".navsmall");

    function toggleNavSmalls() {
        if (window.innerWidth < 840) {
            navSmalls.forEach(navSmall => {
                if (navSmall.style.display === "none" || navSmall.style.display === "") {
                    navSmall.style.display = "block";
                } else {
                    navSmall.style.display = "none";
                }
            });
        }
    }

    function checkScreenWidth() {
        if (window.innerWidth >= 840) {
            navSmalls.forEach(navSmall => {
                navSmall.style.display = "block";
            });
        } else {
            navSmalls.forEach(navSmall => {
                navSmall.style.display = "none";
            });
        }
    }

    greaseImage.addEventListener("click", toggleNavSmalls);
    window.addEventListener("resize", checkScreenWidth);
    checkScreenWidth();
});
