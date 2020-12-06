const plane = require('./Planes/plane');
const militaryPlane = require('./Planes/militaryPlane');
const passengerPlane = require('./Planes/passengerPlane');
const airport = require('./airport');
const militaryType = require('./models/militaryType');
const experimentalPlane = require('./Planes/experimentalPlane');
const experimentalTypes = require('./models/experimentalTypes');
const classificationLevel = require('./models/lassificationLevel');

(function run() {

    let planes = [
        new passengerPlane('Boeing-737', 900, 12000, 60500, 164),
        new passengerPlane('Boeing-737-800', 940, 12300, 63870, 192),
        new passengerPlane('Boeing-747', 980, 16100, 70500, 242),
        new passengerPlane('Airbus A320', 930, 11800, 65500, 188),
        new passengerPlane('Airbus A330', 990, 14800, 80500, 222),
        new passengerPlane('Embraer 190', 870, 8100, 30800, 64),
        new passengerPlane('Sukhoi Superjet 100', 870, 11500, 50500, 140),
        new passengerPlane('Bombardier CS300', 920, 11000, 60700, 196),
        new militaryPlane('B-1B Lancer', 1050, 21000, 80000, militaryType.typeBomber),
        new militaryPlane('B-2 Spirit', 1030, 22000, 70000, militaryType.typeBomber),
        new militaryPlane('B-52 Stratofortress', 1000, 20000, 80000, militaryType.typeBomber),
        new militaryPlane('F-15', 1500, 12000, 10000, militaryType.typeFighter),
        new militaryPlane('F-22', 1550, 13000, 11000, militaryType.typeFighter),
        new militaryPlane('C-130 Hercules', 650, 5000, 110000, militaryType.typeTransport),
        new experimentalPlane("Bell X-14", 277, 482, 500, experimentalTypes.highAltitude, classificationLevel.secret),
        new experimentalPlane("Ryan X-13 Vertijet", 560, 307, 500, experimentalTypes.verticalTakeOffAndLanding, classificationLevel.topSecret)
    ];

    let planesRange = new airport(planes);
    let militaryAirport = new airport(airport.getMilitaryPlanes());
    let passengerAirport = new airport(airport.getPasPl());
    console.log(`Military airport sorted by max distance: ${planesRange.print(militaryAirport.sortByMaxDistance())}`);
    console.log(`Passenger airport sorted by max speed: ${planesRange.print(passengerAirport.sortByMaxSpeed())}`);
    console.log(`Plane with max passenger capacity: ${planesRange.print(passengerAirport.getPassengerPlaneWithMaxPassengersCapacity())}`);
})();