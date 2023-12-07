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