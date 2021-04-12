// module.exports = {
//   webpack: {
//     // every modification or add to webpack
//     // plugins: [new MyWebpackPlugin()]
//   }
// }
const { PHASE_PRODUCTION_BUILD, PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase, { defaultConfig }) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    console.log("Im in dev mode");
    return defaultConfig;
  }
  return defaultConfig;
}
