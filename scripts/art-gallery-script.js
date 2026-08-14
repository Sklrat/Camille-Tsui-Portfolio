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
                        <button id="art-button-prev"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <circle cx="12" cy="12" r="10" fill="white"/>
  <path d="M0 0h24v24H0z" fill="none" />
  <path fill="currentColor" d="M2 15v2h1v2h1v1h1v1h2v1h2v1h6v-1h2v-1h2v-1h1v-1h1v-2h1v-2h1V9h-1V7h-1V5h-1V4h-1V3h-2V2h-2V1H9v1H7v1H5v1H4v1H3v2H2v2H1v6zm1-6h1V7h1V5h2V4h2V3h6v1h2v1h2v2h1v2h1v6h-1v2h-1v2h-2v1h-2v1H9v-1H7v-1H5v-2H4v-2H3z" />
  <path fill="currentColor" d="M7 13v-2h1v-1h1V9h1V8h1V7h1v4h6v2h-6v4h-1v-1h-1v-1H9v-1H8v-1z" />
</svg>
</button>
                    <button id="art-button-next">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <circle cx="12" cy="12" r="10" fill="white"/>
  <path fill="currentColor" d="M22 9V7h-1V5h-1V4h-1V3h-2V2h-2V1H9v1H7v1H5v1H4v1H3v2H2v2H1v6h1v2h1v2h1v1h1v1h2v1h2v1h6v-1h2v-1h2v-1h1v-1h1v-2h1v-2h1V9zm-1 6h-1v2h-1v2h-2v1h-2v1H9v-1H7v-1H5v-2H4v-2H3V9h1V7h1V5h2V4h2V3h6v1h2v1h2v2h1v2h1z"/>
  <path fill="currentColor" d="M17 11v2h-1v1h-1v1h-1v1h-1v1h-1v-4H6v-2h6V7h1v1h1v1h1v1h1v1z"/>
</svg>
</button>
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
