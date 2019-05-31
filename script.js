window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("sidenVises");

    // Hvis vi er på side der har .menu_toggle aktiverer vi eventlistener på .menu_toggle
    if (document.querySelector("header .menu_toggle") !== null) {
        // Laver eventlistener på .menu_toggle til at åbne/lukke menuen på mindre skærme
        document.querySelector("header .menu_toggle").addEventListener("click", toggleMenu);
    }
}

function toggleMenu() {
    console.log("toggleMenu");

    // Toggler (skifter mellem at fjerne eller tilføje) class'en active på nav
    document.querySelector("header nav").classList.toggle("active");
}

// Hvis vi er på assignments siden aktiverer vi eventlistener på toggleAssignments
if (document.querySelector(".theme_descr") !== null) {
    document.querySelector(".theme_descr").addEventListener("click", toggleAssignments);

    function toggleAssignments() {
        console.log("toggleAssignments");

        // Toggler (skifter mellem at fjerne eller tilføje) class'en open på den overliggende (forælder) med class'en theme
        this.closest(".theme").classList.toggle("open");
    }
}
