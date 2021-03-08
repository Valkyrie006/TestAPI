const axios = require('axios');
var unirest = require('unirest');


async function getTodo() {
  var auth_token;
  var req = unirest
    .get("https://www.universal-tutorial.com/api/getaccesstoken")
    .headers({
      "Accept": "application/json",
      "api-token": "OL6QxZuodnl8e7GFSVKJ4QdpKfCZdYBmVLY4pniNjeBm_ouNAzjmS5lKPSKVmLQZxiI",
      "user-email": "conespeter81@gmail.com"
    })
    .then((response) => {
      console.log(response.body)
    });
  var req1 = unirest
    .get("https://www.universal-tutorial.com/api/countries/")
    .headers({
      // "api-token": "OL6QxZuodnl8e7GFSVKJ4QdpKfCZdYBmVLY4pniNjeBm_ouNAzjmS5lKPSKVmLQZxiI",
      "Authorization": "OL6QxZuodnl8e7GFSVKJ4QdpKfCZdYBmVLY4pniNjeBm_ouNAzjmS5lKPSKVmLQZxiI eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJfZW1haWwiOiJjb25lc3BldGVyODFAZ21haWwuY29tIiwiYXBpX3Rva2VuIjoiT0w2UXhadW9kbmw4ZTdHRlNWS0o0UWRwS2ZDWmRZQm1WTFk0cG5pTmplQm1fb3VOQXpqbVM1bEtQU0tWbUxRWnhpSSJ9LCJleHAiOjE2MTUyODg5MDB9.sSdaaNyT32X9L1tfunBgSYhhvAn6EjuQ-707t9UIZtw",
      "Accept": "application/json"
    })
    .then((response) => {
      console.log(response.body)
    });
    // return req;
};

getTodo()
.catch(e => {
  console.log(e);
});