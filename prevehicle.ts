interface Vehicle {
    model: string;
    year: number;
    price: number;
  }
  
  class VehicleListings {
    vehicles: Vehicle[];
  
    constructor() {
      this.vehicles = [
        { model: "Toyota Camry", year: 2018, price: 20000 },
        { model: "Honda Civic", year: 2017, price: 18000 },
        { model: "Ford Mustang", year: 2019, price: 30000 }
        // Add more vehicles as needed
      ];
    }
  
    findVehicle(model: string, year: number): Vehicle | undefined {
      for (const vehicle of this.vehicles) {
        if (vehicle.model === model && vehicle.year === year) {
          return vehicle;
        }
      }
      return undefined;
    }
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('searchForm');
    const vehicleListings = new VehicleListings();
  
    form?.addEventListener('submit', (event) => {
      event.preventDefault();
      const modelInput = (document.getElementById('model') as HTMLInputElement).value.trim();
      const yearInput = parseInt((document.getElementById('year') as HTMLInputElement).value.trim(), 10);
  
      const vehicle = vehicleListings.findVehicle(modelInput, yearInput);
  
      if (vehicle !== undefined) {
        alert(`Model: ${vehicle.model}\nYear: ${vehicle.year}\nPrice: $${vehicle.price}`);
      } else {
        alert('Vehicle not found in listings.');
      }
    });
  });
  