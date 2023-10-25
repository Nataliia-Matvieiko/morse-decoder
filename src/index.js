const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decodeLetter(letter) {
    if (letter === "**********") {
        return " "
    }

    let morse = ""

    for (let i = 0; i < letter.length; i += 2) {
        const part = letter.substring(i, i + 2)
        if (part === "10") {
            morse += "."
        } else if (part === "11") {
            morse += "-";
        }
    }

    return MORSE_TABLE[morse]
}

function decode(expr) {
    const letters = [];
    while (expr.length > 0) {
        const first = expr.substring(0, 10);
        expr = expr.substring(10);
        letters.push(first);
    }

    const decodedLetters = [];

    for (let i = 0; i < letters.length; i++) {
        decodedLetters.push(decodeLetter(letters[i]))
    }

    return decodedLetters.join("")
}

module.exports = {
    decode
}