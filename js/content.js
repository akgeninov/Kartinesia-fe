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