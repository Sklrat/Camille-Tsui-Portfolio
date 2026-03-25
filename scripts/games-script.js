/* Games Page */
fetch("../data/game.json")
.then(res => res.json())
.then(games => {
    const container = document.getElementById("games-container");

    games.forEach(game => {
        container.innerHTML += `
            <div class="game-card" onclick="goToGamePage('${game.id}')">
                ${game.title ? `<h2 class="game-title">${game.title}</h2>` : ""}
                ${game.image ? `<img src="${game.image}" alt="">` : ""}
                ${game.description ? `<p>${game.description}</p>` : ""}
                ${game.date ? `<p class="game-date">${game.date}</p>` : ""}
                ${game.tags ? `
                    <ul class="game-tags">
                    ${game.tags.map(tag => `<li>#${tag}</li>`).join("")}
                    </ul>
                    ` : ""}
            </div>
        `
    })
})

function goToGamePage(id) {
    window.location.href = `../pages/game.html?id=${id}`
}