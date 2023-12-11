// document.addEventListener('DOMContentLoaded', function () {
//   console.log("DOM Content Loaded");
//   // Get the product ID from the URL
//   // const urlParams = new URLSearchParams(window.location.search);
//   // const newsId = urlParams.get('article_id');
  
//   // console.log(newsId);
  
//   // Get selected news
//   fetch(`https://sleepy-jay-bandanna.cyclic.app/users`)
//   .then(res => res.json())
//   .then(data => renderDataToDetail(data));

//   function renderDataToDetail(user){
//   console.log(user)
//   // const randomId = Math.floor(Math.random() * 20) + 1;
//   console.log(user.email)
//   console.log(user.username)
//   // get parent element
//   let parent = document.getElementById("data-user")
//     parent.innerHTML+=
//     `<table>
//     <tr>
//       <td>Email</td>
//       <td> : </td>
//       <td>${user.email}</td>
//     </tr>
//     <tr>
//       <td>Nama pengguna</td>
//       <td> : </td>
//       <td>${user.username}</td>
//     </tr>
//   </table>`      
//       }
//   }
// );

document.addEventListener('DOMContentLoaded', function() {
  const logoutButton = document.getElementById('logoutbtn');
    logoutButton.addEventListener('click', function() {
      window.location.href = 'index.html';
      localStorage.removeItem('token');
    });
  });
  // if(token !== 'undefined'){
  //   // alert('Pengguna tidak ditemukan');
  //   // localStorage.removeItem('token');
  // });