// script.js

// すべてのカード要素を取得
const cards = document.querySelectorAll(".flip-card");

// 1 から 20 までの数字を含む配列を作成
const numbersImage = Array.from({ length: 20 }, (_, index) => (index + 1).toString().padStart(2, '0'));
const numbersImageit = Array.from({ length: 30 }, (_, index) => (index + 1).toString().padStart(2, '0'));

// 配列をシャッフルする関数
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// 配列をシャッフル
shuffleArray(numbersImage);
shuffleArray(numbersImageit);

// 変数に数字を代入
const [i1, i3, i5] = numbersImage;
const [i2, i4, i6] = numbersImageit;

console.log(i1, i3, i5);
console.log(i2, i4, i6);

// カードの画像を変更する関数
function changeCardImage(cardId, imageName, folder) {
    const cardImage = document.getElementById(cardId);
    cardImage.src = `../../${folder}/${imageName}.jpg`;
}

// カードのIDとランダムな画像のファイル名を関連付ける
const cardImageMap = {
    "card1": { imageName: `${i1}`, folder: "images" },
    "card2": { imageName: `${i2}`, folder: "imageit" },
    "card3": { imageName: `01`, folder: "imageTrend" },
    "card4": { imageName: `02`, folder: "imageTrend" },
    "card5": { imageName: `${i5}`, folder: "images" },
    "card6": { imageName: `${i6}`, folder: "imageit" },
};

// カードに画像を割り当てる
for (const cardId in cardImageMap) {
    if (cardId.startsWith("card")) {
        const { imageName, folder } = cardImageMap[cardId];
        changeCardImage(cardId, imageName, folder);
    }
}

// すべてのカード要素にクリックイベントリスナーを追加
cards.forEach(card => {
    card.addEventListener("click", (e) => {
        // カードをひっくり返す
        card.classList.toggle("clicked");

        // デバッグ用メッセージ
        console.log("カードがクリックされました", e);
    });
});

// すべて裏返すボタンのクリックイベントリスナーを追加
const resetButton = document.getElementById("reset-button");
resetButton.addEventListener("click", (e) => {
    // すべてのカードの状態を「裏向き」に設定
    cards.forEach(card => {
        card.classList.remove("clicked");
    });
});

document.addEventListener("DOMContentLoaded", function () {
    // ページが読み込まれたらアニメーションを開始
    const body = document.body;
    body.style.animationPlayState = "running";
});

// 「次のワークへ」ボタンの参照を取得
const nextWorkButton = document.getElementById("next-work-button");

// ボタンにクリックイベントリスナーを追加
nextWorkButton.addEventListener("click", (e) => {
    // デフォルトの動作（リンク先への移動）を防ぐ
    e.preventDefault();

    // 新しいタブまたはウィンドウで「symbol.html」ページを開く
    window.open("../../symbol/index.html", "_blank");

    // もし必要であれば、すべてのカードの状態を「クリックされていない」にリセットする
    cards.forEach(card => {
        card.classList.remove("clicked");
    });
});
