/**
 * Generate a random ip address
 * @returns {string} random ip address
 */
export const generateRandomIPAddress = (): string => Array.from({ length: 4 }, () => Math.floor(Math.random() * 256)).join('.');