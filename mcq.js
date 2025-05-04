
const questions = [
    { question: "What is the study of human populations called?", options: ["Geography", "Demography", "Sociology", "Ecology"], answer: 1 },
    { question: "Which concept refers to the maximum number of people an environment can support?", options: ["Carrying Capacity", "Overpopulation", "Population Density", "Sustainability"], answer: 0 }
];

let time = 3600;
let timer = setInterval(() => {
    if (time <= 0) {
        clearInterval(timer);
        submitMCQ();
        return;
    }
    time--;
    document.getElementById("time").innerText = Math.floor(time / 60) + ":" + (time % 60).toString().padStart(2, '0');
}, 1000);

function loadQuestions() {
    const form = document.getElementById("mcq-form");
    questions.forEach((q, i) => {
        const div = document.createElement("div");
        div.innerHTML = `<p>${i+1}. ${q.question}</p>` + 
            q.options.map((opt, j) => 
                `<label><input type="radio" name="q${i}" value="${j}"> ${opt}</label><br>`
            ).join('');
        form.appendChild(div);
    });
}
function submitMCQ() {
    clearInterval(timer);
    const results = document.getElementById("results");
    let score = 0;
    questions.forEach((q, i) => {
        const ans = document.querySelector(`input[name="q${i}"]:checked`);
        if (ans && parseInt(ans.value) === q.answer) score++;
    });
    results.innerHTML = `<h2>Your Score: ${score} / ${questions.length}</h2>`;
}

window.onload = loadQuestions;
