"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AnimalDietPipe = (function () {
    function AnimalDietPipe() {
    }
    AnimalDietPipe.prototype.transform = function (input, filterByDiet) {
        var output = [];
        if (filterByDiet === "carnivorous") {
            for (var i = 0; i < input.length; i++) {
                if (input[i].diet === "carnivorous" || input[i].diet === "Carnivorous") {
                    output.push(input[i]);
                }
            }
            return output;
        }
        else if (filterByDiet == "herbivorous") {
            for (var i = 0; i < input.length; i++) {
                if (input[i].diet === "herbivorous" || input[i].diet === "Herbivorous") {
                    output.push(input[i]);
                }
            }
            return output;
        }
        else if (filterByDiet == "omnivorous") {
            for (var i = 0; i < input.length; i++) {
                if (input[i].diet === "omnivorous" || input[i].diet === "Omnivorous") {
                    output.push(input[i]);
                }
            }
            return output;
        }
        else {
            return input;
        }
    };
    return AnimalDietPipe;
}());
AnimalDietPipe = __decorate([
    core_1.Pipe({
        name: "animalDiet",
        pure: false
    })
], AnimalDietPipe);
exports.AnimalDietPipe = AnimalDietPipe;
//# sourceMappingURL=animalDiet.pipe.js.map