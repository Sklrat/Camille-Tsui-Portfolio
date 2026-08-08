var fullImgBox = document.getElementById("fullImgBox");
var fullImg = document.getElementById("fullImg");

fetch("../data/art.json")
.then(res => res.json())
.then(arts => {
    const conatiner = document.querySelector(".art-container");
    arts.forEach(art => {
        conatiner.innerHTML += `
        ${art.image ? `<img src="${art.image}" onclick="openFullImg(this.src)">` : ""}`;
    });
});

function openFullImg(pic){
    fullImgBox.style.display = "flex";
    fullImg.src = pic;
//idk what im doing
    // fetch("../data/art.json")
    //     .then(res => res.json())
    //     .then(art => {
        
        
    //         art.forEach(element => {
    //             fullImgBox.innerHTML += `
    //             ${art.title ? `<h2>${art.title}</h2>` : ""}
    //             `
    //         });
    //     })
}

function closeFullImg(){
    fullImgBox.style.display = "none";
}