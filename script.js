// JavaScriptを使用して日付と曜日を取得し、HTMLに挿入
const currentDate = new Date();
const dateElement = document.getElementById('current-date');
const daysOfWeek = ['日', '月', '火', '水', '木', '金', '土'];
const dayOfWeek = daysOfWeek[currentDate.getDay()];

const dateText = `${currentDate.getFullYear()}年${currentDate.getMonth() + 1}月${currentDate.getDate()}日（${dayOfWeek}曜日）`;

// 日付をクリックしたら https://www.nnh.to/ に遷移
dateElement.innerHTML = `<a href="https://www.nnh.to/" target="_self">${dateText}</a>`;

// ボタン要素を取得
const button = document.querySelector('button');

// すべての要素を選択
const elements = e.querySelectorAll("*");

// 特定の要素を選択（例: クラス名が 'x' の要素）
const specificElements = e.querySelectorAll(".x");
