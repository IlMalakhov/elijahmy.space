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
        
        button.classList.add('slam');

        setTimeout(() => {
            button.classList.remove('slam');
        }, 500);
    });
    
    function createRocket() {
        console.log('Creating rocket');
        
        const rocket = document.createElement('div');
        rocket.className = 'rocket';
        
        const c = Math.random() * window.innerWidth;
        
        rocket.style.left = `${c}px`;
        rocket.style.bottom = '0px'; 
        rocket.style.animationDuration = '1.5s';

        fireworksContainer.appendChild(rocket);

        rocket.addEventListener('animationend', function() {
            rocket.remove();
            createCartoonExplosion(c)
            createFirework(c);
        });

        rocket.classList.add('launch');
        
    function createCartoonExplosion(c) {
        console.log('Creating cartoon explosion at:', c);
        
        const explosion = document.createElement('div');
        explosion.className = 'explosion';
        
        const size = 50; 
        explosion.style.width = `${size}px`;
        explosion.style.height = `${size}px`;
        explosion.style.left = `${c - size / 2}px`;
        explosion.style.top = '50%';

        fireworksContainer.appendChild(explosion);
        console.log('Cartoon explosion added to container');

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
        

        const size = Math.random() * 600 + 250;
        
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

    const color = colors[Math.floor(Math.random() * colors.length)];

        for (let i = 0; i < 5; i++) {
            const sparkle = document.createElement('div');
            sparkle.className = 'sparkle';
            sparkle.style.width = `${Math.random() * 250 + 80}px`;
            sparkle.style.height = sparkle.style.width;
            sparkle.style.backgroundColor = color;
            sparkle.style.left = `${Math.random() * 90}%`;
            sparkle.style.top = `${Math.random() * 90}%`;
            sparkle.style.animationDuration = `${Math.random() * 25 + 15}s`;
            sparkle.style.animationTimingFunction = 'ease-out';
            firework.appendChild(sparkle);
        }

        fireworksContainer.appendChild(firework);
        console.log('Firework added to container');

        firework.addEventListener('animationend', function() {
            firework.remove();
            console.log('Firework removed');
        });
    }
});
