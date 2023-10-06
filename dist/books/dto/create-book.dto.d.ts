import * as Joi from 'joi';
export declare class CreateBookDto {
    name: string;
    price: number;
}
export declare const CreateBookSchema: Joi.ObjectSchema<any>;
