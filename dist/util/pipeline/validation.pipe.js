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
exports.ValidatorPipe = void 0;
const common_1 = require("@nestjs/common");
const Joi = require("joi");
let ValidatorPipe = class ValidatorPipe {
    constructor(schema) {
        this.schema = schema;
    }
    transform(value) {
        const result = this.schema.validate(value);
        if (result.error) {
            const errorMessages = result.error.details.map((d) => d.message);
            throw new common_1.BadRequestException(errorMessages);
        }
        return result.value;
    }
};
ValidatorPipe = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [Object])
], ValidatorPipe);
exports.ValidatorPipe = ValidatorPipe;
//# sourceMappingURL=validation.pipe.js.map