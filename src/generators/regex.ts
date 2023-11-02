import { IRegex } from '../interfaces';
import RandExp from 'randexp';

/**
 * Generate a random value matching the regex pattern
 * @param {Partial<IRegex>} options
 * @param {RegExp} options._regex_ - The regex pattern used to generate the value
 * @returns {string} random value matching the regex pattern
 */
export const generateRandomRegex = ({ _regex_ }: Partial<IRegex>) => new RandExp(_regex_).gen();
