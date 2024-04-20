const circleType = new CircleType(document.querySelector(".rotated__section")).radius(50);

const draggableCircle = document.querySelector(".draggable__circle");
let offsetX, offsetY;

draggableCircle.addEventListener("mousedown", startDrag);
draggableCircle.addEventListener("touchstart", startDrag);

function startDrag(e) {
    e.preventDefault(); // Evita il comportamento predefinito del browser

    const event = e.type === "touchstart" ? e.touches[0] : e;

    offsetX = event.clientX - draggableCircle.offsetLeft;
    offsetY = event.clientY - draggableCircle.offsetTop;

    document.addEventListener("mousemove", move);
    document.addEventListener("touchmove", move, { passive: false });
    document.addEventListener("mouseup", endDrag);
    document.addEventListener("touchend", endDrag);
}

function move(e) {
    e.preventDefault(); // Evita il comportamento predefinito del browser

    const event = e.type === "touchmove" ? e.touches[0] : e;

    const posX = event.clientX - offsetX;
    const posY = event.clientY - offsetY;

    draggableCircle.style.left = `${posX}px`;
    draggableCircle.style.top = `${posY}px`;
}

function endDrag() {
    document.removeEventListener("mousemove", move);
    document.removeEventListener("touchmove", move);
    document.removeEventListener("mouseup", endDrag);
    document.removeEventListener("touchend", endDrag);
}



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
