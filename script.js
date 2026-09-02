let noSize = 1;
let yesSize = 1;

function stillMad() {
    noSize *= 0.78;
    yesSize *= 1.45;

    const noButton = document.getElementById("noButton");
    const yesButton = document.getElementById("yesButton");

    noButton.style.transform = `scale(${noSize})`;
    yesButton.style.transform = `scale(${yesSize})`;
}

function forgive() {
    document.getElementById("mainCard").style.display = "none";
    document.getElementById("successScreen").style.display = "flex";

    createHeartExplosion();
}

function createHeartExplosion() {
    for (let i = 0; i < 35; i++) {
        const heart = document.createElement("div");

        heart.innerHTML = "❤️";
        heart.style.position = "fixed";
        heart.style.left = "50%";
        heart.style.top = "50%";
        heart.style.fontSize = `${Math.random() * 20 + 15}px`;
        heart.style.pointerEvents = "none";
        heart.style.zIndex = "9999";

        document.body.appendChild(heart);

        const x = (Math.random() - 0.5) * 600;
        const y = (Math.random() - 0.5) * 600;

        heart.animate(
            [
                {
                    transform: "translate(-50%, -50%) scale(0)",
                    opacity: 1
                },
                {
                    transform: `translate(${x}px, ${y}px) scale(1.5)`,
                    opacity: 0
                }
            ],
            {
                duration: 1200,
                easing: "ease-out"
            }
        );

        setTimeout(() => {
            heart.remove();
        }, 1200);
    }
}

function createFloatingHeart() {
    const heart = document.createElement("div");

    heart.innerHTML = "❤";
    heart.className = "floating-heart";

    heart.style.left = Math.random() * 100 + "%";
    heart.style.animationDuration = Math.random() * 4 + 4 + "s";
    heart.style.fontSize = Math.random() * 15 + 10 + "px";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 8000);
}

setInterval(createFloatingHeart, 700);
