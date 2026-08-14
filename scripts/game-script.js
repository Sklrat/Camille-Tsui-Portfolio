const params = new URLSearchParams(window.location.search);
const gameId = params.get("id")

fetch("../data/game.json")
.then(res => res.json())
.then(games => {
    
    const game = games.find(g => g.id === gameId);

    //idk why image not correct unless put in carousel anymore
    //code sees if there is images and generates carousel if there is
    //if there is onlu 1 it just put that image not whole carousel
    const container = document.getElementById("game-detail-container");
    container.innerHTML += `
        <section>
        ${game.title ? `<h1 id="game-title">${game.title}</h1>`: ""}

        ${Array.isArray(game.image) && game.image.length > 0 ? `
            ${game.image.length === 1 ? `
                <div class="carousel" id="game-image-container" data-carousel>
                    <li class="slide" data-active>
                        <img src="${game.image[0]}" alt="">
                    </li>
                </div>
                ` : `
                    <div class="carousel" id="game-image-container" data-carousel>
                    <button class="carousel-button-prev" data-carousel-button="prev"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <circle cx="12" cy="12" r="10" fill="white"/>
  <path d="M0 0h24v24H0z" fill="none" />
  <path fill="currentColor" d="M2 15v2h1v2h1v1h1v1h2v1h2v1h6v-1h2v-1h2v-1h1v-1h1v-2h1v-2h1V9h-1V7h-1V5h-1V4h-1V3h-2V2h-2V1H9v1H7v1H5v1H4v1H3v2H2v2H1v6zm1-6h1V7h1V5h2V4h2V3h6v1h2v1h2v2h1v2h1v6h-1v2h-1v2h-2v1h-2v1H9v-1H7v-1H5v-2H4v-2H3z" />
  <path fill="currentColor" d="M7 13v-2h1v-1h1V9h1V8h1V7h1v4h6v2h-6v4h-1v-1h-1v-1H9v-1H8v-1z" />
</svg></button>
                    <button class="carousel-button-next" data-carousel-button="next"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <circle cx="12" cy="12" r="10" fill="white"/>
  <path fill="currentColor" d="M22 9V7h-1V5h-1V4h-1V3h-2V2h-2V1H9v1H7v1H5v1H4v1H3v2H2v2H1v6h1v2h1v2h1v1h1v1h2v1h2v1h6v-1h2v-1h2v-1h1v-1h1v-2h1v-2h1V9zm-1 6h-1v2h-1v2h-2v1h-2v1H9v-1H7v-1H5v-2H4v-2H3V9h1V7h1V5h2V4h2V3h6v1h2v1h2v2h1v2h1z"/>
  <path fill="currentColor" d="M17 11v2h-1v1h-1v1h-1v1h-1v1h-1v-4H6v-2h6V7h1v1h1v1h1v1h1v1z"/>
</svg></button>
                        <ul data-slides>
                        ${game.image.map((imgSrc, index) => `
                            <li class="slide" ${index === 0 ? `data-active` : ''}>
                                <img src="${imgSrc}" alt="">
                            </li>
                            `).join('')}
                        </ul>
                    </div>
                    `} 
                ` : ""}
            
        <div class="button-container">
        ${game.link ? `<p id="play-button" onclick="goToGame('${game.link}')">Play!</p>` : ""}
        ${game.git ? `<svg id="git-button" onclick="goToGame('${game.git}')" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24"><path fill="currentColor" d="M23 9v6h-1v2h-1v2h-1v1h-1v1h-1v1h-2v1h-1v-5h-1v-1h1v-1h2v-1h1v-1h1V9h-1V6h-2v1h-1v1h-1V7h-4v1H9V7H8V6H6v3H5v5h1v1h1v1h2v2H7v-1H6v-1H4v1h1v2h1v1h3v3H8v-1H6v-1H5v-1H4v-1H3v-2H2v-2H1V9h1V7h1V5h1V4h1V3h2V2h2V1h6v1h2v1h2v1h1v1h1v2h1v2z"/></svg>` : ""}
        </div>
        ${game.description ? `<p id="game-descprption">${game.description}</p>` : ""}
        </section>
        ${game.how_to_play ? 
            `<section>
            <h2 id="how-to-play-header">How to play</h2>
                <p id="how-to-play-text">${game.how_to_play}</p>
            </section>` : ""}
        ${game.how_it_was_made ? `
            <section>
            <h2 id="how-it-was-made-text">How it was made</h2>
                <p id="how-it-was-made-text">${game.how_it_was_made}</p>
                </section>` : ""}
        ${game.date ? `<p id="date">${game.date}</p>` : ""}
        ${game.tags ? `
            <ul id="tags">
                ${game.tags.map(tag => `<li>#${tag}</li>`).join("")}
            </ul>` 
            :""}
    `
    // making carousel buttons work
    const buttons = document.querySelectorAll("[data-carousel-button]")
    
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const offset = button.dataset.carouselButton === "next" ? 1 : -1;
            const slides = button
            .closest("[data-carousel]")
            .querySelector("[data-slides]");
    
            const activeSlide = slides.querySelector("[data-active]")
            let newIndex = [...slides.children].indexOf(activeSlide) + offset
            if (newIndex < 0) newIndex = slides.children.length - 1
            if (newIndex >= slides.children.length) newIndex = 0
    
            slides.children[newIndex].dataset.active = true
            delete activeSlide.dataset.active
        })
    })
})

function goToGame(link) {
  window.location.href = link;
}
