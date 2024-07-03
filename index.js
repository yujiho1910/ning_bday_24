function handleClick() {
    console.log('this is your mom');
}

function throwEmoji() {
    const emojiContainer = document.getElementById('emoji-container');
    const emoji = document.createElement('div');
    const flowerEmojis = ['🌸', '🌺', '🌼', '🌻', '🌷', '🌹', '💐'];
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
