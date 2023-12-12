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
    `<div class="data-user">
      <table>
        <tr>
          <td>Email</td>
          <td> : </td>
          <td>${email}</td>
        </tr>
        <tr>
          <td>Nama pengguna</td>
          <td> : </td>
          <td>${username}</td>
        </tr>
      </table>
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