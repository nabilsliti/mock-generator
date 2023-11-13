
import { EType } from '../enums';

export type vendor = 'americanExpress' | 'discoverCard' | 'masterCard' | 'visa' ;

/**
 * Credit card interface
 * @interface
 * @property {string} _type_ - Credit card type (always 'creditCard')
 * @property {string} _vondors_ - The list of payment vendors ('visa' | 'masterCard' | 'americanExpress' | 'discoverCard')
 * @property {number} _values_ - Predefined list of credit card details to be used to generate a credit card
 */
export interface ICreditCard {
    _type_: EType.CREDIT_CARD;
    _vendors_?: Array<vendor>;
    _values_?: {
        _vendors_?: Array<vendor>;
        _numbers_?: Array<string>,
        _expirationDate_?: Array<string>,
        _ccv_?: Array<string>,
        _holderName_?: Array<string>
    };
}