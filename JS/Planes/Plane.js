class plane {

    constructor(model, maxSpeed, maxFlightDistance, maxLoadCapacity) {
        this.model = model;
        this.maxSpeed = maxSpeed;
        this.maxFlightDistance = maxFlightDistance;
        this.maxLoadCapacity = maxLoadCapacity;
    }

    getModel() {
        return this.model;
    }

    getMaxSpeed() {
        return this.maxSpeed;
    }

    getMaxFlightDistance() {
        return this.maxFlightDistance;
    }

    getMaxLoadCapacity() {
     let result = this.maxLoadCapacity;
     return result;
    }
}

module.exports = plane;
