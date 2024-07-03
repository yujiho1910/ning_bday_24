function throwEmoji() {
    for (let i = 0; i < 3; i++) {
    const emojiContainer = document.getElementById('emoji-container');
    const emoji = document.createElement('div');
    const flowerEmojis = ['🌻', '🌷', '💐'];
    const randomEmoji = flowerEmojis[Math.floor(Math.random() * flowerEmojis.length)];
    emoji.className = 'emoji';
    emoji.innerText = randomEmoji; // Choose your emoji here

    // Set random position and direction
    const startX = Math.random() * window.innerWidth;
    const startY = Math.random() * window.innerHeight;
    const endX = (Math.random() - 0.5) * 200; // Adjust range for X movement
    const endY = -Math.random() * window.innerHeight; // Move upwards

    emoji.style.left = `${startX}px`;
    emoji.style.top = `${startY}px`;
    emoji.style.setProperty('--x', `${endX}px`);
    emoji.style.setProperty('--y', `${endY}px`);

    emojiContainer.appendChild(emoji);

    // Remove emoji after animation
    setTimeout(() => {
        emojiContainer.removeChild(emoji);
    }, 2000); // Match duration of animation
}
}

// For carousell
let currentSlide = 0;
const totalSlides = 6; // Number of slides

// Function to dynamically create carousel items
function createCarousel() {
    const carouselInner = document.querySelector('.carousel-inner');
    for (let i = 1; i <= totalSlides; i++) {
        const div = document.createElement('div');
        div.className = 'carousel-item';
        if (i === 1) div.classList.add('active'); // Make the first item active
        const img = document.createElement('img');
        img.src = `./NingPics/${i}.png`; // Assuming your images are named 1.jpg, 2.jpg, etc.
        img.alt = `Image ${i}`;
        div.appendChild(img);
        carouselInner.appendChild(div);
        console.log('created');
    }
}

// Function to show the slide
function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-item');
    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }
    const offset = -currentSlide * 100;
    document.querySelector('.carousel-inner').style.transform = `translateX(${offset}%)`;
}

// Function to go to the next slide
function nextSlide() {
    showSlide(currentSlide + 1);
}

// Function to go to the previous slide
function prevSlide() {
    showSlide(currentSlide - 1);
}

createCarousel();