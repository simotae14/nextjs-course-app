const nextEnv = require('next-env');
const dotenvLoad = require('dotenv-load');

// load the env vars
dotenvLoad();

// add the env vars to the config file
const withEnv = nextEnv();
/**
 * equals to
 * {
 *   env: {
 *     HELP_APP_URL: https://frontendmasters.com
 *   }
 * }
 */

// exports the config with plugins
module.exports = withEnv();
