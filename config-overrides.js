const { override, disableEsLint, useBabelRc } = require('customize-cra');

module.exports = override(
	// disable eslint in webpack
	disableEsLint(),
	// eslint-disable-next-line react-hooks/rules-of-hooks
	useBabelRc()
);
