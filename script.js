"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Hotel = void 0;
var activities_1 = require("./activities");
var Hotel = /** @class */ (function () {
    function Hotel(id, name, cost, category) {
        this.amenities = [];
        this.id = id;
        this.name = name;
        this.cost = cost;
        this.category = category;
    }
    Hotel.prototype.addAmenity = function (amenity) {
        this.amenities.push(amenity);
    };
    Hotel.prototype.describeHotel = function () {
        return "The ".concat(this.name, " costs $").concat(this.cost, "  for category ").concat(this.category, " and includes the following amenities: ").concat(this.amenities.join(", "), ".");
    };
    return Hotel;
}());
exports.Hotel = Hotel;
var peakLodge = new Hotel("06", "Peak Lodge", 250, "gold");
peakLodge.addAmenity("breakfast");
peakLodge.addAmenity("wifi");
var description = peakLodge.describeHotel();
console.log(description);
(0, activities_1.printAttendies)(activities_1.skiLesson);
(0, activities_1.printAttendies)(activities_1.massage);
(0, activities_1.printAttendies)(activities_1.cookingClass);
