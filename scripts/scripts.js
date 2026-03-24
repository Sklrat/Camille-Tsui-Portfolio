//nav bar
//load nav
window.addEventListener("DOMContentLoaded", () => {
    fetch ("../navbar.html")
    .then(res => res.text())
    .then(data => {
        document.getElementById("navbar").innerHTML = data;

        //give nav functionality
        let aboutClick = document.getElementById("about-button")
        let gamesClick = document.getElementById("games-button")
        let artClick = document.getElementById("art-button")
        let miscClick = document.getElementById("misc-button")
        
        aboutClick.addEventListener("click", ()=> {
            window.location.href = "../pages/index.html"
        })

        gamesClick.addEventListener("click", ()=> {
            window.location.href = "../pages/games.html"
        })
        
        artClick.addEventListener("click", ()=> {
            window.location.href = "../pages/art.html"
        })
        
        miscClick.addEventListener("click", ()=> {
            window.location.href = "../pages/misc.html"
        })
    })
})




