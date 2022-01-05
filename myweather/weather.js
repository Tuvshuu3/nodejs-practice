const request = require('request');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Ymar ulsiin tuhai medmeer baina? ', (answer) => {
    request(`https://api.mapbox.com/geocoding/v5/mapbox.places/${answer}.json?access_token=pk.eyJ1IjoibXVua2h6dWwxIiwiYSI6ImNrdWk2czI5cTFhZDIyd3Q5OXhvcWIwNTIifQ.o65kzaqtL2jRj0NY7NBRcQ`, function (error, response, body) {
        const stuff = JSON.parse(body).features;
        for(let i = 0; i < stuff.length; i++){
            console.log(`${i}. Gazriin ner: ${stuff[i].place_name}, lat: ${stuff[i].center[0]}, lon: ${stuff[i].center[1]}`)
        }
        rl.question('Ali ni ve? ', (answer2) => {
            console.log(answer2)
            const stuff2 = stuff[answer2]
            let urtrag = stuff2.center[0];
            let urgurug = stuff2.center[1];

            const options = {
                method: 'GET',
                url: 'https://weatherbit-v1-mashape.p.rapidapi.com/current',
                qs: {lat: urgurug, lon: urtrag},
                headers: {
                  'x-rapidapi-host': 'weatherbit-v1-mashape.p.rapidapi.com',
                  'x-rapidapi-key': '1ab065fffamsh757d3b8f79db0cbp15d17djsn9d0982d27708',
                  useQueryString: true
                }
              };
              
              
              
              request(options, function (error, response, body) {
                  if (error) throw new Error(error);
              
              
                  const temp = JSON.parse(body).data[0].temp;
                  const snow = JSON.parse(body).data[0].snow;
              
                  console.log(`temperature ni ` + temp + ` gradus celsius`)
                  console.log(`tsas/boroo oroh magadlal ni ` + snow + `%`)
              });
            rl.close()
        })
    });
//0. Ulaanbaatar, Mongolia
//1. Ulaanbaatarplein, 3072 JP Rotterdam, Netherlands
    

});
