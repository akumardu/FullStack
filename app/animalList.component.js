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
var AnimalListComponent = (function () {
    function AnimalListComponent() {
        this.clickSender = new core_1.EventEmitter();
        this.filterByAge = "allAnimals";
        this.filterByDiet = "allAnimals";
    }
    AnimalListComponent.prototype.editAnimalDetails = function (animalToEdit) {
        this.clickSender.emit(animalToEdit);
    };
    AnimalListComponent.prototype.onChangeAge = function (optionFromMenu) {
        this.filterByAge = optionFromMenu;
    };
    AnimalListComponent.prototype.onChangeDiet = function (optionFromMenu) {
        this.filterByDiet = optionFromMenu;
    };
    return AnimalListComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], AnimalListComponent.prototype, "animalList", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], AnimalListComponent.prototype, "clickSender", void 0);
AnimalListComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'animal-list',
        template: "\n  <select class=\"filter\" (change)=\"onChangeAge($event.target.value)\">\n      <option value=\"allAnimals\" selected=\"selected\">All Animals</option>\n      <option value=\"matureAnimals\">Mature Animals</option>\n      <option value=\"youngAnimals\">Young Animals</option>\n    </select>\n    <select class=\"filter\" (change)=\"onChangeDiet($event.target.value)\">\n        <option value=\"allAnimals\" selected=\"selected\">All Animals</option>\n        <option value=\"herbivorous\"> Herbivorous </option>\n        <option value=\"carnivorous\"> Carnivorous </option>\n        <option value=\"omnivorous\"> Omnivorous </option>\n      </select>\n  <h2>Animals at our Zoo !! </h2>\n  <div id=\"list2\">\n  <ul>\n    <li *ngFor=\"let currentAnimal of animalList | animalAge:filterByAge | animalDiet:filterByDiet\">\n    <p><em>{{currentAnimal.name}}</em></p>\n    The {{currentAnimal.species}} from {{currentAnimal.location}} is {{currentAnimal.age}} years old. It is a {{currentAnimal.sex}} and likes {{currentAnimal.likes}} and dislikes {{currentAnimal.dislikes}}.\n    <br/>\n    <button id=\"editbutton\" (click)=\"editAnimalDetails(currentAnimal)\">Edit!</button>\n    <br>\n    </li>\n  </ul>\n  </div>",
        styleUrls: ['app.component.css']
    })
], AnimalListComponent);
exports.AnimalListComponent = AnimalListComponent;
//# sourceMappingURL=animalList.component.js.map