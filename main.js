const circleType = new CircleType(document.querySelector(".rotated__section")).radius(50);

const draggableCircle = document.querySelector(".draggable__circle");
let offsetX, offsetY;

draggableCircle.addEventListener("mousedown", startDrag);
draggableCircle.addEventListener("touchstart", startDrag);

function startDrag(e) {
    e.preventDefault();

    const event = e.type === "touchstart" ? e.touches[0] : e;

    offsetX = event.clientX - draggableCircle.offsetLeft;
    offsetY = event.clientY - draggableCircle.offsetTop;

    document.addEventListener("mousemove", move);
    document.addEventListener("touchmove", move, { passive: false });
    document.addEventListener("mouseup", endDrag);
    document.addEventListener("touchend", endDrag);
}

function move(e) {
    e.preventDefault();

    const event = e.type === "touchmove" ? e.touches[0] : e;

    const posX = event.clientX - offsetX;
    const posY = event.clientY - offsetY;

    draggableCircle.style.left = `${posX}px`;
    draggableCircle.style.top = `${posY}px`;

    const draggableRect = draggableCircle.getBoundingClientRect();
    const sectionBalls = document.querySelectorAll('.section__ball');
    
    sectionBalls.forEach(ball => {
        const ballRect = ball.getBoundingClientRect();
        if (
            draggableRect.right >= ballRect.left &&
            draggableRect.left <= ballRect.right &&
            draggableRect.bottom >= ballRect.top &&
            draggableRect.top <= ballRect.bottom 
        ) {
            ball.classList.add('selected'); // Aggiungi la classe 'collision' alla .section__ball
        } else {
            ball.classList.remove('selected'); // Rimuovi la classe 'collision' se non c'è una collisione

        }
    });
}

function endDrag() {
    document.removeEventListener("mousemove", move);
    document.removeEventListener("touchmove", move);
    document.removeEventListener("mouseup", endDrag);
    document.removeEventListener("touchend", endDrag);
}



/*const sectionBalls = document.querySelectorAll('.section__ball');


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
*/