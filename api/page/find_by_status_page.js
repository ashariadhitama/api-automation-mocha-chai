const supertest = require('supertest');

const env = require('dotenv').config();
const api = supertest(process.env.BASE_URL);

const getFindPetByStatus = (params) =>
	api
		.get('/pet/findByStatus')
        .set('Content-Type', 'application/json')
		.query(params)
        

module.exports = {
	getFindPetByStatus
};