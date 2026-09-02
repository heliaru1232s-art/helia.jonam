let noSize = 1;
let yesSize = 1;

// ساخت قلب‌های شناور پس‌زمینه
function createFloatingHearts() {

```
const container = document.querySelector(".hearts");

const heartTypes = [
    "❤️",
    "💗",
    "💖",
    "💕",
    "💓"
];

for (let i = 0; i < 30; i++) {

    const heart = document.createElement("div");

    heart.className = "floating-heart";

    heart.innerHTML =
        heartTypes[
            Math.floor(
                Math.random() * heartTypes.length
            )
        ];

    heart.style.left =
        Math.random() * 100 + "%";

    heart.style.animationDuration =
        (8 + Math.random() * 10) + "s";

    heart.style.animationDelay =
        Math.random() * 12 + "s";

    heart.style.fontSize =
        (12 + Math.random() * 22) + "px";

    container.appendChild(heart);
}
```

}

// وقتی روی «هنوز ناراحتم» کلیک می‌شود
function stillMad() {

```
// کوچک‌تر شدن دکمه ناراحتم
noSize *= 0.78;

// بزرگ‌تر شدن دکمه آره
yesSize *= 1.45;

const noBtn =
    document.getElementById("noBtn");

const yesBtn =
    document.getElementById("yesBtn");


noBtn.style.transform =
    `scale(${noSize})`;

yesBtn.style.transform =
    `scale(${yesSize})`;
```

}

// وقتی روی «آره» کلیک می‌شود
function forgive() {

```
const success =
    document.getElementById("success");

success.style.display = "flex";

createHeartExplosion();
```

}

// انفجار قلب‌ها
function createHeartExplosion() {

```
const heartTypes = [
    "❤️",
    "💗",
    "💖",
    "💕",
    "💓",
    "💘"
];

for (let i = 0; i < 80; i++) {

    const heart =
        document.createElement("div");

    heart.innerHTML =
        heartTypes[
            Math.floor(
                Math.random() *
                heartTypes.length
            )
        ];

    heart.style.position = "fixed";

    heart.style.left = "50%";

    heart.style.top = "50%";

    heart.style.zIndex = "100";

    heart.style.pointerEvents = "none";

    heart.style.fontSize =
        (15 + Math.random() * 28) + "px";


    const angle =
        Math.random() * Math.PI * 2;

    const distance =
        150 + Math.random() * 500;

    const x =
        Math.cos(angle) * distance;

    const y =
        Math.sin(angle) * distance;


    heart.animate(

        [
            {
                transform:
                    "translate(-50%, -50%) scale(0)",
                opacity: 1
            },

            {
                transform:
                    `translate(
                        calc(-50% + ${x}px),
                        calc(-50% + ${y}px)
                    )
                    scale(1.4)`,

                opacity: 0
            }
        ],

        {
            duration:
                1200 + Math.random() * 1000,

            easing:
                "cubic-bezier(.2,.8,.2,1)"
        }
    );


    document.body.appendChild(heart);


    setTimeout(() => {
        heart.remove();
    }, 2500);

}
```

}

// اجرای قلب‌های پس‌زمینه
createFloatingHearts();
