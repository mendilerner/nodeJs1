import fs from 'fs'
const fileTextName = process.argv[2]

fs.readFile(fileTextName, 'utf-8', (err, data) =>{
    if (err) {
        console.log(err);
    }
    let regexPattern = /[^A-Za-z0-9 ]/g;
    const splittedWords = data.replace(regexPattern, '').split(' ');
    const counterObject = {}
    splittedWords.forEach(word => {
        if (counterObject[word]){
            counterObject[word] += 1
        }
        else{
            counterObject[word] = 1
        }
    });
    const sortedArray = Object.entries(counterObject).sort(function(a, b) {
        return b[1] - a[1];
    });
    
    const sortedObject = Object.fromEntries(sortedArray);
    console.log(sortedObject)
})
