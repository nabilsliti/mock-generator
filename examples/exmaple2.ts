import { EType } from '../enums';
import { generateRandomArray } from '../random-generator';

const result = generateRandomArray(EType.DATE, 2, { _min_: new Date(), _format_: 'yyyy-MM-dd' });

console.log(result);
/*
    [ '2024-06-01', '2024-09-12' ]
*/