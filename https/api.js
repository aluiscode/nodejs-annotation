const https = require('https');

function getData(){
  return new Promise((resolve, reject) => {
    const options = {
      method: 'GET',
      hostname: 'rickandmortyapi.com',
      path: '/api/character',
    }

    let requestedData= '';

    const request = https.request(options, response => {
      response.setEncoding("utf8");
      response.on("data", chunk => {
        requestedData += chunk;
      })

      response.on('end', () => {
        resolve(JSON.parse(requestedData));
      })

      response.on('error', (error) => {
        reject(error);
      })
    })

    request.end();
  })
}

const main = async () => {
  const res = await getData();
  console.log(res);
}

main();