const axios = require('axios').default;
var chai = require("chai");
var expect = chai.expect;

axios.defaults.baseURL = 'http://localhost:8000/api';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

const instance = axios.create();
instance.defaults.timeout = 2500;

// Make a request for a user with a given ID
axios.get('/places')
  .then(function (response) {
    console.log(response.status);
    expect(response.status).to.equal(200);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(function () {
  });