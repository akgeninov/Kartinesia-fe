// document.addEventListener('DOMContentLoaded', async () => {
//     try {
//       // Menghasilkan ID acak (contoh: dari 1 hingga 100)
//       const randomId = Math.floor(Math.random() * 20) + 1;
  
//       // Melakukan permintaan ke endpoint server untuk mengambil artikel berdasarkan ID acak
//       const response = await fetch(`https://sleepy-jay-bandanna.cyclic.app/news/${randomId}`);
//       const article = await response.json();
  
//       // Lakukan sesuatu dengan artikel yang diterima
//       await renderDataToContentRandom(article);
//     //   function renderDataToContentRandom(articles){
//       console.log(article);
//       const limitedArticles = articles.slice(0, 4); // Ubah angka 5 sesuai dengan jumlah yang diinginkan
//       let parent = document.getElementById("detail-news")
//       for (article of limitedArticles){
//         parent.innerHTML+=
//         `<div class="baca-juga">
//           <span>Baca juga :</span>
//           <a onclick="redirectToDetail(${article.article_id})" style="cursor: pointer; font-weight: bold;">${article.title}</a>
//           </div>
//           <div class="artikel-terkait">
//           <span class="judul">artikel terkait</span>
//           <div class="list-artikel-terkait">
//             <div class="artikel">
//             <a onclick="redirectToDetail(${article.article_id})" style="cursor: pointer;"><img src=${article.url_image} alt=""></a>
      
//                 <div class="text">
//                     <span>      <a onclick="redirectToDetail(${article.article_id})" style="cursor: pointer; font-weight: bold;">${article.title}</a>
//                     </span>
//                 </div>
//             </div>
//         </div>
//       </div>`
      
//     } 
// }catch (error) {
//       console.error('Terjadi kesalahan:', error);
//     }
//   });

// function redirectToDetail(randomId) {
//     console.log(randomId)
//     console.log('redirect to content');
//     // You can use window.location.href to redirect to the detail page
//     window.location.href = 'content.html?article_id=' + randomId;
// }