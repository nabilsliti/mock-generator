import { generateRandomDate } from './date';
import { generateRandomNumber } from './number';
import { generateRandomPerson } from './person';
import { generateRandomRegex } from './regex';
import { getRandomValue } from '../utils';
import { ICreditCard, vendor } from '../interfaces/creditCard';

const regexVondors = {
    masterCard: '^5[1-5][0-9]{14}$',
    visa: '^4[0-9]{12}(?:[0-9]{3})?$',
    americanExpress: '^3[47][0-9]{13}$',
    discoverCard: '^6(?:011|5[0-9]{2})[0-9]{12}$'
};

/**
 * Generate a random card number
 * @param {Partial<ICreditCard>} options
 * @param {RegExp} options._values_ - The regex pattern used to generate the value
 * @returns {string} random card number
 */
const generateRandomCardNumber = ({ _vendors_ }: Partial<ICreditCard> = {}) => {
    // if (Boolean(_values_?.length)) {
    //     return getRandomValue(_values_);
    // }
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
export const generateRandomCreditCard = ({ _values_, _vendors_ }: Partial<ICreditCard> = {}) => {
    const vendors = Boolean(_vendors_?.length) ? _vendors_ : Object.keys(regexVondors);
    const vondor = getRandomValue(vendors) as vendor;
    const type = Boolean(_values_?._vendors_?.length) ? getRandomValue(_values_._vendors_) : vondor;
    const number = Boolean(_values_?._numbers_?.length) ?
        getRandomValue(_values_._numbers_) :
        generateRandomCardNumber({ _vendors_: [ type ] });
    const expirationDate = Boolean(_values_?._expirationDate_?.length) ?
        getRandomValue(_values_._expirationDate_) :
        generateRandomDate({ _format_: 'MM/yy' });
    const ccv = Boolean(_values_?._ccv_?.length) ? getRandomValue(_values_._ccv_) : `${ generateRandomNumber({ _min_: 100, _max_: 999 }) }`;
    let holderName;
    if (Boolean(_values_?._holderName_?.length)) {
        holderName = getRandomValue(_values_._holderName_);
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