import fs from 'fs';
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
        console.log("numbers of words is: ",textData.split(' ').length);
    } catch (error) {
        console.error(error);
    }
}


async function reversTextFile(filename) {
    try {
        const textData = await returnFile(filename);
        const splittedWords = textData.split(" ")
        const reversedArray = splittedWords.reverse()
        console.log('reversed file: \n', reversedArray.join(" "));
    } catch (error) {
        console.error(error);
    }
}
// reversTextFile('./../randomText.txt')


async function uniqTextFileWords(filename) {
    try {
        const textData = await returnFile(filename);
        const splittedWords = textData.replaceAll(/[\r\n]/gm, '').split(' ');
        const uniqArray = [...new Set(splittedWords)]
        console.log(uniqArray);
    } catch (error) {
        console.error(error);
    }
}


async function uniqTextFileCounterWords(filename) {
    try {
        const textData = await returnFile(filename);
        const splittedWords = textData.replaceAll(/[\r\n]/gm, '').split(' ');
        const uniqArray = [...new Set(splittedWords)]
        console.log('uniq words number: ', uniqArray.length);
    } catch (error) {
        console.error(error);
    }
}
// uniqTextFileCounterWords('./../randomText.txt')

async function uniqTextFileWordsToUppercase(filename) {
    try {
        const textData = await returnFile(filename);
        const textDataUpper = textData.toUpperCase()
        let regexPattern = /[^A-Za-z0-9 ]/g;
        const splittedWords = textDataUpper.replace(regexPattern, '').split(' ');
        const uniqArray = [...new Set(splittedWords)].join(', ')
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
        let regexPattern = /[^A-Za-z0-9 ]/g;
        const splittedWords = textData.replace(regexPattern, '').split(' ');
        const uniqArray = [...new Set(splittedWords)]
        const longWords = uniqArray.filter((word) =>  word.length > 5 ).join(", ");
        console.log(longWords);
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
        let regexPattern = /[^A-Za-z0-9 ]/g;
        const splittedWords = textData.replace(regexPattern, '').split(' ');
        const uniqArray = [...new Set(splittedWords)]
        const vowels = 'aoieu'
        const resultsArray = []
        uniqArray.forEach((word) => {
            let counter = 0;
            for (let char of word) {
                if (vowels.includes(char)) {
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
// uniqTextFileVowels('./../randomText.txt')
const tf = {printTextFile,
     textFileCounterWords,
      reversTextFile, 
      uniqTextFileWords,
    uniqTextFileCounterWords, 
    uniqTextFileLongWords, 
    uniqTextFileWordsToUppercase,
    uniqTextFileVowels}
export default tf