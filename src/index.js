module.exports = function toReadable (number) {
    const units = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const firstTens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    const numLen = number.toString().length;

    let numWord = '';

    if (numLen === 1) {
        numWord = units[number];
    } else if (numLen === 2) {
        if (Math.floor(number / 10) == 1)  {
            numWord = firstTens[number % 10];
        } else {
            numWord = tens[Math.floor(number / 10)];
            if (number % 10 != 0) {
                numWord = numWord.concat(' ', units[number % 10]);
            } 
        }
    } else if (numLen === 3) {
        numWord = `${units[Math.floor(number / 100)]} hundred`;
        if (Math.floor(number / 10) % 10 == 0) {
            if (number % 10 != 0) {
                numWord = numWord.concat(' ', units[number % 10]);
            }
        } else if (Math.floor(number / 10) % 10 == 1) {
            numWord = numWord.concat(' ', firstTens[number % 10])
        } else {
            numWord = numWord.concat(' ', tens[Math.floor(number / 10) % 10]);
            if (number % 10 != 0) {
                numWord = numWord.concat(' ', units[number % 10]);
            } 
        }
    }

    return numWord;
}


