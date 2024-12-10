
const buttons = document.querySelectorAll('button');
let actions = [];
let previousValue;
for(let button of buttons) {
    button.addEventListener('click', function(event) {
        const value = event.target.textContent;
        
        if(value === '=') {
            const expression = actions.join('');
            const result = eval(expression);
            actions = [result];
        }
        else  {
            if(previousValue === "=") {
                actions = [value];
            }
            else {
                actions.push(value);
            }
        }
        previousValue = value;

        const screen = document.getElementById('screen');
        screen.textContent = actions.join('');
    });
}

// Handle the scenario when operators are pressed multple times consecutively. 