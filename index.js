function throwEmoji() {
  for (let i = 0; i < 3; i++) {
    const emojiContainer = document.getElementById("emoji-container");
    const emoji = document.createElement("div");
    const flowerEmojis = ["🌻", "🌷", "💐"];
    const randomEmoji =
      flowerEmojis[Math.floor(Math.random() * flowerEmojis.length)];
    emoji.className = "emoji";
    emoji.innerText = randomEmoji; // Choose your emoji here

    // Set random position and direction
    const startX = Math.random() * window.innerWidth;
    const startY = Math.random() * window.innerHeight;
    const endX = (Math.random() - 0.5) * 200; // Adjust range for X movement
    const endY = -Math.random() * window.innerHeight; // Move upwards

    emoji.style.left = `${startX}px`;
    emoji.style.top = `${startY}px`;
    emoji.style.setProperty("--x", `${endX}px`);
    emoji.style.setProperty("--y", `${endY}px`);

    emojiContainer.appendChild(emoji);

    // Remove emoji after animation
    setTimeout(() => {
      emojiContainer.removeChild(emoji);
    }, 2000); // Match duration of animation
  }
}

let clickCount = 0;

function incrementCounter() {
  if (clickCount == 200) {
    alert(
      "No I'm forcing you to stop now. You have clicked 200 times. Go do something else."
    );
    // make the button hidden
    const button = document.getElementById("click-me");
    button.style.display = "none";
  } else if (clickCount == 100) {
    alert(
      "You have clicked 100 times! You can text me if you're bored you know..."
    );
    clickCount++;
    document.getElementById(
      "click-counter"
    ).innerText = `Button clicked: ${clickCount} times \nYou need help my bubs...\nJust text me okay HAHA`;
  } else if (clickCount >= 100) {
    clickCount++;
    document.getElementById(
      "click-counter"
    ).innerText = `Button clicked: ${clickCount} times \nYou need help my bubs...\nJust text me okay HAHA`;
  } else if (clickCount == 50) {
    alert("Congratulations! You have clicked 50 times! You can stop now...");
    clickCount++;
    document.getElementById(
      "click-counter"
    ).innerText = `Button clicked: ${clickCount} times \nYou need help my bubs...`;
  } else if (clickCount > 50) {
    clickCount++;
    document.getElementById(
      "click-counter"
    ).innerText = `Button clicked: ${clickCount} times \nYou need help my bubs...`;
  } else if (clickCount == 7) {
    alert(
      "You clicked 7 times! That's how long we took to meet up after we starting dating officially!"
    );
    clickCount++;
    document.getElementById(
      "click-counter"
    ).innerText = `Button clicked: ${clickCount} times`;
  } else {
    clickCount++;
    document.getElementById(
      "click-counter"
    ).innerText = `Button clicked: ${clickCount} times`;
  }

  throwEmoji();
}

document.addEventListener("DOMContentLoaded", function () {
  const lid = document.querySelector(".lid");
  const content = document.getElementById("content");
  const giftBox = document.getElementById("gift-box");
  const loading = document.getElementById("loading");

  setTimeout(() => {
    lid.style.transform = "rotateX(180deg) translateY(-100px)";
  }, 1000);

  setTimeout(() => {
    giftBox.style.display = "none";
    loading.style.display = "none";
    content.classList.remove("hidden");
  }, 3000);
});

// scroll to the top
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

scrollToTop();

// For carousell
let currentSlide = 0;
const totalSlides = 6; // Number of slides

// Function to dynamically create carousel items
function createCarousel() {
  const carouselInner = document.querySelector(".carousel-inner");
  for (let i = 1; i <= totalSlides; i++) {
    const div = document.createElement("div");
    div.className = "carousel-item";
    if (i === 1) div.classList.add("active"); // Make the first item active
    const img = document.createElement("img");
    img.src = `./NingPics/${i}.png`; // Assuming your images are named 1.jpg, 2.jpg, etc.
    img.alt = `Image ${i}`;
    div.appendChild(img);
    carouselInner.appendChild(div);
    console.log("created");
  }
}

// Function to show the slide
function showSlide(index) {
  const slides = document.querySelectorAll(".carousel-item");
  if (index >= slides.length) {
    currentSlide = 0;
  } else if (index < 0) {
    currentSlide = slides.length - 1;
  } else {
    currentSlide = index;
  }
  const offset = -currentSlide * 100;
  document.querySelector(
    ".carousel-inner"
  ).style.transform = `translateX(${offset}%)`;
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
