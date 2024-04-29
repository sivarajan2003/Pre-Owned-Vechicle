window.addEventListener('DOMContentLoaded', function (event) {
    var form = document.getElementById('vehicleForm');
    form.onsubmit = function (e) {
        e.preventDefault();
        // Extract form data
        var vehicle = {
            make: document.getElementById('make').value,
            model: document.getElementById('model').value,
            year: parseInt(document.getElementById('year').value),
            mileage: parseInt(document.getElementById('mileage').value),
        };
        // Validate form data
        var errors = validateVehicle(vehicle);
        if (Object.keys(errors).length === 0) {
            console.log('Submitting form...', vehicle);
            // Form is valid, submit the form or make an API call here
        }
        else {
            console.error('Validation errors', errors);
            // Display validation errors to the user
        }
    };
});
function validateVehicle(vehicle) {
    var errors = {};
    if (!vehicle.make)
        errors.make = 'Make is required.';
    if (!vehicle.model)
        errors.model = 'Model is required.';
    if (isNaN(vehicle.year) || vehicle.year > new Date().getFullYear())
        errors.year = 'Invalid year.';
    if (isNaN(vehicle.mileage) || vehicle.mileage < 0)
        errors.mileage = 'Mileage must be a positive number.';
    return errors;
}
