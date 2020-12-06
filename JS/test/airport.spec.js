const assert = require('chai').assert;

const plane = require('../Planes/plane');
const militaryPlane = require('../Planes/militaryPlane');
const passengerPlane = require('../Planes/passengerPlane');
const airport = require('../airport');
const militaryType = require('../models/militaryType');
const experimentalPlane = require('../Planes/experimentalPlane');
const experimentalTypes = require('../models/experimentalTypes');
const classificationLevel = require('../models/classificationLevel');
const { expect } = require('chai');
const { typeTransport } = require('../models/militaryType');
const { unclassified } = require('../models/classificationLevel');

describe('Aircompany test suite', () => {

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
    let planeWithMaxPassengerCapacity = new passengerPlane('Boeing-747', 980, 16100, 70500, 242);

    it('should have military Planes with transport type', () => {
        let planesRange = new airport(planes);
        let transportMilitaryPlanesInTheAirport = planesRange.getTransportMilitaryPlanes();
        expect(transportMilitaryPlanesInTheAirport).to.not.be.empty;
    });

    it('should find passenger plane with max passenger capacity', () => {
        let planesRange = new airport(planes);
        let expectedPlaneWithMaxPassengersCapacity = planesRange.getPassengerPlaneWithMaxPassengersCapacity();
        expect(expectedPlaneWithMaxPassengersCapacity.getPassengersCapacity()).to.equal(planeWithMaxPassengerCapacity.getPassengersCapacity());
    });


    it('should sort planes by max load capacity from lowest to highest', () => {
        let planesRange = new airport(planes);
        planesRange.sortByMaxLoadCapacity();
        console.log(planesRange);

        let maxLoadCapacities = [];
        planesRange.planes.forEach((a) => maxLoadCapacities.push(a.maxLoadCapacity));
        maxLoadCapacities.forEach((a, b) => assert.isAtLeast(a, b));
        
    })

    it('should have at least one bomber in military planes', () => {
        let planesRange = new airport(planes);
        let bomberMilitaryPlanes  = planesRange.getBomberMilitaryPlanes();
        expect(bomberMilitaryPlanes).to.not.be.empty;

    })

    it('should check that experimentsl planes have classification level higher than unclassified', () => {
        let planesRange = new airport(planes);
        let experimentalPlanesInTheAirport  = planesRange.getExperimentalPlanes();
        experimentalPlanesInTheAirport.forEach((a) => expect(a.classificationLevel).to.not.equal('Unclassified'));

    });

});



