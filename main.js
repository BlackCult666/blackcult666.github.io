const circleType = new CircleType(document.querySelector(".rotating__section")).radius(50);

const sectionBalls = document.querySelectorAll('.section__ball');


sectionBalls.forEach(ball => {
    
    const handleMouseEnter = () => {
        const hoveredId = ball.id;
        sectionBalls.forEach(otherBall => {
            if (otherBall.id !== hoveredId) {
                if (otherBall.id === 'photo' || otherBall.id === 'about') {
                    otherBall.classList.add('hideToLeft');
                } else {
                    otherBall.classList.add('hideToRight');
                }
            }
        });
    };

    const handleMouseExit = () => {
        sectionBalls.forEach(otherBall => {
            otherBall.classList.remove('hideToRight');
            otherBall.classList.remove('hideToLeft');
        });
    }

    ball.addEventListener('mouseenter', handleMouseEnter);
    ball.addEventListener('mouseleave', handleMouseExit);

    ball.addEventListener('click', () => {
        handleMouseEnter();
    });
});

/*sectionBalls.forEach(ball => {
    ball.addEventListener('mouseover', () => {
        // Nascondi tutte le altre sezioni
        sectionBalls.forEach(otherBall => {
            if (otherBall !== ball) {
                otherBall.style.display = 'none';
            }
        });
        // Visualizza la "cosa" desiderata, sostituisci "cosa" con il tuo elemento
        // Esempio:
        // document.getElementById('elemento-da-mostrare').style.display = 'block';
    });

    ball.addEventListener('mouseout', () => {
        // Mostra tutte le altre sezioni quando esce l'hover
        sectionBalls.forEach(otherBall => {
            otherBall.style.display = 'flex';
        });
        // Nascondi la "cosa" quando esce l'hover, sostituisci "cosa" con il tuo elemento
        // Esempio:
        // document.getElementById('elemento-da-mostrare').style.display = 'none';
    });
});*/