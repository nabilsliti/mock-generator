import { generateRandomData } from '../random-generator';
import { ISchema } from '../interfaces';

const schema : ISchema = {
    id: 'id',
    name: 'word',
    description: {
        _type_: 'array',
        _fieldType_: 'word',
    },
    regex: {
        _type_: 'array',
        _fieldType_: 'regex',
        _regex_: '^[a-zA-Z]',
    },
    ip: {
        _type_: 'array',
        _fieldType_: 'ip',
        _length_: 4,
    },
    url: {
        _type_: 'array',
        _fieldType_: 'url',
    },
    datTime: {
        _type_: 'array',
        _fieldType_: 'dateTime',
        _length_: 5,
        _format_: 'yyyy-MM-dd HH:mm:ss',
    },
    time: {
        _type_: 'array',
        _fieldType_: 'time',
        _length_: 10,
        _format_: 'HH:mm:ss'
    },
    date: {
        _type_: 'array',
        _fieldType_: 'date',
        _length_: 15,
        _format_: 'MM-dd-yyyy',
    },
    abc: 'null',
    und: 'undefined',
    age: {
        _type_: 'number',
        _min_: 3,
        _max_: 8,
    },
    isStudent: 'boolean',
    scores: {
        _type_: 'array',
        _fieldType_: 'number',
        _min_: 2,
        _max_: 10,
        _length_: 5,
    },
    address: {
        _type_: 'object',
        city: 'word',
        country: {
            _type_: 'object',
            zipCode: 'number'
        }
    },
    birth_date: {
        _type_: 'array',
        _fieldType_: 'date',
        _min_: new Date(2000, 0, 1),
        _max_: new Date(2030, 11, 31),
        _length_: 5,
        _format_: 'yyyy/MM/dd',
    },
    emails_1: {
        _type_: 'email',
        _values_: [ 'example1@outlook.fr', 'example1@gmail.com', 'example3@hotmail.com' ],
    },
    emails_2: {
        _type_: 'array',
        _fieldType_: 'email',
        _usernames_: [ 'user.one', 'user.two' ],
        _domains_: [ 'domain1.com', 'domain2.fr' ],
    },
    ratings: {
        _type_: 'array',
        _fieldType_: 'number',
    },
    isActive: 'boolean',
    friends: {
        _type_: 'array',
        _fieldType_: 'word',
        _length_: 10,
    },
    visitedPlaces: {
        _type_: 'array',
        _fieldType_: 'word',
    },
};

const result = generateRandomData(schema, 1);

console.log(result);

/*
[
    {
        id: 'ea2eb931-b9dc-4ca8-88b8-755c9718d89d',
        name: 'fugiat',
        description: [
          'non',
          'commodo',
          'laboris',
          'elit',
          'culpa',
          'do',
          'aliquip',
          'reprehenderit',
          'quis',
          'ad'
        ],
        regex: [
          'x', 'c', 'P', 'u',
          'N', 'B', 'B', 'v',
          'u', 'Y'
        ],
        ip: [
          '123.219.238.106',
          '24.91.215.242',
          '181.118.55.5',
          '206.241.112.246'
        ],
        url: [
          'ftps://espn.com/laboris',
          'ftps://amazon.com/in',
          'ftp://microsoft.com/tempor',
          'ftp://harvard.edu/fugiat',
          'ftp://nintendo.com/pariatur',
          'https://nasa.gov/dolor',
          'ftp://nike.com/excepteur',
          'http://huffpost.com/cillum',
          'ftp://amazon.com/amet',
          'http://imdb.com/ea'
        ],
        datTime: [
          '2024-01-05 05:10:23',
          '2023-11-04 18:35:49',
          '2024-08-15 15:57:58',
          '2024-01-07 21:12:35',
          '2023-12-13 06:25:09'
        ],
        time: [
          '12:08:02', '03:30:38',
          '02:36:03', '08:52:50',
          '08:30:13', '07:57:16',
          '19:05:16', '13:10:29',
          '21:52:19', '03:44:42'
        ],
        date: [
          '04-23-2024', '08-05-2024',
          '10-07-2024', '11-13-2023',
          '09-03-2024', '07-07-2024',
          '11-06-2023', '05-21-2024',
          '04-08-2024', '11-27-2023',
          '12-15-2023', '08-20-2024',
          '08-10-2024', '08-29-2024',
          '07-15-2024'
        ],
        abc: null,
        und: undefined,
        age: 5,
        isStudent: true,
        scores: [ 7, 10, 7, 10, 4 ],
        address: { city: 'ea', country: { zipCode: 674 } },
        birth_date: [
          '2011/04/16',
          '2011/09/14',
          '2020/03/08',
          '2010/10/27',
          '2014/07/11'
        ],
        emails_1: 'example1@gmail.com',
        emails_2: [
          'user.one@domain1.com',
          'user.one@domain2.fr',
          'user.two@domain1.com',
          'user.two@domain1.com',
          'user.two@domain2.fr',
          'user.two@domain2.fr',
          'user.one@domain1.com',
          'user.two@domain1.com',
          'user.one@domain1.com',
          'user.one@domain2.fr'
        ],
        ratings: [
          91, 25, 80, 81, 14,
          16, 52, 37,  6, 18
        ],
        isActive: false,
        friends: [
          'labore',   'aliquip',
          'mollit',   'consectetur',
          'amet',     'incididunt',
          'deserunt', 'minim',
          'officia',  'sunt'
        ],
        visitedPlaces: [
          'velit',   'fugiat',
          'nostrud', 'qui',
          'dolor',   'velit',
          'commodo', 'anim',
          'laborum', 'proident'
        ]
    }
]
*/