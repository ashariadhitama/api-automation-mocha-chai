const chai = require('chai');
const assert = require('chai').expect;
chai.use(require('chai-json-schema'));
const page = require('../page/get_pet_by_id.js');
const schema = require('../schema/get_pet_by_id_schema.json'); 
const code = require('../helper/response_code_messages.json');

const testCase = {
    describe: 'find pet By ID',
    positive: {
        findById: 'As a User, I want to find pet by ID',
    }
};

const petId = 1;

describe(`@getFindPetById ${testCase.describe}`, () => {
    it(`${testCase.positive.findById} with spesific pet ID ${petId}`, async () => {
        const response = await page.getPetById(petId);

        assert(response.status).to.equal(code.successOk); 
        assert(response.body).to.be.jsonSchema(schema); 
        assert(response.body.id).to.equal(petId, 'Pet ID does not match the requested ID');
    });
});