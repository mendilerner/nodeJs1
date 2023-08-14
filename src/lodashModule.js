import fs from 'fs';
import _ from 'lodash';
import { returnFile } from './Utils.js';


async function printTextFile(filename) {
    try {
        const textData = await returnFile(filename);
        console.log(textData);
    } catch (error) {
        console.error(error);
    }
}


async function textFileCounterWords(filename) {
    try {
        const textData = await returnFile(filename);
        console.log("numbers of words is: ",_.words(textData).length);
    } catch (error) {
        console.error(error);
    }
}


async function reversTextFile(filename) {
    try {
        const textData = await returnFile(filename);
        const splittedWords = _.split(textData, " ")
        const reversedArray = _.reverse(splittedWords)
        console.log('reversed file: \n', _.join(reversedArray, " "));
    } catch (error) {
        console.error(error);
    }
}

async function uniqTextFileWords(filename) {
    try {
        const textData = await returnFile(filename);
        const splittedWords = _.words(textData)
        const uniqArray = _.uniq(splittedWords)
        console.log(uniqArray);
    } catch (error) {
        console.error(error);
    }
}
// uniqTextFileWords('./../randomText.txt')

async function uniqTextFileCounterWords(filename) {
    try {
        const textData = await returnFile(filename);
        const splittedWords = _.words(textData)
        const uniqArray = _.uniq(splittedWords)
        console.log('uniq words numbers: ', uniqArray.length);
    } catch (error) {
        console.error(error);
    }
}
// uniqTextFileCounterWords('./../randomText.txt')

async function uniqTextFileWordsToUppercase(filename) {
    try {
        const textData = await returnFile(filename);
        const upperTextData = _.toUpper(textData)
        const splittedWords = _.words(upperTextData)
        const uniqArray = _.uniq(splittedWords).join(', ')
        fs.appendFile('answer.txt', uniqArray + '\n\n', (err) => {
            if (err) throw err;
            console.log('The file has been saved!');
        })
    } catch (error) {
        console.error(error);
    }
}
//uniqTextFileWordsToUppercase('./../randomText.txt')


async function uniqTextFileLongWords(filename) {
    try {
        const textData = await returnFile(filename);
        const splittedWords = _.words(textData)
        const uniqArray = _.uniq(splittedWords)
        const longWords = _.filter(uniqArray, function (word) { return word.length > 5 }).join(", ");
        fs.appendFile('answer.txt', longWords + '\n\n', (err) => {
            if (err) throw err;
            console.log('The file has been saved!');
        })
    } catch (error) {
        console.error(error);
    }
}
//uniqTextFileLongWords('./../randomText.txt')

async function uniqTextFileVowels(filename) {
    try {
        const textData = await returnFile(filename);
        const splittedWords = _.words(textData)
        const uniqArray = _.uniq(splittedWords)
        const vowels = 'aoieu'
        const resultsArray = []
        uniqArray.forEach((word) => {
            let counter = 0;
            for (let char of word) {
                if (_.includes(vowels, char)) {
                    counter += 1
                }
            }
            if (counter > 0) {
                resultsArray.push({ 'word': word, 'vowelcount': counter });
            }
        })
        fs.appendFile('answer.txt', JSON.stringify(resultsArray) + '\n\n', (err) => {
            if (err) throw err;
            console.log('The file has been saved!');
        })
    } catch (error) {
        console.error(error);
    }
}

const tf = {printTextFile,
     textFileCounterWords,
      reversTextFile, 
      uniqTextFileWords,
    uniqTextFileCounterWords, 
    uniqTextFileLongWords, 
    uniqTextFileWordsToUppercase,
    uniqTextFileVowels}
export default tf