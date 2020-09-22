const profileDataArgs = process.argv.slice(2, process.argv.length);
const [name, github] = profileDataArgs;
const fs = require('fs');
const generatePage = require('./src/page-template.js');

module.exports = generatePage;

fs.writeFile('index.html', generatePage(name, github), err => {
    if (err) throw err;

    console.log('Porfolio complete! Checkout index.html to see the output!');
});