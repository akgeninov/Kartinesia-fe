function renderDataToDetail() {
  // Mengambil nilai username dan email dari localStorage
  const username = localStorage.getItem('username');
  const email = localStorage.getItem('email');
  // Memilih elemen parent di dalam HTML
  let parent = document.getElementById("data-user");

  // Memeriksa apakah nilai username dan email ada sebelum merender
  if (username && email) {
    // Merender data ke dalam elemen HTML
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

// Panggil fungsi untuk merender data saat halaman dimuat
document.addEventListener("DOMContentLoaded", renderDataToDetail);


document.addEventListener('DOMContentLoaded', function() {
  const logoutButton = document.getElementById('logoutbtn');
    logoutButton.addEventListener('click', function() {
      window.location.href = 'index.html';
      localStorage.removeItem('token');
      localStorage.removeItem('email');
      localStorage.removeItem('username');
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
        }
      });
      
  