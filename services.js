function handleFormSubmission(event) {
    event.preventDefault();
    var formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        service: document.getElementById('service').value,
        vehicleType: document.getElementById('vehicle-type').value
    };
    if (validateFormData(formData)) {
        console.log('Form submitted with data:', formData);
        displayOutput('Form submitted successfully with data:', formData);
    }
    else {
        displayOutput('Please fill out all fields.', formData);
    }
}
function validateFormData(formData) {
    return formData.name.trim() !== '' && formData.email.trim() !== '' &&
        formData.phone.trim() !== '' && formData.service.trim() !== '' &&
        formData.vehicleType.trim() !== '';
}
function displayOutput(message, formData) {
    var outputDiv = document.getElementById('output');
    if (outputDiv) {
        var outputBlock = document.createElement('div');
        outputBlock.classList.add('output-block');
        var messageElement = document.createElement('p');
        messageElement.textContent = message;
        outputBlock.appendChild(messageElement);
        var dataElement = document.createElement('p');
        dataElement.textContent = "Name: ".concat(formData.name, ", Email: ").concat(formData.email, ", Phone: ").concat(formData.phone, ", Service: ").concat(formData.service, ", Vehicle Type: ").concat(formData.vehicleType);
        outputBlock.appendChild(dataElement);
        outputDiv.appendChild(outputBlock);
    }
}
document.addEventListener("DOMContentLoaded", function () {
    var form = document.getElementById('pre-owned-services-form');
    if (form) {
        form.addEventListener('submit', handleFormSubmission);
    }
});
