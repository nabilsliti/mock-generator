import { FIRST_NAMES, LAST_NAMES } from '../constants';
import { getRandomValue } from '../utils';
import { IPerson } from '../interfaces';

/**
 * Generate a random person
 * @param {Partial<IWord>} options
 * @param {Array<string>} options._values_ - Predefined list of person to be used to generate a person
 * @returns {string} random person
 */
export const generateRandomPerson = ({ _values_ }: Partial<IPerson> = {}) => ({
    firstName: Boolean(_values_?._firstName_?.length) ? getRandomValue(_values_._firstName_) : getRandomValue(FIRST_NAMES),
    lastName: Boolean(_values_?._lastName_?.length) ? getRandomValue(_values_._lastName_) : getRandomValue(LAST_NAMES)
});