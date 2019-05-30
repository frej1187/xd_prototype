window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("sidenVises");

    document.querySelector("header .menu_toggle").addEventListener("click", toggleMenu);
}

function toggleMenu() {
    console.log("toggleMenu");

    document.querySelector("header nav").classList.toggle("active");
}

if (document.querySelector(".theme .theme_descr") !== null) {
    document.querySelector(".theme .theme_descr").addEventListener("click", toggleAssignments);

    function toggleAssignments() {
        console.log("toggleAssignments");

        this.closest(".theme").classList.toggle("open");
    }
}
