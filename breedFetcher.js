const request = require('request');

const args = process.argv.slice(2);
const breedName = args[0];


request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
  if (error) {
    console.log(`This is an ${error}`);

  } else {
    const data = JSON.parse(body);
    const breedInfo = data[0];
    if (data.length === 0) {
    throw "We're sorry. The cat you are looking for does not exist.";

    } else {
    console.log(breedInfo.name);
    console.log(breedInfo.description);
    }
  }
});