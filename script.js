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
    document.body.innerHTML = `
        <div id="loveSuccess">

            <div class="success-content">
                <div class="big-heart">💘</div>

                <h1>هوراااااااااااااااااا 💞</h1>

                <p>
                    قوله قوللللل میدم که دیگه تکرار نکنم
                    دختر ناز و مهربونمممم 💘💘💘
                </p>

            </div>

            <div id="flyingHearts"></div>

        </div>
    `;

    const style = document.createElement("style");

    style.innerHTML = `
        #loveSuccess {
            position: fixed;
            inset: 0;
            overflow: hidden;
            display: flex;
            align-items: center;
            justify-content: center;

            background:
                radial-gradient(
                    circle at center,
                    #ff6fa5,
                    #8b164b 45%,
                    #21000f
                );

            font-family: Tahoma, Arial, sans-serif;
            direction: rtl;
        }

        .success-content {
            position: relative;
            z-index: 100;
            width: 85%;
            max-width: 650px;
            padding: 35px;
            text-align: center;
            color: white;
        }

        .big-heart {
            font-size: 95px;
            animation: heartbeat 1s infinite;
        }

        .success-content h1 {
            font-size: 44px;
            margin: 20px 0;
        }

        .success-content p {
            font-size: 27px;
            line-height: 2;
            font-weight: bold;
        }

        .flying-heart {
            position: absolute;
            pointer-events: none;
            user-select: none;

            animation-name: moveHeart;
            animation-timing-function: ease-in-out;
            animation-iteration-count: infinite;
        }

        @keyframes heartbeat {
            0%, 100% {
                transform: scale(1);
            }

            50% {
                transform: scale(1.25);
            }
        }

        @keyframes moveHeart {
            0% {
                transform: translate(0, 0) rotate(0deg);
            }

            25% {
                transform:
                    translate(var(--moveX1), var(--moveY1))
                    rotate(180deg);
            }

            50% {
                transform:
                    translate(var(--moveX2), var(--moveY2))
                    rotate(360deg);
            }

            75% {
                transform:
                    translate(var(--moveX1), var(--moveY1))
                    rotate(540deg);
            }

            100% {
                transform:
                    translate(0, 0)
                    rotate(720deg);
            }
        }
    `;

    document.head.appendChild(style);

    const emojis = ["💘", "💞", "💕", "💗"];

    const positions = [
        ["2%", "3%"],
        ["92%", "4%"],
        ["4%", "85%"],
        ["91%", "87%"],
        ["15%", "8%"],
        ["82%", "12%"],
        ["10%", "70%"],
        ["87%", "68%"],
        ["25%", "90%"],
        ["75%", "91%"]
    ];

    for (let i = 0; i < 35; i++) {

        const heart = document.createElement("div");

        heart.className = "flying-heart";

        heart.textContent =
            emojis[Math.floor(Math.random() * emojis.length)];

        const position =
            positions[i % positions.length];

        heart.style.left = position[0];
        heart.style.top = position[1];

        heart.style.fontSize =
            `${18 + Math.random() * 30}px`;

        heart.style.setProperty(
            "--moveX1",
            `${(Math.random() - 0.5) * 180}px`
        );

        heart.style.setProperty(
            "--moveY1",
            `${(Math.random() - 0.5) * 180}px`
        );

        heart.style.setProperty(
            "--moveX2",
            `${(Math.random() - 0.5) * 260}px`
        );

        heart.style.setProperty(
            "--moveY2",
            `${(Math.random() - 0.5) * 260}px`
        );

        heart.style.animationDuration =
            `${3 + Math.random() * 4}s`;

        heart.style.animationDelay =
            `${Math.random() * 3}s`;

        document.getElementById("flyingHearts")
            .appendChild(heart);
    }
}
