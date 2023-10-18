import { v4 as uuidv4 } from 'uuid';
/**
 * Generate a random id based on uuid()
 * @returns {string} random id
 */
export const generateRandomId = (): string => uuidv4();