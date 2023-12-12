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

// <===================================== HOME ==========================================>

// FESYEN

fetch("http://localhost:3600/articles?category=fesyen")
.then(res => res.json())
.then(data => renderDataToContent(data.data));

function renderDataToContent(articles){
    console.log(articles)
    // get parent element
    const limitedArticles = articles.slice(0, 6); // Ubah angka 5 sesuai dengan jumlah yang diinginkan
    let parent = document.getElementById("list-news-right")
    for (article of limitedArticles){
      parent.innerHTML+=
      `<div class="image-container">
                <a onclick="redirectToDetail(${article.article_id})" style="cursor: pointer;"><img src=${article.url_image} alt=""></a>
                <div class="overlay-text">
                  <a onclick="redirectToDetail(${article.article_id})" style="cursor: pointer;">${article.title}</a>
                </div>
              </div>`
    }
}

// KESEHATAN

fetch("http://localhost:3600/articles?category=kesehatan")
.then(res => res.json())
.then(data => renderDataToContentKesehatan(data.data));

function renderDataToContentKesehatan(articles){
    console.log(articles)
    // get parent element
    const limitedArticles = articles.slice(0, 4); // Ubah angka 5 sesuai dengan jumlah yang diinginkan
    let parent = document.getElementById("list-news-left")
    const maxDescriptionLength = 150;
    for (article of limitedArticles){
      // Mengambil sebagian dari description dengan menggunakan slice
      const truncatedDescription = article.description.slice(0, maxDescriptionLength);
      parent.innerHTML+=
      `<div class="picture pct1">
        <a onclick="redirectToDetail(${article.article_id})" style="cursor: pointer;"><img src=${article.url_image} alt=""></a>    
        <div class="text">
          <span>
            <a onclick="redirectToDetail(${article.article_id})" style="cursor: pointer;">${article.title}</a>
          </span><br>
          <span>${truncatedDescription}...</span> <!-- Menampilkan description yang telah dipotong -->
        </div>
  </div>`
    }
  }

  // NEWEST

fetch("http://localhost:3600/articles/date?order=desc")
.then(res => res.json())
.then(data => renderDataToContentNewest(data.data));

function renderDataToContentNewest(articles){
  console.log(articles)
  // get parent element
  const limitedArticles = articles.slice(0, 6); // Ubah angka 5 sesuai dengan jumlah yang diinginkan
  let parent = document.getElementById("list-news-newest")
  const maxDescriptionLength = 90;
  const maxTitleLength = 40;
  for (article of limitedArticles){
    // Mengambil sebagian dari description dengan menggunakan slice
    const truncatedDescription = article.description.slice(0, maxDescriptionLength);
    const truncatedTitle = article.title.slice(0, maxTitleLength);
    parent.innerHTML+=
    `<div class="picture pct1">
    <a onclick="redirectToDetail(${article.article_id})" style="cursor: pointer;"><img src=${article.url_image} alt=""></a>    
    <div class="text">
    <span>
      <a onclick="redirectToDetail(${article.article_id})" style="cursor: pointer; font-weight: bold;">${truncatedTitle}...</a>
    </span>
    <span>${truncatedDescription}...</span> <!-- Menampilkan description yang telah dipotong -->
    </div>
    </div>`
  }
}

  // LATEST

fetch("http://localhost:3600/articles/date?order=asc")
.then(res => res.json())
.then(data => renderDataToContentRecomend(data.data));

function renderDataToContentRecomend(articles){
    console.log(articles)
    // get parent element
    const limitedArticles = articles.slice(0, 4); // Ubah angka 5 sesuai dengan jumlah yang diinginkan
    let parent = document.getElementById("list-newst-recomend")
    // const maxDescriptionLength = 100;
    for (article of limitedArticles){
      // Mengambil sebagian dari description dengan menggunakan slice
      // const truncatedDescription = article.description.slice(0, maxDescriptionLength);
      parent.innerHTML+=
      `<div class="image-container">
      <a onclick="redirectToDetail(${article.article_id})" style="cursor: pointer;"><img src=${article.url_image} alt=""></a>
      <a onclick="redirectToDetail(${article.article_id})" style="cursor: pointer; font-weight: bold;">${article.title}</a>
    </div>`
    }
  }

// RANDOM 

fetch("http://localhost:3600/articles")
.then(res => res.json())
.then(data => renderDataToContentPop(data.data));

function renderDataToContentPop(articles){
    console.log(articles)
    // get parent element
    const limitedArticles = articles.slice(0, 9); // Ubah angka 5 sesuai dengan jumlah yang diinginkan
    let parent = document.getElementById("list-news-pop")
    // const maxDescriptionLength = 100;
    for (article of limitedArticles){
      // Mengambil sebagian dari description dengan menggunakan slice
      // const truncatedDescription = article.description.slice(0, maxDescriptionLength);
      parent.innerHTML+=
      `<div class="image-container">
      <a onclick="redirectToDetail(${article.article_id})" style="cursor: pointer;"><img src=${article.url_image} alt=""></a>
      <a onclick="redirectToDetail(${article.article_id})" style="cursor: pointer; font-weight: bold;">${article.title}</a>
    </div>`
    }
  }

fetch("http://localhost:3600/articles/random")
.then(res => res.json())
.then(data => renderDataToSlide(data.data));

function renderDataToSlide(articles){
    console.log(articles)
    // get parent element
    const limitedArticles = articles.slice(0, 3); // Ubah angka 5 sesuai dengan jumlah yang diinginkan
    let parent = document.getElementById("slide-news")
    // const maxDescriptionLength = 100;
    for (article of limitedArticles){
      // Mengambil sebagian dari description dengan menggunakan slice
      // const truncatedDescription = article.description.slice(0, maxDescriptionLength);
      parent.innerHTML+=
      `<input type="radio" name="radio-btn" id="radio1">
      <input type="radio" name="radio-btn" id="radio2">
      <input type="radio" name="radio-btn" id="radio3">

      <div class="img-slide first">
        <a onclick="redirectToDetail(${article.article_id})" style="cursor: pointer;"><img src=${article.url_image} class="first" alt=""></a>
      </div>
      <div class="img-slide">
        <a onclick="redirectToDetail(${article.article_id})" style="cursor: pointer;"><img src=${article.url_image} class="first" alt=""></a>
      </div>

      <div class="nav-auto">
          <div class="a-b1"></div>
          <div class="a-b2"></div>
          <div class="a-b3"></div>
      </div>

      <div class="nav-m">
          <label for="radio1" class="m-btn"></label>
          <label for="radio2" class="m-btn"></label>
          <label for="radio3" class="m-btn"></label>
      </div>`
    }
  }

  
  // function untuk direct ke content.html
  function redirectToDetail(newsId) {
    console.log(newsId)
    console.log('redirect to content');
    // You can use window.location.href to redirect to the detail page
    window.location.href = 'content.html?article_id=' + newsId;
  }

// SEARCHING 
const searchForm = document.getElementById('searchForm');
const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');

searchForm.addEventListener('submit', function (event) {
  event.preventDefault(); // Mencegah form untuk melakukan submit default

  const searchTerm = searchInput.value.trim();

  fetch(`http://localhost:3600/articles/search?q=${searchTerm}`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      // Tampilkan data pencarian di halaman web
      // Misalnya, render ke dalam searchResults div
      // ...

      console.log('Search Results:', data);
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
      // Lakukan penanganan error sesuai kebutuhan
    });
});



document.addEventListener('DOMContentLoaded', function() {
  const loginButton = document.getElementById('loginButton');
  
  // Cek apakah ada token yang tersimpan di local storage
  const token = localStorage.getItem('token');

  // Periksa apakah token ada dan bukan undefined
  if (token && token !== 'undefined') {
    // Jika ada token, ubah teks tombol dan href-nya
    loginButton.textContent = 'PROFILE';
    loginButton.addEventListener('click', function() {
      window.location.href = 'profile.html';
    });
  };
  if(token === 'undefined'){
    alert('Pengguna tidak ditemukan');
    localStorage.removeItem('token');
  }
});
