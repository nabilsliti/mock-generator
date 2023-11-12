import { EType } from '../enums';

/**
 * Country interface
 * @interface
 * @property {string} _type_ - Country type (always 'country')
 * @property {number} _values_ - Predefined list of countries to be used to generate a country
 */
export interface ICountry {
    _type_: EType.COUNTRY;
    _values_: Array<string>;
}

/**
 * CountryCode interface
 * @interface
 * @property {string} _type_ - Country code type (always 'countryCode')
 * @property {number} _values_ - Predefined list of country codes to be used to generate a country code
 */
export interface ICountryCode {
    _type_: EType.COUNTRY_CODE;
    _values_?: Array<string>;
}