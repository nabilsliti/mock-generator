/**
 *  Return a random item from the given values
 * @param {Array<string>} array - List of values
 * @returns {string} random item from the given values
 */
export const getRandomItem = (array: Array<string>): string => array[ Math.floor(Math.random() * array.length) ];
