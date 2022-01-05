const request = require('request');

const request1 = (link) => {
    new Promise((res, rej) => {
            request(link, (error, response, body) => {
                const stuff = JSON.parse(body);
                // console.log(stuff)
                for(let i = 0; i < stuff.length; i++){

                    request(`${stuff[i].url}`, function (error, response, body1) {

                        let splitbody = body1.split(' ')

                        for(let i = 0; i< splitbody.length; i++){

                            if(splitbody[i] == 'Total'){

                                console.log(splitbody[i - 1])

                                res(splitbody[i - 1])
                            }
                        }
                    });
                    // console.log(stuff[i].url)
                }
            });
        })
}


request1(`https://www.poemist.com/api/v1/randompoems`).then((el) => {
    console.log
})



// console.log(request1(`https://www.poemist.com/api/v1/randompoems`.then()))

// Promise.all(request1(`https://www.poemist.com/api/v1/randompoems`), request1(`https://www.poemist.com/api/v1/randompoems`), request1(`https://www.poemist.com/api/v1/randompoems`), request1(`https://www.poemist.com/api/v1/randompoems`)).then(allResponses => {
//     console.log(allResponses)
// });