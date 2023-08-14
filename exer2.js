import fs from 'fs'
const fileTextName = process.argv[2]
const searchedWord = process.argv[3]
let counter = 0;
fs.readFile(fileTextName, 'utf-8', (err, data) =>{
    if (err) {
        console.log(err);
    }
    let regexPattern = /[^A-Za-z0-9 ]/g;
    const splittedWords = data.replace(regexPattern, '').split(' ');
    splittedWords.forEach(word => {
        if (word === searchedWord){
            console.log(word);
            counter += 1
        }
    });
    console.log(`the sunString: ${searchedWord} is ${counter} times in the string`)
})
