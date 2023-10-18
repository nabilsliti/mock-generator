import { loremIpsum } from 'lorem-ipsum';
import { IWord } from '../interfaces';
import { getRandomItem } from '../utils';

/**
 * Generate a random word
 * @param {Partial<IWord>} options
 * @param {Array<string>} options._values_ - Predefined list of words to be used to generate a word
 * @param {string} options._prefix_ The prefix of the word to generate
 * @param {string} options._suffix_ The suffix of the word to generate
 * @returns {string} random word
 */
export const generateRandomWord = ({ _values_, _prefix_ = '', _suffix_ = '' }: Partial<IWord> = {}): string => {
    if (Boolean(_values_?.length)) {
        return getRandomItem(_values_);
    }
    const word = loremIpsum({
        count: 1,
        format: 'plain',
        units: 'words'
    });
    return `${ _prefix_ }${ word }${ _suffix_ }`;
};
