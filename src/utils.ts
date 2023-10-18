
export const getRandomItem = (arr: Array<string> | string): string => arr[ Math.floor(Math.random() * arr.length) ];
