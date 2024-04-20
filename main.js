const circleType = new CircleType(document.querySelector(".rotated__section")).radius(50);

const draggableCircle = document.querySelector(".draggable__circle");
let offsetX, offsetY;

const move = (e) => {
    let posX, posY;
    if (e.type === "touchmove") {
        posX = e.touches[0].clientX;
        posY = e.touches[0].clientY;
    } else {
        posX = e.clientX;
        posY = e.clientY;
    }
    draggableCircle.style.left = `${posX - offsetX}px`;
    draggableCircle.style.top = `${posY - offsetY}px`;
};

draggableCircle.addEventListener("mousedown", startDrag);
draggableCircle.addEventListener("touchstart", startDrag);

function startDrag(e) {
    offsetX = e.clientX - draggableCircle.offsetLeft;
    offsetY = e.clientY - draggableCircle.offsetTop;

    document.addEventListener("mousemove", move);
    document.addEventListener("mouseup", endDrag);
    document.addEventListener("touchmove", move);
    document.addEventListener("touchend", endDrag);
}

function endDrag() {
    document.removeEventListener("mousemove", move);
    document.removeEventListener("mouseup", endDrag);
    document.removeEventListener("touchmove", move);
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
