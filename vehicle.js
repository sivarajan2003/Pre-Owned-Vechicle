var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Vehicle = /** @class */ (function () {
    function Vehicle(make, model, year, mileage, price) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.mileage = mileage;
        this.price = price;
    }
    Vehicle.prototype.displayDetails = function () {
        console.log("Make: ".concat(this.make));
        console.log("Model: ".concat(this.model));
        console.log("Year: ".concat(this.year));
        console.log("Mileage: ".concat(this.mileage, " miles"));
        console.log("Price: $".concat(this.price));
    };
    return Vehicle;
}());
var PreOwnedVehicle = /** @class */ (function (_super) {
    __extends(PreOwnedVehicle, _super);
    function PreOwnedVehicle(make, model, year, mileage, price, previousOwners, condition, color, registrationNumber) {
        var _this = _super.call(this, make, model, year, mileage, price) || this;
        _this.make = make;
        _this.model = model;
        _this.year = year;
        _this.mileage = mileage;
        _this.price = price;
        _this.previousOwners = previousOwners;
        _this.condition = condition;
        _this.color = color;
        _this.registrationNumber = registrationNumber;
        return _this;
    }
    PreOwnedVehicle.prototype.displayDetails = function () {
        _super.prototype.displayDetails.call(this);
        console.log("Previous Owners: ".concat(this.previousOwners.join(', ')));
        console.log("Condition: ".concat(this.condition));
        console.log("Color: ".concat(this.color));
        console.log("Registration Number: ".concat(this.registrationNumber));
    };
    return PreOwnedVehicle;
}(Vehicle));
var preOwnedCar = new PreOwnedVehicle('Toyota', 'Camry', 2018, 30000, 15000, ['Raj', 'Ram'], 'Good', 'Blue', 'ABC123');
preOwnedCar.displayDetails();
