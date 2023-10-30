const items = document.querySelectorAll('.item');
const categories = document.querySelectorAll('.category');

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
    });
});
