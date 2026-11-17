// 1. Funzione per filtrare i segnali (usata in signs.html)
function filterSigns(category, clickedButton) {
    // Aggiorna lo stile del pulsante attivo
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    if (clickedButton) {
        clickedButton.classList.add('active');
    }

    // Mostra o nasconde le schede dei segnali
    const boxes = document.querySelectorAll('.sign-box');
    boxes.forEach(box => {
        const boxCategory = box.getAttribute('data-category');
        if (category === 'all' || boxCategory === category) {
            box.classList.remove('hidden');
        } else {
            box.classList.add('hidden');
        }
    });
}

// 2. Funzione per verificare le risposte del quiz (usata in quiz.html)
function checkQuiz() {
    const resultDiv = document.getElementById('quiz-result');
    if (!resultDiv) return;

    const correctAnswers = {
        q1: 'b',
        q2: 'a',
        q3: 'b',
        q4: 'b'
    };

    let score = 0;
    let total = Object.keys(correctAnswers).length;
    let answeredAll = true;

    for (let key in correctAnswers) {
        const selected = document.querySelector(`input[name="${key}"]:checked`);
        if (!selected) {
            answeredAll = false;
        } else if (selected.value === correctAnswers[key]) {
            score++;
        }
    }

    if (!answeredAll) {
        resultDiv.style.color = '#d97706';
        resultDiv.textContent = '⚠️ Please answer all questions before checking your score!';
        return;
    }

    if (score === total) {
        resultDiv.style.color = '#16a34a';
        resultDiv.textContent = `🎉 Excellent! You scored ${score}/${total}. You are a workplace safety expert!`;
    } else if (score >= 2) {
        resultDiv.style.color = '#2563eb';
        resultDiv.textContent = `👍 Good job! You scored ${score}/${total}. Review the tips and signs to get a perfect score!`;
    } else {
        resultDiv.style.color = '#dc2626';
        resultDiv.textContent = `📚 You scored ${score}/${total}. Read through the safety guide again and try once more!`;
    }
}