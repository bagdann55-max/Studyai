let questions = [];
let currentTopic = "";
let currentDifficulty = "easy";

function startTest() {
currentTopic = document.getElementById("topic").value;
currentDifficulty = document.getElementById("difficulty").value;

questions = generateQuestions(currentTopic, currentDifficulty);

let html = "";

questions.forEach((q, i) => {
html += `
<div class="card">
<p>${i+1}. ${q.q}</p>
<input id="a${i}" placeholder="Ответ">
</div>
`;
});

document.getElementById("quiz").innerHTML = html;
}

function checkTest() {
let score = 0;

questions.forEach((q, i) => {
let ans = document.getElementById("a"+i).value.toLowerCase();

if (ans.length > 2) {
score += q.xp;
}
});

saveResult(score, currentTopic);

document.getElementById("result").innerText =
`Результат: ${score} XP`;
}

function showLeaderboard() {
let data = getResults();

let html = "<h3>🏆 История</h3>";

data.slice(-10).reverse().forEach(r => {
html += `<p>${r.topic} — ${r.score} XP (${r.date})</p>`;
});

document.getElementById("leaderboard").innerHTML = html;
}