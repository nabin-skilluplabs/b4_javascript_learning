// Import the necessary functions and set up the testing environment
let counterValue = 0;
const counterDisplay = { textContent: '' }; // Mocking the counter display
const stepInput = { value: '1' }; // Mocking the step input
const incrementButton = { addEventListener: jest.fn() };
const decrementButton = { addEventListener: jest.fn() };

// Function to update the counter display
function updateCounterDisplay() {
    counterDisplay.textContent = `Counter: ${counterValue}`;
}

// Test suite
describe('Counter functionality', () => {
    beforeEach(() => {
        counterValue = 0; // Reset counter before each test
    });

    test('increments counter value', () => {
        const step = parseInt(stepInput.value) || 1;
        counterValue += step;
        updateCounterDisplay();
        expect(counterValue).toBe(1);
        expect(counterDisplay.textContent).toBe('Counter: 1');
    });

    test('decrements counter value', () => {
        counterValue = 2; // Set initial value for decrement test
        const step = parseInt(stepInput.value) || 1;
        counterValue -= step;
        updateCounterDisplay();
        expect(counterValue).toBe(1);
        expect(counterDisplay.textContent).toBe('Counter: 1');
    });
}); 