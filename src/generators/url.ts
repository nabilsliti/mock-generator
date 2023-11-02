import { DOMAINS, PROTOCOLS } from '../constants';
import { generateRandomWord } from './word';
import { getRandomItem } from '../utils';
import { IUrl } from '../interfaces';

/**
 * Generate random url
 * @param {Partial<IDate>} options
 * @param {Array<string>} options._values_ - Predefined list of urls to be used to generate an URL
 * @param {Array<string>} options._protocols_ - Predefined list of protocols to be used to generate an URL
 * @param {Array<string>} options._domains_ - Predefined list of domains to be used to generate an URL
 * @param {Array<string>} options._ports_ - Predefined list of ports to be used to generate an URL
 * @param {Array<string>} options._paths_ - Predefined list of paths to be used to generate an URL
 * @returns random url
 */
export const generateRandomUrl = ({ _values_, _protocols_, _domains_, _ports_, _paths_ }: Partial<IUrl> = {}): string => {
    if (Boolean(_values_?.length)) {
        return getRandomItem(_values_);
    }

    const randomProtocol = Boolean(_protocols_?.length) ? getRandomItem(_protocols_) : getRandomItem(PROTOCOLS);
    const randomDomain = Boolean(_domains_?.length) ? getRandomItem(_domains_) : getRandomItem(DOMAINS);
    const randomPort = Boolean(_ports_?.length) ? `:${ getRandomItem(_ports_) }` : '';
    const randomPath = Boolean(_paths_?.length) ?
        getRandomItem(_paths_) :
        `/${ generateRandomWord() }`;

    return `${ randomProtocol }://${ randomDomain }${ randomPort }${ randomPath }`;
};