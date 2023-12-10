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
            <div class="baca-juga">
                <span>Baca juga :</span>
                <a href="">5 Cara Mengatasi Lonjakan Gula Darah Sebelum dan Sesudah Makan Siang</a>
            </div>
            <div class="artikel-terkait">
                <span class="judul">artikel terkait</span>
                <div class="list-artikel-terkait">
                    <div class="artikel">
                        <img src="asset/artikel.png" alt="">
                        <div class="text">
                            <span>Bahaya Gula Pasir Berlebihan Menurut dr Tirta</span>
                        </div>
                    </div>
                    <div class="artikel">
                        <img src="asset/artikel.png" alt="">
                        <div class="text">
                            <span>Bahaya Gula Pasir Berlebihan Menurut dr Tirta</span>
                        </div>
                    </div>
                    <div class="artikel">
                        <img src="asset/artikel.png" alt="">
                        <div class="text">
                            <span>Bahaya Gula Pasir Berlebihan Menurut dr Tirta</span>
                        </div>
                    </div>
                    <div class="artikel">
                        <img src="asset/artikel.png" alt="">
                        <div class="text">
                            <span>Bahaya Gula Pasir Berlebihan Menurut dr Tirta</span>
                        </div>
                    </div>
                    <div class="artikel">
                        <img src="asset/artikel.png" alt="">
                        <div class="text">
                            <span>Bahaya Gula Pasir Berlebihan Menurut dr Tirta</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="comment">
                <span>Komentar</span>
                <div class="contain-comment">
                    <div class="comment-bar">
                        <form action="" class="box-comment">
                            <input type="text" placeholder="Tuliskan komentar Anda" name="search-bar">
                        </form>
                        <button>Kirim</button>
                        <span>*Isi komentar sepenuhnya adalah tanggung jawab pengguna</span>
                    </div>
                    <div class="info">
                        <span>3 komentar</span>
                        <div class="filter" id="filter">
                            <button class="filter-btn selected" onclick="applyFilter('terbaru')">terbaru</button>
                            <button class="filter-btn" onclick="applyFilter('terlama')">terlama</button>
                            <button class="filter-btn" onclick="applyFilter('terpopuler')">terpopuler</button>
                        </div>
                    </div>
                    <div id="comments">
                        <div class="komentar" data-date="2022-08-24" data-likes="0">
                            <div class="img">
                                <img src="asset/profile.png" alt="">
                            </div>
                            <div class="sender-date-contain-like">
                                <div class="name-date">
                                    <span>Anonim</span>
                                    <span class="comment-date">24 Agustus 2022</span>
                                </div>
                                <div class="bunyi-komentar">
                                    <span>Sangat membantu</span>
                                </div>
                                <div class="like">
                                    <span class="love-btn" onclick="toggleLove(this)"><i class="far fa-heart"></i></span>
                                    <span class="like-count">0</span>
                                </div>
                            </div>
                        </div>
                        <div class="komentar" data-date="2023-03-01" data-likes="0">
                            <div class="img">
                                <img src="asset/profile.png" alt="">
                            </div>
                            <div class="sender-date-contain-like">
                                <div class="name-date">
                                    <span>Anonim</span>
                                    <span class="comment-date">1 Maret 2023</span>
                                </div>
                                <div class="bunyi-komentar">
                                    <span>Berita yang menarik</span>
                                </div>
                                <div class="like">
                                    <span class="love-btn" onclick="toggleLove(this)"><i class="far fa-heart"></i></span>
                                    <span class="like-count">0</span>
                                </div>
                            </div>
                        </div>
                        <div class="komentar" data-date="2023-11-01" data-likes="0">
                            <div class="img">
                                <img src="asset/profile.png" alt="">
                            </div>
                            <div class="sender-date-contain-like">
                                <div class="name-date">
                                    <span>Anonim</span>
                                    <span class="comment-date">1 November 2023</span>
                                </div>
                                <div class="bunyi-komentar">
                                    <span>Relate banget untuk jaman sekarang</span>
                                </div>
                                <div class="like">
                                    <span class="love-btn" onclick="toggleLove(this)"><i class="far fa-heart"></i></span>
                                    <span class="like-count">0</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`        
        }
    }
);