document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', function (e) {
            let valid = true;
            const name = form.elements['name'];
            const email = form.elements['email'];
            const message = form.elements['message'];

            // Simple validation
            if (!name.value.trim()) {
                valid = false;
                alert('Please enter your name.');
                name.focus();
            } else if (!email.value.trim() || !/^\S+@\S+\.\S+$/.test(email.value)) {
                valid = false;
                alert('Please enter a valid email address.');
                email.focus();
            } else if (!message.value.trim()) {
                valid = false;
                alert('Please enter your message.');
                message.focus();
            }

            if (!valid) {
                e.preventDefault();
            }
        });
    }
});