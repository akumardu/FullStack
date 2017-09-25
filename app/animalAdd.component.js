"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var animal_model_1 = require("./animal.model");
var AnimalAddComponent = (function () {
    function AnimalAddComponent() {
        this.newAnimalSender = new core_1.EventEmitter();
    }
    AnimalAddComponent.prototype.submitForm = function (name, species, age, diet, location, caretakers, likes, dislikes, sex) {
        var newAnimalToAdd = new animal_model_1.Animal(name, species, age, diet, location, caretakers, likes, dislikes, sex);
        this.newAnimalSender.emit(newAnimalToAdd);
    };
    return AnimalAddComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], AnimalAddComponent.prototype, "newAnimalSender", void 0);
AnimalAddComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'animal-add',
        template: "<div class=\"well\">\n  <h2>Add A New Animal</h2><br/>\n  <hr>\n  <label>Enter Animal Name:</label><br/>\n  <input #newName><br/>\n  <label>Enter Animal Species:</label><br/>\n  <input #newSpecies><br/>\n  <label>Enter Animal Age:</label><br/>\n  <input #newAge type=\"number\"><br/>\n  <label>Enter Animal Diet:</label><br/>\n  <select #newDiet>\n      <option [value]=\"Carnivorous\"> Carnivorous </option>\n      <option [value]=\"Herbivorous\"> Herbivorous </option>\n      <option [value]=\"Omnivorous\"> Omnivorous </option>\n    </select>\n    <br/>\n  <label>Enter Animal Location:</label><br/>\n  <input #newLocation><br/>\n  <label>Enter Animal Caretakers:</label><br/>\n  <input #newCaretakers type=\"number\"><br/>\n  <label>Enter Animal Likes:</label><br/>\n  <input #newLikes><br/>\n  <label>Enter Animal Dislikes:</label><br/>\n  <input #newDislikes><br/>\n  <label>Enter Animal's Sex</label><br/>\n  <select #newSex>\n      <option [value]=\"Male\" selected=\"selected\"> Male </option>\n      <option [value]=\"Female\"> Female </option>\n    </select>\n  <br/>  \n  <button (click)=\"submitForm(newName.value, newSpecies.value, newAge.value, newDiet.value, newLocation.value, newCaretakers.value, newLikes.value, newDislikes.value, newSex.value); newName.value=''; newSpecies.value=''; newAge.value='0'; newDiet.value=''; newLocation.value=''; newCaretakers.value=''; newLikes.value=''; newDislikes.value='';\">Add</button><br/>\n  ",
        styleUrls: ['app.component.css']
    })
], AnimalAddComponent);
exports.AnimalAddComponent = AnimalAddComponent;
//# sourceMappingURL=animalAdd.component.js.map