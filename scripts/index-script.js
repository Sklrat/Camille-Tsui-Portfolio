/*adding functionality to social links*/
let emailClick = document.getElementById("email");
let phoneClick = document.getElementById("phone")
let gitClick = document.getElementById("github")
let itchClick = document.getElementById("itch.io");
let linkedinClick = document.getElementById("linked-in")
let youtubeClick = document.getElementById("youtube")

/*copy to clip board*/
emailClick.addEventListener("click", ()=> {
    navigator.clipboard.writeText("camilletsui.zt@gmail.com").then(() => {
        alert ("Email copied!");
    })
})

phoneClick.addEventListener("click", ()=> {
    navigator.clipboard.writeText("825-735-2226").then(() => {
        alert ("Phone copied!");
    })
})

/*open new tab to socials*/
gitClick.addEventListener("click", ()=> {
    window.open("https://github.com/Sklrat");
})

itchClick.addEventListener("click", ()=> {
    window.open("https://glitchasaurus.itch.io/");
})

linkedinClick.addEventListener("click", ()=> {
    window.open("https://www.linkedin.com/in/camille-tsui-6b371a2a1/");
})

youtubeClick.addEventListener("click", ()=> {
    window.open("https://www.youtube.com/@CamsThingz");
})



//projects button
let gamesClick = document.getElementById("games")
let artClick = document.getElementById("art")
let miscClick = document.getElementById("misc")

gamesClick.addEventListener("click", ()=> {
    window.open = "pages/games.html"
})

artClick.addEventListener("click", ()=> {
    window.location.href = "pages/art.html"
})

miscClick.addEventListener("click", ()=> {
    window.location.href = "pages/misc.html"
})