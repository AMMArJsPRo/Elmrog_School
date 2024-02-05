// ------------------------------------------------------

let navbar = document.querySelector(".navbar")

window.onscroll = function () {
    if (this.scrollY >= 200) {
        navbar.classList.add("scroll")
    } else {
        navbar.classList.remove("scroll")
    }
}

// ------------------------------------------------------