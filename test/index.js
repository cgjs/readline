const MODULE = require('../index');

if (!Object.keys(MODULE).length) {
  throw new Error('MODULE was not exported');
}