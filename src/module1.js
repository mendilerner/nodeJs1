import fs from 'fs';
import _ from 'lodash';

export function readTextFile(filename){
    fs.readFile(filename,'utf-8',(err, data) => {
        if (err) throw Error;
        console.log(data);
    })
}

readTextFile('./randomText.txt');