const form = document.getElementById('contact-form');
const statusDiv = document.getElementById('form-status');
const submitBtn = document.getElementById('submit-btn');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    submitBtn.disabled = true;
    submitBtn.innerText = "Sending...";
    statusDiv.innerText = "";

    const formData = new FormData(form);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: json
    })
    .then(async (response) => {
        let res = await response.json();
        if (response.status == 200) {
            statusDiv.style.color = "#16a34a";
            statusDiv.innerText = "Thank you! Your message has been sent successfully.";
            form.reset();
        } else {
            statusDiv.style.color = "#ef4444";
            statusDiv.innerText = res.message;
        }
    })
    .catch(error => {
        statusDiv.style.color = "#ef4444";
        statusDiv.innerText = "Something went wrong. Please try again later.";
    })
    .finally(() => {
        submitBtn.disabled = false;
        submitBtn.innerText = "Send Message";
    });
});
