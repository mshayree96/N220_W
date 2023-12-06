let imageSlider = document.getElementById('slide');
let currentIndex = 0;
let intervalId;
let isPlaying = true;
let timing = 2000; // Default timing in milliseconds

function slide() {
  imageSlider.src = images[currentIndex].image;
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % images.length;
  slide();
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  slide();
}

function toggleSlideshow() {
  if (isPlaying) {
    clearInterval(intervalId);
  } else {
    intervalId = setInterval(nextSlide, timing);
  }
  isPlaying = !isPlaying;
}

function changeTiming() {
  timing = parseInt(document.getElementById('timing').value) * 1000;
  if (isPlaying) {
    clearInterval(intervalId);
    intervalId = setInterval(nextSlide, timing);
  }
}

window.addEventListener('load', () => {
  slide();
  intervalId = setInterval(nextSlide, timing);
});


const images = [
    {
        id: 1,
        image: "./images/1.webp"
    },
    {
        id: 2,
        image: "./images/2.webp"
    },
    {
        id: 3,
        image: "./images/3.webp"
    },
    {
        id: 4,
        image: "./images/5.webp"
    },
    {
        id: 5,
        image: "./images/4.webp"
    },
    {
        id: 6,
        image: "./images/6.webp"
    },
    {
        id: 7,
        image: "./images/7.webp"
    },
    {
        id: 8,
        image: "./images/8.webp"
    },
    {
        id: 9,
        image: "./images/9.jpg"
    },
    {
        id: 10,
        image: "./images/10.jpg"
    },
    {
        id: 11,
        image: "./images/11.webp"
    }
];
