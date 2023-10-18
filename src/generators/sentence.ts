import { loremIpsum } from 'lorem-ipsum';
import { ISentence } from '../interfaces';
import { MAXIMUM_WORD, MINIMUM_WORD } from '../constants';
import { getRandomItem } from '../utils';

/**
 * Generate a random sentence
 * @param {Partial<ISentence>} options
 * @param {Array<string>} options._values_ - Predefined list of sentences to be used to generate a sentence
 * @param {number} options._min_ - The minimum number of words in the sentence (default MINIMUM_WORD = 10)
 * @param {number} options._max_ - The minimum number of words in the sentence (default MAXIMUM_WORD = 30)
 * @returns {string} random sentence
 */
export const generateRandomSentence = ({ _values_, _min_ = MINIMUM_WORD, _max_ = MAXIMUM_WORD }: Partial<ISentence> = {}): string => {
    if (Boolean(_values_?.length)) {
        return getRandomItem(_values_);
    }
    return loremIpsum({
        count: 1,
        format: 'plain',
        sentenceLowerBound: _min_,
        sentenceUpperBound: _max_,
        units: 'sentences',
    });
};