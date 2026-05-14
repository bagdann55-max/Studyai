function generateQuestions(topic, difficulty) {
const base = {
easy: 1,
medium: 2,
hard: 3
}[difficulty];

let questions = [];

for (let i = 1; i <= 5; i++) {
questions.push({
q: `${topic}: вопрос уровня ${difficulty} #${i}`,
a: ["определение", "формула", "пример", "объяснение", "применение"][i % 5],
xp: base * 10
});
}

return questions;
}