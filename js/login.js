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

// integrasi LOGIN
const form = {
  email: document.querySelector("#login-email"),
  password: document.querySelector("#login-password"),
  submit: document.querySelector("#login-btn-submit"),
};

form.submit.addEventListener("click", (e) => {
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
      if (data.error) {
        alert("Error Password or Username");
      } else {
        // Store user data in localStorage
        localStorage.setItem('email', data.user.email);
        localStorage.setItem('username', data.user.username); // Assuming 'username' is available in the response
        // Redirect to index.html after successful login
        localStorage.setItem('token', data.token);
        window.location.href = "index.html";
      }
    })
    .catch((err) => {
      console.log(err);
    });
});

  
// integrasi SIGNUP
const signUpForm = {
  email: document.querySelector("#signup-email"),
  username: document.querySelector("#signup-username"),
  password: document.querySelector("#signup-password"),
  confirm_password: document.querySelector("#signup-confirm-password"),
  agreeTerms: document.querySelector("#agree-terms"),
  submit: document.querySelector("#signup-btn-submit"),
};

let signUpButton = signUpForm.submit.addEventListener("click", (e) => {
  e.preventDefault();
  const signUpURL = "https://sleepy-jay-bandanna.cyclic.app/signup"; // Ubah sesuai endpoint untuk sign-up
  
  if (!signUpForm.agreeTerms.checked) {
    alert("Anda harus menyetujui Syarat dan Ketentuan yang berlaku");
    return;
  }
  // Validasi bahwa password dan konfirmasi password cocok
  if (signUpForm.password.value !== signUpForm.confirm_password.value) {
    alert("Password and confirm password do not match");
    return;
  }

  fetch(signUpURL, {
    method: "POST",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: signUpForm.email.value,
      username: signUpForm.username.value,
      password: signUpForm.password.value,
      confirm_password: signUpForm.confirm_password.value,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      if (data.error) {
        alert("Error creating account");
      } else {
        window.location.href = "index.html";
      }
    })
    .catch((err) => {
      console.log(err);
    });
});

document.addEventListener('DOMContentLoaded', function() {
  const loginButton = document.getElementById('loginButton');
  // Cek apakah ada token yang tersimpan di local storage
  const token = localStorage.getItem('token');
  // Periksa apakah token ada dan bukan undefined
  if (token && token !== 'undefined') {
    // Jika ada token, ubah teks tombol dan href-nya
    loginButton.textContent = 'PROFIL';
    loginButton.addEventListener('click', function() {
      window.location.href = 'profile.html';
    });
  };
  // if(token !== 'undefined'){
  //   // alert('Pengguna tidak ditemukan');
  //   // localStorage.removeItem('token');
  // }
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
  