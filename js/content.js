function applyFilter(filter) {
    var filterBtns = document.getElementsByClassName('filter-btn');
    Array.from(filterBtns).forEach(function(btn) {
        btn.classList.remove('selected');
    });

    event.target.classList.add('selected');

    var comments = document.getElementsByClassName('comments').getElementsByClassName('komentar');
    var commentsArray = Array.from(comments);

    commentsArray.sort(function(a, b) {
        if (filter === 'terbaru') {
            return new Date(b.dataset.date) - new Date(a.dataset.date);
        } else if (filter === 'terlama') {
            return new Date(a.dataset.date) - new Date(b.dataset.date);
        } else if (filter === 'terpopuler') {
            return (parseInt(b.dataset.likes, 10) || 0) - (parseInt(a.dataset.likes, 10) || 0);
        }
    });

    commentsArray.forEach(function(comment) {
        comment.parentNode.removeChild(comment);
    });

    commentsArray.forEach(function(comment) {
        document.getElementById('comments').appendChild(comment);
    });
}

function toggleLove(loveBtn) {
    var comment = loveBtn.closest('.komentar');
    var likeCountElement = comment.querySelector('.like-count');
    var loves = parseInt(comment.dataset.likes, 10) || 0;

    if (loveBtn.classList.contains('active')) {
        // Unlike
        loves--;
    } else {
        // Like
        loves++;
    }

    comment.dataset.likes = loves;
    loveBtn.classList.toggle('active');
    likeCountElement.textContent = loves;
}


document.addEventListener('DOMContentLoaded', function () {
    console.log("DOM Content Loaded");
    // Get the product ID from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const newsId = urlParams.get('article_id');
    
    console.log(newsId);
    
    // Get selected news
    fetch(`https://sleepy-jay-bandanna.cyclic.app/news/${newsId}`)
    .then(res => res.json())
    .then(data => renderDataToDetail(data));

    function renderDataToDetail(article){
    console.log(article)
    const randomId = Math.floor(Math.random() * 20) + 1;

    // get parent element
    let parent = document.getElementById("detail-news")
      parent.innerHTML+=
      `<div class="header-news">
                <h2>${article.title}</h2>
                <img src=${article.url_image} alt="">
                <div class="share">
                    <a href=""><img src="/asset/icon _Instagram icon_.png" alt=""></a></a>
                    <a href=""><img src="/asset/Facebook v1 icon_.png" alt=""></a>
                    <a href=""><img src="/asset/icon _Whatsapp_.png" alt=""></a>
                    <a href=""><img src="/asset/icon _Twitter_.png" alt=""></a>
                    <a href=""><img src="/asset/icon_link.png" alt=""></a>
                </div>
            </div>
            <div class="contain">
                <p>Kartinesia. - ${article.description}</p>
            </div> 
            <div class="artikel-terkait">
                <span class="judul">artikel terkait</span>
                <div class="list-artikel-terkait">
                    <div class="artikel">
                    <img src=${article.url_image} alt="">
                        <div class="text">
                            <span>Bahaya Gula Pasir Berlebihan Menurut dr Tirta</span>
                        </div>
                    </div>
                </div>
            </div>`      
        }
    }
);

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
    
    if (token) {
      // Jika ada token, ubah teks tombol dan href-nya
      loginButton.textContent = 'PROFILE';
      loginButton.addEventListener('click', function() {
        window.location.href = 'profile.html';
      });
    }
  });