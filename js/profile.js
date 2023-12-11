document.addEventListener('DOMContentLoaded', function () {
  console.log("DOM Content Loaded");
  // Get the product ID from the URL
  // const urlParams = new URLSearchParams(window.location.search);
  // const newsId = urlParams.get('article_id');
  
  // console.log(newsId);
  
  // Get selected news
  fetch(`https://sleepy-jay-bandanna.cyclic.app/users`)
  .then(res => res.json())
  .then(data => renderDataToDetail(data));

  function renderDataToDetail(users){
  console.log(users)
  // const randomId = Math.floor(Math.random() * 20) + 1;
  console.log(users.email)
  console.log(users.username)
  // get parent element
  let parent = document.getElementById("data-user")
    parent.innerHTML+=
    `<table>
    <tr>
      <td>Email</td>
      <td> : </td>
      <td>${users.email}</td>
    </tr>
    <tr>
      <td>Nama pengguna</td>
      <td> : </td>
      <td>${users.username}</td>
    </tr>
  </table>`      
      }
  }
);

document.addEventListener('DOMContentLoaded', function() {
  const logoutButton = document.getElementById('logoutbtn');
    logoutButton.addEventListener('click', function() {
      window.location.href = 'index.html';
      localStorage.removeItem('token');
    });
  });