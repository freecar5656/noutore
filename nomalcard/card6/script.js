// script.js

// すべてのカード要素を取得
const cards = document.querySelectorAll(".flip-card");

// 1 から 20 までの数字を含む配列を作成
const numbersImage = Array.from({ length: 20 }, (_, index) => (index + 1).toString().padStart(2, '0'));

// 配列をシャッフルする関数
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// 配列をシャッフル
shuffleArray(numbersImage);

// 変数に数字を代入
const [i1, i2 ,i3, i4, i5, i6] = numbersImage;

console.log(i1, i2 ,i3, i4, i5, i6);

// カードの画像を変更する関数
function changeCardImage(cardId, imageName, folder) {
    const cardImage = document.getElementById(cardId);
    cardImage.src = `../../${folder}/${imageName}.jpg`;
}

// カードのIDとランダムな画像のファイル名を関連付ける
const cardImageMap = {
    "card1": { imageName: `${i1}`, folder: "images" },
    "card2": { imageName: `${i2}`, folder: "images" },
    "card3": { imageName: `${i3}`, folder: "images" },
    "card4": { imageName: `${i4}`, folder: "images" },
    "card5": { imageName: `${i5}`, folder: "images" },
    "card6": { imageName: `${i6}`, folder: "images" },
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

