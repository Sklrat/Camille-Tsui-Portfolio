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
        ${art.image ? `<img src="${art.image}" onclick="openFullImg(${index})">` : ""}`;
    });
});

artHeading.innerHTML = artID

function openFullImg(index){
    selectedArt = savedArts[index]
    fullImgBox.innerHTML = "";
    fullImgBox.style.display = "flex";
    fullImgBox.innerHTML += `
    ${selectedArt.image ? `<img src=${selectedArt.image} id="fullImg">` : ""}
    <span onclick="closeFullImg()">X</span>
    <div class = "art-info">
    ${selectedArt.title ? `<h1>${selectedArt.title}</h1>` : ""}
    ${selectedArt.description ? `<p>${selectedArt.description}</p>` : ""}
    ${selectedArt.date ? `<p>${selectedArt.date}</p>` : ""}
    </div>
    `
}

function closeFullImg(){
    fullImgBox.style.display = "none";
}