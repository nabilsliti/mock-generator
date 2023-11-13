import { EType } from '../enums';

/**
 * String interface
 * @interface
 * @property {string} _type_ - Person type (always 'person')
 * @property {Object} _values_ - Predefined list of person to be used to generate a person
 */
export interface IPerson {
    _type_: EType.PERSON;
    _firstNames_?: Array<string>;
    _lastNames_?: Array<string>;
}