
//adding functionality to social links
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

/*redirects*/
gitClick.addEventListener("click", ()=> {
    window.location.href = "https://github.com/Sklrat";
})

itchClick.addEventListener("click", ()=> {
    window.location.href = "https://camsthingz.itch.io/";
})

linkedinClick.addEventListener("click", ()=> {
    window.location.href = "https://www.linkedin.com/in/camille-tsui-6b371a2a1/";
})

youtubeClick.addEventListener("click", ()=> {
    window.location.href = "https://www.youtube.com/@CamsThingz";
})