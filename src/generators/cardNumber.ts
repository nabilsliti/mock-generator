import { generateRandomRegex } from './regex';
import { getRandomValue } from '../utils';
import { ICardNumber } from '../interfaces/cardNumber';

const regexVondors = {
    masterCard: '^5[1-5][0-9]{14}$',
    visa: '^4[0-9]{12}(?:[0-9]{3})?$',
    americanExpress: '^3[47][0-9]{13}$',
    discoverCard: '^6(?:011|5[0-9]{2})[0-9]{12}$'
};

/**
 * Generate a random card number
 * @param {Partial<ICardNumber>} options
 * @param {RegExp} options._values_ - The regex pattern used to generate the value
 * @returns {string} random card number
 */
export const generateRandomCardNumber = ({ _values_, _vendors_ }: Partial<ICardNumber> = {}) => {
    if (Boolean(_values_?.length)) {
        return getRandomValue(_values_);
    }
    const vendors = Boolean(_vendors_?.length) ? _vendors_ : Object.keys(regexVondors);
    const regex = vendors.map(vondor => regexVondors[ vondor ]).join('|') as unknown as RegExp;
    return generateRandomRegex({ _regex_: regex });
};
