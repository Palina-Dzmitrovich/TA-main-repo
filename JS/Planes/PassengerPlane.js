const plane = require('./plane');

class passengerPlane extends plane {

    

    constructor(model, maxSpeed, maxFlightDistance, maxLoadCapacity, passengersCapacity) {
        super(model, maxSpeed, maxFlightDistance, maxLoadCapacity);
        this._passengersCapacity = passengersCapacity;
    }

  
    getPassengersCapacity() {
        return this._passengersCapacity;
    }

    set passengersCapacity(value) {
        this._passengersCapacity = value;
    }
}

module.exports = passengerPlane;