let counterValue = 0;

const counterDisplay = document.getElementById('counter');
const stepInput = document.getElementById('step');
const incrementButton = document.getElementById('increment');
const decrementButton = document.getElementById('decrement');

incrementButton.addEventListener('click', () => {
    const step = parseInt(stepInput.value) || 1; // Default to 1 if input is invalid
    counterValue += step;
    updateCounterDisplay();
});

decrementButton.addEventListener('click', () => {
    const step = parseInt(stepInput.value) || 1; // Default to 1 if input is invalid
    counterValue -= step;
    updateCounterDisplay();
});

function updateCounterDisplay() {
    counterDisplay.textContent = `Counter: ${counterValue}`;
}

