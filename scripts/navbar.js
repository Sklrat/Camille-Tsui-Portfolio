//nav bar
//load nav
const BASE = "Camille-Tsui-Portfolio/"
window.addEventListener("DOMContentLoaded", () => {

    const isIntPages = window.location.pathname.includes("/pages/");
    const pathPrefix = isIntPages ? "../" : "";

    fetch (BASE + pathPrefix + "/navbar.html")
    .then(res => res.text())
    .then(data => {
        document.getElementById("navbar").innerHTML = data;

        //give nav functionality
        let aboutClick = document.getElementById("about-button")
        let gamesClick = document.getElementById("games-button")
        let artClick = document.getElementById("art-button")
        let miscClick = document.getElementById("misc-button")
        
        aboutClick.addEventListener("click", ()=> {
            window.location.href = pathPrefix + "/index.html"
        })

        gamesClick.addEventListener("click", ()=> {
            window.location.href = pathPrefix + "/pages/games.html"
        })
        
        artClick.addEventListener("click", ()=> {
            window.location.href = pathPrefix + "/pages/art.html"
        })
        
        miscClick.addEventListener("click", ()=> {
            window.location.href = pathPrefix + "/pages/misc.html"
        })
    })
})




