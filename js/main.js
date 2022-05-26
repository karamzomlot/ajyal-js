const result = document.querySelector('.result');
const txtInput = document.querySelector('.input.text');
const fontSizeInput = document.querySelector('.input.font-size');
const colorInput = document.querySelector('.input.color');
const saveBtn = document.querySelector('.btn');

const handleSave = (e) => {
  e.preventDefault();
  result.innerHTML = txtInput.value;
  result.style.fontSize = `${fontSizeInput.value}px`;
  result.style.color = colorInput.value;
}

saveBtn.addEventListener('click', handleSave);