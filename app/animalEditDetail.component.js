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
var AnimalEditDetailComponent = (function () {
    function AnimalEditDetailComponent() {
        this.doneButtonClickedSender = new core_1.EventEmitter();
        this.diets = ["Carnivorous", "Omnivorous", "Herbivorous"];
        this.sexes = ["Male", "Female"];
    }
    AnimalEditDetailComponent.prototype.finishedEditing = function () {
        this.doneButtonClickedSender.emit();
    };
    return AnimalEditDetailComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", animal_model_1.Animal)
], AnimalEditDetailComponent.prototype, "selectedAnimal", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], AnimalEditDetailComponent.prototype, "doneButtonClickedSender", void 0);
AnimalEditDetailComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'animal-edit-detail',
        template: "<div>\n        <div *ngIf=\"selectedAnimal\">\n          <h3>{{selectedAnimal.name}}</h3><br/>\n          <hr>\n          <h3>Edit Animal Details</h3><br/>\n          <label>Enter Animal Name:</label><br/>\n          <input [(ngModel)]=\"selectedAnimal.name\"><br/>\n          <label>Enter Animal Species:</label><br/>\n          <input [(ngModel)]=\"selectedAnimal.species\"><br/>\n          <label>Enter Animal Age:</label><br/>\n          <input [(ngModel)]=\"selectedAnimal.age\" type=\"number\"><br/>\n          <label>Enter Animal Sex:</label><br/>\n          <select [(ngModel)]=\"selectedAnimal.sex\">\n            <option *ngFor=\"let c of sexes\" [ngValue]=\"c\">{{c}}</option>\n          </select>\n          <br/>\n          <label>Enter Animal Diet:</label><br/>\n          <select [(ngModel)]=\"selectedAnimal.diet\">\n            <option *ngFor=\"let c of diets\" [ngValue]=\"c\">{{c}}</option>\n          </select>\n          <br/>\n          <label>Enter Animal Location:</label><br/>\n          <input [(ngModel)]=\"selectedAnimal.location\"><br/>\n          <label>Enter Animal Caretakers:</label><br/>\n          <input [(ngModel)]=\"selectedAnimal.caretakers\" type=\"number\"><br/>\n          <label>Enter Animal Likes:</label><br/>\n          <input [(ngModel)]=\"selectedAnimal.likes\"><br/>\n          <label>Enter Animal Dislikes:</label><br/>\n          <input [(ngModel)]=\"selectedAnimal.dislikes\"><br/>\n          <button (click)=\"finishedEditing()\">Done</button><br/>\n        </div>\n      </div>",
        styleUrls: ['app.component.css']
    })
], AnimalEditDetailComponent);
exports.AnimalEditDetailComponent = AnimalEditDetailComponent;
//# sourceMappingURL=animalEditDetail.component.js.map