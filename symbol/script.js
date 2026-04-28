document.addEventListener("DOMContentLoaded", () => {
    const initialCellImages = [];
    const imageTable = document.getElementById("imageTable");
    const nextButton = document.getElementById("nextButton");

    const positionByCellId = {
        cell1: "top",
        cell2: "left",
        cell3: "center",
        cell4: "right",
        cell5: "bottom"
    };

    function assignRandomImages() {
        const imageNumbers = [1, 2, 3, 4, 5];
        for (let i = 0; i < 5; i++) {
            const randomIndex = Math.floor(Math.random() * imageNumbers.length);
            const randomImageNumber = imageNumbers.splice(randomIndex, 1)[0];
            initialCellImages.push(`images/${randomImageNumber}.jpg`);
        }
    }

    function animateTableTransition() {
        imageTable.classList.remove("stage-transition");
        void imageTable.offsetWidth;
        imageTable.classList.add("stage-transition");
    }

    function renderBoard(items) {
        const slotsHtml = items
            .map((item) => {
                const positionClass = positionByCellId[item.cellId];
                return `
                    <div class="board-slot slot-${positionClass}">
                        <div class="position-label">${item.label}</div>
                        <div class="card-cell" id="${item.cellId}">
                            <img src="${item.imageSrc}" alt="${item.cellId}">
                        </div>
                    </div>
                `;
            })
            .join("");

        imageTable.innerHTML = `<div class="memory-board">${slotsHtml}</div>`;
        animateTableTransition();
    }

    function renderRow(items) {
        const rowHtml = items
            .map(
                (item) => `
                    <div class="board-slot row-slot">
                        <div class="position-label">${item.label}</div>
                        <div class="card-cell" id="${item.cellId}">
                            <img src="${item.imageSrc}" alt="${item.cellId}">
                        </div>
                    </div>
                `
            )
            .join("");

        imageTable.innerHTML = `<div class="memory-row">${rowHtml}</div>`;
        animateTableTransition();
    }

    function revealCards(revealList) {
        revealList.forEach((item) => {
            const cell = document.getElementById(item.cellId);
            if (cell) {
                cell.innerHTML = `<img src="${item.imageSrc}" alt="${item.cellId}">`;
            }
        });
    }

    function addAnswerButton(revealList) {
        const answerButton = document.createElement("button");
        answerButton.textContent = "答え合わせ";
        answerButton.id = "answerButton";
        answerButton.addEventListener("click", () => revealCards(revealList));
        imageTable.appendChild(answerButton);
    }

    function displayStage1() {
        renderBoard([
            { cellId: "cell1", label: "上", imageSrc: initialCellImages[0] },
            { cellId: "cell2", label: "左", imageSrc: initialCellImages[1] },
            { cellId: "cell3", label: "真ん中", imageSrc: initialCellImages[2] },
            { cellId: "cell4", label: "右", imageSrc: initialCellImages[3] },
            { cellId: "cell5", label: "下", imageSrc: initialCellImages[4] }
        ]);
    }

    assignRandomImages();
    displayStage1();

    let stage = 1;
    nextButton.addEventListener("click", () => {
        if (stage === 1) {
            renderRow([
                { cellId: "cell2", label: "左", imageSrc: "images/back.jpg" },
                { cellId: "cell4", label: "右", imageSrc: "images/back.jpg" },
                { cellId: "cell3", label: "真ん中", imageSrc: "images/back.jpg" },
                { cellId: "cell5", label: "下", imageSrc: "images/back.jpg" }
            ]);
            addAnswerButton([
                { cellId: "cell2", imageSrc: initialCellImages[1] },
                { cellId: "cell4", imageSrc: initialCellImages[3] },
                { cellId: "cell3", imageSrc: initialCellImages[2] },
                { cellId: "cell5", imageSrc: initialCellImages[4] }
            ]);
            stage++;
            return;
        }

        if (stage === 2) {
            renderRow([
                { cellId: "cell1", label: "上", imageSrc: "images/back.jpg" },
                { cellId: "cell5", label: "下", imageSrc: "images/back.jpg" },
                { cellId: "cell4", label: "右", imageSrc: "images/back.jpg" },
                { cellId: "cell2", label: "左", imageSrc: "images/back.jpg" }
            ]);
            addAnswerButton([
                { cellId: "cell1", imageSrc: initialCellImages[0] },
                { cellId: "cell5", imageSrc: initialCellImages[4] },
                { cellId: "cell4", imageSrc: initialCellImages[3] },
                { cellId: "cell2", imageSrc: initialCellImages[1] }
            ]);
            stage++;
            return;
        }

        if (stage === 3) {
            renderRow([
                { cellId: "cell2", label: "左", imageSrc: "images/back.jpg" },
                { cellId: "cell3", label: "真ん中", imageSrc: "images/back.jpg" },
                { cellId: "cell1", label: "上", imageSrc: "images/back.jpg" },
                { cellId: "cell5", label: "下", imageSrc: "images/back.jpg" }
            ]);
            addAnswerButton([
                { cellId: "cell2", imageSrc: initialCellImages[1] },
                { cellId: "cell3", imageSrc: initialCellImages[2] },
                { cellId: "cell1", imageSrc: initialCellImages[0] },
                { cellId: "cell5", imageSrc: initialCellImages[4] }
            ]);

            nextButton.style.display = "none";
            const cardFlipButton = document.createElement("button");
            cardFlipButton.textContent = "カードめくりへ";
            cardFlipButton.id = "cardFlipButton";
            cardFlipButton.style.position = "fixed";
            cardFlipButton.style.bottom = "10px";
            cardFlipButton.style.right = "14px";
            cardFlipButton.style.left = "auto";
            cardFlipButton.style.transform = "none";
            cardFlipButton.addEventListener("click", () => window.close());
            imageTable.appendChild(cardFlipButton);
        }
    });
});
