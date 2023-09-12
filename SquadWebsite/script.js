// Define an array of links
const links = [
    'https://www.linkedin.com/in/mira%C3%A7-murt-a55296195/',
    'https://www.instagram.com/miracc__m/',
    'https://github.com/cariMYes',
    'https://www.youtube.com/channel/UCHaTiS9uXEJTW1zE3TFH0sQ',
    
    // Add more links as needed
];

// Function to select and navigate to a random link
function getRandomLink() {
    const randomIndex = Math.floor(Math.random() * links.length);
    const selectedLink = links[randomIndex];
    window.location.href = selectedLink;
}

// Attach a click event listener to the button
const randomButton = document.getElementById('randomButton');
randomButton.addEventListener('click', getRandomLink);
