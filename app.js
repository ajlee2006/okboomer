
function googleTranslateElementInit() {
    new google.translate.TranslateElement({ pageLanguage: 'en' }, 'google_translate_element');
}
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });
});

$("#yates").click(function () {
    $("#list").slideToggle();
});

function myFunction(x) {
    x.classList.toggle("change");
}
function reveal() {
    let x = document.getElementById("actually");
    if (x.style.display === "none") {
        x.style.display = "block";
    }
    else {
        x.style.display = "none";
    }
}
function hidereal() {
    let x = document.getElementById("actually");
    x.style.display = 'none'
}
window.onload = hidereal