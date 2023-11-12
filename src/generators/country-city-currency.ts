import { countries } from 'countries-list';
import { getRandomValue } from '../utils';
import { ICity, ICountry, ICountryCode, ICurrency } from '../interfaces';

const getCountryCodes = (): Array<string> => Object.keys(countries);

const getRandomCountry = () => {
    const randomIsoCountryCode = getRandomValue(getCountryCodes());
    return countries[ randomIsoCountryCode ];
};

/**
 * Generate a random country code
 * @param {Partial<ICountryCode>} options
 * @param {Array<string>} options._values_ - Predefined list of country codes to be used to generate a country code
 * @returns {string} random country code
 */
export const generateRandomCountryCode = ({ _values_ }: Partial<ICountryCode> = {}): string => {
    if (Boolean(_values_?.length)) {
        return getRandomValue(_values_);
    }
    return getRandomValue(getCountryCodes());
};

/**
 * Generate a random country
 * @param {Partial<ICountry>} options
 * @param {Array<string>} options._values_ - Predefined list of countries to be used to generate a country
 * @returns {string} random country
 */
export const generateRandomCountry = ({ _values_ }: Partial<ICountry> = {}): string => {
    if (Boolean(_values_?.length)) {
        return getRandomValue(_values_);
    }
    return getRandomCountry().name;
};

/**
 * Generate a random city
 * @param {Partial<ICity>} options
 * @param {Array<string>} options._values_ - Predefined list of cities to be used to generate a city
 * @returns {string} random city
 */
export const generateRandomCity = ({ _values_ }: Partial<ICity> = {}): string => {
    if (Boolean(_values_?.length)) {
        return getRandomValue(_values_);
    }
    const randomCity = getRandomCountry().capital;
    return Boolean(randomCity) ? randomCity : generateRandomCity();
};

/**
 * Generate a random currency
 * @param {Partial<ICity>} options
 * @param {Array<string>} options._values_ - Predefined list of currencies to be used to generate a currency
 * @returns {string} random currency
 */
export const generateRandomCurrency = ({ _values_ }: Partial<ICurrency> = {}): string => {
    if (Boolean(_values_?.length)) {
        return getRandomValue(_values_);
    }
    const randomCurrency = getRandomCountry().currency;
    return Boolean(randomCurrency.length) ? randomCurrency[ 0 ] : generateRandomCurrency();
};
