const last = { x: 0, y: 0 };
const lastKnownMousePosition = { x: 0, y: 0 };


window.addEventListener("mousemove", e => {
    lastKnownMousePosition.x = e.pageX;
    lastKnownMousePosition.y = e.pageY;

    
});

class Bee {
    x = 0;
    y = 0;
    direction = 0;
    velocity = 3;
    turn = 0.03;
    step = 0;

    update(destX, destY) {
        this.step++;
        const destAngle = Math.atan2(destY - this.y, destX - this.x);

        if (this.direction > destAngle) {
            if (this.direction - destAngle > Math.PI) {
                this.direction += this.turn;
            }
            else {
                this.direction -= this.turn;
            }
        }
        else {
            if (destAngle - this.direction > Math.PI) {
                this.direction -= this.turn;
            }
            else {
                this.direction += this.turn;
            }
        }
        if (this.direction < -Math.PI) this.direction += 2 * Math.PI;
        if (this.direction > Math.PI) this.direction -= 2 * Math.PI;
        const wiggleDirection = this.direction + .5 * Math.sin(.1 * this.step);
        this.x += this.velocity * Math.cos(wiggleDirection);
        this.y += this.velocity * Math.sin(wiggleDirection);
    }
}

const bee = new Bee();
const beeDiv = document.getElementById("bee");
let lastUpdate = performance.now();
let request = window.requestAnimationFrame(update);

function update(timestamp) {
    bee.update(lastKnownMousePosition.x, lastKnownMousePosition.y);
    beeDiv.style.top = `${bee.y}px`;
    beeDiv.style.left = `${bee.x}px`;
    
    lastUpdate = timestamp;
    request = window.requestAnimationFrame(update);
    
    if ((last.x - bee.x)**2 + (last.y - bee.y)**2 < 1000) return;
    let rotation = Math.atan2(last.y - bee.y, last.x - bee.x);
    last.x = bee.x;
    last.y = bee.y;
    let dash = document.createElement("div");
    dash.classList.add("dash");
    dash.style.top = `${bee.y + 5}px`;
    dash.style.left = `${bee.x}px`;
    dash.style.transform = `rotate(${rotation}rad)`;
    document.body.appendChild(dash);
    setTimeout(() => dash.classList.add("fade"), 10);
    setTimeout(() => document.body.removeChild(dash), 2100);
}
