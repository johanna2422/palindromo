const argv = require('./config/yargs');

const { revisarPalabra } = require('./helpers/revisar_palabra');

revisarPalabra(argv.p);