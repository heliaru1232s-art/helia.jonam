let noSize = 1;
let yesSize = 1;

function stillMad() {
    noSize *= 0.78;
    yesSize *= 1.45;

    const noButton = document.getElementById("noBtn");
    const yesButton = document.getElementById("yesBtn");

    noButton.style.transform = `scale(${noSize})`;
    yesButton.style.transform = `scale(${yesSize})`;
}

function forgive() {
    document.querySelector(".card").style.display = "none";

    const success = document.getElementById("success");
    success.style.display = "flex";

    createHeartExplosion();
}

function createHeartExplosion() {
    const emojis = ["💘", "💞", "💕", "💗"];

    for (let i = 0; i < 50; i++) {
        const heart = document.createElement("div");

        heart.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];

        heart.style.position = "fixed";
        heart.style.left = "50%";
        heart.style.top = "50%";
        heart.style.fontSize = `${Math.random() * 25 + 18}px`;
        heart.style.pointerEvents = "none";
        heart.style.zIndex = "9999";

        document.body.appendChild(heart);

        const x = (Math.random() - 0.5) * window.innerWidth;
        const y = (Math.random() - 0.5) * window.innerHeight;

        heart.animate(
            [
                {
                    transform: "translate(-50%, -50%) scale(0) rotate(0deg)",
                    opacity: 1
                },
                {
                    transform: `translate(${x}px, ${y}px) scale(1.5) rotate(360deg)`,
                    opacity: 0
                }
            ],
            {
                duration: 1800 + Math.random() * 1000,
                easing: "ease-out"
            }
        );

        setTimeout(() => {
            heart.remove();
        }, 3000);
    }
}
