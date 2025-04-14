const supertest = require('supertest');

const env = require('dotenv').config();
const api = supertest(process.env.BASE_URL);

const getPetById = (id) =>
    api
        .get(`/pet/${id}`)
        .set('Content-Type', 'application/json');

module.exports = {
    getPetById
};