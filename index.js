//simple express server
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  //res.send('Hello World!');
  //res.send('Hello Docker!');
  res.send('Hello kates!');

});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
