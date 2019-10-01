const Frisbee = require('frisbee');

const api = new Frisbee({
  baseURI: 'https://jsonplaceholder.typicode.com',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});
api
  .get('/users')
  .then(console.log)
  .catch(console.error);

export default api;
