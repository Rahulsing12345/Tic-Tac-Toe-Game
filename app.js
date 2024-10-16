let string = '';
let display = document.querySelector("#display");
let buttons = document.querySelectorAll('button');

Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        const buttonText = e.target.innerHTML;

        if (buttonText === '=') {
            try {
                // Evaluate the expression and update display
                string = eval(string).toString();
                display.value = string;
            } catch (error) {
                display.value = 'Error';
                string = ''; // Reset string after error
            }
        } else if (buttonText === 'AC') {
            // Clear all
            string = '';
            display.value = '0';
        } else if (buttonText === 'DEL') {
            // Remove last character
            string = string.slice(0, -1);
            display.value = string.length > 0 ? string : '0';
        } else {
            // Concatenate the button text to string
            string += buttonText;
            display.value = string;
        }
    });
});
