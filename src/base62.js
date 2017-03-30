const characters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

export function encode (integer) {
    if (integer === 0) {
        return '0';
    }
    let remainder = integer;
    let result = '';
    do {
        result += characters[remainder % 62];
        remainder = Math.floor(remainder / 62);
    } while (remainder);
    return result;
}

export function decode (string) {
    return string.split('').reduce((memo, character, index) => {
        return memo + characters.indexOf(character) * Math.pow(62, index);
    }, 0);
}
