class Vehicle {
    constructor(
      public make: string,
      public model: string,
      public year: number,
      public mileage: number,
      public price: number
    ) {}
  
    displayDetails() {
      console.log(`Make: ${this.make}`);
      console.log(`Model: ${this.model}`);
      console.log(`Year: ${this.year}`);
      console.log(`Mileage: ${this.mileage} miles`);
      console.log(`Price: $${this.price}`);
    }
  }
  
  class PreOwnedVehicle extends Vehicle {
    constructor(
      public make: string,
      public model: string,
      public year: number,
      public mileage: number,
      public price: number,
      public previousOwners: string[],
      public condition: string,
      public color: string,
      public registrationNumber: string
    ) {
      super(make, model, year, mileage, price);
    }
  
    displayDetails() {
      super.displayDetails();
      console.log(`Previous Owners: ${this.previousOwners.join(', ')}`);
      console.log(`Condition: ${this.condition}`);
      console.log(`Color: ${this.color}`);
      console.log(`Registration Number: ${this.registrationNumber}`);
    }
  }
  
  const preOwnedCar = new PreOwnedVehicle(
    'Toyota',
    'Camry',
    2018,
    30000,
    15000,
    ['Raj', 'Ram'],
    'Good',
    'Blue',
    'ABC123'
  );
  
  preOwnedCar.displayDetails();
  