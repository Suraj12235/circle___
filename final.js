// Get references to HTML elements
const container = document.getElementById('container');
const circle = document.getElementById('circle');

// Initialize variables for circle position, movement direction, and rotation degree
var posX = 0;
var posY = 0;
var direction = 'right';
var rotationdegree = 0;

// Function to rotate and move the circle
function rotateAndMoveCircle() {
    // Update circle position based on the current direction
    if (direction == 'right') {
        posX += 1;
        // Change direction when reaching the right edge of the container
        if (posX + 2 >= container.offsetWidth - circle.offsetWidth) {
            direction = 'up';
        }
    } else if (direction == 'up') {
        posY += 1;
        // Change direction when reaching the top edge of the container
        if (posY + 2 >= container.offsetHeight - circle.offsetHeight) {
            direction = 'left';
        }
    } else if (direction == 'left') {
        posX -= 1;
        // Change direction when reaching the left edge of the container
        if (posX + 2 <= 0) {
            direction = 'down';
        }
    } else if (direction == 'down') {
        posY -= 1;
        // Change direction when reaching the bottom edge of the container
        if (posY + 2 <= 0) {
            direction = 'right';
        }
    }

    // Rotate the circle by 120 degrees in each iteration
    rotationdegree += 120;

    // Apply styles to the circle
    circle.style.transform = `rotate(${rotationdegree}deg)`;
    circle.style.left = posX + "px";
    circle.style.bottom = posY + "px";

    // Schedule the next iteration using setTimeout
    setTimeout(() => {
        rotateAndMoveCircle();
    }, 100000);

    // Use requestAnimationFrame for smoother animation
    requestAnimationFrame(rotateAndMoveCircle);
}

