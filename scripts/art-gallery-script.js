var fullImgBox = document.getElementById("fullImgBox");
var fullImg = document.getElementById("fullImg");
let savedArts = [];
const artHeading = document.getElementById("art-heading")
//get id
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const artID = urlParams.get('id')

//load data
fetch("../data/"+artID+".json")
.then(res => res.json())
.then(arts => {
    savedArts = arts;
    const conatiner = document.querySelector(".art-container");
    arts.forEach((art, index) => {
        conatiner.innerHTML += `
        ${art.thumbnail ? `<img src="${art.thumbnail}" onclick="openFullImg(${index})">` : ""}`;
    });
});

artHeading.innerHTML = artID

function openFullImg(index){
    selectedArt = savedArts[index]
    fullImgBox.innerHTML = "";
    fullImgBox.style.display = "flex";
    fullImgBox.innerHTML += `
    ${selectedArt.fullsize ? `<img src=${selectedArt.fullsize} id="fullImg">` : ""}
    <span onclick="closeFullImg()">X</span>
    <div class = "art-info">
    ${selectedArt.title ? `<h1>${selectedArt.title}</h1>` : ""}
    ${selectedArt.description ? `<p>${selectedArt.description}</p>` : ""}
    ${selectedArt.date ? `<p>${selectedArt.date}</p>` : ""}
    </div>
                        <button id="art-button-prev">&#8656;</button>
                    <button id="art-button-next">&#8658;</button>
    `

    /*making buttons work*/
    const nextButton = document.getElementById("art-button-next")
    nextButton.addEventListener ("click", () => {
        index += 1;
        if (index > savedArts.length - 1) {
            index = 0;
        }
        openFullImg(index)
    })
    const prevButton = document.getElementById("art-button-prev")
    prevButton.addEventListener ("click", () => {
        index -= 1;
         if (index < 0) {
            index = savedArts.length - 1;
        }
        openFullImg(index)
    })
}

function closeFullImg(){
    fullImgBox.style.display = "none";
}
