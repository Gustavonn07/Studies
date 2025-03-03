const display = document.getElementById('display');
let btns = document.querySelectorAll('button');

function evaluateExpression(expression) {
    try {
        const result = Function('"use strict"; return (' + expression + ')')();
        if (isNaN(result) || !isFinite(result)) throw new Error('Invalid result');
        return result;
    } catch (error) {
        console.error('Evaluation error:', error);
        return 'Error';
    }
}

function updateDisplay(text) {
    if (display.innerText === '0' && text !== '.' && !text.match(/[+\-*/()]/)) {
        display.innerText = text;
    } else {
        display.innerText += text;
    }
}

btns.forEach(btn => {
    btn.addEventListener('click', () => {
        const buttonText = btn.innerText;
        const operatorRegex = /[+\-*/.]/;
        const isOperator = operatorRegex.test(buttonText);
        const isDisplayEndingWithOperator = operatorRegex.test(display.innerText.slice(-1));

        switch (buttonText) {
            case 'C':
                display.innerText = '0';
                break;

            case '=':
                display.innerText = evaluateExpression(display.innerText);
                break;

            case '(':
            case ')':
                if (buttonText === '(' || (buttonText === ')' && 
                    (display.innerText.match(/\(/g) || []).length > 
                    (display.innerText.match(/\)/g) || []).length)) {
                    updateDisplay(buttonText);
                }
                break;

            default:
                if (isOperator) {
                    if (!isDisplayEndingWithOperator && display.innerText !== '') {
                        updateDisplay(buttonText);
                    } else if (display.innerText !== '') {
                        display.innerText = display.innerText.slice(0, -1) + buttonText;
                    }
                } else {
                    updateDisplay(buttonText);
                }
                break;
        }
    });
});
