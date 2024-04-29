var VehicleListings = /** @class */ (function () {
    function VehicleListings() {
        this.vehicles = [
            { model: "Toyota Camry", year: 2018, price: 20000 },
            { model: "Honda Civic", year: 2017, price: 18000 },
            { model: "Ford Mustang", year: 2019, price: 30000 }
            // Add more vehicles as needed
        ];
    }
    VehicleListings.prototype.findVehicle = function (model, year) {
        for (var _i = 0, _a = this.vehicles; _i < _a.length; _i++) {
            var vehicle = _a[_i];
            if (vehicle.model === model && vehicle.year === year) {
                return vehicle;
            }
        }
        return undefined;
    };
    return VehicleListings;
}());
document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('searchForm');
    var vehicleListings = new VehicleListings();
    form === null || form === void 0 ? void 0 : form.addEventListener('submit', function (event) {
        event.preventDefault();
        var modelInput = document.getElementById('model').value.trim();
        var yearInput = parseInt(document.getElementById('year').value.trim(), 10);
        var vehicle = vehicleListings.findVehicle(modelInput, yearInput);
        if (vehicle !== undefined) {
            alert("Model: ".concat(vehicle.model, "\nYear: ").concat(vehicle.year, "\nPrice: $").concat(vehicle.price));
        }
        else {
            alert('Vehicle not found in listings.');
        }
    });
});
