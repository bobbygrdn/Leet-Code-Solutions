/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
    // Build a map that maps over the alphabet array and assigns each value to a key of that letter
    // Loop through the array of words and assign each letter of each string to an corresponding morse code fragment. 
    // Concat each fragment togther for each word and put it into a new morseCodeWordsArray
    // Return that new array
    let map = {
        a: ".-", b: "-...", c: "-.-.", d: "-..", e: ".", f: "..-.", g: "--.", h: "....", i: "..", j: ".---",
        k:"-.-", l:".-..", m:"--", n:"-.", o:"---", p:".--.", q:"--.-", r:".-.", s:"...", t:"-", u:"..-",   v:"...-", w:".--", x:"-..-", y:"-.--", z:"--.."
    };
    let morseCodeWords = [];
    for(let i = 0; i < words.length; i++) {
        let word = words[i]
        let codeWord = '';
        for (let j = 0; j < word.length; j++) {
            const letter = word[j];
            codeWord += map[letter]
        }
        morseCodeWords.push(codeWord)
    }
    return [...new Set(morseCodeWords)].length
};