// module.exports = {
//   webpack: {
//     // every modification or add to webpack
//     // plugins: [new MyWebpackPlugin()]
//   }
// }
const { PHASE_PRODUCTION_BUILD, PHASE_DEVELOPMENT_SERVER } = require('next/constants');

// next config object
const config = {};

module.exports = withMyPlugin(/** args for the plugin */, config);
