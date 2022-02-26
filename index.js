const { fetchBreedDescription } = require('./breedFetcher');

const args = process.argv.slice(2);
const breedName = args[0];

fetchBreedDescription(breedName, (error, description) => {
  if (error) {
    console.log("Error:", error);
    
  } else {
    console.log(description);
  }
});