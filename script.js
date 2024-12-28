const codes = document.querySelectorAll('.code');

// Add event listeners to each input
codes.forEach((code, idx) => {
    code.addEventListener('input', (e) => {
        const value = e.target.value;

        // Allow only numeric input
        if (!/^\d$/.test(value)) {
            code.value = ''; // Clear non-numeric input
            return;
        }

        // Move focus to the next input if valid input
        if (idx < codes.length - 1 && value) {
            codes[idx + 1].focus();
        }
    });

    code.addEventListener('keydown', (e) => {
        if (e.key === 'Backspace') {
            // Clear current input and move focus to the previous input
            if (!code.value && idx > 0) {
                codes[idx - 1].focus();
            } else {
                code.value = ''; // Clear input without moving focus
            }
        }
    });