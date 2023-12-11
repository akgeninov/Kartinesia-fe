// <===================================== FESYEN ==========================================>

fetch("https://sleepy-jay-bandanna.cyclic.app/articles?category=fesyen")
.then(res => res.json())
.then(data => renderDataToContentFesyenNewest(data.data));

function renderDataToContentFesyenNewest(articles){
    console.log(articles)
    // get parent element
    // const limitedArticles = articles.slice(0, 6); // Ubah angka 5 sesuai dengan jumlah yang diinginkan
    let parent = document.getElementById("fashion-news-bottom")
    const maxDescriptionLength = 370;
    for (article of articles){
      // Mengambil sebagian dari description dengan menggunakan slice
      const truncatedDescription = article.description.slice(0, maxDescriptionLength);
      parent.innerHTML+=
      `<div class="image-container">
      <a onclick="redirectToDetail(${article.article_id})" style="cursor: pointer;"><img src=${article.url_image} alt=""></a>
      <div class="overlay-text">      
      <a onclick="redirectToDetail(${article.article_id})" style="cursor: pointer; font-weight: bold;">${article.title}</a>
      <br>
      <br>
      <span>${truncatedDescription}...</span> <!-- Menampilkan description yang telah dipotong -->
      </div>
    </div>`
    }
  }

fetch("https://sleepy-jay-bandanna.cyclic.app/berita?order=asc&category=fesyen")
.then(res => res.json())
.then(data => renderDataToContentFesyenPop(data));

function renderDataToContentFesyenPop(articles){
    console.log(articles)
    // get parent element
    const limitedArticles = articles.slice(0, 3); // Ubah angka 5 sesuai dengan jumlah yang diinginkan
    let parent = document.getElementById("fashion-news-top")
    // const maxDescriptionLength = 100;
    for (article of limitedArticles){
      // Mengambil sebagian dari description dengan menggunakan slice
      // const truncatedDescription = article.description.slice(0, maxDescriptionLength);
      parent.innerHTML+=
      `<div class="image-container">
      <a onclick="redirectToDetail(${article.article_id})" style="cursor: pointer;"><img src=${article.url_image} alt=""></a>
      <div class="overlay-text">      
      <a onclick="redirectToDetail(${article.article_id})" style="cursor: pointer; font-weight: bold;">${article.title}</a>
      </div>
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
    }
  });
  