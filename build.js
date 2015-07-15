'use strict';

var fs = require('fs');
var path = require('path');
var rmrf = require('rimraf');
var urls = require('./urls');

function rel(relPath) {
  return path.join(__dirname, relPath);
}

// empty 'build' directory
rmrf.sync(rel('build'));
fs.mkdirSync(rel('build'));

// build jade
var jade = require('jade');
var fn = jade.compileFile(rel('src/index.jade'), { pretty: true });
fs.writeFileSync(rel('build/index.html'), fn({urls: urls}));

// build js
var script = fs.readFileSync(rel('src/main.js')).toString();
script = script.replace(';//%%URLS%%', '= ' + JSON.stringify(urls) + ';');
fs.writeFileSync(rel('build/build.js'), script);
