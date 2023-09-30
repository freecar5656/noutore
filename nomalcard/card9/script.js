// script.js

// すべてのカード要素を取得
const cards = document.querySelectorAll(".flip-card");

// 1 から 20 までの数字を含む配列を作成
const numbers = Array.from({ length: 20 }, (_, index) => (index + 1).toString().padStart(2, '0'));

// 配列をシャッフルする関数
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// 配列をシャッフル
shuffleArray(numbers);

// 変数に数字を代入
const [i1, i2, i3, i4, i5, i6, i7, i8, i9] = numbers;

console.log(i1, i2, i3, i4, i5, i6, i7, i8, i9);

// カードの画像を変更する関数
function changeCardImage(cardId, imageName) {
  const cardImage = document.getElementById(cardId);
  cardImage.src = `../../images/${imageName}.jpg`;
}

// カードのIDとランダムな画像のファイル名を関連付ける
const cardImageMap = {
  "card1": `${i1}`,
  "card2": `${i2}`,
  "card3": `${i3}`,
  "card4": `${i4}`,
  "card5": `${i5}`,
  "card6": `${i6}`,
  "card7": `${i7}`,
  "card8": `${i8}`,
  "card9": `${i9}`
};

// カードに画像を割り当てる
for (const cardId in cardImageMap) {
  changeCardImage(cardId, cardImageMap[cardId]);
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

// テスト用のコード
const cardsTest = document.querySelectorAll(".flip-card");

cardsTest.forEach(card => {
  card.addEventListener("click", function (e) {
    // カードがクリックされたことを確認する
    if (e.target === this) {
      console.log("カードがクリックされました");
    }
  });
});
