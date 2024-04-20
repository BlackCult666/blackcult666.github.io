const circleType = new CircleType(document.querySelector(".rotated__section")).radius(50);
const draggableCircle = document.querySelector(".draggable__circle");
let offsetX, offsetY;

const move = (e) => {
    draggableCircle.style.left = `${e.clientX - offsetX}px`;
    draggableCircle.style.top = `${e.clientY - offsetY}px`;
}

draggableCircle.addEventListener("mousedown", (e) => {
    offsetX = e.clientX - draggableCircle.offsetLeft;
    offsetY = e.clientY - draggableCircle.offsetTop;

    document.addEventListener("mousemove", move);
});

document.addEventListener("mouseup", () => {
    document.removeEventListener("mousemove", move);
});



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