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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BooksService = void 0;
const mongoose_1 = require("mongoose");
const uuid_1 = require("uuid");
const common_1 = require("@nestjs/common");
const mongoose_2 = require("@nestjs/mongoose");
const book_entity_1 = require("./entities/book.entity");
let BooksService = class BooksService {
    constructor(BookModel) {
        this.BookModel = BookModel;
    }
    create(createBookDto) {
        const requestObject = Object.assign({ bookId: (0, uuid_1.v4)() }, createBookDto);
        return this.BookModel.create(requestObject);
    }
    findAll() {
        return this.BookModel.find();
    }
    async findOne(bookId) {
        const book = await this.BookModel.findOne({ bookId });
        if (!book) {
            throw new common_1.BadRequestException('book not found');
        }
    }
    async update(updateBookDto) {
        await this.findOne(updateBookDto.bookId);
        return this.BookModel.findOneAndUpdate({ bookId: updateBookDto.bookId }, updateBookDto);
    }
    async remove(bookId) {
        await this.findOne(bookId);
        return this.BookModel.findOneAndRemove({ bookId });
    }
};
BooksService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)(book_entity_1.Book.name)),
    __metadata("design:paramtypes", [mongoose_1.Model])
], BooksService);
exports.BooksService = BooksService;
//# sourceMappingURL=books.service.js.map