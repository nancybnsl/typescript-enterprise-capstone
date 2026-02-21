// Create your class here.
var Hotel = /** @class */ (function () {
    function Hotel(id, name, cost, ameneties) {
        this.id = id;
        this.name = name;
        this.cost = cost;
        this.ameneties = ameneties;
    }
    Hotel.prototype.addAmenity = function (amenity) {
        this.ameneties.push(amenity);
    };
    Hotel.prototype.descibeHotel = function () {
        return "".concat(this.name, " costs ").concat(this.cost, "  and includes  the following amenities: ").concat(this.ameneties.join(", "), ".");
    };
    return Hotel;
}());
var marriott = new Hotel("1", "Marriott", 200, ["Pool", "Gym", "Free Wi-Fi"]);
marriott.descibeHotel();
marriott.addAmenity("Spa");
marriott.descibeHotel();
