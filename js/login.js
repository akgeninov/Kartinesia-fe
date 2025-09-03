// ======================
// SWITCH LOGIN <-> SIGNUP
// ======================
const logRegBox = document.querySelector('.logreg-box');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');

registerLink.addEventListener('click', () => {
  logRegBox.classList.add('active');
});
loginLink.addEventListener('click', () => {
  logRegBox.classList.remove('active');
});

// ======================
// FUNGSI CEK EMAIL
// ======================
function isValidEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

// ======================
// LOGIN
// ======================
const form = {
  email: document.querySelector("#login-email"),
  password: document.querySelector("#login-password"),
  submit: document.querySelector("#login-btn-submit"),
};

form.submit.addEventListener("click", (e) => {
  e.preventDefault();
  const loginURL = "http://localhost:3600/login";

  const email = form.email.value.trim();
  const password = form.password.value.trim();

  // Validasi
  if (!email || !password) {
    Swal.fire({
      icon: "warning",
      title: "Field kosong",
      text: !email && !password 
        ? "Email dan Password wajib diisi"
        : !email 
        ? "Email wajib diisi" 
        : "Password wajib diisi",
    });
    return;
  }

  if (!isValidEmail(email)) {
    Swal.fire({
      icon: "error",
      title: "Email tidak valid",
      text: "Gunakan format email yang benar (contoh: nama@email.com)",
    });
    return;
  }

  // Kirim ke server
  fetch(loginURL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  })
    .then((response) => {
      if (!response.ok) throw new Error("Login gagal");
      return response.json();
    })
    .then((data) => {
      localStorage.setItem("email", data.user.email);
      localStorage.setItem("username", data.user.username);
      localStorage.setItem("token", data.token);

      Swal.fire({
        icon: "success",
        title: "Login berhasil",
        text: `Selamat datang, ${data.user.username}!`,
      }).then(() => {
        window.location.href = "index.html";
      });
    })
    .catch(() => {
      Swal.fire({
        icon: "error",
        title: "Login gagal",
        text: "Email atau Password salah",
      });
    });
});

// ======================
// SIGN UP
// ======================
const signUpForm = {
  email: document.querySelector("#signup-email"),
  username: document.querySelector("#signup-username"),
  password: document.querySelector("#signup-password"),
  confirm_password: document.querySelector("#signup-confirm-password"),
  agreeTerms: document.querySelector("#agree-terms"),
  submit: document.querySelector("#signup-btn-submit"),
};

signUpForm.submit.addEventListener("click", (e) => {
  e.preventDefault();

  const signUpURL = "http://localhost:3600/signup";

  const email = signUpForm.email.value.trim();
  const username = signUpForm.username.value.trim();
  const password = signUpForm.password.value.trim();
  const confirmPassword = signUpForm.confirm_password.value.trim();

  // Validasi
  if (!email || !username || !password || !confirmPassword) {
    Swal.fire({
      icon: "warning",
      title: "Oops...",
      text: "Semua field wajib diisi!",
    });
    return;
  }

  if (!isValidEmail(email)) {
    Swal.fire({
      icon: "error",
      title: "Email tidak valid",
      text: "Masukkan email dengan format yang benar",
    });
    return;
  }

  if (username.length < 3 || username.length > 15) {
    Swal.fire({
      icon: "info",
      title: "Username tidak valid",
      text: "Username harus 3 - 15 karakter",
    });
    return;
  }

  if (password.length < 6) {
    Swal.fire({
      icon: "info",
      title: "Password lemah",
      text: "Password minimal 6 karakter",
    });
    return;
  }

  if (password !== confirmPassword) {
    Swal.fire({
      icon: "error",
      title: "Password tidak sama",
      text: "Konfirmasi password tidak cocok!",
    });
    return;
  }

  if (!signUpForm.agreeTerms.checked) {
    Swal.fire({
      icon: "warning",
      title: "Syarat & Ketentuan",
      text: "Anda harus menyetujui syarat dan ketentuan",
    });
    return;
  }

  // Kirim ke server
  fetch(signUpURL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      username,
      password,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.error) {
        Swal.fire({
          icon: "error",
          title: "Gagal",
          text: data.error,
        });
      } else {
        Swal.fire({
          icon: "success",
          title: "Akun berhasil dibuat",
          text: "Silakan login sekarang!",
        }).then(() => {
          window.location.href = "login.html";
        });
      }
    })
    .catch(() => {
      Swal.fire({
        icon: "error",
        title: "Terjadi kesalahan",
        text: "Coba lagi nanti.",
      });
    });
});

// ======================
// CEK TOKEN LOGIN
// ======================
document.addEventListener("DOMContentLoaded", function () {
  const loginButton = document.getElementById("loginButton");
  const token = localStorage.getItem("token");

  if (loginButton && token && token !== "undefined") {
    loginButton.textContent = "PROFIL";
    loginButton.addEventListener("click", function () {
      window.location.href = "profile.html";
    });
  }
});
