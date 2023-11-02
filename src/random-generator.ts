import { DEFAULT_ARRAY_LENGTH } from './constants';
import { EKeys, EType } from './enums';
import {
    generateRandomBoolean,
    generateRandomDate,
    generateRandomDateTime,
    generateRandomEmail,
    generateRandomId,
    generateRandomIPAddress,
    generateRandomNumber,
    generateRandomRegex,
    generateRandomSentence,
    generateRandomTime,
    generateRandomUrl,
    generateRandomWord
} from './generators';
import { getRandomItem } from './utils';
import {
    ICollection,
    ICollectionField,
    IDate,
    IDateTime,
    IEmail,
    INumber,
    IOptions,
    IRegex,
    ISchema,
    ISentence,
    ISimpleField,
    ITime,
    IUrl,
    IWord
} from './interfaces';

/**
 * Generate a random value for a given type
 * @param {ISimpleField | ICollectionField} type - Type of the field to generate
 * @param {IOptions} options - Options of the field to generate
 * @returns {string | number | boolean | ICollection | Array<ISimpleField>} A random value(s) of the given type
 */
const generateRandomDatum = (type: ISimpleField | ICollectionField, options: IOptions = {}):
    string | number | boolean | ICollection | Array<ISimpleField> => {
    switch (type) {
        case EType.WORD:
            return generateRandomWord(options as Partial<IWord>);

        case EType.BOOLEAN:
            return generateRandomBoolean();

        case EType.NUMBER:
            return generateRandomNumber(options as Partial<INumber>);

        case EType.DATE:
            return generateRandomDate(options as Partial<IDate>);

        case EType.DATE_TIME:
            return generateRandomDateTime(options as Partial<IDateTime>);

        case EType.TIME:
            return generateRandomTime(options as Partial<ITime>);

        case EType.EMAIL:
            return generateRandomEmail(options as Partial<IEmail>);

        case EType.ID:
            return generateRandomId();

        case EType.IP:
            return generateRandomIPAddress();

        case EType.REGEX:
            return generateRandomRegex(options as Partial<IRegex>);

        case EType.SENTENCE:
            return generateRandomSentence(options as Partial<ISentence>);

        case EType.URL:
            return generateRandomUrl(options as Partial<IUrl>);

        case EType.OBJECT: {
            const objectData: ICollection = {};
            for (const key in options as ICollection) {
                if (key !== EKeys.TYPE) {
                    if (options[ key ][ EKeys.TYPE ]) {
                        objectData[ key ] = generateRandomDatum(options[ key ][ EKeys.TYPE ], options[ key ]);
                    } else {
                        objectData[ key ] = generateRandomDatum(options[ key ]);
                    }
                }
            }
            return objectData;
        }

        case EType.ARRAY: {
            const fieldType = options?.[ EKeys.FIELD_TYPE ] || EType.WORD;
            const length = options?.[ EKeys.LENGTH ] || DEFAULT_ARRAY_LENGTH;
            return generateRandomArray(fieldType, length, options);
        }

        case EType.CUSTOM:
            return getRandomItem(options[ EKeys.VALUES ]);

        case EType.UNDEFINED:
            return undefined;

        case EType.NULL:
        default:
            return null;
    }
};

/**
 * Generate an array of random values for a given type
 * @param {ISimpleField} type - The type of field to generate
 * @param {number} length - The length of the array
 * @param {IOptions} options - The options to use for the field
 * @returns {Array<ISimpleField>} An array of random values of the given type
 */
export const generateRandomArray = (type: ISimpleField = EType.WORD, length = DEFAULT_ARRAY_LENGTH, options?: IOptions):
    Array<ISimpleField> => {
    const randomData = [];
    for (let i = 0; i < length; i++) {
        randomData.push(generateRandomDatum(type, options));
    }
    return randomData;
};

/**
 *  Generates a random data from the given schema
 * @param {ISchema} schema - The schema object to use to generate the random data
 * @param {number} length - The length of the array
 * @returns {Array<ICollection>} An array of random data of the given schema
 */
export const generateRandomData = (schema: ISchema, length: number): Array<ICollection> => {
    const randomData: Array<ICollection> = Array.from({ length }, () => {
        const data: ICollection = {};
        for (const key in schema) {
            if (key !== EKeys.TYPE) {
                if (schema[ key ][ EKeys.TYPE ]) {
                    data[ key ] = generateRandomDatum(schema[ key ][ EKeys.TYPE ], schema[ key ]);
                } else {
                    data[ key ] = generateRandomDatum(schema[ key ] as ISimpleField);
                }
            }
        }
        return data;
    });

    return randomData;
};