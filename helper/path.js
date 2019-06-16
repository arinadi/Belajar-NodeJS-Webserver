const path = require('path');
const rootDir = path.dirname(process.mainModule.filename);
const pathViews = path.join(rootDir, 'views');

module.exports.root_dir = rootDir;
module.exports.path_views = pathViews;