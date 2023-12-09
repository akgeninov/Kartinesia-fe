let counter = 1;

setInterval(() => {
    document.getElementById("radio" + counter).checked = true;
    counter++;
    if (counter > 3) {
        counter = 1;
    }
}, 5000);

function toggleDropdown() {
    var dropdown = document.getElementById("myDropdown");
    dropdown.style.display = (dropdown.style.display === "flex") ? "none" : "flex";
  }

  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      for (var i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.style.display === "flex") {
          openDropdown.style.display = "none";
        }
      }
    }
  }


const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav ul');

menuToggle.addEventListener('click', function(){
  nav.classList.toggle('menu');
});

fetch("http://localhost:3600/articles?category=fesyen")
.then(res => res.json())
.then(data => renderDataToContent(data.data));

function renderDataToContent(articles){
    // get element content
    // let content = document.getElementById("content");
    // let id = 1;
    // for (article of articles){
    //     console.log(article);
    //     content.innerHTML+=`<div class="card" id=${id}>
    // <div class="thumb">
    //     <img src=${article.urlImage} alt="">
    // </div>
    // <div class="title">
    //     <a onclick="redirectToDetail(${id})">${article.title}</a>
    // </div>
    // </div>`
    //     id++;
    // }
    console.log(articles)
    // get parent element
    let parent = document.getElementById("list-news-right")
    for (article of articles){
      parent.innerHTML+=
      `<div class="image-container">
                <img src=${article.url_image} alt="">
                <div class="overlay-text">${article.title}</div>
              </div>`
    }
    
}