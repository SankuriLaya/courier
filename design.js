document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const formData = new FormData(this);
    fetch('register', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        document.getElementById('response').innerHTML = data;
    })
    .catch(error => console.error('Error:', error));
});