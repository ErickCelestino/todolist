const express = require('express');

const app = express();

const port = 3000;

app.get('/', (request, response) => response.status(200).send('Api diz: Olá'));

app.listen(port, () => console.log(`Server running or port ${port} \nCheck in http://localhost:${port}`));