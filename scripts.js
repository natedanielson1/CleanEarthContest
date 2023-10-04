document.addEventListener('DOMContentLoaded', function() {
    const scrollingInfoContent = [
        "CleanEarthChallenge: Making the world a cleaner place!",
        "Join our latest challenge: Plastic-Free July",
        "New Blog Post: 10 Tips to Reduce Waste in Your Home",
        "Event: Beach Cleanup at Malibu, 10th July 2 PM",
        "Did you know? Over 1 million marine animals die each year from plastic debris in the ocean.",
        //... Add more messages as needed
    ];
    let currentMessageIndex = 0;

    const scrollingInfoBar = document.querySelector('.scrolling-info-bar-content');

    function updateScrollingInfoBar() {
        scrollingInfoBar.textContent = scrollingInfoContent[currentMessageIndex];
        currentMessageIndex = (currentMessageIndex + 1) % scrollingInfoContent.length;
    }

    setInterval(updateScrollingInfoBar, 5000); // Updates every 5 seconds

    updateScrollingInfoBar(); // Initial update


    const cleanupPosts = [
        {
            title: "Beach Cleanup",
            content: "Cleaned up the local beach today. Found a lot of plastic bottles.",
            imageUrl: "earth.jpg"
        },
        //... add more posts as needed
    ];

    const challenges = [
        {
            title: "Plastic-Free July",
            description: "Avoid using single-use plastics for the entire month of July.",
        },
        //... add more challenges as needed
    ];

    function displayCleanupPosts() {
        const feed = document.querySelector('.cleanup-feed');
        cleanupPosts.forEach(post => {
            const postElement = document.createElement('div');
            postElement.className = "post";

            const postTitle = document.createElement('h2');
            postTitle.textContent = post.title;

            const postImage = document.createElement('img');
            postImage.src = post.imageUrl;
            postImage.alt = post.title;

            const postContent = document.createElement('p');
            postContent.textContent = post.content;

            postElement.appendChild(postTitle);
            postElement.appendChild(postImage);
            postElement.appendChild(postContent);

            feed.appendChild(postElement);
        });
    }

    function displayChallenges() {
        const sidebar = document.querySelector('.challenges-sidebar');
        challenges.forEach(challenge => {
            const challengeElement = document.createElement('div');
            challengeElement.className = "challenge";

            const challengeTitle = document.createElement('h3');
            challengeTitle.textContent = challenge.title;

            const challengeDescription = document.createElement('p');
            challengeDescription.textContent = challenge.description;

            const joinButton = document.createElement('button');
            joinButton.textContent = "Join Challenge";
            joinButton.onclick = function() {
                joinChallenge(challenge.title);
            }

            challengeElement.appendChild(challengeTitle);
            challengeElement.appendChild(challengeDescription);
            challengeElement.appendChild(joinButton);

            sidebar.appendChild(challengeElement);
        });
    }

    function joinChallenge(challengeTitle) {
        alert(`You've joined the "${challengeTitle}" challenge!`);
        // Here you can add further logic for joining the challenge, 
        // like updating the user profile or saving it to a database.
    }

    displayCleanupPosts();
    displayChallenges();

});
