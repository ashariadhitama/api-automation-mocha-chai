const supertest = require('supertest');
const env = require('dotenv').config();
const api = supertest(process.env.BASE_URL);
const { expect } = require('chai');
const addPet = (payload) =>
	api
		.post('/pet')
        .set('Content-Type', 'application/json')
		.send(payload);

module.exports = {
	addPet
};