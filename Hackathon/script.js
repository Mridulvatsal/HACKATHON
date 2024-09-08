function navigateToSubjects() {
    const classSelect = document.getElementById('classSelect').value;
    if (classSelect === '5th-8th') {
        window.location.href = 'subjects.html';
    }
}

function navigateToOptions() {
    const subjectSelect = document.getElementById('subjectSelect').value;
    if (subjectSelect === 'maths') {
        window.location.href = 'options.html';
    }
}

function navigateToQuiz() {
    const optionSelect = document.getElementById('optionSelect').value;
    if (optionSelect === 'quiz') {
        window.location.href = 'quiz.html';
    }
}

function calculateResult(event) {
    event.preventDefault();
    const form = document.getElementById('quizForm');
    const answers = {
        q1: '153.86',
        q2: '4',
        q3: '2',
        q4: '(lXb)',
        q5: '6'
    };
    let score = 0;
    for (let [key, value] of Object.entries(answers)) {
        const selected = form.querySelector(`input[name="${key}"]:checked`);
        if (selected && selected.value === value) {
            score += 5;
        } else {
            score -= 1;
        }
    }
    const percentage = (score / 25) * 100;
    localStorage.setItem('quizResult', percentage);
    window.location.href = 'result.html';
}

window.onload = function() {
    const resultContainer = document.getElementById('result');
    if (resultContainer) {
        const result = localStorage.getItem('quizResult');
        resultContainer.innerHTML = `Your score is: ${result}%`;
    }
}



