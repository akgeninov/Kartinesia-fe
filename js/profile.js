function renderDataToDetail() {
  const username = localStorage.getItem('username');
  const email = localStorage.getItem('email');
  let parent = document.getElementById("data-user");

  if (username && email) {
    parent.innerHTML +=
      `<div class="row-1">
      <span>Email</span>
      <span> : </span>
      <span>${email}</span>
    </div>
    <div class="row-2">
      <span>Nama pengguna</span>
      <span> : </span>
      <span>${username}</span>
    </div>`;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  renderDataToDetail();

  const logoutButton = document.getElementById('logoutbtn');
  if (logoutButton) {
    logoutButton.addEventListener('click', function () {
      localStorage.removeItem('token');
      localStorage.removeItem('email');
      localStorage.removeItem('username');
      alert("Anda berhasil logout!");
      window.location.href = 'login.html';
    });
  }

  const loginButton = document.getElementById('loginButton');
  const token = localStorage.getItem('token');

  if (token && token !== 'undefined') {
    loginButton.innerHTML = `
      <a href="profile.html">
        <button class="btn-login">PROFILE</button>
      </a>`
  }
});

