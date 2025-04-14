const chai = require('chai');
const assert = require('chai').expect;
chai.use(require('chai-json-schema'));
const page = require('../page/add_pet_page.js');
const data = require('../data/add_pet_data.js');
const schema = require('../schema/add_pet_schema.json');

const testCase = {
    describe: 'add pet data',
    positive: {
        validParams: 'As a User, I want to add pet data',
    }
};

const payloads = [
    {petName:'Cat1', petCategory: 'hehe', petTags: 'wew'}, 
    {petName:'Cat2', petCategory: 'waw', petTags: 'yes'},
    {petName:'', petCategory: 'waw', petTags: 'yes'}
];

describe(`@post ${testCase.describe}`, () => {
    payloads.forEach(({petName, petCategory, petTags}) => {
        it(`@positive ${testCase.positive.validParams} with pet name: ${petName}`, async () => {
            const response = await page.addPet(data.addPet(petName, petCategory, petTags));

            console.log(response.body.category.name);
            assert(response.status).to.equal(200);
            assert(response.body.name).to.equal(petName);
            assert(response.body.category.name).to.equal(petCategory);
            assert(response.body.tags[0].name).to.equal(petTags);
			assert(response.body).to.be.jsonSchema(schema);
        });
    });
});

describe(`@post ${testCase.describe}`, () => {
    it(`@negative I'm unable to add pet data with space only as its name`, async () => {
        const response = await page.addPet(data.addPet('', 'hello', 'yeah'));

        console.log(response.body);
        assert(response.status).to.equal(200);
        assert(response.body.name).to.equal('');
        assert(response.body.category.name).to.equal('hello');
        assert(response.body.tags[0].name).to.equal('yeah');
        assert(response.body).to.be.jsonSchema(schema);
    });
});