#!/usr/bin/env node

const program = require('commander');
program
    .version(`Version is ${require('../package.json').version}`)
    .description('A simple CLI for building initialize project include Wechat applet, Vue, Egg (nodejs)')
    .usage('<command> [options]')
    .command('create')
    .action((name, cmd) => {
      require('../lib/create')
    })
    .parse(process.argv)
// program.usage('<project-name>').parse(process.argv)
// console.log(program.args)
