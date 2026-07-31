const params = new URLSearchParams(window.location.search);
const gameId = params.get("id")

fetch("../data/game.json")
.then(res => res.json())
.then(games => {
    
    const game = games.find(g => g.id === gameId);

    const container = document.getElementById("game-detail-container");

    container.innerHTML += `
        <section>
        ${game.title ? `<h1 id="game-title">${game.title}</h1>`: ""}
        ${Array.isArray(game.image) && game.image.length > 0 ? `
            <div class="carousel" id="game-image-container" data-carousel>
            <button class="carousel-button-prev" data-carousel-button="prev">&#8656;</button>
            <button class="carousel-button-next" data-carousel-button="next">&#8658;</button>
                <ul data-slides>
                ${game.image.map((imgSrc, index) => `
                    <li class="slide" ${index === 0 ? `data-active` : ''}>
                        <img src="${imgSrc}" alt="">
                    </li>
                    `).join('')}
                </ul>
            </div>` : ""}
            
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
