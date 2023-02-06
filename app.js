const express = require('express');
const app = express();
const port = 3000;


app.get('/', (req, res) => {

	res.send('Hello world from Express server');
});

app.listen(port, () => console.log(`Èxample app is running on port ${port}`));


