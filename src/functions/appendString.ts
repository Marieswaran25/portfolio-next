export function appendString(intitialString: string, appendString: string, at: 'start' | 'end') {
    const maxLength = intitialString.length + appendString.length;
    return at === 'start' ? intitialString.padStart(maxLength, appendString) : intitialString.padEnd(maxLength, appendString);
}
