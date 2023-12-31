import { EMAIL_DOMAINS } from '../constants';
import { generateRandomWord } from './word';
import { getRandomValue } from '../utils';
import { IEmail } from '../interfaces';

/**
 * Generate a random email
 * @param {Partial<IEmail>} options
 * @param {Array<string>} options._values_ - Predefined list of emails to be used to generate an email
 * @param {Array<string>} options._usernames_ - Predefined list of usernames to be used to generate an email
 * @param {Array<string>} options._domains_ - Predefined list of domains to be used to generate an email
 * @returns {string} random email
 */
export const generateRandomEmail = ({ _values_, _usernames_, _domains_ }: Partial<IEmail> = {}): string => {
    if (Boolean(_values_?.length)) {
        return getRandomValue(_values_);
    }

    const username = Boolean(_usernames_?.length) ? getRandomValue(_usernames_) : `${ generateRandomWord({ _prefix_: 'user.' }) }`;
    const domain = Boolean(_domains_?.length) ? getRandomValue(_domains_) : getRandomValue(EMAIL_DOMAINS);
    return `${ username }@${ domain }`;
};