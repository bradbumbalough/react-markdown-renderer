const path = require('path');
const fs = require('fs');

const appDirectory = fs.realpathSync(process.cwd());

const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

module.exports = {
  appBuild: resolveApp('build'),
  appPublic: resolveApp('pages'),
  appHtml: resolveApp('pages/index.html'),
  appIndexJs: resolveApp('pages/index.js'),
  appSrc: resolveApp('pages'),
  appNodeModules: resolveApp('node_modules'),
  appPackageJson: resolveApp('package.json'),
};
