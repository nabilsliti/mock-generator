import { DEFAULT_ZIP_CODE_FORMAT } from '../constants';
import { generateRandomBoolean } from './boolean';
import { getRandomValue } from '../utils';
import { IZipCode } from '../interfaces';

/**
 * Generate a random number
 * @param {Partial<IZipCode>} options
 * @param {Array<string>} options._values_ - Predefined list of zip code to be used to return a random a zip code
 * @param {number} options._format_ - The format of the zip code (default value DEFAULT_ZIP_CODE_FORMAT = '5d')
 * @throws {Error} error if the zip code is not valid (other than '5d', '9d' or '5d-9d)
 * @returns {number} random zip code
 */
export const generateRandomZipCode = ({ _values_, _format_ = DEFAULT_ZIP_CODE_FORMAT }: Partial<IZipCode> = {}): string => {
    if (Boolean(_values_?.length)) {
        return getRandomValue(_values_);
    }
    const zipCodeFormats = {
        '5d': '#####', // 5-digit zip code (5d)
        '9d': '#####-####', // 9-digit zip code (9d)
        '5d-9d': 'any', // 5-digit and 9-digit zip code (5d and 9d)
    };
    if (!Object.keys(zipCodeFormats).includes(_format_ as string)) {
        throw new Error(`Invalid zip code format ${ _format_ }`);
    }

    const randomZipCode = () => (Math.floor(Math.random() * 10)).toString();
    const format = _format_ !== '5d-9d' ? zipCodeFormats[ _format_ ] : (generateRandomBoolean() ? '#####' : '#####-####');
    return format.replace(/#/g, randomZipCode);
};