const logRegBox = document.querySelector('.logreg-box');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
// const registerWithEmail = document.querySelector('.btn-email');
// const backToRegist1 = document.querySelector('.arrow-back');

registerLink.addEventListener('click', () => {
    logRegBox.classList.add('active');
});
loginLink.addEventListener('click', () => {
    logRegBox.classList.remove('active');
}); 
// registerWithEmail.addEventListener('click', () => {
//     logRegBox.classList.add('active2');
//     logRegBox.classList.remove('active');
// });
// backToRegist1.addEventListener('click', () => {
//     logRegBox.classList.add('active');
//     logRegBox.classList.remove('active2');
// });
const form = {
    email: document.querySelector("#login-email"),
    password: document.querySelector("#login-password"),
    submit: document.querySelector("#login-btn-submit"),
  };
  let button = form.submit.addEventListener("click", (e) => {
    e.preventDefault();
    const login = "https://sleepy-jay-bandanna.cyclic.app/login";
  
    fetch(login, {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: form.email.value,
        password: form.password.value,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // code here //
        if (data.error) {
          alert("Error Password or Username"); /*displays error message*/
        } else {
          localStorage.setItem('token', data.token);
          window.location.href="index.html"; /*opens the target page while Id & password matches*/
        }
      })
      .catch((err) => {
        console.log(err);
      });
  });
  
// function login(email, password) {
//     const loginData = { email, password };
  
//     fetch("https://sleepy-jay-bandanna.cyclic.app/login", {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(loginData),
//     })
//     .then(res => res.json())
//     .then(data => {
//       if (data.token) {
//         // Jika login berhasil, simpan token (contoh: di localStorage)
//         localStorage.setItem('token', data.token);
//         // Lakukan sesuatu setelah login berhasil, misalnya tampilkan halaman berikutnya
//         // Atau, bisa memanggil fungsi fetch lain untuk mengambil data yang diperlukan setelah login
//         fetchArticles();
//       } else {
//         // Handle jika login gagal, tampilkan pesan kesalahan
//         console.error('Login failed:', data.message);
//       }
//     })
//     .catch(error => {
//       console.error('Error during login:', error);
//       // Handle jika terjadi kesalahan saat melakukan permintaan login
//     });
//   }
  
//   // Contoh penggunaan fungsi login
//   const email = 'example@example.com';
//   const password = 'password123';
  
//   login(email, password);
  