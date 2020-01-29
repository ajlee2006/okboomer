function time() {
    let now = Date.now()
    document.getElementById('og').innerHTML = 'unix time:' + now
    dateObj = new Date(now);
    d8 = dateObj.toUTCString();
    let da = d8.split(/ +/)
    d8 = document.getElementById('ogg').innerHTML = `${da[1]} ${da[2]} ${da[3]}`

}
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

function myFunction(x) {
    x.classList.toggle("change");
}

$("a").on("click", function (event) {
    if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $("html, body").animate(
            {
                scrollTop: $(hash).offset().top
            },
            800,
            function () {
                window.location.hash = hash;
            }
        );
    }
});