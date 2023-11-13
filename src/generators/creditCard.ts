import { generateRandomDate } from './date';
import { generateRandomNumber } from './number';
import { generateRandomPerson } from './person';
import { generateRandomRegex } from './regex';
import { getRandomValue } from '../utils';
import { ICardNumber, ICreditCard, vendor } from '../interfaces/creditCard';

const regexVondors = {
    masterCard: '^5[1-5][0-9]{14}$',
    visa: '^4[0-9]{12}(?:[0-9]{3})?$',
    americanExpress: '^3[47][0-9]{13}$',
    discoverCard: '^6(?:011|5[0-9]{2})[0-9]{12}$'
};

/**
 * Generate a random card number
 * @param {Partial<ICardNumber>} options
 * @param {Array<string>} options._numbers_ - Predefined list of card numbers to be used to generate a card number
 * @returns {string} random card number
 */
export const generateRandomCardNumber = ({ _numbers_, _vendors_ }: Partial<ICardNumber> = {}) => {
    if (Boolean(_numbers_?.length)) {
        return getRandomValue(_numbers_);
    }
    const vendors = Boolean(_vendors_?.length) ? _vendors_ : Object.keys(regexVondors);
    const regex = vendors.map(vondor => regexVondors[ vondor ]).join('|') as unknown as RegExp;
    return generateRandomRegex({ _regex_: regex });
};

/**
 * Generate a random credit card details
 * @param {Partial<ICreditCard>} options
 * @param {RegExp} options._values_ - The list of payment vondors ('visa' | 'masterCard' | 'americanExpress' | 'discoverCard')
 * @returns {string} random credit card details
 */
export const generateRandomCreditCard = ({ _numbers_, _expirationDates_, _ccv_, _holderNames_, _vendors_ }: Partial<ICreditCard> = {}) => {
    const vendors = Boolean(_vendors_?.length) ? _vendors_ : Object.keys(regexVondors);
    const vondor = getRandomValue(vendors) as vendor;
    const type = Boolean(_vendors_?.length) ? getRandomValue(_vendors_) : vondor;
    const number = generateRandomCardNumber({ _numbers_: _numbers_, _vendors_: [ type ] });
    const expirationDate = Boolean(_expirationDates_?.length) ? getRandomValue(_expirationDates_) : generateRandomDate({ _format_: 'MM/yy' });
    const ccv = Boolean(_ccv_?.length) ? getRandomValue(_ccv_) : `${ generateRandomNumber({ _min_: 100, _max_: 999 }) }`;
    let holderName;
    if (Boolean(_holderNames_?.length)) {
        holderName = getRandomValue(_holderNames_);
    } else {
        const { firstName, lastName } = generateRandomPerson();
        holderName = `${ firstName } ${ lastName }`;
    }
    return {
        type,
        number,
        expirationDate,
        ccv,
        holderName
    };
};