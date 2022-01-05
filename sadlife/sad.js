const fs = require('fs');
const { resolve } = require('path');

const checkWord = w => {
    let letters = /^[A-Za-z]+$/;
    if (w.match(letters)) return true;
    return false;
};

const findWordCount = (path) => {
    return new Promise ((res, rej) => {
        fs.readFile(path, (err, data) => {
            let lines = data.toString().split("\n")
            let words = lines.reduce((acc, cur) => {
                let wordsperline = cur.split(" ");
                acc = wordsperline
                    .filter(checkWord)
                    .map(word => word.toLowerCase())
                    .reduce((wordCount, word) => {
                        wordCount[word] = wordCount[word] == undefined ? 1 : wordCount[word] + 1 
                        return wordCount
                       
                    }, acc)
                return acc;  
            } , {})
            let result = Object.keys(words).map((key) => [(key), words[key]]);
            
            var newArr = [];
            let temp;
            let ugtemp;


            for(var i = 0; i < result.length; i++)
            {
                newArr = newArr.concat(result[i]);
            }
            

            for(let i = 1; i < newArr.length; i = i + 2){
                for(let j = i + 2; j < newArr.length; j = j + 2){
                    if(newArr[i] < newArr[j]){
                        temp = newArr[i];
                        newArr[i] = newArr[j];
                        newArr[j] = temp;

                        ugtemp = newArr[j - 1];
                        newArr[j - 1] = newArr[i - 1];
                        newArr[i - 1] = ugtemp;
                    }
                }
                // if(newArr[i] > newArr[i + 2]){
                //     temp = newArr[i + 2];
                //     newArr[i + 2] = newArr[i];
                //     newArr[i] = temp;

                //     ugtemp = newArr[i + 1];
                //     newArr[i + 1] = newArr[i - 1];
                //     newArr[i - 1] = ugtemp

                //     yes = `${newArr[i + 1]}, ${newArr[i + 2]}`;
                // }
            
            }

            // prevArr.concat(newArr)

            res(newArr)
        
        })
    })
}


// let SuperArr = [];
// SuperArr.push(findWordCount('./smaller.txt'));
// SuperArr.push(findWordCount('./big.txt'));
// SuperArr.push(findWordCount('./sgb-words.txt'));
// SuperArr.push(findWordCount('./shakespeare.txt'));

// console.log(SuperArr)



Promise.all([findWordCount('./smaller.txt'), findWordCount('./big.txt'), findWordCount('./sgb-words.txt'), findWordCount('./shakespeare.txt')]).then(allResponses => {

    let bigArr = [];
    let temp2;
    let ugtemp2;


    for(let i = 0; i < allResponses.length; i++)
    {
        bigArr = bigArr.concat(allResponses[i]);
    }
    
   

    for(let i = 0; i < 20280; i = i + 2){
        for(let j = i + 2; j < bigArr.length; j = j + 2){
            if(bigArr[i] == bigArr[j]){
                bigArr[i + 1] = bigArr[i + 1] + bigArr[j + 1]
            }
        }
    } 

    for(let i = 1; i < bigArr.length; i = i + 2){
        for(let j = i + 2; j < bigArr.length; j = j + 2){
            if(bigArr[i] < bigArr[j]){
                temp2 = bigArr[i];
                bigArr[i] = bigArr[j];
                bigArr[j] = temp2;

                ugtemp2 = bigArr[j - 1];
                bigArr[j - 1] = bigArr[i - 1];
                bigArr[i - 1] = ugtemp2;
            }
        }
    }
    
    console.log(`${bigArr[0]} : ${bigArr[1]},
                 ${bigArr[4]} : ${bigArr[5]},
                 ${bigArr[6]} : ${bigArr[7]},
                 ${bigArr[8]} : ${bigArr[9]},
                 ${bigArr[10]} : ${bigArr[11]},
                 ${bigArr[12]} : ${bigArr[13]},
                 ${bigArr[14]} : ${bigArr[15]},
                 ${bigArr[16]} : ${bigArr[17]},
                 ${bigArr[18]} : ${bigArr[19]},
                 ${bigArr[20]} : ${bigArr[21]}`);
  })