function saveResult(score, topic) {
let data = JSON.parse(localStorage.getItem("results") || "[]");

data.push({
score,
topic,
date: new Date().toLocaleString()
});

localStorage.setItem("results", JSON.stringify(data));
}

function getResults() {
return JSON.parse(localStorage.getItem("results") || "[]");
}