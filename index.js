
const app = require('./app');
const config = require('./config');
const port = config.port;
// Start listening
app.listen(port, () => {
    console.log('Server running');
});