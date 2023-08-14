import lodashModule from './src/lodashModule.js' 
const lm = lodashModule;
const fileTextName = 'randomText.txt'
// print data
lm.printTextFile(fileTextName)

// count words
lm.textFileCounterWords(fileTextName)

// reverse text
lm.reversTextFile(fileTextName)

// uniques words
lm.uniqTextFileWords(fileTextName)

// counter uniq words
lm.uniqTextFileCounterWords(fileTextName)

// uniq words to upper case (append to file)
lm.uniqTextFileWordsToUppercase(fileTextName)

// uniq long words than 5 (append to file)
lm.uniqTextFileLongWords(fileTextName)

// uniq words with 'Vowels' (append to file)
lm.uniqTextFileVowels(fileTextName)

