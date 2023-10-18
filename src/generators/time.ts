import { FORMAT_TIME } from '../constants';
import { ITime } from '../interfaces';
import { generateRandomDateTime } from './dateTime';

/**
 * Generate a random time
 * @param {Partial<ITime>} options
 * @param {string} options._format_ - The format (date-fns) of the time value to generate (default FORMAT_TIME = 'HH:mm:ss')
 * @returns {string} random time value
 */
export const generateRandomTime = ({ _format_ = FORMAT_TIME }: Partial<ITime> = {}) => generateRandomDateTime({ _format_ });
