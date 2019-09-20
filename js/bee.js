{
    const bee = {
        position: {
            x: 0,
            y: 0
        },
        direction: 0,
        step: 0
    };
    let lastDash = { x: 0, y: 0 };
    let lastDashes = [];
    let lastKnownMousePosition = { x: 0, y: 0 };
    let requestAnimationFrameHandler;
    let lastUpdate = performance.now();
    const beeDiv = document.getElementById("bee");

    window.addEventListener("mousemove", e => {
        lastKnownMousePosition = { x: e.pageX, y: e.pageY };

        if (!requestAnimationFrameHandler) {
            requestAnimationFrameHandler = window.requestAnimationFrame(update);
        }
    });

    function updateBee() {
        const turn = 0.03;
        const velocity = 3;
        bee.step++;
        const destAngle = Math.atan2(
            lastKnownMousePosition.y - bee.position.y,
            lastKnownMousePosition.x - bee.position.x
        );

        if (bee.direction > destAngle) {
            if (bee.direction - destAngle > Math.PI) {
                bee.direction += turn;
            } else {
                bee.direction -= turn;
            }
        } else {
            if (destAngle - bee.direction > Math.PI) {
                bee.direction -= turn;
            } else {
                bee.direction += turn;
            }
        }
        if (bee.direction < -Math.PI) bee.direction += 2 * Math.PI;
        if (bee.direction > Math.PI) bee.direction -= 2 * Math.PI;
        const wiggleDirection = bee.direction + 0.5 * Math.sin(0.1 * bee.step);
        bee.position.x += velocity * Math.cos(wiggleDirection);
        bee.position.y += velocity * Math.sin(wiggleDirection);
        beeDiv.style.top = `${bee.position.y}px`;
        beeDiv.style.left = `${bee.position.x}px`;
    }

    function updateDashes() {
        if (
            (lastDash.x - bee.position.x) ** 2 +
                (lastDash.y - bee.position.y) ** 2 >
            200
        ) {
            lastDash = { x: bee.position.x, y: bee.position.y };
            lastDashes.push(lastDash);
            if (lastDashes.length === 3) {
                const direction = Math.atan2(
                    lastDashes[0].y - lastDashes[2].y,
                    lastDashes[0].x - lastDashes[2].x
                );
                let dash = document.createElement("div");
                dash.classList.add("dash");
                dash.style.top = `${lastDashes[1].y + 5}px`;
                dash.style.left = `${lastDashes[1].x}px`;
                dash.style.transform = `rotate(${direction}rad)`;
                document.body.appendChild(dash);
                setTimeout(() => dash.classList.add("fade"), 10);
                setTimeout(() => document.body.removeChild(dash), 2100);
                lastDashes.splice(0, 2);
            }
        }
    }

    function update(timestamp) {
        lastUpdate = timestamp;
        updateBee();
        updateDashes();

        requestAnimationFrameHandler = window.requestAnimationFrame(update);
    }
}
