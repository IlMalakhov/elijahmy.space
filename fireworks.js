document.addEventListener('DOMContentLoaded', function() {
    const button = document.querySelector('.click-me');
    const fireworksContainer = document.getElementById('fireworks-container');

    console.log('Button:', button);
    console.log('Fireworks container:', fireworksContainer);

    if (!button || !fireworksContainer) {
        console.error('Button or fireworks container not found!');
        return;
    }

    button.addEventListener('click', function() {
        console.log('Button clicked');
        createRocket();
        
        // Add the slam class to trigger the animation
        button.classList.add('slam');

        // Remove the class after the animation ends
        setTimeout(() => {
            button.classList.remove('slam');
        }, 500); // Match this timeout with the animation duration
    });
    
    function createRocket() {
        console.log('Creating rocket');
        
        // Create firework rocket
        const rocket = document.createElement('div');
        rocket.className = 'rocket';
        
        // Generate random x position
        const c = Math.random() * window.innerWidth;
        
        // Position the rocket at the bottom of the screen
        rocket.style.left = `${c}px`;
        rocket.style.bottom = '0px'; // Start at the bottom
        rocket.style.animationDuration = '1.5s'; // Time to reach the top

        fireworksContainer.appendChild(rocket);

        // Launch the rocket
        rocket.addEventListener('animationend', function() {
            // Remove the rocket and create explosion
            rocket.remove();
            createCartoonExplosion(c)
            createFirework(c); // Create explosion at the rocket's x position
        });

        // Trigger rocket launch animation
        rocket.classList.add('launch');
        
    function createCartoonExplosion(c) {
        console.log('Creating cartoon explosion at:', c);
        
        // Create explosion element
        const explosion = document.createElement('div');
        explosion.className = 'explosion';
        
        const size = 50; // Size of the explosion
        explosion.style.width = `${size}px`;
        explosion.style.height = `${size}px`;
        explosion.style.left = `${c - size / 2}px`; // Center explosion at the rocket's x position
        explosion.style.top = '50%'; // Place explosion in the middle of the screen

        fireworksContainer.appendChild(explosion);
        console.log('Cartoon explosion added to container');

        // Remove explosion after animation ends
        explosion.addEventListener('animationend', function() {
            explosion.remove();
            console.log('Cartoon explosion removed');
        });
    }
    };

    function createFirework(c) {
        console.log('Creating firework');
        const firework = document.createElement('div');
        firework.className = 'firework';
        

        const size = Math.random() * 600 + 250; // Increased size: Random between 200 and 300
        
        const halfSize = size / 2;
        const x = Math.random() * (window.innerWidth - size) + halfSize;
        const y = Math.random() * (window.innerHeight - size) + halfSize;

        firework.style.width = `${size}px`;
        firework.style.height = `${size}px`;
        firework.style.left = `${c - halfSize}px`;
        firework.style.top = `${y}px`;

    const colors = [
        `rgba(233, 86, 112, 0.8)`,   // Rose
        `rgba(255, 140, 0, 0.8)`,   // Dark Orange
        `rgba(193, 151, 210, 0.8)`,    // Purp
        `rgba(255, 215, 0, 0.8)`,   // Gold
        `rgba(214, 123, 168, 0.8)`,   // Indigo
    ];

    // Randomly select one of the colors from the array
    const color = colors[Math.floor(Math.random() * colors.length)];

        // Create sparkles
        for (let i = 0; i < 5; i++) { // Increased number of sparkles
            const sparkle = document.createElement('div');
            sparkle.className = 'sparkle';
            sparkle.style.width = `${Math.random() * 250 + 80}px`; // Slightly larger sparkles
            sparkle.style.height = sparkle.style.width;
            sparkle.style.backgroundColor = color; // More opaque
            sparkle.style.left = `${Math.random() * 90}%`;
            sparkle.style.top = `${Math.random() * 90}%`;
            sparkle.style.animationDuration = `${Math.random() * 25 + 15}s`; // Longer animation
            sparkle.style.animationTimingFunction = 'ease-out';
            firework.appendChild(sparkle);
        }

        fireworksContainer.appendChild(firework);
        console.log('Firework added to container');

        // Remove firework after animation ends
        firework.addEventListener('animationend', function() {
            firework.remove();
            console.log('Firework removed');
        });
    }
});