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
var core_1 = require('@angular/core');
var module_1 = require();
var ProjectService = (function () {
    function ProjectService(router, eventService) {
        this.router = router;
        this.eventService = eventService;
    }
    ProjectService.prototype.getHeroes = function () {
        var _this = this;
        this.projectService.getProjects().then(function (heroes) { return _this.heroes = heroes; });
    };
    ProjectService.prototype.ngOnInit = function () {
        this.getHeroes();
    };
    ProjectService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [Object, (typeof (_a = typeof module_1.ProjectService !== 'undefined' && module_1.ProjectService) === 'function' && _a) || Object])
    ], ProjectService);
    return ProjectService;
    var _a;
}());
exports.ProjectService = ProjectService;
//# sourceMappingURL=project.service.js.map