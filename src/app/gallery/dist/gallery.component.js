"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.GalleryComponent = void 0;
var core_1 = require("@angular/core");
var GalleryComponent = /** @class */ (function () {
    function GalleryComponent() {
        this.openModalEvent = new core_1.EventEmitter();
        this.currentSlideEvent = new core_1.EventEmitter();
        this.list_imgs = [
            { link: 'assets/images/gallery/potriat3.jpg' },
            { link: 'assets/images/gallery/gallery2.jpg' },
            { link: 'assets/images/gallery/gallery3.jpg' },
            { link: 'assets/images/gallery/potriat2.jpg' },
            { link: 'assets/images/gallery/gallery5.jpg' },
            { link: 'assets/images/gallery/gallery6.jpg' },
        ];
    }
    GalleryComponent.prototype.openModal = function () {
        this.openModalEvent.emit();
        // this.document.getElementById("myModal").style.display = "flex";
    };
    GalleryComponent.prototype.currentSlide = function (slideNumber) {
        this.currentSlideEvent.emit();
    };
    __decorate([
        core_1.Output()
    ], GalleryComponent.prototype, "openModalEvent");
    __decorate([
        core_1.Output()
    ], GalleryComponent.prototype, "currentSlideEvent");
    GalleryComponent = __decorate([
        core_1.Component({
            selector: 'app-gallery',
            templateUrl: './gallery.component.html',
            styleUrls: ['./gallery.component.scss']
        })
    ], GalleryComponent);
    return GalleryComponent;
}());
exports.GalleryComponent = GalleryComponent;
