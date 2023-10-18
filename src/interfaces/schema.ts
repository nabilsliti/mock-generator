import { IArray } from './array';
import { ICollection } from './collection';
import { IDate } from './date';
import { IDateTime } from './dateTime';
import { INumber } from './number';
import { IRegex } from './regex';
import { ISentence } from './sentence';
import { ITime } from './time';
import { IUrl } from './url';
import { IWord } from './word';

export type IOptions = string | ICollection | ISentence | IWord | INumber | IRegex | IDateTime | IDate | ITime | IArray | IUrl;

export type ISchema = Record<string, IOptions>;