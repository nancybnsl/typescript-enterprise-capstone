// Create your class here.
class Hotel {
    readonly id: string;
    readonly name: string;
    cost: number;
    ameneties: string[];

    constructor(id: string, name: string, cost: number, ameneties: string[]) {
        this.id = id;
        this.name = name;
        this.cost = cost;
        this.ameneties = ameneties;
    }

    addAmenity(amenity: string) {
        this.ameneties.push(amenity);
    }

    descibeHotel():string{
        return `${this.name} costs ${this.cost}  and includes  the following amenities: ${this.ameneties.join(", ")}.`;
    }

}

const marriott = new Hotel("1", "Marriott", 200, ["Pool", "Gym", "Free Wi-Fi"]);
marriott.descibeHotel();
marriott.addAmenity("Spa");
marriott.descibeHotel();