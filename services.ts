
interface MyFormData {
    name: string;
    email: string;
    phone: string;
    service: string;
    vehicleType: string;
}
function handleFormSubmission(event: Event) {
    event.preventDefault();
    
    const formData: MyFormData = {
        name: (document.getElementById('name') as HTMLInputElement).value,
        email: (document.getElementById('email') as HTMLInputElement).value,
        phone: (document.getElementById('phone') as HTMLInputElement).value,
        service: (document.getElementById('service') as HTMLSelectElement).value,
        vehicleType: (document.getElementById('vehicle-type') as HTMLSelectElement).value
    };
    if (validateFormData(formData)) {
        console.log('Form submitted with data:', formData);
        displayOutput('Form submitted successfully with data:', formData);
    } else {
        displayOutput('Please fill out all fields.', formData);
    }
}

function validateFormData(formData: MyFormData): boolean {
    return formData.name.trim() !== '' && formData.email.trim() !== '' && 
        formData.phone.trim() !== '' && formData.service.trim() !== '' &&
        formData.vehicleType.trim() !== '';
}
function displayOutput(message: string, formData: MyFormData) {
    const outputDiv = document.getElementById('output');
    if (outputDiv) {
        const outputBlock = document.createElement('div');
        outputBlock.classList.add('output-block');

        const messageElement = document.createElement('p');
        messageElement.textContent = message;
        outputBlock.appendChild(messageElement);

        const dataElement = document.createElement('p');
        dataElement.textContent = `Name: ${formData.name}, Email: ${formData.email}, Phone: ${formData.phone}, Service: ${formData.service}, Vehicle Type: ${formData.vehicleType}`;
        outputBlock.appendChild(dataElement);

        outputDiv.appendChild(outputBlock);
    }
}
document.addEventListener("DOMContentLoaded", () => {
    const form: HTMLFormElement | null = document.getElementById('pre-owned-services-form') as HTMLFormElement | null;
    if (form) {
        form.addEventListener('submit', handleFormSubmission);
    }
});
