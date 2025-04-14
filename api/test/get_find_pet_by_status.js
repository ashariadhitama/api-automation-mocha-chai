const chai = require('chai');
const assert = require('chai').expect;
chai.use(require('chai-json-schema'));
const page = require('../page/find_by_status_page.js');
const schema = require('../schema/find_pet_by_status_schema.json');
const code = require('../helper/response_code_messages.json');

const testCase = {
    describe: 'find pet By Status',
    positive: {
        findByStatus: 'As a User, I want to find pet by status',
    }
};

const statuses = ['available', 'pending'];

describe(`@getFindPetByStatus ${testCase.describe}`, () => {
    statuses.forEach((status) => {
        it(`@get ${testCase.positive.findByStatus} with status: ${status}`, async () => {
            const response = await page.getFindPetByStatus({ status });

            assert(response.status).to.equal(code.successOk);
            assert(response.body).to.be.jsonSchema(schema); 

            response.body.forEach((pet) => {
                assert(pet.status).to.equal(status, `Pet ID ${pet.id} has incorrect status`);
            });
        });
    });
});
