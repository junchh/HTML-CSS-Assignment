window.addEventListener('scroll', function(e) {
    const pos = window.scrollY

    if(pos !== 0){
        document.getElementById("navbar").classList.add("darknavbar")
    } else {
        document.getElementById("navbar").classList.remove("darknavbar")
    }
    if(pos < window.innerHeight){
        document.getElementById("home").classList.remove("active")
        document.getElementById("about").classList.remove("active")
        document.getElementById("contact").classList.remove("active")

        document.getElementById("home").classList.add("active")
    } else if(pos >= window.innerHeight){
        if(pos < 2 * window.innerHeight){
            document.getElementById("home").classList.remove("active")
            document.getElementById("about").classList.remove("active")
            document.getElementById("contact").classList.remove("active")

            document.getElementById("about").classList.add("active")
        } else {
            document.getElementById("home").classList.remove("active")
            document.getElementById("about").classList.remove("active")
            document.getElementById("contact").classList.remove("active")

            document.getElementById("contact").classList.add("active")
        }
    }
})

function goHere(id) {
    if(id == "home") {
        window.scroll(0, 0)
    } else if(id == "about") {
        setTimeout(function () {
            window.scrollTo(0, window.innerHeight);
        }, 0);
    } else {
        setTimeout(function () {
            window.scrollTo(0, 2 * window.innerHeight);
        }, 0);
    }
}
