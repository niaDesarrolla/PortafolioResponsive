const Dotenv = require('dotenv-webpack');

module.exports = {
    // Otras configuraciones de webpack...
    plugins: [
        new Dotenv()
    ]
};