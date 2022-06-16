const argv = require('yargs')
                .option('p',{
                    alias: 'palabra',
                    type: 'string',
                    demandOption: true,
                    describe: 'Palabra palíndromo'
                }).argv;

module.exports = argv;