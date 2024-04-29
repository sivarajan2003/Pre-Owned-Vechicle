interface Vehicle {
    make: string;
    model: string;
    year: number;
    mileage: number;
}

window.addEventListener('DOMContentLoaded', (event) => {
    const form = document.getElementById('vehicleForm') as HTMLFormElement;

    form.onsubmit = (e) => {
        e.preventDefault();

        // Extract form data
        const vehicle: Vehicle = {
            make: (document.getElementById('make') as HTMLInputElement).value,
            model: (document.getElementById('model') as HTMLInputElement).value,
            year: parseInt((document.getElementById('year') as HTMLInputElement).value),
            mileage: parseInt((document.getElementById('mileage') as HTMLInputElement).value),
        };

        // Validate form data
        const errors = validateVehicle(vehicle);
        if (Object.keys(errors).length === 0) {
            console.log('Submitting form...', vehicle);
            // Form is valid, submit the form or make an API call here
        } else {
            console.error('Validation errors', errors);
            // Display validation errors to the user
        }
    };
});

function validateVehicle(vehicle: Vehicle): Record<string, string> {
    let errors: Record<string, string> = {};

    if (!vehicle.make) errors.make = 'Make is required.';
    if (!vehicle.model) errors.model = 'Model is required.';
    if (isNaN(vehicle.year) || vehicle.year > new Date().getFullYear()) errors.year = 'Invalid year.';
    if (isNaN(vehicle.mileage) || vehicle.mileage < 0) errors.mileage = 'Mileage must be a positive number.';

    return errors;
}
