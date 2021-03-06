export function reverseString(str) {
    return str.split("").reverse().join("");
}

export function titleCase(str) {
    return str.toLowerCase().split(' ').map(function (word) {
        return (word.charAt(0).toUpperCase() + word.slice(1));
    }).join(' ');
}

export function upperCase(str) {
    return str.toUpperCase()
}