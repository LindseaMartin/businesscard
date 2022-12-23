#!/usr/bin/env node
// 👆 Used to tell Node.js that this is a CLI tool

// Pull in our modules
const chalk = require('chalk')
const boxen = require('boxen')

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'round',
}

// Text + chalk definitions
const data = {
  name: chalk.white('Lindsea Martin'),
  handle: chalk.cyan('@lindseamartin'),
  labelWork: chalk.white.bold('      Work:'),
  work: chalk.white('Full time student at Northern Alberta Institute of Technology'),
  labelGitHub: chalk.white.bold('    GitHub:'),
  github: chalk.cyan('https://github.com/LindseaMartin'),
  labelLinkedIn: chalk.white.bold('  LinkedIn:'),
  linkedin: chalk.cyan('https://linkedin.com/in/lindseamartin'),
  labelWeb: chalk.white.bold('       Web:'),
  web: chalk.cyan('wip'),
  labelCard: chalk.white.bold('      Card:'),
  npx: chalk.white('npx lindseamartin'),
}

// Actual strings we're going to output
const newline = '\n'
const heading = `${data.name} / ${data.handle}`
const working = `${data.labelWork}  ${data.work}`
const githubing = `${data.labelGitHub}  ${data.github}`
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`
const webing = `${data.labelWeb}  ${data.web}`
const carding = `${data.labelCard}  ${data.npx}`

// Put all our output together into a single variable so we can use boxen
// effectively
const output =
  heading +
  newline +
  newline +
  working +
  newline +
  githubing +
  newline +
  linkedining +
  newline +
  webing +
  newline +
  newline +
  carding

console.log(chalk.green(boxen(output, options)))
