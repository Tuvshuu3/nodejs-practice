const fs = require("fs");
const { resolve } = require('path');

const checkWord = (w) => {
    let letters = /^[A-Za-z]+$/;
    if (w.match(letters)) return true;
    return false;
};

const findWordCount = (path) => {
    return new Promise((res, rej) => {
        fs.readFile(path, (err, dataaa) => {
            if(err) rej(err)
            let lines1 = dataaa.toString()
            let lines = lines1.split("\n");
            
            let words = lines.reduce((acc, cur) => {
                let wordsPerLine = cur.split(" ");
                acc = wordsPerLine
                    .filter(checkWord)
                    .map(word => word.toLowerCase())
                    .reduce((wordCount, word) => {
                        wordCount[word] = wordCount[word] == undefined ? 1 : wordCount[word] + 1;
                        return wordCount;
                    }, acc);
                return acc;
            }, {});
            res(words);
        });
    });
};

Promise.all([findWordCount('./smaller.txt'), findWordCount('./sgb-words.txt'), findWordCount('./shakespeare.txt'), findWordCount('./big.txt')]).then(allResponses => {
    let ab = allResponses.reduce((acc, cur) => {
        let keys = Object.keys(cur);
        acc = keys.reduce((w, w1) => {
            w[w1] = w[w1] == undefined ? cur[w1] : w[w1] + cur[w1];
            return w;
        }, acc);
        return acc;
    }, {});

    console.log(ab);
})
.catch(e =>{
    console.log(e)
})