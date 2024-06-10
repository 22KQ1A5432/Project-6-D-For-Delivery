// Select the image element using its ID
const image = document.getElementById("myImage");

// Function to generate random positions within viewport boundaries
function getRandomPosition(maxValue) {
  return Math.floor(Math.random() * maxValue);
}

// Function to move the image to a random position
function moveImage() {
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;

  const imageWidth = image.clientWidth;
  const imageHeight = image.clientHeight;

  // Get random positions within allowed boundaries (avoiding image going off-screen)
  const newLeft = getRandomPosition(windowWidth - imageWidth);
  const newTop = getRandomPosition(windowHeight - imageHeight);

  // Update the image position using CSS style
  image.style.left = `${newLeft}px`;
  image.style.top = `${newTop}px`;
}

// Call the moveImage function initially to set a random starting position
moveImage();

// Set an interval to call the moveImage function repeatedly (e.g., every 100 milliseconds)
setInterval(moveImage, 100);
