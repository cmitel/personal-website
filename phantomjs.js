var page = require('webpage').create(),
system = require('system'),
address, output, size;

address = 'http://localhost:8080/'
// address = 'http://localhost:3000/'
output = 'screenshots';

phantom.onError = function(msg, trace) {
  var msgStack = ['PHANTOM ERROR: ' + msg];
  if (trace && trace.length) {
    msgStack.push('TRACE:');
    trace.forEach(function(t) {
      msgStack.push(' -> ' + (t.file || t.sourceURL) + ': ' + t.line + (t.function ? ' (in function ' + t.function +')' : ''));
    });
  }
  console.error(msgStack.join('\n'));
  phantom.exit(1);
};

page.open(address, function(status) {
    if (status !== 'success') {
        console.log('Unable to load the address!');
        phantom.exit();
    } else {

    page.render(output + '/phantomjs.png');
    phantom.exit();
    }
});