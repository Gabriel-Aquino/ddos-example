const axios = require('axios');
const qs = require('qs');


const sendRequest = async (query) => {
    const url = 'http://localhost:3333/api/auth/connect/token';
    const body =  {
        scope: 'card.create card.read',
      }
    return new Promise((resolve, reject) => {
      const request = (retries) => {
        // Make the HTTP request
        axios.post(url, body).then((res) => {
            // Check some condition based on response
            // Check number of retries left
            console.log(res.data)
            return resolve(res.data);
        }).catch((error) => {
            console.log(error)
            reject(error);
        });
      };
      request(5);
    });
  };

for(let i = 0; i <= 2000; i++){
    sendRequest();
}