// <===================================== KESEHATAN ==========================================>
// NEWEST KESEHATAN
fetch("https://sleepy-jay-bandanna.cyclic.app/berita?order=asc&category=kesehatan")
.then(res => res.json())
.then(data => renderDataToContentKesehatanNewest(data));

function renderDataToContentKesehatanNewest(articles){
    console.log(articles)
    // get parent element
    const limitedArticles = articles.slice(0, 6); // Ubah angka 5 sesuai dengan jumlah yang diinginkan
    let parent = document.getElementById("healthy-news-bottom")
    const maxDescriptionLength = 370;
    for (article of limitedArticles){
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
  
  // POPULER KESEHATAN
fetch("https://sleepy-jay-bandanna.cyclic.app/articles?category=kesehatan")
.then(res => res.json())
.then(data => renderDataToContentKesehatanPop(data.data));

function renderDataToContentKesehatanPop(articles){
    console.log(articles)
    // get parent element
    const limitedArticles = articles.slice(0, 3); // Ubah angka 5 sesuai dengan jumlah yang diinginkan
    let parent = document.getElementById("healthy-news-top")
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
    