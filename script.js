const items = document.querySelectorAll('.item');
const categories = document.querySelectorAll('.category');
const feedback = document.getElementById('feedback');

let correctAnswers = 0;
const totalAnswers = items.length;

items.forEach(item => {
    item.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text/plain', e.target.textContent);
    });
});

const dropTargets = document.querySelectorAll('.drop-target');


dropTargets.forEach(target => {
    target.addEventListener('dragover', (e) => {
        e.preventDefault();
    });

    target.addEventListener('drop', (e) => {
        e.preventDefault();
        const data = e.dataTransfer.getData('text/plain');
        target.classList.remove('correct-drop'); // Remove the class

        if (target.textContent === data) {
            target.classList.add('correct-drop'); // Add the class for correct answers
            feedback.textContent = 'Correct!';
            correctAnswers++;
        } else {
            feedback.textContent = 'Incorrect.';
        }

        if (correctAnswers === totalAnswers) {
            feedback.textContent = 'Congratulations! You completed the game!';
        }
    });
});
