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

categories.forEach(category => {
    category.addEventListener('dragover', (e) => {
        e.preventDefault();
    });

    category.addEventListener('drop', (e) => {
        e.preventDefault();
        const data = e.dataTransfer.getData('text/plain');
        const item = document.createElement('div');
        item.className = 'item';
        item.textContent = data;
        category.appendChild(item);

        // Check if the dropped item is in the correct category
        if (category.id === 'ebusiness' && (data === 'E-commerce' || data === 'Alibaba' )) {
            feedback.textContent = 'Correct!';
            correctAnswers++;
        } else if (category.id === 'examples' && (data === 'Advertising-based' || data === 'Freemium')) {
            feedback.textContent = 'Correct!';
            correctAnswers++;
        } else {
            feedback.textContent = 'Incorrect.';
        }

        // Check if the game is complete
        if (correctAnswers === totalAnswers) {
            feedback.textContent = 'Congratulations! You completed the game!';
        }
    });
});
