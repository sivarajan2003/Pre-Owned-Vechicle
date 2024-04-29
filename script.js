document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('vehicleForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Here you can add your logic to submit the form data to a server or perform any other action

        // Display an alert message after successful submission
        alert('Vehicle information submitted successfully!');
    });
});
