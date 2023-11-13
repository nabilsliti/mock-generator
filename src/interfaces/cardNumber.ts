
import { EType } from '../enums';

export type vondors = 'americanExpress' | 'discoverCard' | 'masterCard' | 'visa' ;

/**
 * City interface
 * @interface
 * @property {string} _type_ - City type (always 'city')
 * @property {string} _vondors_ - The list of payment vondors ('visa' | 'masterCard' | 'americanExpress' | 'discoverCard')
 * @property {number} _values_ - Predefined list of cities to be used to generate a city
 */
export interface ICardNumber {
    _type_: EType.CITY;
    _vendors_?: Array<vondors>;
    _values_?: Array<string>;
}