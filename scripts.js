/ Mock Data
const posts = [
    {
        username: "JohnDoe",
        location: "City Park",
        description: "Cleaned up the entire park with friends!",
        imageUrl: "path_to_image1.jpg"
    },
    {
        username: "JaneSmith",
        location: "Riverbank",
        description: "Collected over 50 lbs of trash!",
        imageUrl: "path_to_image2.jpg"
    },
    // Add more mock posts as needed
];

const challenges = [
    {
        title: "Beach Cleanup",
        description: "Clean up any beach location and collect at least 20lbs of trash."
    },
    {
        title: "Mountain Trail Cleanup",
        description: "Clean up a mountain trail and take a picture with your collection."
    },
    // Add more mock challenges as needed
];

// Render Posts
function renderPosts() {
    const feed = document.querySelector('.cleanup-feed');

    posts.forEach(post => {
        const postElement = document.createElement('article');
        postElement.classList.add('cleanup-post');

        postElement.innerHTML = `
            <img src="${post.imageUrl}" alt="Cleanup at ${post.location}">
            <h3>${post.username}'s Cleanup at ${post.location}</h3>
            <p>${post.description}</p>
        `;

        feed.appendChild(postElement);
    });
}

// Render Challenges
function renderChallenges() {
    const challengeContainer = document.querySelector('.challenges-sidebar');

    challenges.forEach(challenge => {
        const challengeElement = document.createElement('div');
        challengeElement.classList.add('challenge');

        challengeElement.innerHTML = `
            <h3>${challenge.title}</h3>
            <p>${challenge.description}</p>
            <button>Accept Challenge</button>
        `;

        challengeContainer.appendChild(challengeElement);
    });
}

// Initialize functions when the page loads
document.addEventListener('DOMContentLoaded', function() {
    renderPosts();
    renderChallenges();
});
