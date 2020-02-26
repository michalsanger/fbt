/**
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 * @format
 */

/*global process:false*/

'use strict';

const {
  FBT_ENUM_MODULE_SUFFIX: ENUM_FILE,
  ModuleNameRegExp,
} = require('../FbtConstants');
const fs = require('fs');
const glob = require('glob');
const path = require('path');
const shell = require('shelljs');
const yargs = require('yargs');

const argv = yargs
  .usage(
    'Generate the enum manifest and its corresponding source manifest ' +
      'intended for consumption by the fbt transform and collectFbt',
  )
  .describe('h', 'Display usage message')
  .alias('h', 'help')
  .array('src')
  .default('src', [process.cwd()])
  .describe(
    'src',
    'The source folder(s) in which to look for JS source containing fbt and ' +
      'files with the $FbtEnum.js suffix. Defaults to CWD',
  )
  .default('enum-manifest', '.enum_manifest.json')
  .describe(
    'enum-manifest',
    'The path or filename to write the enum manfiest (accessed when ' +
      'processing shared enums)',
  )
  .default('src-manifest', '.src_manifest.json')
  .describe('src-manifest', 'The path or filename to write the source manifest')
  .argv;

if (argv.help) {
  yargs.showHelp();
  process.exit(0);
}

// Register babel-plugins with node to enable parsing flow types, etc.
require('@babel/register')({
  plugins: [
    '@babel/plugin-syntax-object-rest-spread',
    '@babel/plugin-transform-flow-strip-types',
  ],
});

const FILE_EXT = '.@(js|jsx|ts|tsx)';

// Find enum files
const enumManifest = {};
for (const src of argv.src) {
  const enumFiles = glob.sync(src + '/**/*' + ENUM_FILE + FILE_EXT, {
    nodir: true,
  });
  for (const filepath of enumFiles) {
    // Infer module name from filename.
    const name = path.parse(filepath).name;
    enumManifest[name] = require(path.resolve(filepath));
  }
}

// Write enum manfiest
fs.writeFileSync(argv['enum-manifest'], JSON.stringify(enumManifest));

// Find source files that are fbt-containing candidates
const getFiles = src => glob.sync(src + '/**/*' + FILE_EXT, {nodir: true});
const srcFiles = shell
  .grep('-l', ModuleNameRegExp, [].concat(...argv.src.map(getFiles)))
  .trim()
  .split('\n');

fs.writeFileSync(
  argv['src-manifest'],
  JSON.stringify({[argv['enum-manifest']]: srcFiles}),
);
