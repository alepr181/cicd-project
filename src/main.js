import { validateItem, formatItem } from './logic.js';

const input = document.getElementById('item-input');
const btn = document.getElementById('add-btn');
const list = document.getElementById('list-container');
const msg = document.getElementById('message');

const addItem = () => {
    const value = input.value;

    if (validateItem(value)) {
        const cleanValue = formatItem(value);
        const li = document.createElement('li');
        li.innerHTML = `<span>${cleanValue}</span>`;
        list.appendChild(li);
        
        input.value = '';
        msg.classList.add('hidden');
    } else {
        msg.textContent = "Mínimo 2 caracteres, máximo 20..";
        msg.classList.remove('hidden');
    }
};

btn.addEventListener('click', addItem);
input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addItem();
});