var page = require('webpage').create(),
system = require('system'),
address, output, size;

address = 'http://localhost:8080/'
output = 'screenshots';

page.open(address, function(status) {
    if (status !== 'success') {
        console.log('Unable to load the address!');
        phantom.exit();
    } else {
    page.render(output + '/phantomjs.png');
    phantom.exit();
    }
});