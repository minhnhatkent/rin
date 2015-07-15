'use strict';

var fs = require('fs');
var path = require('path');
var rmrf = require('rimraf');

function rel(relPath) {
  return path.join(__dirname, relPath);
}

// empty 'build' directory
rmrf.sync(rel('build'));
fs.mkdirSync(rel('build'));

// build jade
var jade = require('jade');
var fn = jade.compileFile(rel('src/index.jade'), { pretty: true });
fs.writeFileSync(rel('build/index.html'), fn({urls: require('./urls')}));
