export function generateRandomNum(max: number, excludeZero?: boolean): number {
    const random = Math.floor(Math.random() * max) + (excludeZero ? 1 : 0);
    return random;
}
