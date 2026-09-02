let noSize = 1;
let yesSize = 1;

function stillMad() {
    noSize *= 0.78;
    yesSize *= 1.45;

    document.getElementById("noBtn").style.transform =
        `scale(${noSize})`;

    document.getElementById("yesBtn").style.transform =
        `scale(${yesSize})`;
}

function forgive() {
    // مخفی کردن محتوای اصلی
    document.body.innerHTML = `
        <div id="loveSuccess">
            <div class="success-content">
                <div class="big-heart">💘</div>

                <h1>هورااااااااااااااا 💞</h1>

                <p>
                    قوله قوللللل میدم که دیگه تکرار نکنم
                    دختر ناز و مهربونمممم 💘💘💘
                </p>

                <div id="flyingHearts"></div>
            </div>
        </div>
    `;

    // استایل صفحه جدید
    const style = document.createElement("style");

    style.innerHTML = `
        #loveSuccess {
            position: fixed;
            inset: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;
            background:
                radial-gradient(circle at center, #ff5c9a, #8b164b 45%, #250015);
            font-family: Tahoma, Arial, sans-serif;
            direction: rtl;
        }

        .success-content {
            position: relative;
            z-index: 10;
            width: 85%;
            max-width: 600px;
            padding: 45px 25px;
            text-align: center;
            color: white;
        }

        .big-heart {
            font-size: 90px;
            animation: heartbeat 1s infinite;
        }

        .success-content h1 {
            font-size: 42px;
            margin: 20px 0;
        }

        .success-content p {
            font-size: 25px;
            line-height: 2;
            font-weight: bold;
        }

        .flying-heart {
            position: fixed;
            pointer-events: none;
            z-index: 5;
            animation: flyAround linear forwards;
        }

        @keyframes heartbeat {
            0%, 100% {
                transform: scale(1);
            }

            50% {
                transform: scale(1.25);
            }
        }

        @keyframes flyAround {
            0% {
                transform: translate(0, 0) rotate(0deg) scale(.5);
                opacity: 0;
            }

            15% {
                opacity: 1;
            }

            100% {
                transform:
                    translate(
                        calc((var(--x) - 50vw)),
                        calc((var(--y) - 50vh))
                    )
                    rotate(720deg)
                    scale(1.4);
                opacity: 0;
            }
        }
    `;

    document.head.appendChild(style);

    // ساخت کلی ایموجی متحرک
    const emojis = ["💘", "💞", "💕", "💗"];

    for (let i = 0; i < 70; i++) {
        const heart = document.createElement("div");

        heart.className = "flying-heart";
        heart.textContent =
            emojis[Math.floor(Math.random() * emojis.length)];

        heart.style.left = "50%";
        heart.style.top = "50%";

        heart.style.fontSize =
            `${18 + Math.random() * 35}px`;

        heart.style.setProperty(
            "--x",
            `${Math.random() * 100}vw`
        );

        heart.style.setProperty(
            "--y",
            `${Math.random() * 100}vh`
        );

        heart.style.animationDuration =
            `${2 + Math.random() * 4}s`;

        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 6500);
    }
}
