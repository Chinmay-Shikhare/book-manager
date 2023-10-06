/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { Model } from 'mongoose';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { Book, BookDocument } from './entities/book.entity';
export declare class BooksService {
    private readonly BookModel;
    constructor(BookModel: Model<BookDocument>);
    create(createBookDto: CreateBookDto): Promise<import("mongoose").Document<unknown, {}, BookDocument> & Book & Document & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    findAll(): import("mongoose").Query<(import("mongoose").Document<unknown, {}, BookDocument> & Book & Document & {
        _id: import("mongoose").Types.ObjectId;
    })[], import("mongoose").Document<unknown, {}, BookDocument> & Book & Document & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, BookDocument, "find">;
    findOne(bookId: string): Promise<void>;
    update(updateBookDto: UpdateBookDto): Promise<import("mongoose").Document<unknown, {}, BookDocument> & Book & Document & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    remove(bookId: string): Promise<import("mongoose").Document<unknown, {}, BookDocument> & Book & Document & {
        _id: import("mongoose").Types.ObjectId;
    }>;
}
