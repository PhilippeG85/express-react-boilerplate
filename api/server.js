const express = require('express');
const serverless = require('serverless-http');
const bodyParser = require('body-parser');

const app = express();
const router = express.Router();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

router.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

app.use('/.netlify/functions/server', router);

module.exports = app;
module.exports.handler = serverless(app);
// app.listen(port, () => console.log(`Listening on port ${port}`));

// // Have Node serve the files for our built React app
// app.use(express.static(path.resolve(__dirname, './client/build')));


// app.get('/express_backend', (req, res) => {
//   res.send({ express: 'Your express backend is connected to react' });
// });

// app.get('*', (req, res) => {
//   res.sendFile(path.resolve(__dirname, './client/build', 'index.html'));
// });
