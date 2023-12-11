document.addEventListener('DOMContentLoaded', async () => {
    try {
      const token = localStorage.getItem('token');
  
      const response = await fetch("https://sleepy-jay-bandanna.cyclic.app/users", {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json"
        }
      });
  
      if (response.ok) {
        const users = await response.json();
        renderDataUser(users);
      } else {
        throw new Error('Gagal mendapatkan data user');
      }
    } catch (error) {
      console.error(error);
    }
  });
  
  function renderDataUser(users) {
    let parent = document.getElementById("data-user");
    for (const user of users) {
      parent.innerHTML += `
        <table>
          <tr>
            <td>Email</td>
            <td> : </td>
            <td>${user.email}</td>
          </tr>
          <tr>
            <td>Nama pengguna</td>
            <td> : </td>
            <td>${user.username}</td>
          </tr>
        </table>`;
    }
  }
  