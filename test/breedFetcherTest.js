const { fetchBreedDescription } = require('../breedFetcher');
const { assert } = require('chai');

describe('fetchBreedDescription', () => {
  it('returns a string description for a valid breed, via callback', (done) => {
    fetchBreedDescription('Siberian', (err, description) => {
      //no error expected for this scenario
      assert.equal(err, null);

      const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";

      // compare returned description
      assert.equal(expectedDesc, description.trim());

      done();
    });
  });
  it('returns err if breed does not exist', (done) => {
    fetchBreedDescription('notABreed', (err, description) => {
      const expectedError = "No breed with that name found. Please check the spelling and try again.";
      assert.equal(expectedError, err);

      done();
    });
  });
});