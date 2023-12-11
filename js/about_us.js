const wrapper = document.querySelector(".wrapper");
const carousel = document.querySelector(".carousel");
const firstCardWidth = carousel.querySelector(".card").offsetWidth;
const arrowBtns = document.querySelectorAll(".wrapper i");
const carouselChildrens = [...carousel.children];

let isDragging = false, isAutoPlay = true, startX, startScrollLeft, timeoutId;

// Get the number of cards that can fit in the carousel at once
let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);

// Insert copies of the last few cards to beginning of carousel for infinite scrolling
carouselChildrens.slice(-cardPerView).reverse().forEach(card => {
    carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
});

// Insert copies of the first few cards to end of carousel for infinite scrolling
carouselChildrens.slice(0, cardPerView).forEach(card => {
    carousel.insertAdjacentHTML("beforeend", card.outerHTML);
});

// Scroll the carousel at appropriate postition to hide first few duplicate cards on Firefox
carousel.classList.add("no-transition");
carousel.scrollLeft = carousel.offsetWidth;
carousel.classList.remove("no-transition");

// Add event listeners for the arrow buttons to scroll the carousel left and right
arrowBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        carousel.scrollLeft += btn.id == "left" ? -firstCardWidth : firstCardWidth;
    });
});

const dragStart = (e) => {
    isDragging = true;
    carousel.classList.add("dragging");
    // Records the initial cursor and scroll position of the carousel
    startX = e.pageX;
    startScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
    if(!isDragging) return; // if isDragging is false return from here
    // Updates the scroll position of the carousel based on the cursor movement
    carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
}

const dragStop = () => {
    isDragging = false;
    carousel.classList.remove("dragging");
}

const infiniteScroll = () => {
    // If the carousel is at the beginning, scroll to the end
    if(carousel.scrollLeft === 0) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth);
        carousel.classList.remove("no-transition");
    }
    // If the carousel is at the end, scroll to the beginning
    else if(Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.offsetWidth;
        carousel.classList.remove("no-transition");
    }

    // Clear existing timeout & start autoplay if mouse is not hovering over carousel
    clearTimeout(timeoutId);
    if(!wrapper.matches(":hover")) autoPlay();
}

const autoPlay = () => {
    if(window.innerWidth < 800 || !isAutoPlay) return; // Return if window is smaller than 800 or isAutoPlay is false
    // Autoplay the carousel after every 2500 ms
    timeoutId = setTimeout(() => carousel.scrollLeft += firstCardWidth, 2500);
}
autoPlay();

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);
carousel.addEventListener("scroll", infiniteScroll);
wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
wrapper.addEventListener("mouseleave", autoPlay);


  function toggleDropdown() {
    var dropdown = document.getElementById("myDropdown");
    dropdown.style.display = (dropdown.style.display === "flex") ? "none" : "flex";
  }

  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      for (var i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.style.display === "flex") {
          openDropdown.style.display = "none";
        }
      }
    }
  }

const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav ul');

menuToggle.addEventListener('click', function(){
  nav.classList.toggle('menu');
});

// const galleryContainer = document.querySelector('.gallery-container');
// const galleryControlsContainer = document.querySelector('.gallery-controls');
// const galleryControls = ['previous', 'next'];
// const galleryItems = document.querySelector('.gallery-item');

// class Carousel {
//     constructor(container, items, controls){
//         this.carouselContainer = container;
//         this.carouselControls = controls;
//         this.carouselArray = [...items];
//     }

//     updateGallery(){
//         this.carouselArray.forEach(el => {
//             el.classList.remove('gallery-items-1');
//             el.classList.remove('gallery-items-2');
//             el.classList.remove('gallery-items-3');
//             el.classList.remove('gallery-items-4');
//             el.classList.remove('gallery-items-5');
//             el.classList.remove('gallery-items-6');
//         });

//         this,carouselArray.slice(0, 5).forEach((el , i) => {
//             el.classList.add(`gallery-items-${i+1}`);
//         });
//     }

//     setCurrentState(direction){
//         if (direction.className == 'gallery-controls-previous'){
//             this.carouselArray.unshift(this.carouselArray.pop());
//         }else{
//             this.carouselArray.push(this.carouselArray.shift());
//         }
//         this.updateGallery();
//     }

//     setControls(){
//         this.carouselControls.forEach(control => {
//             galleryControlsContainer.appendChild(document.createElement(button)).className = `gallery-controls-${control}`;
//             document.querySelector(`.gallery-controls-${control}`).innerText = control;
//         });
//     }

//     useControls(){
//         const triggers = [...galleryControlsContainer.childNodes];
//         triggers.forEach(control => {
//             control.addEventListener('click', e => {
//                 e.preventDefault();
//                 this.setCurrentState(control);
//             });
//         });
//     }
// }

// const exampleCarousel = new Carousel(galleryContainer, galleryItems, galleryControls);

// exampleCarousel.setControls();
// exampleCarousel.useControls();

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
