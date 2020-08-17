const express = require('express');

const users  = require('./users/routes');

const app = express();

//app.use((request, response, next) => {
 //   console.log(`${request.method} ${request.path}`);
//    next();
//});
//app.use(express.json());

app.use('/users', users);

app.get('/', (request, response) => {
  //  response.json({ users });
  response.send('This is homepage');
});

app.listen(4524, () => {
    console.log('Server started');
});


