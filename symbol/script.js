document.addEventListener("DOMContentLoaded", function () {
    const cellImages = [];
    const initialCellImages = [];

    // カードを裏返す関数
    function flipCard(cellId, imageSrc) {
        const cell = document.getElementById(cellId);
        if (cell) {
            cell.innerHTML = `<img src="${imageSrc}" alt="${cellId}">`;
        }
    }

    // カードを元に戻す関数
    function resetCard(cellId, imageSrc) {
        const cell = document.getElementById(cellId);
        if (cell) {
            cell.innerHTML = `<img src="${imageSrc}" alt="${cellId}">`;
        }
    }

    // 画像のランダムな割り当てを行う関数
    function assignRandomImages() {
        const imageNumbers = [1, 2, 3, 4, 5];
        for (let i = 0; i < 5; i++) {
            const randomIndex = Math.floor(Math.random() * imageNumbers.length);
            const randomImageNumber = imageNumbers.splice(randomIndex, 1)[0];
            cellImages.push(`images/${randomImageNumber}.jpg`);
            initialCellImages.push(`images/${randomImageNumber}.jpg`);
        }
    }

    // 最初の画面
    function displayStage1() {
        const imageTable = document.getElementById("imageTable");
        imageTable.innerHTML = `
            <div class="row">
                <div class="cell">赤</div>
                <div class="cell">青</div>
                <div class="cell">白</div>
                <div class="cell">黒</div>
                <div class="cell">緑</div>
            </div>
            <div class="row" id="imageRow">
                <div class="cell" id="cell1"><img src="${initialCellImages[0]}" alt="cell1"></div>
                <div class="cell" id="cell2"><img src="${initialCellImages[1]}" alt="cell2"></div>
                <div class="cell" id="cell3"><img src="${initialCellImages[2]}" alt="cell3"></div>
                <div class="cell" id="cell4"><img src="${initialCellImages[3]}" alt="cell4"></div>
                <div class="cell" id="cell5"><img src="${initialCellImages[4]}" alt="cell5"></div>
            </div>
        `;
    }

    assignRandomImages();
    displayStage1();

    const nextButton = document.getElementById("nextButton");
    let stage = 1;

    nextButton.addEventListener("click", () => {
        if (stage === 1) {
            // ステージ1のセル内容を表示
            const imageTable = document.getElementById("imageTable");
            imageTable.innerHTML = `
                <div class="row">
                    <div class="cell">青</div>
                    <div class="cell">黒</div>
                    <div class="cell">白</div>
                    <div class="cell">緑</div>
                </div>
                <div class="row" id="imageRow">
                    <div class="cell" id="cell2"><img src="images/back.jpg" alt="cell2"></div>
                    <div class="cell" id="cell4"><img src="images/back.jpg" alt="cell4"></div>
                    <div class="cell" id="cell3"><img src="images/back.jpg" alt="cell3"></div>
                    <div class="cell" id="cell5"><img src="images/back.jpg" alt="cell5"></div>
                </div>
            `;
            // STAGE1の下に「答え合わせ」ボタンを追加
            const answerButton = document.createElement("button");
            answerButton.textContent = "答え合わせ";
            answerButton.id = "answerButton";

            // 答え合わせボタンのクリックイベントを設定
            answerButton.addEventListener("click", () => {
                // カードをひっくり返す処理をここに追加
                flipCard("cell2", initialCellImages[1]);
                flipCard("cell4", initialCellImages[3]);
                flipCard("cell3", initialCellImages[2]);
                flipCard("cell5", initialCellImages[4]);
            });

            // STAGE1のコンテンツの下に答え合わせボタンを挿入
            const stage1Content = document.getElementById("imageTable");
            stage1Content.appendChild(answerButton);

            stage++;
        } else if (stage === 2) {
            // ステージ2のセル内容を表示
            const imageTable = document.getElementById("imageTable");
            imageTable.innerHTML = `
                <div class="row">
                    <div class="cell">赤</div>
                    <div class="cell">緑</div>
                    <div class="cell">黒</div>
                    <div class="cell">青</div>
                </div>
                <div class="row" id="imageRow">
                    <div class="cell" id="cell1"><img src="images/back.jpg" alt="cell1"></div>
                    <div class="cell" id="cell5"><img src="images/back.jpg" alt="cell5"></div>
                    <div class="cell" id="cell4"><img src="images/back.jpg" alt="cell4"></div>
                    <div class="cell" id="cell2"><img src="images/back.jpg" alt="cell2"></div>
                </div>
            `;
            // STAGE1の下に「答え合わせ」ボタンを追加
            const answerButton = document.createElement("button");
            answerButton.textContent = "答え合わせ";
            answerButton.id = "answerButton";

            // 答え合わせボタンのクリックイベントを設定
            answerButton.addEventListener("click", () => {
                // カードをひっくり返す処理をここに追加
                flipCard("cell1", initialCellImages[0]);
                flipCard("cell5", initialCellImages[4]);
                flipCard("cell4", initialCellImages[3]);
                flipCard("cell2", initialCellImages[1]);
            });

            // STAGE1のコンテンツの下に答え合わせボタンを挿入
            const stage1Content = document.getElementById("imageTable");
            stage1Content.appendChild(answerButton);

            stage++;
        } else if (stage === 3) {
            // ステージ3のセル内容を表示
            const imageTable = document.getElementById("imageTable");
            imageTable.innerHTML = `
                <div class="row">
                    <div class="cell">青</div>
                    <div class="cell">白</div>
                    <div class="cell">赤</div>
                    <div class="cell">緑</div>
                </div>
                <div class="row" id="imageRow">
                    <div class="cell" id="cell2"><img src="images/back.jpg" alt="cell2"></div>
                    <div class="cell" id="cell3"><img src="images/back.jpg" alt="cell3"></div>
                    <div class="cell" id="cell1"><img src="images/back.jpg" alt="cell1"></div>
                    <div class="cell" id="cell5"><img src="images/back.jpg" alt="cell5"></div>
                </div>
            `;

            // STAGE1の下に「答え合わせ」ボタンを追加
            const answerButton = document.createElement("button");
            answerButton.textContent = "答え合わせ";
            answerButton.id = "answerButton";

            // 答え合わせボタンのクリックイベントを設定
            answerButton.addEventListener("click", () => {
                // カードをひっくり返す処理をここに追加
                flipCard("cell2", initialCellImages[1]);
                flipCard("cell3", initialCellImages[2]);
                flipCard("cell1", initialCellImages[0]);
                flipCard("cell5", initialCellImages[4]);
            });

            // STAGE1のコンテンツの下に答え合わせボタンを挿入
            const stage1Content = document.getElementById("imageTable");
            stage1Content.appendChild(answerButton);

            // ステージ4以降は必要ないため、ボタンを非表示にする
            nextButton.style.display = "none";
            // STAGE3の下に「カードめくりへ」ボタンを追加
            const cardFlipButton = document.createElement("button");
            cardFlipButton.textContent = "カードめくりへ";
            cardFlipButton.id = "cardFlipButton";

            // カードめくりへボタンのスタイルを設定して右側に配置
            cardFlipButton.style.position = "fixed";
            cardFlipButton.style.bottom = "50px";  // 画面下からの距離
            cardFlipButton.style.left = "50%";    // 画面中央からの距離の半分
            cardFlipButton.style.transform = "translateX(-50%)";  // 中央揃え

            // カードめくりへボタンのクリックイベントを設定
            cardFlipButton.addEventListener("click", () => {
            // ページを閉じる
            window.close();
});

// STAGE3のコンテンツの下にカードめくりへボタンを挿入
const stage3Content = document.getElementById("imageTable");
stage3Content.appendChild(cardFlipButton);
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    // ページが読み込まれたらアニメーションを開始
    const body = document.body;
    body.style.animationPlayState = "running";
});
