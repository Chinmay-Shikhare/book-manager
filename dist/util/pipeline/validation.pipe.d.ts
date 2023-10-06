import { PipeTransform } from '@nestjs/common';
import * as Joi from 'joi';
export declare class ValidatorPipe implements PipeTransform {
    private schema;
    constructor(schema: Joi.Schema);
    transform(value: Record<string, any>): any;
}
