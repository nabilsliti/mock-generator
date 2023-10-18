import { EType } from '../enums';

/**
 * Time interface
 * @interface
 * @property {string} _type_ - Date type (always 'time')
 * @property {string} _format_ - The format of the time (use date-fns time format)
 */
export interface ITime {
    _type_: EType.TIME;
    _format_?: string;
}