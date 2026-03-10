class Car {
    constructor(brand, model) {
        this.brand = brand
        this.model = model
    }

    displayInfo() {
        console.log(`Автомобиль: ${this.brand} ${this.model}`)
    }
}

const car1 = new Car('Tesla', 'Model S')
const car2 = new Car('BMW', 'M5')
const car3 = new Car('Toyota', 'Camry')

car1.displayInfo()
car2.displayInfo()
car3.displayInfo()


class ElectricCar extends Car {
    constructor(brand, model, batteryCapacity) {
        super(brand, model)
        this.batteryCapacity = batteryCapacity
    }

    displayInfo() {
        console.log`Электромобиль: ${this.brand} ${this.model}, Емкость батареи: ${this.batteryCapacity}`
    }
}

const myTesla = new ElectricCar('Tesla', 'Model 3', 75)
myTesla.displayInfo()


class Vehicle {
    startEngine() {
        console.log('Запуск двигателя')
    }
}

class PetrolCar extends Vehicle {
    startEngine() {
        console.log('Бензиновый двигатель заведен')
    }
}

class ElectricVehicle extends Vehicle {
    startEngine() {
        console.log('Электровигатель заведен')
    }
}

class Motorbike extends Vehicle {
    startEngine() {
        console.log('Двигатель мотоцикла заведен')
    }
}

const vehicles = [
    new PetrolCar(),
    new ElectricVehicle(),
    new Motorbike()
]

vehicles.forEach(vehicle => vehicle.startEngine())